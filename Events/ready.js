const { ActivityType } = require("discord.js")

module.exports = {
  name: `ready`,
  once: true,
  async execute(client) {
    setInterval(() => {
      client.user.setActivity(`${client.guilds.cache.size} server${client.guilds.cache.size > 1 ? "s" : ""} | https://kingminer7.github.io/bots/0`, { type: ActivityType.Listening });
      client.user.setStatus('dnd');
    }, 5000);
    console.log(`The bot is online using account ${client.user.tag}.`)
  }
}