const { Embed } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');
const genshindb = require('genshin-db');

module.exports = {
	name: 'weaponinfo',
	description: 'shows the info of the specified weapon',
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
 * @param {genshindb} genshin 
 */
	async execute(interaction, genshin) {
		const User = interaction.member;
		const Response = new MessageEmbed().setColor('RED');

		interaction.reply({ embeds: [ Response ] });
	}
};
