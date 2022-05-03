const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("View a list of commands."),
    async execute(interaction) {
        interaction.reply({
            content: '`You can see the entire list of commands by writing "/"`\n`If there are no commands ⇾ https://dev.wlorigin.cf/`',
            emphemeral: true
        });
        console.log(color.cyanBright("Command list sent"));
    }
};