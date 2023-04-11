const { REST, Routes } = require('discord.js');
const path = require('path');
const fs = require('fs');

const commands = [];
// Grab all the command files from the commands directory you created earlier
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

async function register() {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
};

register();