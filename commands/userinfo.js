const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("userinfo")
        .setDescription("information about user"),
    async execute(interaction) {
        interaction.reply({
            content: `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`,
            emphemeral: true
        });
        console.log(color.cyanBright("Command user info executed"));
    }
};