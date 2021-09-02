const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();//cria loc
client.aliases = new Collection();

require('./Utils/events')(client);// Event Handler
require('./Utils/commands')(client);// Command Handler

client.login(process.env.token); //aqui você coloca o token do seu bot.
//codigos disponiveis em: https://github.com/ShadowGameszz/Bot-Tutorial