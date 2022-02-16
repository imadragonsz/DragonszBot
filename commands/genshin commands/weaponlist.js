const { val } = require('cheerio/lib/api/attributes');
const { CommandInteraction, MessageEmbed, Client } = require('discord.js');
const genshindb = require('genshin-db');

module.exports = {
	name: 'weaponlist',
	description: 'a list of the available weapons',
	options: [
		{
			name: 'types',
			value: 'types',
			type: 'STRING',
			required: true,
			description: 'select a weapon type',
			choices: [
				{
					name: 'bows',
					value: 'bows'
				},
				{
					name: 'swords',
					value: 'swords'
				},
				{
					name: 'claymores',
					value: 'claymores'
				},
				{
					name: 'catalysts',
					value: 'catalysts'
				},
				{
					name: 'spears',
					value: 'spears'
				}
			]
		}
	],

	/**
 * 
 * @param {Client} client
 * @param {CommandInteraction} interaction 
 */
	async execute(interaction, client) {
		const ResponseBow = new MessageEmbed()
			.setColor('RED')
			.setTitle('available bows')
			.addField('names:', `${genshindb.weapons('bow', { matchCategories: true })}`);
		const Responsesword = new MessageEmbed()
			.setColor('RED')
			.setTitle('available swords')
			.addField('names:', `${genshindb.weapons('sword', { matchCategories: true })}`);
		const Responseclaymore = new MessageEmbed()
			.setColor('RED')
			.setTitle('available claymores')
			.addField('names:', `${genshindb.weapons('claymore', { matchCategories: true })}`);
		const Responsespear = new MessageEmbed()
			.setColor('RED')
			.setTitle('available polearms')
			.addField('names:', `${genshindb.weapons('polearm', { matchCategories: true })}`);
		const Responsecatalyst = new MessageEmbed()
			.setColor('RED')
			.setTitle('available catalysts')
			.addField('names:', `${genshindb.weapons('catalyst', { matchCategories: true })}`);

		const choices = interaction.options.getString('types');
		switch (choices) {
			case 'bows':
				{
					client.emit('bows', interaction.member);
					interaction.reply({ embeds: [ ResponseBow ] });
				}
				break;
			case 'swords':
				{
					client.emit('swords', interaction.member);
					interaction.reply({ embeds: [ Responsesword ] });
				}
				break;
			case 'spears':
				{
					client.emit('spears', interaction.member);
					interaction.reply({ embeds: [ Responsespear ] });
				}
				break;
			case 'catalysts':
				{
					client.emit('catalysts', interaction.member);
					interaction.reply({ embeds: [ Responsecatalyst ] });
				}
				break;
			case 'claymores':
				{
					client.emit('claymores', interaction.member);
					interaction.reply({ embeds: [ Responseclaymore ] });
				}
				break;
		}
	}
};
