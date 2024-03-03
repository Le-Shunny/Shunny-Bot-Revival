module.exports.config = {
    name: "owner",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "... - Long LTD",
    description: "War In Chatbox",
    commandCategory: "Noprefix",
    usages: "noprefix",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Owner Info\n\nName:Cyprus jake pacoy\nAge:15\nFB Link:https://www.facebook.com/profile.php?id=100069255516638\nInstagram: @cyprusjakepacoy\nTags: Bot Creator, Programmer, Gamer\nPls follow cyprus jake pacoy also know cypruspro21k as the fundor of kurumi project");


}