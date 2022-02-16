const { CommandInteraction, MessageEmbed } = require('discord.js');
const genshindb = require('genshin-db');

module.exports = {
	name: 'characterinfo',
	description: 'shows the info of the specified character',
	options: [
		{
			name: 'character',
			description: 'select the character.',
			type: 'STRING',
			required: true
		}
	],
	/**
 * 
 * @param {CommandInteraction} interaction 
 */
	async execute(interaction) {
		const { options } = interaction;
		const Response = new MessageEmbed()
			.setColor('RED')
			.setAuthor({
				name: genshindb.characters(options.getString('character')).name,
				iconURL: genshindb.characters(options.getString('character')).images.icon
			})
			.setThumbnail(genshindb.characters(options.getString('character')).images.icon)
			.addField('name:', genshindb.characters(options.getString('character')).name);

		interaction.reply({ embeds: [ Response ] });
	}
};
