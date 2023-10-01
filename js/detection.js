// Form Divs
const form = document.getElementById("sum-form");
const sumText  = document.getElementById("sum-text-div");
const sumFile  = document.getElementById("sum-file-div");
const sumVideo = document.getElementById("sum-video-div");

// Form Data
const selectOption  = document.getElementById("sum-type");
const sumTextInput  = document.getElementById("sum-text-input");
const sumVideoInput = document.getElementById("sum-video-input");

// Error Output Section
const sumError = document.getElementById("sum-err");

// Result Section
const extractText = document.getElementById("extracted-text");
const summaryText = document.getElementById("summarized-text");


// In progress...
function _summarize(text) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://djacon-emotion-detection.hf.space", true);

    var data = `text=${text}`;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // var response = JSON.parse(xhr.responseText);
            // summaryText.value = response.content;
            console.log('Prediction:', xhr.responseText);
        }
    };

    xhr.send(data)
    return;

    // summaryText.value = 'Прогноз:\n-нейтрально:    99.386%\n-гнев:                  0.400%\n-печаль:             0.073%\n-отвращение:   0.063%\n-удивление:      0.044%\n-интерес:           0.014%\n-радость:           0.010%\n-страх:                0.007%\n-вина:                 0.003%';
    // return;
}

// In progress...
function _extractPDF(file) {
    return file;
}

// In progress...
function _getCaptions(src) {
    return src;
}


function summarize(event) {
    event.preventDefault();
    
    if (selectOption.value === 'sum-video' && !sumVideoInput.value.startsWith('https://www.youtube.com/watch?v=')) {
        sumError.innerText = 'Invalid Youtube Link';
        sumError.classList.remove('hidden');
        return;
    }

    switch (selectOption.value) {
        case 'sum-text':
            let value = sumTextInput.value
            if (value === '') {
                sumError.innerText = `You need to input some text`;
                sumError.classList.remove('hidden');
                return;
            }
            break;
        case 'sum-file':
            sumError.innerText = 'This option is not supported, yet';
            sumError.classList.remove('hidden');
            return;
    }

    sumError.classList.add('hidden');

    // Here we can finally summarize data
    let extractedText = '';
    switch (selectOption.value) {
        case 'sum-text':
            extractedText = sumTextInput.value;
            break;
        case 'sum-file':
            extractedText = _extractPDF(sumFileInput);
            break;
        case 'sum-video':
            extractedText = _getCaptions(sumVideoInput.value);
            break;
    }

    extractText.value = extractedText;
    _summarize(extractedText);
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
  
    submitButton.addEventListener("click", function (e) {
      summarize(e);
    });
  });