module.exports = {
    name: `messageCreate`,
    once: false,
    async execute(msg, client) {
        if(msg.author.bot) return;
        
        const {CommandType} = client

        //Command Detection
        if(msg.content.startsWith(prefix) & (CommandType.toLowerCase() == "prefix" | CommandType.toLowerCase() == "both") {
            //Probably a command

            const args = msg.content.split(" ")
            const { commands } = client
            const commandName = args[0].split(prefix)[1]
            console.log(args[0])
            const command = commands.get(commandName)
            if (!command) return;
            try{
                await command.executePrefix(msg, client)
            }catch(error){
                console.error(error);
                await msg.reply({
                    content: "Something went wrong, sorry for the inconvenience.",
                    ephemeral: true
                })
            }

        }

    }
}