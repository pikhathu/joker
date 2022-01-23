import dotenv from 'dotenv';
import discord from 'discord.js';

dotenv.config();
const client = new discord.Client({
    intents: 447750720576
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (msg) => {
    if ('.lol' === msg.content) {
        msg.reply('Y u leffing?');
    }
});

client.login(process.env.TOKEN);

const joker = (): void => {
    console.log(`Starting the jokes.`);
}

setInterval(joker, 3600000);