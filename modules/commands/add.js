module.exports.config = {
    name: "out",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Sang Nguyễn",// không phải của tôi đâu xàm l đó
    description: "out box",
    commandCategory: "Admin",
    usages: "/[tid]",
    cooldowns: 3
  };
  
  module.exports.run = async function({ api, event, args }) {
    const moment = require("moment-timezone");
    var time = moment.tz('Asia/Manila').format('HH:mm:ss || DD/MM/YYYY');
    var id;
    if (!args.join(" ")) {
      id = event.threadID;
    } else {
      id = parseInt(args.join(" "));
    }
    return api.sendMessage(`🎄The bot received the command to leave the group from Admin\n🧦IDbox: ${id}\n🎁At: ${time}`, id, () => api.removeUserFromGroup(api.getCurrentUserID(), id)). then(api.sendMessage(`💦🎄Bot has left the group.\n🧦IDbox: ${id}\n🧦Time: ${time}`, event.threadID, event.messageID))
  }