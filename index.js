const id_chatWelcome = "";
//                     ⬆️ id chat to invite the message Welcome

// Membro si unisce al server
bot.on('guildMemberAdd', member => {

    const EmbedWelcome = new MessageEmbed()
        .setColor("")// Color 
        .setTitle("")// Title
        .setDescription(``)// Description
        .setThumbnail("")// PNG/GIF image
        .setFooter("")// final Description
    
    const chatbenvenuto = bot.channels.cache.find(channel => channel.id === id_chatWelcome)
    chatbenvenuto.send(EmbedWelcome)
});
