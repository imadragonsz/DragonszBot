const { MessageEmbed, WebhookClient, GuildMember } = require('discord.js');

module.exports = {
	name: 'guildMemberRemove',
	permissions: 'ADMINISTRATOR',
	/**
     * 
     * @param {guildMember} member
     */
	execute(member) {
		const { user, guild } = member;
		const Loger = new WebhookClient({
			id: '942329574736412682',
			token: 'O9h6-44AGsuD8Z0giYWeR7nqS2md3ck8qYOauLZXh27A0LwbtDFrCfnUHFSqj-rDIdSz'
		});

		const Goodbye = new MessageEmbed()
			.setColor('RED')
			.setAuthor({
				name: `${user.username}`,
				iconURL: `${user.avatarURL({ dynamic: true, size: 512 })}`
			})
			.setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
			.setDescription(
				`
            Goodbye, ${member} has left the **${guild.name}**!\n
            Joined: <t:${parseInt(member.joinedTimestamp / 1000)}:R>\nLatest Member Count: **${guild.memberCount}**`
			);

		Loger.send({ embeds: [ Goodbye ] });
	}
};
