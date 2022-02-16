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
			.addField('name:', genshindb.weapons(options.getString('weapon')).name);

		interaction.reply({ embeds: [ Responseweapon ] });
	}
};
