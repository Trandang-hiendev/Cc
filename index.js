require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('1206534288091250758')
        .setType('PLAYING')
        .setURL(`https://www.youtube.com/watch?v=HTp5PH8ot6Q&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&ab_channel=NightLovell`)
        .setDetails(`hello i'm Hine`)
        .setName(`here is my discord`)
        .setState(`have a nice day`)
        .setParty({
            max: 5001,
            current: 4690,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(`mp:attachments/754377615774842923/1083781876352819200/ce050454b14baa8a677c9fe3940bd094.jpg`)
        .setAssetsLargeText(`dead`)
        .setAssetsSmallImage(`mp:attachments/754377615774842923/1083782130930303126/e1a431f195998ae2c25ad1fc30f497c3.jpg`)
        .setAssetsSmallText(`Gay`)
        .addButton(`Discord Shop`, `https://discord.gg/heprxstore `);
        .addButton(`Discord Server`, `https://discord.gg/lilbae`);
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);
