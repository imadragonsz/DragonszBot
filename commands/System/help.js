const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'help',
	description: 'shows the commands available',
	permissions: 'ADMINISTRATOR',
	/**
     * 
     * @param {CommandInteraction} interaction 
     */
	async execute(interaction) {
		const User = interaction.member;
		const Response = new MessageEmbed()
			.setColor('RED')
			.setAuthor({
				name: 'Commands'
			})
			.addFields(
				{
					name: 'genshincommands',
					value: '/genshincommands shows a list of the commands availble for genshin impact'
				},
				{
					name: 'Testing Commands',
					value: '/emitt: emitts a different command'
				},
				{
					name: 'mod commands',
					value: '/clear: clears specified amount of messages of selected user'
				},
				{
					name: 'System commands',
					value: `/help: shows this menu\n/status: shows the bot status\n/suggest: use this command to make suggestions`
				},
				{
					name: 'Apps',
					value: 'userinfo: right click on a user and use the userinfo app to show their info'
				}
			);

		interaction.reply({ embeds: [ Response ], ephemeral: true });
	}
};
