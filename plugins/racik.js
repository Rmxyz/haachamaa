let { MessageType } = require('@adiwajshing/baileys')
//FaQ FaQ FaQ
let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let rck = (args[0] || '').toLowerCase()
    let bruh = `Silahkan pilih tanaman herbal yang ingin di racik

sprtgrass 
mdgrleaf
hpktplant

contoh:
*${usedPrefix + command } sprtgrass 1*

*Note*
~ Spirit Grass = sprtgrass
~ Mandragora Leaf = mdgrleaf
~ Hipokute Plant = hpktplant
`

try {
       if (/racik/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'sprtgrass':
            if (global.DATABASE._data.users[m.sender].sprtgrass >= count * 1) {
                           global.DATABASE._data.users[m.sender].sprtgrass >= count * 1
                            global.DATABASE._data.users[m.sender].sprtgrass -= count * 1
                            global.DATABASE._data.users[m.sender].spotion += count * 1
                            conn.reply(m.chat, `${count} Spirit Grass diracik menjadi ${count} Small Potion`, m)
                       } else conn.reply(m.chat, `Tanaman herbal kamu tidak cukup`, m)
break

                  case 'mdgrleaf':
            if (global.DATABASE._data.users[m.sender].mdgrleaf >= count * 1) {
                            global.DATABASE._data.users[m.sender].mdgrleaf >= count * 1
                            global.DATABASE._data.users[m.sender].mdgrleaf -= count * 1
                            global.DATABASE._data.users[m.sender].spotion += count * 1
                            conn.reply(m.chat, `${count} Mandragora Leaf diracik menjadi ${count} Small Potion`, m)
                       } else conn.reply(m.chat, `Tanaman herbal kamu tidak cukup`, m)
break
                   case 'hpktplant':
            if (global.DATABASE._data.users[m.sender].hpktplant >= count * 1) {
                           global.DATABASE._data.users[m.sender].hpktplant >= count * 1
                            global.DATABASE._data.users[m.sender].hpktplant -= count * 1
                            global.DATABASE._data.users[m.sender].spotion += count * 1
                            conn.reply(m.chat, `${count} Hipokute Plant diracik menjadi ${count} Small Potion`, m)
                       } else m.reply('Tanaman herbal kamu tidak cukup')
            break
        default:
            return conn.reply(m.chat, bruh, m)
    }
  }} catch (e) {
      console.log(e)
      conn.reply(m.chat, `*${usedPrefix + command }sprtgrass 1*`, m)
      if (DevMode) {
        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
            conn.sendMessage(jid, 'racik.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
        }
    }
  }
}


handler.register = true
handler.command = /^(racik|meracik)$/i
module.exports = handler
