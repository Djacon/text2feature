// Form Divs
const sumText = document.getElementById('sum-text-div');
const sumFile = document.getElementById('sum-file-div')

// Form Data
const sumTextInput  = document.getElementById('sum-text-input');
const sumFileInput  = document.getElementById('sum-file-input');

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

const MAX_SIZE = 20000;


function _detect() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/predict_emotion', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
 
    var data = JSON.stringify({ 'sum_type': 'sum-text', 'text': extractText.value });

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            result = xhr.responseText.split('\\n').join('\n');
            summaryText.value = result.slice(1, -1);
        }
    };

    xhr.send(data)
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

    let value = sumTextInput.value.trim()
    if (value === '') {
        sumError.innerText = `You need to input some text`;
        sumError.classList.remove('hidden');
        return;
    }

    sumError.classList.add('hidden');

    _show_summary();

    // Here we can finally summarize data
    summaryText.value = 'Please wait...';
    extractText.value = sumTextInput.value.trim().slice(0, MAX_SIZE);
    _detect();
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
}

function _show_original() {
    showOriginal.classList.add('bg-gray-100');
    showSummary.classList.remove('bg-gray-100');

    original.classList.remove('hidden');
    summary.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    var submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', summarize);

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

        _extractFile();

        await (new Promise(resolve => setTimeout(resolve, 1000)));
        _update_counter();
        sumError.classList.add('hidden');
    });

    sumTextInput.addEventListener('input', _update_counter);

    showSummary.addEventListener('click', _show_summary);
    showOriginal.addEventListener('click', _show_original);
});