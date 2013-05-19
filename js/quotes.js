var d     = new Date(),
    today = d.getUTCFullYear() * 10000 + d.getUTCMonth() * 100 + d.getUTCDate(),
    delta = today - 20130417,
    quote = document.querySelector('#quote');

quote.innerHTML = quotes[delta % quotes.length].replace(/\n/g, '<br>');

