const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("vk")
        .setDescription("Our vk page"),
    async execute(interaction) {
        interaction.reply({
            content: "VK: https://vk.com/thewastelandrp",
            emphemeral: true
        });
    }
};