const { CommandInteraction, MessageEmbed } = require('discord.js');
const genshindb = require('genshin-db');

module.exports = {
	name: 'domaininfo',
	description: 'shows the info of the specified domain',
	options: [
		{
			name: 'domain',
			description: 'select the domain',
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
			.setTitle(genshindb.domains(options.getString('domain')).name)
			.addField('domain name', genshindb.domains(options.getString('domain')).domainentrance)
			.addField('region', genshindb.domains(options.getString('domain')).region)
			.addField('loot type', genshindb.domains(options.getString('domain')).domaintype)
			.addField('description', genshindb.domains(options.getString('domain')).description);

		interaction.reply({ embeds: [ Response ] });
	}
};
