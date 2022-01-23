import dotenv from 'dotenv';
import discord from 'discord.js';
import express from 'express';
import https from 'https';

dotenv.config();
const client = new discord.Client({
    intents: 447750720576
});
const app = express();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (msg) => {
    if ('.lol' === msg.content) {
        msg.reply('Y u leffing?');
    }
});

const server = https.createServer(app);

server.listen();