const spotionperpotion = 7
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^barter/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].spotion / spotionperpotion) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.DATABASE._data.users[m.sender].spotion >= spotionperpotion * count) {
    global.DATABASE._data.users[m.sender].spotion -= spotionperpotion * count
    global.DATABASE._data.users[m.sender].potion += count
    conn.reply(m.chat, `${spotionperpotion * count} Small Potion ditukar dengan ${count} Potion`, m)
  } else conn.reply(m.chat, `Small Potion tidak cukup untuk barter dengan ${count} potion`, m)
}
handler.command = /^barter|barterall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
