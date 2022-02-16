const { CommandInteraction, MessageEmbed } = require('discord.js');
const genshindb = require('genshin-db');

module.exports = {
	name: 'characterlist',
	description: 'a list of the available characters',
	/**
 * 
 * @param {CommandInteraction} interaction 
 */
	async execute(interaction) {
		console.log(genshindb.characters('names'));
		const Response = new MessageEmbed()
			.setColor('RED')
			.setTitle('available characters')
			.addField(
				'names:',
				`Aether\nAlbedo\nAloy\nAmber\nItto Arataki\nBarbara\nBeidou\nBennett\nChongyun\nDiluc\nDiona\nEula\nFischl\nGanyu\nGorou\nHuTao\nJean\nKazuha Kaedehara\nKaeya\nAyaka Kamisato\nKeqing\nKlee\nKujouSara\nLisa\nLumine\nMona\nNingguang\nNoelle\nQiqi\nRaidenShogun\nRazor\nRosaria\nKokomi Sangonomiya\nSayu\nShenhe\nSucrose\nTartaglia\nThoma\nVenti\nXiangling\nXiao\nXingqiu\nXinyan\nYaeMiko\nYanfei\nYoimiya\nYunJin\nZhongli`
			);

		interaction.reply({ embeds: [ Response ] });
	}
};
