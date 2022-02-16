const { CommandInteraction, MessageEmbed } = require('discord.js');
const genshindb = require('genshin-db');
const { REPL_MODE_SLOPPY } = require('repl');

module.exports = {
	name: 'domainlist',
	description: 'shows the available domains',
	/**
 * 
 * @param {CommandInteraction} interaction 
 */
	async execute(interaction) {
		const Response = new MessageEmbed()
			.setColor('RED')
			.setTitle('available artifact sets')
			.addField('artifact sets', `${genshindb.artifacts('5', { matchCategories: true })}`);

		interaction.reply({ embeds: [ Response ] });
	}
};
