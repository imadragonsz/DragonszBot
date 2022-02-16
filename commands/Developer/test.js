const { CommandInteraction, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
	name: 'test',
	description: 'just a test command',
	type: 'STRING',

	/**
 * 
 * @param {CommandInteraction} interaction 
 */
	async execute(interaction) {
		const { genshinevent } = await fetch('https://genshin-app-api.herokuapp.com/api/events/name').then((response) =>
			response.json()
		);
		console.log(genshinevent);
		const eventresponse = new MessageEmbed().setColor('RED').setTitle('test');

		interaction.reply({ embeds: [ eventresponse ] });
	}
};
