const newBtn = document.querySelector('#js-new-quote');
addEventListener('click', getQuote);

const answerBtn = document.querySelector('#js-tweet');
addEventListener('click', testFunction);
let answer = "";

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion'


async function getQuote(){

    try{
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json['question']);
        answerTxt.textContent
        answer = json['answer'];
    }
    catch(err){
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question) {
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question;
}

function displayAnswer() {
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = '';
}

function testFunction() {
console.log("answer button clicked");
}

getQuote();