const { Token } = require('./Structures/token.json');

//constants
const { config, prefix } = require('./Structures/config.json');
const { Client, Collection } = require('discord.js');
const client = new Client({ intents: 14023 });
const { promisify } = require('util');
const { glob } = require('glob');
const PG = promisify(glob);
const Ascii = require('ascii-table');

client.commands = new Collection();

[ 'Events', 'Commands' ].forEach((handler) => {
	require(`./Structures/Handlers/${handler}`)(client, PG, Ascii);
});

client.login(Token);
