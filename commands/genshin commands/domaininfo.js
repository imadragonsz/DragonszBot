const { CommandInteraction, MessageEmbed } = require('discord.js');
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
	name: 'domaininfo',
	description: 'shows the info of the specified domain',
	options: [
		{
			name: 'domain',
			value: 'domain',
			description: 'put in the domain you want to look up',
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
			.addField('recommended level', `${genshindb.domains(options.getString('domain')).recommendedlevel}`)
			.addField('recommended elements ', `${genshindb.domains(options.getString('domain')).recommendedelements}`)
			.addField('region', genshindb.domains(options.getString('domain')).region)
			.addField('loot type', genshindb.domains(options.getString('domain')).domaintype)
			.addField('enemy types', `${genshindb.domains(options.getString('domain')).monsterlist}`)
			.addField('description', genshindb.domains(options.getString('domain')).description);

		interaction.reply({ embeds: [ Response ] });
	}
};
