import { DiscordWebhook } from 'https://deno.land/x/denocord_webhook@v1.10/mod.ts';
import "https://deno.land/std@0.191.0/dotenv/load.ts";

const DiscordWH = new DiscordWebhook(
    Deno.env.get('DISCORD_WEBHOOK_URL') ?? ""
);

DiscordWH.sendMessage({
    "text": "test"
})