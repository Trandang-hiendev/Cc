// Hi Skidders!
// Welcome to Editable RPC!!!
// Written with ðŸ§  by GhoSty
// Feel free to edit this RPC! But Give Credits
const Discord = require('discord.js-selfbot-v13');
const fs = require('fs');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
// Editable RPC concept by GhoSty || Brutality
const keepAlive = require('./server.js');
keepAlive();
// Editable RPC concept by GhoSty || Brutality
let r;
let startTimestamp = Date.now();
let buttonName = 'Contact :3';
let buttonUrl = 'https://www.facebook.com/hine.Wns/';
let rpcURL = 'https://www.facebook.com/hine.Wns/';
let rpcType = 'PLAYING'; // COMPETING, WATCHING, PLAYING, STREAMING
let rpcName = 'adu vjp';
let rpcDetails = 'hi';
let assetsSmallText = 'tao la trum';
let assetsLargeText = 'Click the button to contact me';
let assetsLargeImage = 'https://media.discordapp.net/attachments/1202612834685689927/1203241810047139850/tai_xuong.gif?ex=65d06142&is=65bdec42&hm=6666718f8559be8063ccf7fe9ad2010284f6c20df32634e3b64e4a581745f095&';
let assetsSmallImage = 'https://cdn.discordapp.com/emojis/1162207638319284227.gif?quality=lossless&size=48';
// Editable RPC concept by GhoSty || Brutality
client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);
  // Editable RPC concept by GhoSty || Brutality
  const timestamps = fs.readFileSync('ghosty.txt', 'utf8').split('\n');
  const randomTimestamp = timestamps[Math.floor(Math.random() * timestamps.length)];
  const [hours, minutes, seconds] = randomTimestamp.split(':');
  startTimestamp = Date.now() - (hours * 3600000 + minutes * 60000 + seconds * 1000);
  // Editable RPC concept by GhoSty || Brutality
  updateRichPresence();
  // Editable RPC concept by GhoSty || Brutality
  client.user.setPresence({ status: "idle" });
});
// Editable RPC concept by GhoSty || Brutality
client.on('message', message => {
  if (message.author.id === client.user.id) {
    const args = message.content.split(' ');
    const command = args[0];
    // Editable RPC concept by GhoSty || Brutality
    if (command === '>simg' && args.length === 2) {
      const imgUrl = args[1];
      r.setAssetsSmallImage(imgUrl);
      client.user.setActivity(r);
      message.delete();
    } else if (command === '>time' && args.length === 2) {
      const newTime = args[1];
      // Editable RPC concept by GhoSty || Brutality
      if (isValidTimestamp(newTime)) {
        const [hours, minutes, seconds] = newTime.split(':');
        startTimestamp = Date.now() - (hours * 3600000 + minutes * 60000 + seconds * 1000);
        // Editable RPC concept by GhoSty || Brutality
        updateRichPresence();
        message.delete();
      } else {
        message.edit('Invalid timestamp format. Use HH:MM:SS.');
      }// Editable RPC concept by GhoSty || Brutality
    } else if (command === '>bname' && args.length === 2) {
      buttonName = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>burl' && args.length === 2) {
      buttonUrl = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>rpcurl' && args.length === 2) {
      rpcURL = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>rpctype' && args.length === 2) {
      rpcType = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>rpcname' && args.length === 2) {
      rpcName = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>rpcd' && args.length === 2) {
      rpcDetails = args.slice(1).join(' ');
      updateRichPresence();
      message.delete();
    } else if (command === '>stext' && args.length === 2) {
      assetsSmallText = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>ltext' && args.length === 2) {
      assetsLargeText = args[1];
      updateRichPresence();
      message.delete();
    } else if (command === '>limg' && args.length === 2) {
      assetsLargeImage = args[1];
      updateRichPresence();
      message.delete();
    }
    
    // Editable RPC concept by GhoSty || Brutality
  }
});
// Editable RPC concept by GhoSty || Brutality
function isValidTimestamp(timestamp) {
  const regex = /^\d{2}:\d{2}:\d{2}$/;
  return regex.test(timestamp);
}// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
function updateRichPresence() {
  r = new Discord.RichPresence()
    .setApplicationId('1113183256343482519')
    .setType(rpcType)
    .setURL(rpcURL)
    .setName(rpcName)
    .setDetails(rpcDetails)
    .setStartTimestamp(startTimestamp)
    .setAssetsLargeImage(assetsLargeImage) 
    .setAssetsLargeText(assetsLargeText) 
    .setAssetsSmallImage(assetsSmallImage)
    .setAssetsSmallText(assetsSmallText)
    .setButtons([
      { name: buttonName, url: buttonUrl }
    ]);// Editable RPC concept by GhoSty || Brutality
  // Editable RPC concept by GhoSty || Brutality
  client.user.setActivity(r);
}

client.login("ODA5MDc3MTIyMDcyODM4MTc2.GNBjem.VbA8q_mWUNXnqKhx0hvrMnQV_F1bZ57Fn57Dqg");

// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality
// Editable RPC concept by GhoSty || Brutality