// Form Divs
const form = document.getElementById("sum-form");
const sumText  = document.getElementById("sum-text-div");
const sumFile  = document.getElementById("sum-file-div");
const sumVideo = document.getElementById("sum-video-div");

// Form Data
const selectOption  = document.getElementById("sum-type");
const sumTextInput  = document.getElementById("sum-text-input");
const sumFileInput  = document.getElementById("sum-file-input");
const sumVideoInput = document.getElementById("sum-video-input");

// Error Output Section
const sumError = document.getElementById("sum-err");

// Result Section
const extractText = document.getElementById("extracted-text");
const summaryText = document.getElementById("summarized-text");

const MAX_SIZE = 5000;


// In progress...
function _summarize() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://www.editpad.org/tool/tool/summarizingTool", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    var data = `text=${extractText.value}&percnt=40&modd=1&captha=0`;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            summaryText.value = response.content;
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
            extractText.value = reader.result.slice(0, MAX_SIZE);
        };
        reader.readAsText(file, 'CP1251');
    } else if (file.type === 'application/pdf') {
        extractText.value = '';
        const reader = new FileReader();
        reader.onload = function (e) {
            const pdfData = e.target.result;
            pdfjsLib.getDocument(pdfData).promise.then(function (pdfDocument) {
                for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
                    pdfDocument.getPage(pageNum).then(function (pdfPage) {
                      pdfPage.getTextContent().then(function (textContent) {
                        let size = extractText.value.length;
                        let pageText = [];
                        for (const textItem of textContent.items) {
                            pageText.push(textItem.str);
                            size += textItem.str.length;
                            if (size > MAX_SIZE) break;
                        }
                        extractText.value += pageText.join(' ');
                      });
                    });
                  }
            });
        };
        reader.readAsDataURL(file);
    }
    return;
}

// In progress...
function _getCaptions(src) {
    return src;
}


async function summarize(event) {
    event.preventDefault();
    
    if (selectOption.value === 'sum-video' && !sumVideoInput.value.startsWith('https://www.youtube.com/watch?v=')) {
        sumError.innerText = 'Invalid Youtube Link';
        sumError.classList.remove('hidden');
        return;
    }

    switch (selectOption.value) {
        case 'sum-text':
            len = sumTextInput.value.length
            if (len < 100) {
                sumError.innerText = `The text size should be at least 100 characters (${len} < 100)`;
                sumError.classList.remove('hidden');
                return;
            }
            break;
        case 'sum-file':
            const allowedTypes = ['application/pdf', 'text/plain'];
            const file = sumFileInput.files[0];

            if (!file) {
                sumError.innerText = 'There is no File';
                sumError.classList.remove('hidden');
                return;
            }

            if (!allowedTypes.includes(file.type)) {
                sumError.innerText = 'Not supported type (Only `.pdf` or `.txt`)';
                sumError.classList.remove('hidden');
                return;
            }
    }

    sumError.classList.add('hidden');

    // Here we can finally summarize data
    switch (selectOption.value) {
        case 'sum-text':
            extractText.value = sumTextInput.value.slice(0, MAX_SIZE);
            break;
        case 'sum-file':
            _extractFile();
            summaryText.value = 'Please wait...';
            await (new Promise(resolve => setTimeout(resolve, 1000)));
            break;
        case 'sum-video':
            _getCaptions(sumVideoInput.value);
            break;
    }

    _summarize();
}


document.addEventListener("DOMContentLoaded", function () {
    selectOption.addEventListener("change", function () {
        switch (selectOption.value) {
            case 'sum-text':
                sumText.classList.remove('hidden');
                sumFile.classList.add('hidden');
                sumVideo.classList.add('hidden');

                sumTextInput.setAttribute("required", "");
                sumVideoInput.removeAttribute("required");
                break;
            case 'sum-file':
                sumText.classList.add('hidden');
                sumFile.classList.remove('hidden');
                sumVideo.classList.add('hidden');

                sumTextInput.removeAttribute("required");
                sumVideoInput.removeAttribute("required");
                break;
            case 'sum-video':
                sumText.classList.add('hidden');
                sumFile.classList.add('hidden');
                sumVideo.classList.remove('hidden');

                sumTextInput.removeAttribute("required");
                sumVideoInput.setAttribute("required", "");
                break;
        }
        sumError.classList.add('hidden');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", summarize);
  });