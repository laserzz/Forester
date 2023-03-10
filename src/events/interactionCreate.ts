import { BaseInteraction, EmbedBuilder } from "discord.js";
import { MyClient } from "../bot";

export const name = 'interactionCreate';
export const run = async (interaction: BaseInteraction, bot: MyClient) => {
    if(interaction.isChatInputCommand()) {
        try {
            await interaction.deferReply();
            await bot.commands.get(interaction.commandName)(interaction, bot);
        } catch(err) {
            const embed = new EmbedBuilder()
            .setTitle("Uh Oh, Error!")
            .setDescription(`\`\`\`\n${err.message}\`\`\``)
            .setColor("Red");
            console.error(err);
            await interaction.followUp({embeds: [embed]});
        }
    }
}