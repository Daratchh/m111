const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
if(!["", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
  let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
 
  if(!member) {
    db.delete(`tempmute_${message.author.id}`)
    db.delete(`kullanici.${uye.id}.sicil${message.author.id}`)

  }
  
}