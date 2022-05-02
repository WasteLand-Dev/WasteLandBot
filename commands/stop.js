const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("stop")
        .setDescription("stopping the bot"),
    async execute(interaction) {
        if (interaction.user.id === '652441677545340928') {
            process.exit();
        } else {
            interaction.reply({
                content: "You have no right!",
                emphemeral: true
            });
            console.warn(color.cyanBright("Unauthorized access blocked (server shutdown command)"));
        }
    }
};