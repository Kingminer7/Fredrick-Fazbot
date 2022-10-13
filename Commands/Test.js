const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Test Command"),
    async executeSlash(interaction, client) {
        interaction.reply("Test Command")
    },
    async executePrefix(msg, client) {
        msg.reply(`Test Command`);
    }
}