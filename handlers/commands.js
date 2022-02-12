const { perms } = require('../validation/permissions');
const { client } = require('discord.js');
const { promisify } = require('util');
const { glob } = require('glob');
const PG = promisify(glob);
const Ascii = require('ascii-table');
/** 
 * @param {client} client
*/
module.exports = async (client) => {
	const table = new Ascii('command loaded');

	commandsArray = [];
	(await PG(`${process.cwd()}/commands/*/*.js`)).map(async (file) => {
		const command = require(file);

		if (!command.name) return table.addRow(file.split('/')[7], '🔸 FAILED', 'Missing a name.');

		if (!command.description) return table.addRow(command.name, '🔸 FAILED', 'Missing a description.');

		if (command.permission) {
			if (perms.includes(command.permission)) command.defaultPermission = false;
			else return table.addRow(command.name, '🔸 FAILED', 'Permission is invalid.');
		}
	});
};
