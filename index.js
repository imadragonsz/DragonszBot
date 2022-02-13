const token = require('../token.json');

//constants
const { config, prefix } = require('../config.json');
const { Client, Collection } = require('discord.js');
const client = new Client({ intents: 14023 });

client.commands = new Collection();

require('./Handlers/Events')(client);
require('./Handlers/commands')(client);

client.login(token.key);
