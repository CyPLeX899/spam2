const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643242621673799731")
setInterval(function() {
channel.send(`rabie rabie rabie`);
}, 30)
})

client.login(process.env.BOT_TOKEN);