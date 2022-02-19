const { CommandInteraction, MessageEmbed } = require('discord.js');
const genshindb = require('genshin-db');
const allchoices = genshindb.artifacts('5', { matchCategories: true });
let choices = [];
allchoices.forEach((c) => {
	choices.push({ name: c, value: c });
});

module.exports = {
	name: 'artifactinfo',
	description: 'shows the info of the specified artifact set',
	options: [
		{
			name: 'artifact',
			description: 'select the artifact set.',
			type: 'STRING',
			required: true,
			choices: choices
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
			.setAuthor({
				name: genshindb.artifacts(options.getString('artifact')).name,
				iconURL: genshindb.artifacts(options.getString('artifact')).images.flower
			})
			.setThumbnail(genshindb.artifacts(options.getString('artifact')).images.flower)
			.addField('artifact set:', genshindb.artifacts(options.getString('artifact')).name)
			.addField('rarity:', `${genshindb.artifacts(options.getString('artifact')).rarity}⭐`)
			.addField('2pc set bonus', `${genshindb.artifacts(options.getString('artifact'))['2pc']}`)
			.addField('4pc set bonus', `${genshindb.artifacts(options.getString('artifact'))['4pc']}`);
		interaction.reply({ embeds: [ Response ] });
	}
};
