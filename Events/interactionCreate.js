module.exports = {
    name: `interactionCreate`,
    once: false,
    async execute(interaction, client) {
        const {CommandType} = require("../Config.js")
        if(interaction.isCommand() & (CommandType.toLowerCase() != "prefix")) {
            const { commands} = client;
            const { commandName } = interaction;
            const command = commands.get(commandName)
            if (!command) return;
            try{
                await command.executeSlash(interaction, client)
            }catch(error){
                console.error(error);
                await interaction.reply({
                    content: "Something went wrong, sorry for the inconvenience.",
                    ephemeral: true
                })
            }

        }
    }
}