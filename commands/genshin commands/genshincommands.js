const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'genshincommands',
	description: 'shows the commands available',
	permissions: 'ADMINISTRATOR',
	/**
     * 
     * @param {CommandInteraction} interaction 
     */
	async execute(interaction) {
		const User = interaction.member;
		const Response = new MessageEmbed()
			.setColor('RED')
			.setAuthor({
				name: 'Commands'
			})
			.setThumbnail(
				'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0f1e5aad-05cf-4342-a2a3-6385559563dc/de8hzqj-45443592-d7d8-4a12-bed7-663747aa5d0c.png/v1/fill/w_512,h_512,strp/genshin_impact_paimon_dock_icon_by_arthurreinhart_de8hzqj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvMGYxZTVhYWQtMDVjZi00MzQyLWEyYTMtNjM4NTU1OTU2M2RjXC9kZThoenFqLTQ1NDQzNTkyLWQ3ZDgtNGExMi1iZWQ3LTY2Mzc0N2FhNWQwYy5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.m45bWfc0bY7PxlPIa62_hN_sPjz3Fddr8EXMqFbTgEI'
			)
			.addFields(
				{
					name: 'artifactinfo',
					value: '/artifactinfo shows the info of the specified artifact'
				},
				{
					name: 'artifactlist',
					value: '/artifactlist shows a list of available artifact sets'
				},
				{
					name: 'characterinfo',
					value: '/characterinfo shows the information of the specified character'
				},
				{
					name: 'domaininfo',
					value: '/domaininfo shows information about the specified domain'
				},
				{
					name: 'domainlist',
					value: '/domainlist shows a list of available domains by region'
				},
				{
					name: 'weaponinfo',
					value: '/weaponinfo shows the information of the specified weaponl'
				},
				{
					name: 'weaponlist',
					value: '/weaponlist shows a list of weapons by type'
				}
			);

		interaction.reply({ embeds: [ Response ], ephemeral: true });
	}
};
