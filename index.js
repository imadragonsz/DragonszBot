//constants
const { Client, Collection } = require('discord.js');
const client = new Client({ intents: 14023 });
const { Token } = require('./Structures/token.json');

const { promisify } = require('util');
const { glob } = require('glob');
const PG = promisify(glob);
const Ascii = require('ascii-table');
const genshin = require('genshin');
client.commands = new Collection();

console.log(genshin.characters('raiden'));

[ 'Events', 'Commands' ].forEach((handler) => {
	require(`./Structures/Handlers/${handler}`)(client, PG, Ascii);
});

client.login(Token);
