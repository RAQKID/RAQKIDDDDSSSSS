const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    token: process.env.TOKEN,
    prefix: process.env.PREFIX,
    color: {
        red: 0xff0000,
        green: 0x00ff00,
        blue: 0x0000ff,
        yellow: 0xffff00,
        main: 0x2f3136,
    },
    keepAlive: parseBoolean(process.env.KEEP_ALIVE) || true, // for https://replit.com keep alive bot 24/7
    searchEngine: process.env.SEARCH_ENGINE || "ytmsearch", // ytsearch = youtube, scsearch = soundcloud, spsearch = spotify,
    maxPlaylistSize: parseInt(process.env.MAX_PLAYLIST_SIZE) || 150,
    botStatus: process.env.BOT_STATUS || '', // online, idle, dnd, invisible
    botActivity: process.env.BOT_ACTIVITY || '', // set the bot activity
    botActivityType: parseInt(process.env.BOT_ACTIVITY_TYPE || '0'), // 0 to 5 get more info - https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-types
    maxQueueSize: parseInt(process.env.MAX_QUEUE_SIZE) || 350,
    owners: JSON.parse(process.env.OWNER_IDS || '[]'),
    clientId: process.env.CLIENT_ID,
    guildId: process.env.GUILD_ID,
    logChannelId: process.env.LOG_CHANNEL_ID || '',
    links: {
        img: process.env.IMG_LINK || 'https://i.ibb.co/wz2rvDv/istockphoto-1256174227-612x612.jpg',
    },
    icons: {
        youtube: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTA2MGg2djh1eDFnaGRjMGdjejR1d3J1bzBwaWg2d28yNGV4cXhvZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yr6DkcAYBzqVi/giphy.gif',
        spotify: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTA2MGg2djh1eDFnaGRjMGdjejR1d3J1bzBwaWg2d28yNGV4cXhvZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yr6DkcAYBzqVi/giphy.gif',
        soundcloud: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTA2MGg2djh1eDFnaGRjMGdjejR1d3J1bzBwaWg2d28yNGV4cXhvZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yr6DkcAYBzqVi/giphy.gif',
        applemusic: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTA2MGg2djh1eDFnaGRjMGdjejR1d3J1bzBwaWg2d28yNGV4cXhvZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yr6DkcAYBzqVi/giphy.gif',
        deezer: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTA2MGg2djh1eDFnaGRjMGdjejR1d3J1bzBwaWg2d28yNGV4cXhvZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yr6DkcAYBzqVi/giphy.gif',
    },
    production: parseBoolean(process.env.PRODUCTION) || true,
    lavalink: [
        {
            url: process.env.LAVALINK_URL,
            auth: process.env.LAVALINK_AUTH,
            name: process.env.LAVALINK_NAME,
            secure: parseBoolean(process.env.LAVALINK_SECURE) || false,
        },
    ],
};
function parseBoolean(value) {
    if (typeof value === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case 'true':
            return true;
        default:
            return false;
    }
}
/**
 * Project: WaveMusic
 * Author: Blacky
 * Company: Coders
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/ns8CTk9J3e
 */
//# sourceMappingURL=config.js.map
