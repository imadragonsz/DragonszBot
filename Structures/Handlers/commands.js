const { Perms } = require('../Validation/permissions.js');
const { client } = require('discord.js');
/** 
 * @param {client} client
*/
module.exports = async (client, PG, Ascii) => {
	const table = new Ascii('command loaded');

	CommandsArray = [];

	(await PG(`${process.cwd()}/commands/*/*.js`)).map(async (file) => {
		const command = require(file);

		if (!command.name) return table.addRow(file.split('/')[7], '🔸 FAILED', 'Missing a name.');

		if (!command.context && !command.description)
			return table.addRow(command.name, '🔸 FAILED', 'missing a description.');

		if (command.permission) {
			if (Perms.includes(command.permission)) command.defaultPermission = false;
			else return table.addRow(command.name, '🔸 FAILED', 'Permission is invalid.');
		}

		client.commands.set(command.name, command);
		CommandsArray.push(command);

		await table.addRow(command.name, '🔹 SUCCESFUL');
	});

	console.log(table.toString());

	//persmissions check //

	client.on('ready', async () => {
		const MainGuild = await client.guilds.cache.get('527147837151248394');

		MainGuild.commands.set(CommandsArray).then(async (command) => {
			const Roles = (commandName) => {
				const cmdPerms = CommandsArray.find((c) => c.name === commandName).permission;
				if (!cmdPerms) return null;

				return MainGuild.roles.cache.filter((r) => r.permissions.has(cmdPerms));
			};

			const fullPermissions = command.reduce((accumulator, r) => {
				const roles = Roles(r.name);
				if (!roles) return accumulator;

				const permissions = roles.reduce((a, r) => {
					return [ ...a, { id: r.id, type: 'ROLE', permission: true } ];
				}, []);
				return [ ...accumulator, { id: r.id, permissions } ];
			}, []);

			await MainGuild.commands.permissions.set({ fullPermissions });
		});
	});
	client.on('ready', async () => {
		const SubGuild = await client.guilds.cache.get('857729547985879081');

		SubGuild.commands.set(CommandsArray).then(async (command) => {
			const Roles = (commandName) => {
				const cmdPerms = CommandsArray.find((c) => c.name === commandName).permission;
				if (!cmdPerms) return null;

				return SubGuild.roles.cache.filter((r) => r.permissions.has(cmdPerms));
			};

			const fullPermissions = command.reduce((accumulator, r) => {
				const roles = Roles(r.name);
				if (!roles) return accumulator;

				const permissions = roles.reduce((a, r) => {
					return [ ...a, { id: r.id, type: 'ROLE', permission: true } ];
				}, []);
				return [ ...accumulator, { id: r.id, permissions } ];
			}, []);

			await SubGuild.commands.permissions.set({ fullPermissions });
		});
	});
};
