const fs = require("fs");
module.exports.config = {
	name: "Ara",
    version: "1.0.2",
	hasPermssion: 0,
	credits: "Cjas",
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Kys")==0 || (event.body.indexOf("KYS")==0 || (event.body.indexOf("kys")==0 || (event.body.indexOf("KYs")==0)))) {
		var msg = {
				body: "⚡⚡",
				attachment: fs.createReadStream(__dirname + `/noprefix/kys.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }