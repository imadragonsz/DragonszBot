const { kStringMaxLength } = require('buffer');
const { CommandInteraction, MessageEmbed, Client, Util } = require('discord.js');
const genshindb = require('genshin-db');
const inazumadomains = genshindb.domains('inazuma', { matchCategories: true });
let inazumachoices = [];
inazumadomains.forEach((c) => {
	if (c.includes('IV')) inazumachoices.push(c);
});
const mondstadtdomains = genshindb.domains('mondstadt', { matchCategories: true });
let mondstadtchoices = [];
mondstadtdomains.forEach((d) => {
	if (d.includes('IV')) mondstadtchoices.push(d);
});
const liyuedomains = genshindb.domains('liyue', { matchCategories: true });
let liyuechoices = [];
liyuedomains.forEach((e) => {
	if (e.includes('IV')) liyuechoices.push(e);
});

module.exports = {
	name: 'domainlist',
	description: 'shows the available domains',
	options: [
		{
			name: 'regions',
			value: 'regions',
			type: 'STRING',
			description: 'the regions available',
			required: true,
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
	],

	/**
 * 
 * @param {Client}client
 * @param {CommandInteraction} interaction 
 */
	async execute(interaction, client) {
		console.log(inazumachoices);
		const Inazumadomains = new MessageEmbed()
			.setColor('RED')
			.setTitle('available domains in Inazuma')
			.addField('Domains', `${inazumachoices.join('\n')}`);

		const Mondstadtdomains = new MessageEmbed()
			.setColor('RED')
			.setTitle('available domains in mondstadt')
			.setDescription(`Domains, ${mondstadtchoices.join('\n')}`);

		const Liyuedomains = new MessageEmbed()
			.setColor('RED')
			.setTitle('available domains in liyue')
			.addField('Domains', `${liyuechoices.join('\n')}`);

		const regionchoices = interaction.options.getString('regions');
		switch (regionchoices) {
			case 'inazuma':
				{
					client.emit('inazuma', interaction.member);
					interaction.reply({ embeds: [ Inazumadomains ] });
				}
				break;
			case 'mondstadt':
				{
					client.emit('mondstadt', interaction.member);
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
