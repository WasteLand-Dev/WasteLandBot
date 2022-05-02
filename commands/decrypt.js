const { SlashCommandBuilder } = require("@discordjs/builders");
var CryptoJS = require("crypto-js");
var color = require("cli-color");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("decrypt")
		.setDescription("decrypt your text")
		.addStringOption((option) =>
			option
				.setName("message")
				.setDescription("The message to decrypt")
				.setRequired(true)
		)
        .addStringOption((option) =>
            option
                .setName("decryption_key")
                .setDescription("Your decryption key")
                .setRequired(true)
        ),
	async execute(interaction) {
        var input = interaction.options.getString("message");
        var key = interaction.options.getString("decryption_key");
        var bytes = CryptoJS.AES.decrypt(input, key);
        var decryptedtext = bytes.toString(CryptoJS.enc.Utf8);
		interaction.reply({
			content: decryptedtext,
			ephemeral: true,
		});
		console.log(color.cyanBright("Command decrypt executed"));
	},
};