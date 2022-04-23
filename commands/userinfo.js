const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("userinfo")
        .setDescription("information about user"),
    async execute(interaction) {
        interaction.reply({
            content: `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`,
            emphemeral: true
        });
    }
};