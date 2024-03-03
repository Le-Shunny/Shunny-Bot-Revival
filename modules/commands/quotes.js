const axios = require("axios");

module.exports.config = {
  name: 'aniquote',
  version: '2.3.1',
  hasPermssion: 0,
  credits: 'Jaylorence U Opiar',
  description: 'Get random quotes',
  commandCategory: 'general',
  cooldowns: 2,
};

module.exports.run = async function({ api, event }) {
  try {
    const res = await axios.get('https://type.fit/api/quotes');
    const quotes = res.data;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const quoteText = randomQuote.text;
    const quoteAuthor = randomQuote.author ? randomQuote.author : 'Unknown';

    const message = `Quote: ${quoteText}\nAuthor: ${quoteAuthor}\n\nPowered by Jaylorence`;
    const messageID = event.messageID;

    api.sendMessage(message, event.threadID, messageID);
  } catch (error) {
    api.sendMessage('An error occurred while fetching the quotes.', event.threadID);
  }
};