const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/mishumd622-cloud/mishu-md-v1/blob/main/images/IMG-20260721-WA0054.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*(𝓗ᴇʟʟᴏᴡ) ᴍɪꜱʜᴜ-ᴍᴅ ɪꜱ ᴀʟɪᴠᴇ ɴᴏᴡ 🙇🏻‍♂️💨"*",
BOT_OWNER: '94724567955',  // Replace with the owner's phone number



};
