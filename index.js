const { Client } = require("discord.js");
const bot = new Client();
//By Rainbow Studios - https://discord.gg/Tccx7F7mMj
//Copyright use the code without credit and get sued

bot.on("message", (message) => {});

bot.on("messageDelete", (message) => {
  if (message.mentions.users.first()) {
    message.channel.send(
      `A user has been ghost pinged!! ${message.author} has pinged ${
        message.mentions.users.first().username
      }`
    );
  }
});

bot.on("messageUpdate", (message, newMessage) => {
  if (message.mentions.users.first()) {
    if (newMessage.mentions.users.first()) return;
    message.channel.send(
      `A user has been ghost pinged!! ${message.author} has pinged ${
        message.mentions.users.first().username
      }`
    );
  }
});

bot.login("ODE3ODQyMTM3MTEwNTQ0NDM0.YEPY2A.2JkwQHTqtBH-e1rE-PVC_j-gDsg"); //Token expired RIP peeps frm rainbow studios
//By Rainbow Studios - https://discord.gg/Tccx7F7mMj
//Copyright use the code without credit and get sued
