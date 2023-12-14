const {SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, Colors} = require("discord.js");
var color = require("cli-color");

module.exports = {
  data:  new SlashCommandBuilder() 
  .setName("warn")
  .setDescription("Warns a member")
  .addUserOption((option) =>
  option.setName("user")
  .setDescription("The user you want to warn")
  .setRequired(true)
  )
  .addStringOption((option) =>
  option
  .setName("reason")
  .setDescription("The reason for the warn")
  .setRequired(true)
  )

  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    const {channel, client, options, Infraction} = interaction;

    const user = options.getMember("user");
    const reason = options.getString("reason");

			const Embed = new EmbedBuilder()
				.setColor(Colors.DarkButNotBlack)
				.setAuthor({
					name: `User warned! **Reason:** *${reason}*`,
					iconURL: `${user.displayAvatarURL({
						size: 4096,
						dynamic: true,
					})}`,
				})
				.setDescription(`Warn: <@${interaction.member.id}>`)
				.setTimestamp()


				const userembed = new EmbedBuilder()
				.setTitle("**Warn!** ***Be good, or you'll be punished!***")				
				.setColor(Colors.DarkButNotBlack)
				.setTimestamp()
				.setDescription(`You warned! Reason: ${reason}`)

				const meembed = new EmbedBuilder()
				.setTitle(`<@${interaction.member.id}>`)
				.setColor("DarkNavy")
				.setAuthor({
					name: `${reason}`, value: `${user}`
				});


				user.send({embeds: [userembed]});

				console.log(color.red(`User ${user} warned! Reason: ${reason}`));


				await interaction
				.reply({
					embeds: [Embed],
				})
				.catch((err) => {});
  }
};
