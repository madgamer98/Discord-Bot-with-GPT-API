# Madgamer98's Discord Bot
This is a bot that I made for my discord server to mess around with.
## Commands
### General
/ping - Pong!  
/gpt - Generates a response from GPT-3.5 from the prompt you give using the OpenAI API.
## Enviroment Variables
### Discord
```
DISCORD_TOKEN - The token for your discord bot.  
DISCORD_CLIENT_ID - The client ID for your discord bot.  
DISCORD_GUILD_ID - The guild ID for your discord server.  
```
### OpenAI
```
OPENAI_API_KEY - The API key for OpenAI.  
OPENAI_MODEL - The model to use for OpenAI.  
OPENAI_MAX_TOKENS - The maximum number of tokens to generate for OpenAI.  
OPENAI_SYSTEM_PROMPT - The system prompt to use for OpenAI.  
```
## Running the bot
First clone the repo
```
git clone https://github.com/madgamer98/Discord-Bot-with-GPT-API.git
```
Then you will need to setup the enviroment variables by renaming the `.env.example` file to `.env` and filling in the values.
Once you have those setup there are two ways to run the bot.
You can either run it using Docker | Docker Compose or run it manually with Node.
### Docker Compose
Docker Compose will automatically load the variables from the .env file as it's set up in the docker-compose.yml file.  
```
docker compose up -d --build
```
### Docker
If you are using Docker by itself you will need to specify all the enviroment variables during the run command.
```
cd src
docker build -t discord-bot .
docker run -d -e DISCORD_TOKEN= -e DISCORD_CLIENT_ID= -e DISCORD_GUILD_ID= -e OPENAI_API_KEY= -e OPENAI_MODEL= -e OPENAI_MAX_TOKENS= -e OPENAI_SYSTEM_PROMPT= discord-bot
```
### Node
Running Node manually requires you to install the dependencies and register the commands.
We use run register and run start so that dotenv can load the enviroment variables from the .env file.
```
cd src
npm install
npm run register
npm run start
```