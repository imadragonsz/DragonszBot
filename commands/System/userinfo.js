const { ContextMenuInteraction, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'userinfo',
	type: 'USER',
	permissions: 'ADMINISTRATOR',
	/**
     * 
     * @param {ContextMenuInteraction} interaction 
     */
	async execute(interaction) {
		const User = await interaction.guild.members.fetch(interaction.targetId);
		const Response = new MessageEmbed()
			.setColor('RED')
			.setAuthor({
				name: `${User.user.username}`,
				iconURL: `${User.user.avatarURL({ dynamic: true, size: 512 })}`
			})
			.setThumbnail(User.user.avatarURL({ dynamic: true, size: 512 }))
			.addField('id', `${User.user.id}`)
			.addField('Roles', `${User.roles.cache.map((r) => r).join('').replace('@everyone', '') || 'none'}`)
			.addField('Member Since', `<t:${parseInt(User.joinedTimestamp / 1000)}:R>`, true)
			.addField('Discord User Since', `<t:${parseInt(User.user.createdTimestamp / 1000)}:R>`, true);

		interaction.reply({ embeds: [ Response ], ephemeral: true });
	}
};
