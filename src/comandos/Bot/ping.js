module.exports = {
    name: "ping",
    category: "Bot",
    usage: 'ping',
    aliases: ['latencia'],
    description: "Retorna a latencia do bot",
    run: async (client, message) => {
       message.channel.send(`Pong - ${client.ws.ping}ms `)
    }
}//codigos disponiveis em: https://github.com/ShadowGameszz/Bot-Tutorial