import dotenv from 'dotenv'
dotenv.config()
import { Client, GatewayIntentBits, SlashCommandBuilder } from 'discord.js'
import './commands.js'
import './ip.js'

const TOKEN = process.env.TOKEN

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers
    ]
})

let botchat

client.once('ready', async () => {
    console.log('We up boysss')

    botchat = await client.channels.fetch('1360788600274423828')

    sendmsg(botchat)
})

function sendmsg(botchat) {
    setTimeout(() => {
        botchat.send('Bot is up')
    }, 100);
}

//Ip command
client.on('messageCreate', message => {
    if (message.content === '.ip') {
        message.reply('grand-hygiene.gl.joinmc.link')
    }
})

client.on('interactionCreate', (intereaction) => {
    //get the command
    if (!intereaction.isChatInputCommand()) return;

    //if the command é ip do that
    if (intereaction.commandName === 'ip') {
        intereaction.reply('grand-hygiene.gl.joinmc.link')
    }
});



client.login(TOKEN)