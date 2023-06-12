const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const sql = require('mssql')
 
module.exports = {
    cooldown: 7,
    data: new SlashCommandBuilder()
    .setName("give-zen")
    .setDescription("Give Zen")
    .addStringOption(option =>
        option.setName('username')
        .setDescription('username')
        .setRequired(true)
    )
    .addNumberOption(option =>
        option.setName('amount')
        .setDescription('amount')
        .setRequired(true)
    ),
 
    async execute (interaction, client) {

        const username = interaction.options.getString('username');
        const amount = interaction.options.getNumber('amount');

        const transaction = new sql.Transaction(/* [pool] */)
        transaction.begin(err => {
        
            const request = new sql.Request(transaction)
            request.query(`UPDATE [dbo].[CashTable] SET [Zen] = ${amount} WHERE [WindyCode] = '${username}'`, (err, result) => {
        
                transaction.commit(err => {
                    interaction.reply({ 
                        embeds: [
                          new EmbedBuilder()
                          .setAuthor({name: interaction.guild.name, iconURL: interaction.guild.iconURL()})
                          .setDescription(`✅ | Thank you for purchasing **ZEN** at RH Legend`)
                          .setColor("Green")
                          .addFields(
                            {
                                name: "**Zen Updated**",
                                value: `${amount}`,
                                inline: true
                            },
                            {
                                name: "**Player**",
                                value: `${username}`,
                                inline: true
                            },
                          )
                          .setThumbnail(interaction.guild.iconURL())
                          .setFooter({ text: `${interaction.guild.name} ©2023`, iconURL: interaction.guild.iconURL() })
                          .setTimestamp()
                      ], ephemeral: false
                       });
                })
            })
        })
                

    }
}