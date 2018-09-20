var quotes = [
    'Dedicate yourself with a calm mind to the task at hand.',
    'Determination is what you need now.',
    'Happiness begins with facing life with a smile and a wink.',
    'It is better to deal with problems before they arise.',
    'Many will travel to hear you speak.',
    'Put your mind into planning today. Look into the future.',
    'The best prediction of future is the past.',
    'Your talents will be recognized and suitably rewarded.',
    'A hunch is creativity trying to tell you something.',
    'A soft voice may be awfully persuasive.',
    'A truly rich life contains love and art in abundance.',
    'All the effort you are making will ultimately pay off.',
    'Go for the gold today! You’ll be the champion of whatever.',
    'Meditation with an old enemy is advised.',
    'No one can walk backwards into the future.',
    'The greatest achievement in life is to stand up again after falling.',
    'The saints are the sinners who keep on trying.',
    'You will be sharing great news with all the people you love.',
    'You will be unusually successful in business.',
    'Your ability to juggle many tasks will take you far.',
    'Your dreams are worth your best efforts to achieve them.',
    'Your talents will be recognized and suitably rewarded.',
    'You will be traveling and coming into a fortune.',
    'Your difficulties will strengthen you.',
]

function newQuote () {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotedisplay').innerHTML = quotes[randomNumber];
}
