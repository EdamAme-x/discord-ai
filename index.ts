import { DiscordWebhook } from 'https://deno.land/x/denocord_webhook@v1.01/mod.ts';

const DiscordWH = new DiscordWebhook(
    Deno.env.get('DISCORD_WEBHOOK_URL') ?? ""
);

DiscordWH.sendMessage({
    "text": "test"
})