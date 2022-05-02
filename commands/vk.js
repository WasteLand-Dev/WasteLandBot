const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("vk")
        .setDescription("Our vk page"),
    async execute(interaction) {
        interaction.reply({
            content: "VK: https://vk.com/thewastelandrp",
            emphemeral: true
        });
        console.log(color.cyanBright("Link to the community in VK sent"));
    }
};