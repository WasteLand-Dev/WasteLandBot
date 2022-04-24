const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("email")
        .setDescription("Technical support"),
    async execute(interaction) {
        interaction.reply({
            content: "support@wlorigin.cf",
            emphemeral: true
        });
        console.log("Email address sent");
    }
};