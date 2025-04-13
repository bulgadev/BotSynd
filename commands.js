require('dotenv').config();
const { REST, Routes } = require('discord.js')

const commands = [
    {
        name: 'ip',
        description: 'Sends server ip'
    },
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering commands')
        
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
        );

        console.log('Done')
    } catch (error) {
        console.log('Error', error)
    }
})();