var quotes = [
    'Dedicate yourself with a calm mind to the task at hand.',
    'Determination is what you need now.',
    'Happiness begins with facing life with a smile and a wink.',
    'It is better to deal with problems before they arise.',
    'Many will travel to hear you speak.',
    'Put your mind into planning today. Look into the future.',
    'The best prediction of future is the past.',
    'Your talents will be recognized and suitably rewarded.',
]

function newQuote () {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotedisplay').innerHTML = quotes[randomNumber];
}
