const axios = require('axios');
const { exec } = require('child_process');
function isPackageInstalled(packageName) {
  try {
    require.resolve(packageName);
    return true;
  } catch (error) {
    return false;
  }
}
if (!isPackageInstalled('luxon')) {
  console.log('Installing Luxon package...');
  exec('npm install luxon', (error, stdout, stderr) => {
    if (error) {
      console.error('Error installing Luxon:', error);
    } else {
      console.log('Luxon package installed successfully.');
    }
  });
}

const { DateTime } = require('luxon');

var owner = 100069255516638; 

module.exports.config = {
  name: "fbtoken",
  version: "1.0.3",
  hasPermssion: 2,
  credits: "cypruspro21k",
  description: "EAAD Facebook Token",
  commandCategory: "other",
  usages: "[ uid ] [password]",
  cooldowns: 2,
};

module.exports.run = async ({ api, event, args }) => {
  let { threadID, messageID, senderID } = event;
  let uid = args[0];
  let pass = args[1];

  if (!uid || !pass) {
    api.sendMessage(`missing input!\nusage: ${global.config.PREFIX}fbtoken [ uid ] [ password ]`, threadID, messageID);
    return;
  }

  if (senderID !== owner) {
    api.sendMessage(`
⠛⠛⣿⣿⣿⣿⣿⡷⢶⣦⣶⣶⣤⣤⣤⣀⠀⠀⠀
 ⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀
 ⠀⠀⠀⠉⠉⠉⠙⠻⣿⣿⠿⠿⠛⠛⠛⠻⣿⣿⣇⠀
 ⠀⠀⢤⣀⣀⣀⠀⠀⢸⣷⡄⠀⣁⣀⣤⣴⣿⣿⣿⣆
 ⠀⠀⠀⠀⠹⠏⠀⠀⠀⣿⣧⠀⠹⣿⣿⣿⣿⣿⡿⣿
 ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠿⠇⢀⣼⣿⣿⠛⢯⡿⡟
 ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠦⠴⢿⢿⣿⡿⠷⠀⣿⠀
 ⠀⠀⠀⠀⠀⠀⠀⠙⣷⣶⣶⣤⣤⣤⣤⣤⣶⣦⠃⠀
 ⠀⠀⠀⠀⠀⠀⠀⢐⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
 ⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀
 ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⢿⣿⣿⣿⣿⠟⠁⠀
    `, threadID, messageID);
    return;
  }

  api.sendMessage("please wait...", threadID, messageID);

  try {
    const response = await axios.get(`http://6v7tokengetter.jake2024.repl.co/token?uid=${uid}&pass=${pass}`);
    const tokenData = response.data.tokenData.message.data;

    const eaadToken = tokenData.access_token_eaad6v7;
    const accessToken = tokenData.access_token;
    const sessionCookies = tokenData.cookies;

    // Get current time in Manila timezone using Luxon
    const manilaTime = DateTime.now().setZone("Asia/Manila").toFormat("yyyy-MM-dd HH:mm:ss");

    const message = `This module created by: Cypruspro21k
\nBut now I am serving this person's Facebook/${owner}
\nMy usage is ${global.config.PREFIX}uid || pass

𝗮𝗰𝗰𝗲𝘀𝘀_𝘁𝗼𝗸𝗲𝗻_𝗲𝗮𝗮𝗱𝟲𝘃𝟳: ${eaadToken}
𝗮𝗰𝗰𝗲𝘀𝘀_𝘁𝗼𝗸𝗲𝗻:
${accessToken}
𝗰𝗼𝗼𝗸𝗶𝗲𝘀:
${sessionCookies}
Manila Time: ${manilaTime}`;

    api.sendMessage(message, threadID, messageID);
  } catch (error) {
    return api.sendMessage(`An error ${error}`, threadID, messageID);
  }
};
