const { Client, Collection, GatewayIntentBits, REST, Routes } = require(`discord.js`);
const fs = require(`fs`);

const { Token, ClientId} = require("./Config.js");

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

const { commands, commandArray } = client

client.regC = async () => {
  const cmdfiles = fs.readdirSync(`./Commands`).filter(file => file.endsWith(`.js`));
  for (const f of cmdfiles) {
    const command = require(`./Commands/${f}`)
    commands.set(command.data.name, command);
    commandArray.push(command.data.toJSON())
    console.log("Registering command " + command.data.name + ".")
  }
  const rest = new REST({ version: `9` }).setToken(Token)
  try {
    await rest.put(Routes.applicationCommands(ClientId), {
      body: commandArray,
    })
  } catch (error) {
    console.error(error)
  }
}

client.regE = async () => {
  const eventFiles = fs.readdirSync("./Events").filter((file) => file.endsWith(".js"));
  for (const file of eventFiles) {
    const event = require(`./Events/${file}`)
    if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
    else client.on(event.name, (...args) => event.execute(...args, client));
  }
}

client.emojilib = {}
client.emojilib.fazcoin = "<:fazcoin:1015807386826584064>"
client.emojilib.fredrick_fazbot = "<:fredrick_fazbot:1015801229160501308>"

client.login(Token)
client.regC();
client.regE();