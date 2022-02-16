//constants
const { Client, Collection } = require('discord.js');
const client = new Client({ intents: 14023 });
const { Token } = require('./Structures/token.json');

const { promisify } = require('util');
const { glob } = require('glob');
const PG = promisify(glob);
const Ascii = require('ascii-table');
const genshindb = require('genshin-db');

console.log(genshindb.characters('raiden'));
client.commands = new Collection();

[ 'Events', 'Commands' ].forEach((handler) => {
	require(`./Structures/Handlers/${handler}`)(client, PG, Ascii);
});

client.login(Token);
