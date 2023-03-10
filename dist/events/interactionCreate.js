"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.name = void 0;
const discord_js_1 = require("discord.js");
exports.name = 'interactionCreate';
const run = async (interaction, bot) => {
    if (interaction.isChatInputCommand()) {
        try {
            await interaction.deferReply();
            await bot.commands.get(interaction.commandName)(interaction, bot);
        }
        catch (err) {
            const embed = new discord_js_1.EmbedBuilder()
                .setTitle("Uh Oh, Error!")
                .setDescription(`\`\`\`\n${err.message}\`\`\``)
                .setColor("Red");
            console.error(err);
            await interaction.followUp({ embeds: [embed] });
        }
    }
};
exports.run = run;
