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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Lusaka";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "4L Draco❤️🔥" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260961230264";




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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_22_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDczLFxuICAgICAgICAxODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA4NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDU0LFxuICAgICAgICA2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc2LFxuICAgICAgICAzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDkxLFxuICAgICAgICA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDUyLFxuICAgICAgICA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc4LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNCxcbiAgICAgICAgMTExLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NixcbiAgICAgICAgMjIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTExLFxuICAgICAgICA2MixcbiAgICAgICAgOTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk4LFxuICAgICAgICA0OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc1LFxuICAgICAgICA4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5PSjY1TWNhb0NRMDR1NFRkc1NoaDRYais5RjBUV1VFWFdpMVUvRklUMW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlN2TVRuRWJsVEVPMGZmQWJFVkxNQndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDgwZGMxZDEtZDc5Zi00NzljLTk3Y2UtZTQyMjI4MDNlMTJjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDI0LFxuICAgICAgNzAsXG4gICAgICAxMjQsXG4gICAgICAxMjEsXG4gICAgICAxLFxuICAgICAgMjM2LFxuICAgICAgMTg0LFxuICAgICAgMTc2LFxuICAgICAgMTIzLFxuICAgICAgNjIsXG4gICAgICAxNzgsXG4gICAgICAxNzksXG4gICAgICAyMzEsXG4gICAgICAyMzQsXG4gICAgICA2NCxcbiAgICAgIDEwMCxcbiAgICAgIDk1LFxuICAgICAgMjI0LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDUzLFxuICAgICAgOCxcbiAgICAgIDE3MSxcbiAgICAgIDI0MSxcbiAgICAgIDEyMixcbiAgICAgIDI0MSxcbiAgICAgIDEwOCxcbiAgICAgIDEwMyxcbiAgICAgIDEwLFxuICAgICAgMTI3LFxuICAgICAgMTIzLFxuICAgICAgODEsXG4gICAgICAxMDMsXG4gICAgICA3MCxcbiAgICAgIDE2MSxcbiAgICAgIDE0MixcbiAgICAgIDE2NyxcbiAgICAgIDE2NyxcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdGWTFUUjgyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjA5NjEyMzAyNjQ6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNDIyNzk4NjQxOTkwNjoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJREhvQllRdVkyUHRBWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVwNkx3M056WFVtdjJlQ2E3MXB6eXFZNG4wNVdCekxXM1pHelVhRFpRQ1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidlZjUnRicGNQQmJQblBOQkQ5endrVTBGcEhkdDlnOFpwVzVYakxLeHozOEdCRTNicmFHWWhKb1BsZkx6ekFNeUtuWWJscXdhZ2c1eEllWGNseHFVQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQnVmOHMzZ0ZFVnBIemJqVTdLTTlqNkVhMjlKWi9iYXFsUFExZmpMZzY5N29WNDhpYUxNUmdMbnZMRTBIaHhJT2lMSkhqbU1BYjdZcDIvZnFjdDV5Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYwOTYxMjMwMjY0OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5MTIxMjUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMdERcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx0RC5qc29uIjogIntcImtleURhdGFcIjpcIkQ2MkdjZm9Ndzl3aHFIVTZNeWIyUytRVTBEeWI3REI3dTJRcWxQWk9wK009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDY2NzA3MTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTgyNTAxMTAyMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // 4L Draco 🔥❤️", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "We straight ❤️🔥",
  ownername:process.env.OWNER_NAME|| "Khalil-4L 🔥❤️",


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
