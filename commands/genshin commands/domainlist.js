const { kStringMaxLength } = require('buffer');
const { CommandInteraction, MessageEmbed, Client, Util } = require('discord.js');
const genshindb = require('genshin-db');

module.exports = {
	name: 'domainlist',
	description: 'shows the available domains',
	options: [
		{
			name: 'domain-categories',
			value: 'domain categories',
			description: 'shows the domains categories available for listing',
			type: 'SUB_COMMAND',
			options: [
				{
					name: 'region',
					value: 'region',
					description: 'choose a region for the available domains',
					type: 'STRING',
					required: false,
					choices: [
						{
							name: 'inazuma',
							value: 'inazuma'
						},
						{
							name: 'mondstadt',
							value: 'mondstadt'
						},
						{
							name: 'liyue',
							value: 'liyue'
						}
					]
				}
			]
		}
	],
	/**
 * 
 * @param {Client}client
 * @param {Util}util
 * @param {CommandInteraction} interaction 
 */
	async execute(interaction, client, util) {
		const Inazumadomains = new MessageEmbed()
			.setColor('RED')
			.setTitle('available domains in Inazuma')
			.addField('Domains', `${genshindb.domains('inazuma', { matchCategories: true }).join('\n')}`);

		const Mondstadtdomains = new MessageEmbed()
			.setColor('RED')
			.setTitle('available domains in mondstadt')
			.setDescription(`Domains\n ${genshindb.domains('mondstadt', { matchCategories: true }).join('\n')}`);
		const Liyuedomains = new MessageEmbed()
			.setColor('RED')
			.setTitle('available domains in liyue')
			.addField('Domains', `${genshindb.domains('liyue', { matchCategories: true }).join('\n')}`);

		const regionchoices = interaction.options.getString('region');
		const typechoices = interaction.options.getString('type');
		switch (regionchoices) {
			case 'inazuma':
				{
					client.emit('inazuma', interaction.member);
					interaction.reply({ embeds: [ Inazumadomains ] });
				}
				break;
			case 'mondstadt':
				{
					client.emit('mondstadt', '4', interaction.member);
					interaction.reply({ embeds: [ Mondstadtdomains ] });
				}
				break;
			case 'liyue':
				{
					client.emit('liyue', interaction.member);
					interaction.reply({ embeds: [ Liyuedomains ] });
				}
				break;
		}
	}
};
