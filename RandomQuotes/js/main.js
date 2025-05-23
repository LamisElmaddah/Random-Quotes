var Quotes = [
    { 'quote': 'The only limit to our realization of tomorrow is our doubts of today.',
     'author': '―Franklin D. Roosevelt' },
    { 'quote': '“You only live once, but if you do it right, once is enough.”',
     'author': '― Mae West' },
    { 'quote': '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
     'author': '― Mahatma Gandhi.' },
    { 'quote': '“A friend is someone who knows all about you and still loves you.”',
     'author': '― Elbert Hubbard' },
    { 'quote': 'Do not take life too seriously. You will not get out alive.',
     'author': '―Elbert Hubbard'
    },
    { 'quote': "It's not what happens to you, but how you react to it that matters.",
     'author': '―Epictetus'
    },
];

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * Quotes.length);
    var quote = Quotes[randomIndex].quote;
    var author = Quotes[randomIndex].author;
    document.getElementById('quoteDisplay').innerHTML = quote;
    document.getElementById('authorDisplay').innerHTML = author;
}
