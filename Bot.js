const { Client, Collection, GatewayIntentBits } = require(`discord.js`);
const fs = require(`fs`);

const {Token} = require("./config.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions
  ]
});

client.commands = new Collection();
client.commandArray = [];

client.regC = async () => {
  const cmdfiles = fs.readdirSync(`./Commands`).filter(file => file.endsWith(`.js`));
  for (const f of cmdfiles) {
    const command = require(`./Commands/${f}`)
    commands.set(command.data.name, command);
    commandArray.push(command.data.toJSON())
    console.log("Registering command " + command.data.name + ".")
  }
  const rest = new REST({ version: `9` }).setToken(process.env.token)
  try {
    await rest.put( Routes.applicationCommands(clientId), {
      body: commandArray,
    })
  } catch (error) {
    console.error(error)
  }
}

client.regE = = async () => {
  const eventFolders = fs.readdirSync("./Events").filter((file) => file.endsWith(".js"));
  for(const file of eventFiles) {
    const event = require(`./Events/${file}`)
    if(event.once) client.once(event.name, (...args) => event.execute(...args, client));
    else client.on(event.name, (...args) => event.execute(...args, client));
  }
}

client.emojilib = {
  fazcoin = "<:fazcoin:1015807386826584064>",
  fredrick_fazbot = "<:fredrick_fazbot:1015801229160501308>"
}

client.login(token);
