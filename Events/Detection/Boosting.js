const { GuildMember, MessageEmbed, MessageAttachment } = require('discord.js');
const Canvas = require('canvas');

module.exports = {
	name: ' guildMemberUpdate',
	/**
     * 
     * @param {GuildMember} oldMember 
     * @param {GuildMember} newMember 
     */
	execute(oldMember, newMember) {
		const { guild } = newMember;

		const canvas = Canvas.createCanvas(800, 250);
		const ctx = canvas.getContext('2d');
	}
};
