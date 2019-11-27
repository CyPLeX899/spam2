const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("649359191831740453")
setInterval(function() {
channel.send(`Cyplex cyplex cyplex`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
