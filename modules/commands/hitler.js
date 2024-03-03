const fs = require("fs");
module.exports.config = {
  name: "Hitler",
    version: "1.0.0",
  hasPermssion: 0,
  credits: "Shen",
  description: "no prefix",
  commandCategory: "No command marks needed",
  usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("hitler")==0 || (event.body.indexOf("Hitler")==0 || (event.body.indexOf("heil")==0 || (event.body.indexOf("heil")==0)))) {
    var msg = {
        body: "🙋‍♂️",
        attachment: fs.createReadStream(__dirname + `/noprefix/hitler.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙋‍♂️", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }