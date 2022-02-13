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
		member.roles.add('942223170591653969');
		const Welcomer = new WebhookClient({
			id: '942224503235293245',
			token: '-QX_WBv89hmuPFYYDzP7tkB3baPJtRYkk21PseRYlEzD7Q1FKGYEag8eyw3tBJ4WugKd'
		});

		const Welcome = new MessageEmbed()
			.setColor('AQUA')
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
