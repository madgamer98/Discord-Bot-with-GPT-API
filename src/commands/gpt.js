const { SlashCommandBuilder } = require('@discordjs/builders');
const { Configuration, OpenAIApi } = require("openai");
const gpt = new SlashCommandBuilder().setName('gpt').setDescription('Ask GPT a Question!').addStringOption(option => option.setName('question').setDescription('The Question to Ask GPT').setRequired(true));
async function execute(interaction) {
    await interaction.deferReply();
    response = await message(interaction.options.getString('question'));
    await interaction.editReply(response);
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
function message(message)
{
    return openai.createChatCompletion({
        model: process.env.OPENAI_MODEL,
        max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS),
        messages: [
          {"role": "system", "content": process.env.OPENAI_SYSTEM_PROMPT},
          {"role": "user", "content": message},
        ]
    }).then((response) => {
        return response.data.choices[0].message.content;
    });
}

module.exports = {
    data: gpt,
    execute
};