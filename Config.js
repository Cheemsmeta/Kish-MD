const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['233558201210']
global.ownername = "ØG LŌÇ🤟💙"//owner name
global.ytname = "YT: KishBotz.inc"
global.socialm = "GitHub: Kish-MD"
global.location = "Kenya"

global.botname = 'KISH-MD' //name of the bot

//sticker details
global.stickername = 'ØG LŌÇ🤟💙'
global.packname = 'Sticker By'
global.author = 'ØG LŌÇ🤟💙'
//console view/theme
global.themeemoji = '𓅃'
global.wm = "Kish botz inc."

//theme link
//global.link = 'https://chat.whatsapp.com/LhBwWwQAS4y93XOsCKpxdv'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = false //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Kish Bot 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/Brashokish/Kish-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
