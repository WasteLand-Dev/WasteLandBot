const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("serverinfo")
        .setDescription("get information about server"),
    async execute(interaction) {
        await interaction.reply({
            content: `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`,
            emphemeral: true
        });
        console.log(color.cyanBright("Command server info executed"));
    }
};