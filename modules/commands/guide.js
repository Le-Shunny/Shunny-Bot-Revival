module.exports.config = {
  name: "\n",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "toan",
  description: "sailenh",
  usePrefix: true,
  commandCategory: "Tiện ích",
  usages: "Tiện ích",
  cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const lol = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const timeStart = Date.now();
  const dcm = process.uptime(); 
      var anh = Math.floor(dcm / (60 * 60));
  var la = Math.floor((dcm % (60 * 60)) / 60);
  var vtoan = Math.floor(dcm % 60);
  const fs = require("fs");
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");

   var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = 'Sunday'
  if (thu == 'Monday') thu = 'Monday'
  if (thu == 'Tuesday') thu = 'Tuesday'
  if (thu == 'Wednesday') thu = 'Wednesday'
  if (thu == "Thursday") thu = 'Thursday'
  if (thu == 'Friday') thu = 'Friday'
  if (thu == 'Saturday') thu = 'Saturday'
  const _0x43eeb8=_0x14ae;(function(_0x36bc23,_0x98ee2f){const _0xbf2553=_0x14ae,_0x468da5=_0x36bc23();while(!![]){try{const _0x5079d8=-parseInt(_0xbf2553(0x93))/0x1*(-parseInt(_0xbf2553(0x9e))/0x2)+parseInt(_0xbf2553(0x9b))/0x3*(parseInt(_0xbf2553(0xa1))/0x4)+parseInt(_0xbf2553(0x90))/0x5*(parseInt(_0xbf2553(0xa4))/0x6)+parseInt(_0xbf2553(0x91))/0x7*(-parseInt(_0xbf2553(0x92))/0x8)+parseInt(_0xbf2553(0x9a))/0x9+-parseInt(_0xbf2553(0xa3))/0xa+parseInt(_0xbf2553(0x9d))/0xb*(parseInt(_0xbf2553(0x99))/0xc);if(_0x5079d8===_0x98ee2f)break;else _0x468da5['push'](_0x468da5['shift']());}catch(_0x396e9d){_0x468da5['push'](_0x468da5['shift']());}}}(_0x362c,0xddb75));function _0x14ae(_0x1a1353,_0x443db2){const _0x362c8c=_0x362c();return _0x14ae=function(_0x14ae3d,_0x1736fa){_0x14ae3d=_0x14ae3d-0x90;let _0x3778f9=_0x362c8c[_0x14ae3d];return _0x3778f9;},_0x14ae(_0x1a1353,_0x443db2);}function _0x8eb9(_0xb66a78,_0x29e2c4){const _0x184a31=_0x409e();return _0x8eb9=function(_0x4cce7e,_0x43c146){_0x4cce7e=_0x4cce7e-0x1d9;let _0x537eab=_0x184a31[_0x4cce7e];return _0x537eab;},_0x8eb9(_0xb66a78,_0x29e2c4);}const _0x50c1a2=_0x8eb9;function _0x409e(){const _0x44657d=_0x14ae,_0x224e0b=['3174920fmrPRu',_0x44657d(0xa0),_0x44657d(0xa5),'417224CEdZQM','4773804KHMFgM',_0x44657d(0x9f),_0x44657d(0x96),'https://hehe.apibotchat.repl.co/text/cadao',_0x44657d(0x95),_0x44657d(0x97)];return _0x409e=function(){return _0x224e0b;},_0x409e();}(function(_0x59939f,_0x5900a3){const _0x3fcc81=_0x14ae,_0x45df09=_0x8eb9,_0x3b462c=_0x59939f();while(!![]){try{const _0x4bb81b=-parseInt(_0x45df09(0x1db))/0x1+parseInt(_0x45df09(0x1da))/0x2+-parseInt(_0x45df09(0x1e0))/0x3*(parseInt(_0x45df09(0x1dd))/0x4)+parseInt(_0x45df09(0x1e2))/0x5+-parseInt(_0x45df09(0x1de))/0x6+parseInt(_0x45df09(0x1df))/0x7+parseInt(_0x45df09(0x1dc))/0x8;if(_0x4bb81b===_0x5900a3)break;else _0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}catch(_0x76aeb3){_0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}}}(_0x409e,0xc9569));function _0x362c(){const _0x26d429=['24mrIzdD','get','data','5988WISHbU','7020828SteAtj','4669332NJHTIu','data','3872vcyusJ','18Sikdob','7017283VcXxhC','540482UqFHIb','4LbyLwa','shift','15900870cBCcPo','258sWvlEe','1584120xDgqqT','108870rcoJkx','7HtMjaH','8674856YpXsOW','14903JQuzev','push','1036505JrCLuP'];_0x362c=function(){return _0x26d429;};return _0x362c();}const res=await axios[_0x50c1a2(0x1d9)](_0x50c1a2(0x1e1));var tho=res[_0x43eeb8(0x9c)][_0x43eeb8(0x98)];
          api.sendMessage({
                                                body: `=== [ 黃翌深 𝐁𝐎𝐓 ]\n\n𝐇𝐞𝐥𝐥𝐨 𝐬𝐞𝐧𝐩𝐚𝐢, 𝐲𝐞𝐬 𝐭𝐡𝐚𝐭'𝐬 𝐦𝐲 𝐩𝐫𝐞𝐟𝐢𝐱 𝐰𝐡𝐚𝐭 𝐝𝐨 𝐲𝐨𝐮 𝐧𝐞𝐞𝐝?\n 𝐡𝐞𝐫𝐞'𝐬 𝐭𝐡𝐞 𝐃𝐚𝐭𝐞 & 𝐓𝐢𝐦𝐞 : ${timeNow}\n𝐀𝐧𝐝 𝐭𝐨𝐝𝐚𝐲 𝐢𝐬 ${thu}  \n◆━━━◆『 ${lol} 』◆━━━◆\n\nThe Bot Status: Online 24/7 \nProcessing speed: ${Date.now() - timeStart} second\nThe Bot Online at: ${anh} hour ${la} minute ${vtoan} seconds.\nReact "❤" to this message for more details.`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "❤") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `==== [ 𝗧𝗛𝗘 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 ] ====\n𝟭. Most command use list. \n𝟮. Admin bot information list.\n𝟯. Admin restapi info.\n𝟰. The bot information list.\n𝟱. Rules for using bots.\n6. Information about group chat\n\nReply to this message by number to view information.`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {

            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`Wait a minute`, event.threadID, (err, info) =>
  setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;


    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "" :
          case "":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: ` [ 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗨𝗦𝗘𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ]\n\n𝟭. 𝗦𝗜𝗥𝗜 : 𝐓𝐡𝐢𝐬 𝐢𝐬 𝐭𝐡𝐞 𝐧𝐨𝐫𝐦𝐚𝐥 𝐬𝐢𝐫𝐢 𝐭𝐡𝐚𝐭 𝐡𝐚𝐯𝐞 𝐚 𝐩𝐫𝐞𝐟𝐢𝐱 𝐬𝐨 𝐲𝐨𝐮 𝐜𝐚𝐧 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐢𝐧 𝐭𝐡𝐢𝐬 𝐟𝐨𝐫𝐦𝐚𝐭 .𝐬𝐢𝐫𝐢 (𝐭𝐞𝐱𝐭).\n𝟮. 𝗦𝗜𝗥𝗜𝗩𝟮 : 𝐭𝐡𝐢𝐬 𝐢𝐬 𝐭𝐡𝐞 𝐬𝐞𝐜𝐨𝐧𝐝 𝐯𝐞𝐫𝐬𝐢𝐨𝐧 𝐨𝐟 𝐬𝐢𝐫𝐢 𝐭𝐡𝐚𝐭 𝐚𝐛𝐥𝐞 𝐭𝐨 𝐜𝐨𝐧𝐭𝐢𝐧𝐮𝐞 𝐭𝐡𝐞 𝐚𝐧𝐬𝐰𝐞𝐫 𝐚𝐧𝐝 𝐚𝐥𝐬𝐨 𝐭𝐡𝐢𝐬 𝐬𝐢𝐫𝐢 𝐢𝐬 𝐚𝐛𝐥𝐞 𝐭𝐨 𝐠𝐢𝐯𝐞 𝐚 𝐟𝐮𝐥𝐥 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐭𝐡𝐞 𝐚𝐧𝐬𝐰𝐞𝐫.\n𝟯. 𝗦𝗜𝗥𝗜 : 𝐓𝐡𝐢𝐬 𝐬𝐢𝐫𝐢 𝐢𝐬 𝐭𝐡𝐞 𝐥𝐚𝐭𝐞𝐬𝐭 𝐬𝐢𝐫𝐢 𝐨𝐟 𝐚𝐧𝐣𝐞𝐥𝐨 𝐜𝐚𝐲𝐚𝐨 𝐚𝐫𝐚𝐛𝐢𝐬 𝐭𝐡𝐢𝐬 𝐚𝐢 𝐢𝐬 𝐜𝐚𝐧'𝐭 𝐫𝐞𝐜𝐨𝐠𝐧𝐢𝐳𝐞 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭 𝐢𝐧 𝐭𝐡𝐞 𝐢𝐦𝐚𝐠𝐞 𝐛𝐮𝐭 𝐭𝐡𝐢𝐬 𝐬𝐢𝐫𝐢 𝐢𝐬 𝐭𝐡𝐞 𝐥𝐚𝐭𝐞𝐬𝐭 𝟓.𝟔 𝐮𝐩𝐝𝐚𝐭𝐞𝐝 𝐚𝐧𝐝 𝐚𝐥𝐬𝐨 𝐟𝐢𝐱 𝐭𝐡𝐞 𝐞𝐫𝐫𝐨𝐫 𝐚𝐧𝐝 𝐭𝐡𝐞 𝐚𝐧𝐬𝐰𝐞𝐫 𝐢𝐬 𝐟𝐨𝐧𝐭𝐬 𝐭𝐡𝐞 𝐟𝐨𝐫𝐦𝐚𝐭 𝐨𝐟 𝐭𝐡𝐢𝐬 𝐦𝐨𝐝𝐮𝐥𝐞 𝐢𝐬 𝐒𝐢𝐫𝐢 (𝐭𝐞𝐱𝐭) 𝐭𝐡𝐢𝐬 𝐢𝐬 𝐭𝐡𝐞 𝐬𝐢𝐫𝐢 𝐧𝐨𝐩𝐫𝐞𝐟𝐢𝐱.\n𝟰. 𝗝𝗘𝗟𝗢 : 𝐭𝐡𝐢𝐬 𝐢𝐬 𝐭𝐡𝐞 𝐥𝐚𝐭𝐞𝐬𝐭 𝐬𝐢𝐫𝐢 𝐛𝐮𝐭 𝐭𝐡𝐢𝐬 𝐦𝐨𝐝𝐮𝐥𝐞 𝐢𝐬 𝐚𝐛𝐥𝐞 𝐭𝐨 𝐫𝐞𝐜𝐨𝐠𝐧𝐢𝐳𝐞 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭 𝐢𝐧 𝐭𝐡𝐞 𝐢𝐦𝐚𝐠𝐞 𝐚𝐧𝐝 𝐭𝐡𝐞 𝐚𝐧𝐬𝐰𝐞𝐫 𝐢𝐬 𝐚𝐜𝐜𝐮𝐫𝐚𝐭𝐞 𝐚𝐥𝐬𝐨 𝐟𝐨𝐫𝐦𝐚𝐭: 𝐣𝐞𝐥𝐨 (𝐭𝐞𝐱𝐭) 𝐣𝐞𝐥𝐨 𝐧𝐨𝐩𝐫𝐞𝐟𝐢𝐱.\n𝟱. 𝗖𝗥𝗘𝗔𝗧𝗘𝗜𝗠𝗚 : 𝐓𝐡𝐢𝐬 𝐦𝐨𝐝𝐮𝐥𝐞 𝐢𝐬 𝐚 𝐢𝐦𝐚𝐠𝐞 𝐠𝐞𝐧𝐞𝐫𝐚𝐭𝐨𝐫 𝐮𝐬𝐢𝐧𝐠 𝐭𝐡𝐞 𝐮𝐬𝐞𝐫𝐬 𝐩𝐫𝐨𝐦𝐩𝐭 𝐟𝐨𝐫𝐦𝐚𝐭: .𝐜𝐫𝐞𝐚𝐭𝐞𝐢𝐦𝐠 (𝐩𝐫𝐨𝐦𝐩𝐭).\n𝟲. 𝗖𝗥𝗘𝗔𝗧𝗘𝗜𝗠𝗚𝗩𝟮 : 𝐓𝐡𝐢𝐬 𝐦𝐨𝐝𝐮𝐥𝐞 𝐢𝐬 𝐬𝐚𝐦𝐞 𝐢𝐧 𝐜𝐫𝐞𝐚𝐭𝐞𝐢𝐦𝐠 𝐛𝐮𝐭 𝐭𝐡𝐢𝐬 𝐦𝐨𝐝𝐮𝐥𝐞 𝐢𝐬 𝐭𝐡𝐞 𝐮𝐩𝐝𝐚𝐭𝐞𝐝 𝐦𝐨𝐝𝐮𝐥𝐞 𝐚𝐧𝐝 𝐚 𝐡𝐢𝐠𝐡𝐥𝐲 𝐫𝐞𝐜𝐨𝐦𝐦𝐞𝐧𝐝𝐞𝐝 𝐭𝐨 𝐮𝐬𝐞 𝐛𝐞𝐜𝐚𝐮𝐬𝐞 𝐭𝐡𝐞 𝐪𝐮𝐚𝐥𝐢𝐭𝐲 𝐨𝐟 𝐭𝐡𝐞 𝐢𝐦𝐚𝐠𝐞 𝐢𝐬 𝐬𝐨 𝐧𝐢𝐜𝐞 𝐟𝐨𝐫𝐦𝐚𝐭: .𝐜𝐫𝐞𝐚𝐭𝐞𝐢𝐦𝐠𝐯𝟐 (𝐩𝐫𝐨𝐦𝐩𝐭).\n𝟳. 𝗖𝗥𝗘𝗔𝗧𝗘𝗜𝗠𝗚𝗩𝟯 : 𝐓𝐡𝐢𝐬 𝐦𝐨𝐝𝐮𝐥𝐞 𝐢𝐬 𝐬𝐚𝐦𝐞 𝐢𝐧 𝐜𝐫𝐞𝐚𝐭𝐞𝐢𝐦𝐠 𝐛𝐮𝐭 𝐭𝐡𝐢𝐬 𝐦𝐨𝐝𝐮𝐥𝐞 𝐢𝐬 𝐭𝐡𝐞 𝐮𝐩𝐝𝐚𝐭𝐞𝐝 𝐦𝐨𝐝𝐮𝐥𝐞 𝐚𝐧𝐝 𝐚 𝐡𝐢𝐠𝐡𝐥𝐲 𝐫𝐞𝐜𝐨𝐦𝐦𝐞𝐧𝐝𝐞𝐝 𝐭𝐨 𝐮𝐬𝐞 𝐛𝐞𝐜𝐚𝐮𝐬𝐞 𝐭𝐡𝐞 𝐪𝐮𝐚𝐥𝐢𝐭𝐲 𝐨𝐟 𝐭𝐡𝐞 𝐢𝐦𝐚𝐠𝐞 𝐢𝐬 𝐬𝐨 𝐧𝐢𝐜𝐞 𝐟𝐨𝐫𝐦𝐚𝐭: .𝐜𝐫𝐞𝐚𝐭𝐞𝐢𝐦𝐠𝐯3 (𝐩𝐫𝐨𝐦𝐩𝐭).\n𝟴. 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 : 𝐓𝐡𝐢𝐬 𝐦𝐨𝐝𝐮𝐥𝐞 𝐢𝐬 𝐚 𝐭𝐞𝐦𝐩𝐥𝐚𝐭𝐞 𝐢𝐦𝐚𝐠𝐞 𝐭𝐨 𝐭𝐞𝐱𝐭 𝐢𝐦𝐩𝐨𝐫𝐭 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭 𝐢𝐧𝐭𝐨 𝐭𝐡𝐞 𝐢𝐦𝐚𝐠𝐞 𝐚𝐧𝐝 𝐭𝐡𝐞𝐫𝐞'𝐬 𝐚 𝟏𝟓𝟎 𝐭𝐞𝐱𝐭𝐩𝐫𝐨 𝐭𝐞𝐦𝐩𝐥𝐚𝐭𝐞 𝐥𝐨𝐠𝐨.\n𝟵. 𝗨𝗣𝗧𝗣𝗥𝗢 : 𝐓𝐡𝐢𝐬 𝐦𝐨𝐝𝐮𝐥𝐞 𝐢𝐬 𝐚 𝐮𝐩𝐭𝐢𝐦𝐞 𝐛𝐮𝐭 𝐭𝐡𝐞 𝐭𝐢𝐦𝐞 𝐢𝐬 𝐢𝐧 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭𝐩𝐫𝐨 𝐥𝐨𝐠𝐨 𝐢𝐭 𝐢𝐬 𝐚 𝐫𝐚𝐧𝐝𝐨𝐦 𝐭𝐞𝐱𝐭𝐩𝐫𝐨 𝐟𝐨𝐫𝐦𝐚𝐭: .𝐮𝐩𝐭𝐩𝐫𝐨.\n𝟭𝟬. 𝗔𝗟𝗟𝗜𝗗 : 𝐓𝐡𝐢𝐬 𝐦𝐨𝐝𝐮𝐥𝐞 𝐢𝐬 𝐮𝐬𝐞𝐟𝐮𝐥 𝐭𝐨 𝐭𝐡𝐨𝐬𝐞 𝐮𝐬𝐞𝐫 𝐢𝐧 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩𝐬 𝐢𝐟 𝐲𝐨𝐮 𝐝𝐨𝐧𝐭 𝐤𝐧𝐨𝐰 𝐡𝐨𝐰 𝐭𝐨 𝐠𝐞𝐭 𝐲𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩 𝐢𝐝 𝐚𝐧𝐝 𝐲𝐨𝐮𝐫 𝐢𝐝 𝐲𝐨𝐮 𝐜𝐚𝐧 𝐮𝐬 𝐭𝐡𝐢𝐬 𝐟𝐨𝐫𝐦𝐚𝐭: .𝐚𝐥𝐥𝐢𝐝.\n[ 𝗧𝗛𝗘 𝗘𝗡𝗗 𝗧𝗛𝗔𝗡𝗞𝗬𝗢𝗨 ]
 `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `
=== [ 𝗔𝗗𝗠𝗜𝗡 𝗕𝗢𝗧 ] ===
  ❯ Name: Arjhil Dacayanan known as Yumi. 
  ❯ Height: 5'7
  ❯ Date of birth: July 31, 200e
  ❯ Zodiac: secret 
  ❯ Weight: 60
  ❯ Facebook: https://www.facebook.com/arjhil.dacayanan.73?mibextid=ZbWKwL
  ❯ Thanks for using Yumi bot.`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `🖥 𝗪𝗲𝗯 𝗮𝗽𝗶: https://yukihirasomamonitoring.team-yuki.repl.co`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "4": {
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const PREFIX = config.PREFIX
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ 𝗬𝗨𝗠𝗜 𝗜𝗡𝗙𝗢 ] ====
━━━━━━━━━━━━━━━━━━\n\n🖥 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: there are ${commands.size} commands available\n📎 𝗣𝗿𝗲𝗳𝗶𝘅: [ ${PREFIX} ]\n💓 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}\n💬 𝗟𝗶𝘀𝘁𝗯𝗼𝘅: Currently the bot is in ${global.data.allThreadID.length} groups chat\n👑 Number of admins bot: ${admin.length} 𝗮𝗱𝗺𝗶𝗻 and  ${ndh.length} supports bot\n━━━━━━━━━━━━━━━━━━\n<Your Notes>`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
          case "6": {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
  const moment = require("moment-timezone");
   const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
          let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
            var nope = [];
                for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    }; 
                         var nam = gendernam.length;
             var nu = gendernu.length;
             var kxd = nope.length;
         let threadName = threadInfo.threadName;
            let qtv = threadInfo.adminIDs.length;
            let sl = threadInfo.messageCount;
             let icon = threadInfo.emoji;
                      let color = threadInfo.color;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "off" : sex == true ? "on" : "\n";

                  var i = 1;
                       var listad_msg = '';
  var adminIDs = threadInfo.adminIDs;
  for (let get of adminIDs) {
    const infoUsers = await Users.getInfo(get.id);
    listad_msg += `→ ${i++}. 𝐓𝐞̂𝐧: ${infoUsers.name}\n`
  }
 api.unsendMessage(handleReply.messageID); 
 var msg = `=====「 GROUP INFORMATION 」=====\n\n🏘️ Group name: ${threadName}\n⚙️ Group ID: ${event.threadID}\n👥 Member: ${threadInfo.participantIDs.length}\n 🧑 Boy: ${nam}\n👧 Girl : ${nu}\n💞 Group administrator: ${qtv}\n 📚 Group admin list: ${listad_msg}\n🌷 Approve: ${pd}\n😻 Emoticon: ${icon ? icon : 'Do not use'}\n💝 Interface code: ${color}\n━━━━━━━━━━━━━━━━━━\n🍑 Total group messages: ${sl}\n 📔 Time: ${timeNow}\n🎀 The above is the group's information, please use boxinfo for more details`
return api.sendMessage({body: msg, attachment: await streamURL(threadInfo.imageSrc)},event.threadID,event.messageID)

                                                                                             }
          case "5": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: ` === [ GROUP RULES ] === \n━━━━━━━━━━━━━━━━━━\n→ Please read and follow the rules of the group 💞\n→ Following the group rule will make a positive contribution to your community 🌸\n━━━━━━━━━━━━━━━━━━`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
          }


            break;
          default:
           const choose = parseInt(event.body);
              if (isNaN(event.body)) return api.sendMessage("→ Please choose a number", event.threadID, event.messageID);
              if (choose > 6 || choose < 1) return api.sendMessage("→ Option not on the list.", event.threadID, event.messageID); 
    }
    }
}
  }