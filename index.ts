import { DiscordWebhook } from 'https://deno.land/x/denocord_webhook@v1.10/mod.ts';
import "https://deno.land/std@0.191.0/dotenv/load.ts";
import { GenWadai } from "./generateWadai.ts";

const DiscordWH = new DiscordWebhook(
    Deno.env.get('DISCORD_WEBHOOK_URL') ?? ""
);

console.log("\x1b[32m[DiscordAI] Started\x1b[0m");
const wadai = new GenWadai();

Deno.cron("say", "* * * * *", () => {
    if (Math.random() > 0.125) {
        DiscordWH.sendMessage({
            text: wadai.generateWadai(),
            username: "AMEX-人口無能",
        });
    }
})
