const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require("ms");
 
 
const token = 'Njk3MDYzNTU3NDQyODMwNTE3.Xox1OQ.yqa-IWZyfAaib-UK_nhWtvWDhZw';
 
const PREFIX = '!';
 
 
bot.on('ready', () => {
    console.log('This bot is active!');
})
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
        case 'mute':
            var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
            if(!person) return  message.reply("I CANT FIND THE USER " + person)
 
            let role = message.guild.roles.find(role => role.name === "jail");
           
 
            if(!role) return message.reply("Couldn't find the jail role.")
 
 
            let time = args[2];
            if(!time){
                return message.reply("You didnt specify a time!");
            }
 
            person.addRole(role.id);
 
 
            message.channel.send(`@${person.user.tag} Will stay in jail for ${ms(ms(time))}`)
 
            setTimeout(function(){
               
                person.removeRole(role.id);
                console.log(role.id)
                message.channel.send(`@${person.user.tag} has been set free.`)
            }, ms(time));
 
 
   
        break;
    }
 
 
});
 
           
                       
bot.login(token);