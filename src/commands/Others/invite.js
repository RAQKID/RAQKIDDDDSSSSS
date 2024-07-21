const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

const Command = require("../../structures/Command.js");

module.exports = class Invite extends Command {
  constructor(client) {
    super(client, {
      name: "invite",
      description: {
        content: "Sends the bot's invite link",
        examples: ["invite"],
        usage: "invite",
      },
      category: "info",
      aliases: ["inv"],
      cooldown: 3,
      args: false,
      player: {
        voice: false,
        dj: false,
        active: false,
        djPerm: null,
      },
      permissions: {
        dev: false,
        client: ["SendMessages", "ViewChannel", "EmbedLinks"],
        user: [],
      },
      slashCommand: false,
      options: [],
    });
  }
  async run(client, ctx) {
    const clientId = process.env.CLIENT_ID;
    if (!clientId) {
      console.error(
        "Client ID not found in environment variables, cannot generate invite link."
      );
      return await ctx.sendMessage(
        "Sorry, my invite link is not available at this time. Please tell the my developer to check their console."
      );
    }
    const embed = this.client.embed();
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Invite Me")
        .setStyle(ButtonStyle.Link)
        .setURL(
          `https://discord.com/oauth2/authorize?client_id=${clientId}&permissions=40136506342720&integration_type=0&scope=bot`
        ),
      new ButtonBuilder()
        .setLabel("My Server")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/PBZFe6txtq")
    );
    return await ctx.sendMessage({
      embeds: [
        embed
          .setColor(this.client.color.main)
          .setDescription(
            `You can invite me by clicking the button below. Any bugs or outages? Join the support server!`
          ),
      ],
      components: [row],
    });
  }
};
