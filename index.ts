import { DiscordWebhook } from 'https://deno.land/x/denocord_webhook@v1.10/mod.ts';
import "https://deno.land/std@0.191.0/dotenv/load.ts";
import { GenWadai } from "./generateWadai.ts";

const DiscordWH = new DiscordWebhook(
    Deno.env.get('DISCORD_WEBHOOK_URL') ?? ""
);

console.log("\x1b[32m[DiscordAI] Started\x1b[0m");
const wadai = new GenWadai();

function send(text: string) {
    DiscordWH.sendMessage({
        text: text,
        username: "AMEX-AI-人口無能",
    });
}

Deno.cron("say", "* * * * *", () => {
    if (Math.random() > (Math.random() - 0.3)) {
        send(wadai.generateWadai());
    }
})
