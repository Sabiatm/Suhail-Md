const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348133798592";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_28_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTczLFxuICAgICAgICAzLFxuICAgICAgICA1MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDYzLFxuICAgICAgICA1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMSxcbiAgICAgICAgNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE3LFxuICAgICAgICA5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDksXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhFbk1TVjRCaVQ5RFB2YWxTMnFMYXI5cHdkWG94Z3RkUE5GQnpmRnRkNWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEzMzc5ODU5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUI2NkRENjFEMEE1REFDNDdDMUE3QUM1QzFEREEwODJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDU3MzM4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkg1azQydl82UlJ5bXFsZkJ4dXlHRkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDRiZDAxYWYtMjE2ZC00NjY3LTliMDItNWQyMjdmYTk0ZTA4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICA5NSxcbiAgICAgIDE5MyxcbiAgICAgIDE3LFxuICAgICAgNTEsXG4gICAgICAxMTcsXG4gICAgICAxODgsXG4gICAgICAxNTAsXG4gICAgICA5MyxcbiAgICAgIDEzOSxcbiAgICAgIDE0MSxcbiAgICAgIDg2LFxuICAgICAgMTQyLFxuICAgICAgMTQ0LFxuICAgICAgMTA2LFxuICAgICAgMjE0LFxuICAgICAgNTksXG4gICAgICA0NCxcbiAgICAgIDk2LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDMxLFxuICAgICAgMjIsXG4gICAgICA4MCxcbiAgICAgIDIxMixcbiAgICAgIDIwOSxcbiAgICAgIDIzNixcbiAgICAgIDEzOSxcbiAgICAgIDE2NixcbiAgICAgIDUxLFxuICAgICAgMTYwLFxuICAgICAgMjMzLFxuICAgICAgMzksXG4gICAgICA2NixcbiAgICAgIDE1NCxcbiAgICAgIDIyMSxcbiAgICAgIDE3MCxcbiAgICAgIDIzMSxcbiAgICAgIDIwMCxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCNFlGNjlBTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzMzc5ODU5Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSGFtYXR1bGxhaCBDb25jZXB0XCIsXG4gICAgXCJsaWRcIjogXCIxNzEzNzgxMzc0MTU3NjI6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNONm1sTjhCRUxDQTFiUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRPdHBmd2RMV0NuaitTWTkzd1lIM3h0UTVBeWpyVU1JTS9HOHJsbFp5WFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSjhmUStQK1lFbXoyQVA3R2RZQm81YXEyTzI3WERFZUlITE1jOVJWKzgxVEQ5eVEvRE4xM3dSOGFCVDh6eXg1RTZVK2hrWmtqVEV4ZWpRSWhBUm12QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU0grbFpnb0xRa0prMHl0YnUwbSt2L0VZVlEvRm52ck9xbmVOYW9zSkdLckJrT2FYVUwzTDJWM0pGZWI0ODVZUUdHaFJRWlZzYjVPVTJDZEgvYjN5Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzMzc5ODU5Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDU3MzMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTng4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOeDguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYTnBwOXp2MWxoT1hUN0pPelU0TEQxTmtMUlRxVkk1dHlrT2YwTm9TUktvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2Nzk5NzUzNCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE1MDk2NzM1MjI1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
