const { client, MessageEmbed, Client } = require('discord.js');
const { connection } = require('mongoose');
require('../../Events/client/ready');

module.exports = {
	name: 'userinfo',
	description: 'Displays the userinfo of mentioned user',
	/**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
	async execute(interaction, client) {
		const Userinfo = new MessageEmbed().setColor('AQUA').setDescription('test');
		interaction.reply({ embeds: [ Userinfo ] });
	}
};
