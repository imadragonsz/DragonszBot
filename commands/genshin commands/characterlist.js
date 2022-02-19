const { CommandInteraction, MessageEmbed, Client } = require('discord.js');
const genshindb = require('genshin-db');
const allchoices = genshindb.elements('names', { matchCategories: true });
let choices = [];
allchoices.forEach((c) => {
	choices.push({ name: c, value: c });
});

module.exports = {
	name: 'characterlist',
	description: 'a list of the available characters per element',
	options: [
		{
			name: 'elements',
			value: 'elements',
			description: 'all the available character elements',
			type: 'STRING',
			required: true,
			choices: choices
		}
	],
	/**
 * @param {Client} client
 * @param {CommandInteraction} interaction 
 */
	async execute(interaction, client) {
		const options = interaction.options.getString('elements');
		const Response = new MessageEmbed()
			.setColor('RED')
			.setTitle(`available ${options} characters`)
			.addField('names:', `${genshindb.characters(`${options}`, { matchCategories: true }).join('\n')}`);

		interaction.reply({ embeds: [ Response ] });
	}
};
