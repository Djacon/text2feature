// Form Divs
const sumText  = document.getElementById('sum-text-div');
const sumFile  = document.getElementById('sum-file-div')
const sumVideo = document.getElementById('sum-video-div');

// Form Data
const selectOption  = document.getElementById('sum-type');
const sumTextInput  = document.getElementById('sum-text-input');
const sumFileInput  = document.getElementById('sum-file-input');
const sumVideoInput = document.getElementById('sum-video-input');

// Error Output Section
const sumError = document.getElementById('sum-err');

// Result Section
const extractText = document.getElementById('extracted-text');
const summaryText = document.getElementById('summarized-text');

// Word Counter
const wordsCount = document.getElementById('word-counter');

// Tabs
const original = document.getElementById('sum-original');
const summary  = document.getElementById('sum-summary');
const showOriginal = document.getElementById('show-original');
const showSummary  = document.getElementById('show-summary');

const MAX_SIZE = 100000;


let cache = {
    'text': undefined,
    'result': undefined,
}


function _summarize() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/predict_summarization', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
 
    var data = JSON.stringify({ 'sum_type': selectOption.value, 'text': extractText.value });

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            result = xhr.responseText.split('\\n').join('\n');
            summaryText.value = result.slice(1, -1);
            cache = {
                'text': extractText.value,
                'result': summaryText.value
            };
        }
    };

    xhr.send(data);
    return;
}

function _extractFile() {
    const file = sumFileInput.files[0];
    if (file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = function() {
            sumTextInput.value = reader.result.slice(0, MAX_SIZE);
        };
        reader.readAsText(file, 'CP1251');
        return;
    } else if (file.type === 'application/pdf') {
        sumTextInput.value = '';
        const reader = new FileReader();
        reader.onload = function (e) {
            const pdfData = e.target.result;
            pdfjsLib.getDocument(pdfData).promise.then(function (pdfDocument) {
                for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
                    pdfDocument.getPage(pageNum).then(function (pdfPage) {
                      pdfPage.getTextContent().then(function (textContent) {
                        let size = sumTextInput.value.length;
                        let pageText = [];
                        for (const textItem of textContent.items) {
                            pageText.push(textItem.str);
                            size += textItem.str.length;
                            if (size > MAX_SIZE) break;
                        }
                        sumTextInput.value += pageText.join(' ');
                      });
                    });
                  }
            });
        };
        reader.readAsDataURL(file);
    }
    return;
}


async function summarize(event) {
    event.preventDefault();

    switch (selectOption.value) {
        case 'sum-text':
            len = sumTextInput.value.trim().length
            if (len < 250) {
                sumError.innerText = `The text size should be at least 250 characters (${len} < 250)`;
                sumError.classList.remove('hidden');
                return;
            }
            break;
        case 'sum-video':
            regex = /^((((http)s?:\/\/)?((www\.)|(m\.))?youtube.com\/watch\?([^\?]*&)?v=.+)|(((http)s?:\/\/)?youtu.be\/([^\?=]+)(\?[^?]+)?))$/
            if (!sumVideoInput.value.match(regex)) {
                sumError.innerText = 'Invalid youtube link';
                sumError.classList.remove('hidden');
                return;
            }
            break;
    }

    sumError.classList.add('hidden');

    _show_summary();

    // Here we can finally summarize data
    summaryText.value = 'Please wait...';
    switch (selectOption.value) {
        case 'sum-text':
            extractText.value = sumTextInput.value.trim().slice(0, MAX_SIZE);
            break;
        case 'sum-video':
            extractText.value = sumVideoInput.value.slice(0, MAX_SIZE);
            break;
    }

    if (extractText.value === cache.text) {
        console.log('Result already in cache!');
        summaryText.value = cache.result;
        return;
    }

    _summarize();
}


function _update_option() {
    switch (selectOption.value) {
        case 'sum-text':
            sumText.classList.remove('hidden');
            sumVideo.classList.add('hidden');

            sumTextInput.setAttribute('required', '');
            sumVideoInput.removeAttribute('required');
            break;
        case 'sum-video':
            sumText.classList.add('hidden');
            sumVideo.classList.remove('hidden');

            sumTextInput.removeAttribute('required');
            sumVideoInput.setAttribute('required', '');
            break;
    }
    sumError.classList.add('hidden');
}

function _update_counter() {
    let text = sumTextInput.value.trim()
    if (text === '') {
        sumFile.classList.remove('hidden');
        wordsCount.classList.add('hidden');
        return;
    }

    sumFile.classList.add('hidden');
    wordsCount.classList.remove('hidden');
    wordsCount.innerHTML = `Words: ${text.split(/\s+/).length} | Chars: ${text.length}`
}


function _show_summary() {
    showOriginal.classList.remove('bg-gray-100');
    showSummary.classList.add('bg-gray-100');

    summary.classList.remove('hidden');
    original.classList.add('hidden');

    summaryText.focus({ preventScroll: true });
}

function _show_original() {
    showOriginal.classList.add('bg-gray-100');
    showSummary.classList.remove('bg-gray-100');

    original.classList.remove('hidden');
    summary.classList.add('hidden');

    sumTextInput.focus({ preventScroll: true });
}


document.addEventListener('DOMContentLoaded', function () {
    selectOption.addEventListener('change', _update_option);

    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', summarize);
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'Enter') {
            _show_original()
            summarize(event);
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.altKey && event.key === 'ArrowLeft') {
            _show_original();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.altKey && event.key === 'ArrowRight') {
            _show_summary();
        }
    });

    sumFileInput.addEventListener('change', async function() {
        const allowedTypes = ['application/pdf', 'text/plain'];
        const file = sumFileInput.files[0];

        if (!file) {
            sumError.classList.remove('hidden');
            return;
        }

        if (!allowedTypes.includes(file.type)) {
            sumError.innerText = 'Not supported type (Only `.pdf` or `.txt`)';
            sumError.classList.remove('hidden');
            return;
        }

        // Back to main option
        selectOption.options[0].selected = true;
        _update_option();
        _extractFile();

        await (new Promise(resolve => setTimeout(resolve, 1000)));
        _update_counter();
        sumError.classList.add('hidden');
    });

    sumTextInput.addEventListener('input', _update_counter);

    showSummary.addEventListener('click', _show_summary);
    showOriginal.addEventListener('click', _show_original);
});

summaryText.placeholder = `London is the capital of Great Britain`;