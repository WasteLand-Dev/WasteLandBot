const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("echo")
		.setDescription("Echos your input")
		.addStringOption((option) =>
			option
				.setName("message")
				.setDescription("The message to echo")
				.setRequired(true)
		),
	async execute(interaction) {
		interaction.reply({
			content: interaction.options.getString("message"),
			ephemeral: true,
		});
		console.log(color.cyanBright("Command echo executed"));
	},
};
