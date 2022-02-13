const { MessageEmbed, Message, WebhookClient } = require('discord.js');

module.exports = {
	name: 'messageUpdate',
	/**
     * 
     * @param {Message} oldMessage 
     * @param {Message} newMessage 
     */
	execute(oldMessage, newMessage) {
		if (oldMessage.author.bot) return;

		if (oldMessage.content === newMessage.content) return;

		const Count = 1950;

		const Original = oldMessage.content.slice(0, Count) + (oldMessage.content.length > 1950 ? ' ...' : '');
		const Edited = newMessage.content.slice(0, Count) + (newMessage.content.length > 1950 ? ' ...' : '');

		const log = new MessageEmbed()
			.setColor('#36393f')
			.setDescription(
				`📘 A [Message](${newMessage.url}) by ${newMessage.author} was **edited** in ${newMessage.channel}.\n\n**Original**:\n ${Original} \n**Edited**:\n ${Edited}`.slice(
					'0',
					'4096'
				)
			)
			.setFooter({
				text: `\nMember: ${newMessage.author.username} | ID ${newMessage.author.id}`,
				iconURL: `${newMessage.author.avatarURL({ dynamic: true, size: 512 })}`
			});

		new WebhookClient({
			url:
				'https://discord.com/api/webhooks/942343899496714270/HYsPmLXgtVtci6bH6prtWGtOu1eYzOalNs9tQTWKYpOjeOde9d6kR23_PEQ3wMSm8Kp8'
		})
			.send({ embeds: [ log ] })
			.catch((err) => console.log(err));
	}
};
