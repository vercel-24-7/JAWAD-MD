
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

//add your session id

global.session = "IK~H4sIAAAAAAAAA5VU25KiSBD9l3rVGEBAwIiOWERuLSKK9419KKGAUm4WhYIT/vsGdvf0xF5me9/qknHynMyT+R3kBa7QFLVg9B2UBF8hRd2RtiUCIzCuowgR0AchpBCMwNTbTzl/b+Qu2S9mDDUb3l6UTDE0GXFc+VPKtI6Rcc0ti1/Aow/K+pji4BeA6g0K2FRup0S455frMVwtsNNb34VC5nktW5etPdDYujndbi/g0SFCTHAe62WCMkRgOkWtBzH5Gn08s4qdb4SqwRW3hhsbOnGKeCJPX6Fo8rJr+XFjaa4S8uev0U8HUaFxqbwdOksNz52dtsGWPF8wm8HCMYI8muydm5Z4mfZOv8JxjkI7RDnFtP1y3VUvMPTaKRtpcxCqvdGsRY+c9GsTRz33lnI5m/Q0tzAZ/YvEHfHob7ShoOb0VrHbzWTmsuLSzxqdy7EMfXpa5pditybt+WfiHvnwyvl/1d2UB0nPRINyonu4cSY73aQTJdbS9ZxxaXVl1oVNo7u2vX2NvsvZBlZOF2md4uhiMbXyapr6VZROjqWS0CZWswpCz3Jb9ZM+pDX5FcvePZzc2LtBNS8YXqtYl3rWwt2lVq4fpCRbqMGdb1exHFpVS6o5LYyxXnurzXbJKiyyJhLDCwxe5mNXR6oFhXFztJPFy1PRGbV2CEbcow8IinFFCaS4yLs3he0DGF59FBBEn9UFBGbeYs5yvHatz0edMfXJcusMmNspmh/G5sn0856vzCpXXbyAPihJEaCqQqGFK1qQdoaqCsaoAqPfn43qNBOUFRS94hCMgCJIAitKHD8c/lZ9uyWQVrAsv+WIgj6ISJHNEBhRUqM+eMarGisMDGnMKwI3GciGKEqKPFRY0ZBElhOETmD2lnOFM1RRmJVgxElDTpAUXhYef/RBjhr65p5OM8/1QYRJRdd5XaYFDD+s9fEJg6Coc+q3eaB1B0TAiP18RpTiPK46YXUOSZDgK9I6HWAUwbRCP8qMCAo/tLyvDq0Iu+7PLM8UppM96Lh3QH8tzYhj/16d9Bk1ELkhLwx4Th4Ioix1kd3H4wfBDi9EFOK0AiOgudFBugRj3Z1verPANNUiVrVYBZ+CPuz51v9WOl9Kzg5zhkzzFXPnkPU6lqP5XXwND/J9lQ+0jRku3dpQX/4BBIzAVsXBZtc0F8H1daGGw1SlplmwxoWfnV5nQYg8qsfzg78fclZzTrThzjlcmyw+7RgLH0qb4jSQVr1mDC/MdrW06tbV1JcuW4iuOEA/J9PCWe+1VYTalYYlF9xijtUOyboY82vNjQjMNhsv85vVVZjz8UmIXWnfJPuQ9Tz2uBMRZe9Hu0f9bO1Av+pRw3G23El9G5zn4KbvCxO/exo/rxFGz/2Tw66B/9m6N96dwdhH/yeI94X2L0thHNTi9BL61oEZtiXLyMouaReRda96/m4bzVhRidNlvl4dkwV4dE4vU0ijgmRgBGAekgKHoA9IUXeOtfOo+EUyTbVt7V14Ciuqfk7BPw0W9xblkaK0YJV0xtxI0mXdWbpVy9KnkH4MFVBVXVXtrAGPPwEdw/5+9QcAAA=="; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "true", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed By JAWAD MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "JawadTech", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "🩵", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "true", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "null, pm, dm, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "JAWAD-MD", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/pf270b.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "i am jawad md",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
//KHAN MD; 🔥💸💀
