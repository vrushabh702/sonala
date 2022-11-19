const Quote = require("inspirational-quotes");

console.log(Quote.getQuote());
console.log(Quote.getQuote({ author: false }));
console.log(Quote.getRandomQuote());

var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: Quote.getRandomQuote(),
    e: "a0",
    T: "U",
  })
);
