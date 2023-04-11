const { SlashCommandBuilder } = require('@discordjs/builders');
const ping = new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!');
async function execute(interaction) {
    await interaction.reply('Pong!');
}

module.exports = {
    data: ping,
    execute
};