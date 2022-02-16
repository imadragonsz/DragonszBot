const { CommandInteraction, MessageEmbed, Client } = require('discord.js');
const genshindb = require('genshin-db');

module.exports = {
	name: 'characterlist',
	description: 'a list of the available characters per element',
	options: [
		{
			name: 'element',
			value: 'element',
			description: 'select preffered character element',
			type: 'STRING',
			required: true,
			choices: [
				{
					name: 'pyro',
					value: 'pyro'
				},
				{
					name: 'geo',
					value: 'geo'
				},
				{
					name: 'cryo',
					value: 'cryo'
				},
				{
					name: 'electro',
					value: 'electro'
				},
				{
					name: 'anemo',
					value: 'anemo'
				},
				{
					name: 'hydro',
					value: 'hydro'
				}
			]
		}
	],
	/**
 * @param {Client} client
 * @param {CommandInteraction} interaction 
 */
	async execute(interaction, client) {
		const Responsepyro = new MessageEmbed()
			.setColor('RED')
			.setTitle('available pyro characters')
			.addField('names:', `${genshindb.characters('pyro', { matchCategories: true }).join('\n')}`);
		const Responsegeo = new MessageEmbed()
			.setColor('RED')
			.setTitle('available geo characters')
			.addField('names:', `${genshindb.characters('geo', { matchCategories: true }).join('\n')}`);
		const Responsecryo = new MessageEmbed()
			.setColor('RED')
			.setTitle('available cryo characters')
			.addField('names:', `${genshindb.characters('cryo', { matchCategories: true }).join('\n')}`);
		const Responseelectro = new MessageEmbed()
			.setColor('RED')
			.setTitle('available electro characters')
			.addField('names:', `${genshindb.characters('electro', { matchCategories: true }).join('\n')}`);
		const Responseanemo = new MessageEmbed()
			.setColor('RED')
			.setTitle('available anemo characters')
			.addField('names:', `${genshindb.characters('anemo', { matchCategories: true }).join('\n')}`);
		const Responsehydro = new MessageEmbed()
			.setColor('RED')
			.setTitle('available hydro characters')
			.addField('names:', `${genshindb.characters('hydro', { matchCategories: true }).join('\n')}`);

		const choices = interaction.options.getString('element');
		switch (choices) {
			case 'pyro':
				{
					client.emit('pyro', interaction.member);
					interaction.reply({ embeds: [ Responsepyro ] });
				}
				break;
			case 'geo':
				{
					client.emit('geo', interaction.member);
					interaction.reply({ embeds: [ Responsegeo ] });
				}
				break;
			case 'cryo':
				{
					client.emit('cryo', interaction.member);
					interaction.reply({ embeds: [ Responsecryo ] });
				}
				break;
			case 'electro':
				{
					client.emit('electro', interaction.member);
					interaction.reply({ embeds: [ Responseelectro ] });
				}
				break;
			case 'anemo':
				{
					client.emit('anemo', interaction.member);
					interaction.reply({ embeds: [ Responseanemo ] });
				}
				break;
			case 'hydro':
				{
					client.emit('hydro', interaction.member);
					interaction.reply({ embeds: [ Responsehydro ] });
				}
				break;
		}
	}
};
