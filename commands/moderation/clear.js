const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
	name: 'clear',
	description: 'deletes a specific number of messages from a channel or target.',
	permissions: 'MANAGE_MESSAGES',
	options: [
		{
			name: 'amount',
			description: 'Selects the amount of messages to be deleted',
			type: 'NUMBER',
			required: true
		},
		{
			name: 'target',
			description: 'Selects a target to clear messages',
			type: 'USER',
			required: false
		}
	],
	/**
     * 
     * @param {CommandInteraction} interaction 
     */
	async execute(interaction) {
		const { channel, options } = interaction;
		const Amount = options.getNumber('amount');
		const Target = options.getMember('target');
		const Messages = await channel.messages.fetch();
		const Response = new MessageEmbed().setColor('DARK_GOLD');

		if (Amount > 100 || Amount <= 0) {
			Response.setDescription(`Amount cannot exceed 100, and cannot be under 1.`);
			return interaction.reply({ embeds: [ Response ] });
		}
		if (Target) {
			let i = 0;
			const filtered = [];
			(await Messages).filter((m) => {
				if (m.author.id === Target.id && Amount > i) {
					filtered.push(m);
					i++;
				}
			});

			await channel.bulkDelete(filtered, true).then((messages) => {
				Response.setDescription(`cleared ${messages.size} from ${Target}.`);
				interaction.reply({ embeds: [ Response ] });
			});
		} else {
			await channel.bulkDelete(Amount, true).then((messages) => {
				Response.setDescription(`cleared ${messages.size} from this channel.`);
				interaction.reply({ embeds: [ Response ] });
			});
		}
	}
};
