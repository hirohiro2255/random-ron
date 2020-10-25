const URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quote = document.querySelector('#quote');
const quoteButton = document.querySelector('#quote-button');

quoteButton.addEventListener('click', (e) => {
  fetch(URL).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }).then(data => {
    quote.innerText = data[0];
  }).catch(err => {
    quote.innerText = 'Unable to fetch some quotes.';
  });
});

window.addEventListener('DOMContentLoaded', (e) => {
  fetch(URL).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }).then(data => {
    quote.innerText = data[0];
  }).catch(err => {
    quote.innerText = 'Unable to fetch some quotes.';
  });
})

