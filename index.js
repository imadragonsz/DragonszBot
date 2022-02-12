const token = require('./token.json');

//constants
const { config, prefix } = require('./config.json');
const { Client, Intents, Interaction, Constants, DataResolver } = require('discord.js');
const client = new Client({ intents: 14023 });

require('./handlers/Events')(client);

client.login(token.token);
