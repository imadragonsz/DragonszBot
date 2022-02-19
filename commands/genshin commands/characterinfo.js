const { CommandInteraction, MessageEmbed } = require('discord.js');
const genshindb = require('genshin-db');

module.exports = {
	name: 'characterinfo',
	description: 'shows the info of the specified character',
	options: [
		{
			name: 'character',
			description: 'select the character',
			type: 'STRING',
			required: true
		}
	],
	/**
 * 
 * @param {CommandInteraction} interaction 
 */
	async execute(interaction) {
		const Response = new MessageEmbed()
			.setColor('RED')
			.setAuthor({
				name: genshindb.characters(interaction.options.getString('character')).name,
				iconUrl: genshindb.characters(interaction.options.getString('character')).images.icon
			})
			.setThumbnail(genshindb.characters(interaction.options.getString('character')).images.icon)
			.addField('name:', `${genshindb.characters(interaction.options.getString('character')).name}`)
			.addField('rarity:', `${genshindb.characters(interaction.options.getString('character')).rarity}⭐`)
			.addField('gender:', genshindb.characters(interaction.options.getString('character')).gender)
			.addField('birthday:', genshindb.characters(interaction.options.getString('character')).birthday)
			.addField('description:', genshindb.characters(interaction.options.getString('character')).description)
			.addField('weapon:', genshindb.characters(interaction.options.getString('character')).weapontype)
			.addField('substat:', genshindb.characters(interaction.options.getString('character')).substat)
			.addField('region:', genshindb.characters(interaction.options.getString('character')).region)
			.addField('voice eng:', genshindb.characters(interaction.options.getString('character')).cv.english)
			.addField('voice jp:', genshindb.characters(interaction.options.getString('character')).cv.japanese);

		interaction.reply({ embeds: [ Response ] });
	}
};
