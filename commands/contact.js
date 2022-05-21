const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("contact")
        .setDescription("How to chat with us"),
    async execute(interaction) {
        interaction.reply({
            content: "https://wlorigin.cf/contact.html",
            emphemeral: true
        });
        console.log(color.cyanBright("Information about communication with us was sent"));
    }
};