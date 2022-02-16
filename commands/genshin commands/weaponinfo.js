const { CommandInteraction, MessageEmbed } = require('discord.js');
const genshindb = require('genshin-db');

module.exports = {
	name: 'weaponinfo',
	description: 'shows the info of the specified weapon',
	options: [
		{
			name: 'weapon',
			description: 'select the weapon.',
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
		const choices = interaction.options.getString('weapon');
		const Responseweapon = new MessageEmbed()
			.setColor('RED')
			.setAuthor({
				name: genshindb.weapons(options.getString('weapon')).name,
				iconURL: genshindb.weapons(options.getString('weapon')).images.icon
			})
			.setThumbnail(genshindb.weapons(options.getString('weapon')).images.icon)
			.addField('name:', genshindb.weapons(options.getString('weapon')).name)
			.addField('description:', genshindb.weapons(options.getString('weapon')).description)
			.addField('effect:', genshindb.weapons(options.getString('weapon')).effect)
			.addField('weapontype:', genshindb.weapons(options.getString('weapon')).weapontype)
			.addField('substat:', genshindb.weapons(options.getString('weapon')).substat)
			.addField('rarity:', `${genshindb.weapons(options.getString('weapon')).rarity}⭐`);

		interaction.reply({ embeds: [ Responseweapon ] });
	}
};
