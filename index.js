const Discord = require('discord.js-selfbot-v13');
const fs = require('fs');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
const keepAlive = require('./server.js');
keepAlive();

let r;
let startTimestamp = Date.now();
let buttonName = 'FACEBOOK';
let buttonUrl = 'https://www.facebook.com/hine.Wns/';
let rpcURL = 'https://www.facebook.com/hine.Wns/';
let rpcType = 'PLAYING'; // COMPETING, WATCHING, PLAYING, STREAMING
let rpcName = '想你';
let rpcDetails = 'yeu em trong mo';
let assetsSmallText = '[SSH: KayT]';
let assetsLargeText = '.';
let assetsLargeImage = 'https://media.discordapp.net/attachments/1202612834685689927/1203717757640900658/tai_xuong_1.gif?ex=65d21c85&is=65bfa785&hm=2deb1d46b379b94edd81f7572fbfdb2b098f00d68d10cb8760a96701d8a56fc3&';
let assetsSmallImage = 'https://cdn.discordapp.com/emojis/1162207615921696858.gif?quality=lossless&size=48';

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);
  
  const timestamps = fs.readFileSync('ghosty.txt', 'utf8').split('\n');
  const randomTimestamp = timestamps[Math.floor(Math.random() * timestamps.length)];
  const [hours, minutes, seconds] = randomTimestamp.split(':');
  startTimestamp = Date.now() - (hours * 3600000 + minutes * 60000 + seconds * 1000);
  
  updateRichPresence();
  
  client.user.setPresence({ status: "idle" });
});

client.on('message', message => {
  if (message.author.id === client.user.id) {
    const args = message.content.split(' ');
    const command = args[0];
    
    if (command === '>simg' && args.length === 2) {
      const imgUrl = args[1];
      r.setAssetsSmallImage(imgUrl);
      client.user.setActivity(r);
      message.delete();
    } else if (command === '>time' && args.length === 2) {
      const newTime = args[1];
      
      if (isValidTimestamp(newTime)) {
        const [hours, minutes, seconds] = newTime.split(':');
        startTimestamp = Date.now() - (hours * 3600000 + minutes * 60000 + seconds * 1000);
        
        updateRichPresence();
        message.delete();
      } else {
        message.edit('Invalid timestamp format. Use HH:MM:SS.');
      }
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
  }
});
function isValidTimestamp(timestamp) {
  const regex = /^\d{2}:\d{2}:\d{2}$/;
  return regex.test(timestamp);
}
function updateRichPresence() {
  r = new Discord.RichPresence()
    .setApplicationId('1203284963856752660')
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
    ]);
  client.user.setActivity(r);
}

client.login(process.env.TOKEN);
