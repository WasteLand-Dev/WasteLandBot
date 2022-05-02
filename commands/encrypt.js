const { SlashCommandBuilder } = require("@discordjs/builders");
var CryptoJS = require("crypto-js");
var color = require("cli-color");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("encrypt")
		.setDescription("encrypt your text")
		.addStringOption((option) =>
			option
				.setName("message")
				.setDescription("The message to encrypt")
				.setRequired(true)
		)
        .addStringOption((option) =>
            option
                .setName("encryption_key")
                .setDescription("Your encryption key")
                .setRequired(true)
        ),
	async execute(interaction) {
        var input = interaction.options.getString("message");
        var key = interaction.options.getString("encryption_key");
        var ciphertext = CryptoJS.AES.encrypt(input, key).toString();
		interaction.reply({
			content: ciphertext,
			ephemeral: true,
		});
		console.log(color.cyanBright("Command encrypt executed"));
	},
};