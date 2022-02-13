const { MessageEmbed, Message, WebhookClient } = require('discord.js');

module.exports = {
	name: 'messageDelete',
	/**
 * 
 * @param {Message} message 
 */
	execute(message) {
		if (message.author.bot) return;

		const log = new MessageEmbed()
			.setColor('#36393f')
			.setDescription(
				`📕 A [message](${message.url}) by ${message.author
					.username} was **deleted**.\n\n **Deleted Message**\n ${message.content ? message.content : 'None'}`.slice(
					0,
					4096
				)
			)
			.setFooter({
				text: `\nMember: ${message.author.username} | ID ${message.author.id}`,
				iconURL: `${message.author.avatarURL({ dynamic: true, size: 512 })}`
			});
		if (message.attachments.size >= 1) {
			log.addField(`Attachments:`, `${message.attachments.map((a) => a.url)}`, true);
		}

		new WebhookClient({
			url:
				'https://discord.com/api/webhooks/942343899496714270/HYsPmLXgtVtci6bH6prtWGtOu1eYzOalNs9tQTWKYpOjeOde9d6kR23_PEQ3wMSm8Kp8'
		})
			.send({ embeds: [ log ] })
			.catch((err) => console.log(err));
	}
};
