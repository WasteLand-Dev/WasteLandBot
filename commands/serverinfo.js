const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("serverinfo")
        .setDescription("get information about server"),
    async execute(interaction) {
        interaction.reply({
            content: `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`,
            emphemeral: true
        });
        console.log("Command server info executed");
    }
};