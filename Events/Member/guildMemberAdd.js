const { MessageEmbed, WebhookClient, GuildMember } = require('discord.js');

module.exports = {
	name: 'guildMemberAdd',
	permissions: 'ADMINISTRATOR',
	/**
     * 
     * @param {guildMember} member
     */
	execute(member) {
		const { user, guild } = member;
		const Welcomer = new WebhookClient({
			id: '942891099507273758',
			token: 'IDfkvl10MHqhtikWUV41PjOYvxQkHnz2RnJFmbwFFOMoNbS1dmGqGfsygLdCSU_Vwdfy'
		});

		const Welcome = new MessageEmbed()
			.setColor('AQUA')
			.setAuthor({
				name: `${user.username}`,
				iconURL: `${user.avatarURL({ dynamic: true, size: 512 })}`
			})
			.setThumbnail(user.avatarURL({ dynamic: true, size: 512 }))
			.setDescription(
				`
            Welcome ${member} to the **${guild.name}**!\n
            Account Created: <t:${parseInt(
							user.createdTimestamp / 1000
						)}:R>\nLatest Member Count: **${guild.memberCount}**`
			);

		Welcomer.send({ embeds: [ Welcome ] });
	}
};
