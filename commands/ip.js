const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ip")
        .setDescription("Can i connect?"),
    async execute(interaction) {
        interaction.reply({
            content: "**IP**: radmin.wlorigin.cf / play.wlorigin.cf / craft.wlorigin.cf",
            emphemeral: true
        })
        console.log(color.cyanBright("Command ip executed"));
    }
};