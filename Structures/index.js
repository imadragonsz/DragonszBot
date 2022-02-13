const token = require('./Structures/token.json');

//constants
const { config, prefix } = require('./Structures/config.json');
const { Client, Collection } = require('discord.js');
const client = new Client({ intents: 14023 });

client.commands = new Collection();

require('./Structures/Handlers/Events')(client);
require('./Structures/Handlers/commands')(client);

client.login(token.key);
