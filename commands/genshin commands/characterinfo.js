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
			.addField('name:', genshindb.characters(options.getString('character')).name)
			.addField('rarity:', `${genshindb.characters(options.getString('character')).rarity}⭐`)
			.addField('gender:', genshindb.characters(options.getString('character')).gender)
			.addField('birthday:', genshindb.characters(options.getString('character')).birthday)
			.addField('description:', genshindb.characters(options.getString('character')).description)
			.addField('weapon:', genshindb.characters(options.getString('character')).weapontype)
			.addField('substat:', genshindb.characters(options.getString('character')).substat)
			.addField('region:', genshindb.characters(options.getString('character')).region)
			.addField('va eng:', genshindb.characters(options.getString('character')).cv.english)
			.addField('va jp:', genshindb.characters(options.getString('character')).cv.japanese);
		interaction.reply({ embeds: [ Response ] });
	}
};
