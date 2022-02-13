const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const { execute } = require('../client/ready');

module.exports = {
	name: 'interactionCreate',
	/**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
	async execute(interaction, client) {
		if (interaction.isCommand() || interaction.isContextMenu()) {
			const command = client.commands.get(interaction.commandName);
			if (!command)
				return (
					interaction.reply({
						embeds: [
							new MessageEmbed().setColor('RED').setDescription('⛔ An error has occured while running this command.')
						],
						ephemeral: true
					}) && client.command.delete(interaction.commandName)
				);

			command.execute(interaction, client);
		}
	}
};
