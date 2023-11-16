const newBtn = document.querySelector('#js-new-quote');
const questionTxt = document.querySelector('#js-quote-text');
const answerTxt = document.querySelector('#js-answer-text');

newBtn.addEventListener('click', () => {
    // Show loading bar
    showLoading();

    // Make a request to the Dad Joke API
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(jsonData => {
        // Hide loading bar
        hideLoading();

        console.log(jsonData);
        // Display the joke in the joke-container div
        displayQuote(jsonData['joke']);
    })
    .catch(err => {
        // Hide loading bar in case of an error
        hideLoading();
        alert('Failed to fetch new quote');
    });
});

function showLoading() {
    // Create and append a loading element
    const loadingElement = document.createElement('div');
    loadingElement.classList.add('loading');
    loadingElement.textContent = 'Loading...';
    document.body.appendChild(loadingElement);
}

function hideLoading() {
    // Remove the loading element
    const loadingElement = document.querySelector('.loading');
    if (loadingElement) {
        loadingElement.remove();
    }
}

// Rest of your code remains unchanged...
function displayQuote(joke) {
    questionTxt.textContent = joke;
}