let speedTypingTest = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

function getARandomQuote() {
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            quoteDisplay.textContent = jsonData.content;
        })
}
getARandomQuote();

let timeCount = 0;
let intervalId;
intervalId = setInterval(function() {
    timeCount += 1;
    timer.textContent = timeCount;
}, 1000);

function resetQuoteInput() {
    quoteInput.value = "";
    result.textContent = "";
    timeCount = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function() {
        timeCount += 1;
        timer.textContent = timeCount;
        if (timeCount === 1) {
            speedTypingTest.classList.remove("d-none");
            spinner.classList.add("d-none");
        }
    }, 1000);
    spinner.classList.remove("d-none");
    speedTypingTest.classList.add("d-none");
    getARandomQuote();

}

function checkQuote() {
    if (quoteInput.value === quoteDisplay.textContent) {
        clearInterval(intervalId);
        result.textContent = "You took " + timeCount + " seconds";
    } else {
        result.textContent = "The sentence you typed is incorrect";
    }
}

submitBtn.onclick = function() {
    checkQuote();
}
resetBtn.onclick = function() {
    resetQuoteInput();
}