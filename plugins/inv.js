let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
    let healt = global.DATABASE._data.users[m.sender].healt
    let warn = global.DATABASE._data.users[m.sender].warn
    let pet = global.DATABASE._data.users[m.sender].pet
    let kucing = global.DATABASE._data.users[m.sender].kucing
    let _kucing = global.DATABASE._data.users[m.sender].anakkucing
    let rubah = global.DATABASE._data.users[m.sender].rubah
    let _rubah = global.DATABASE._data.users[m.sender].anakrubah
    let kuda = global.DATABASE._data.users[m.sender].kuda
    let _kuda = global.DATABASE._data.users[m.sender].anakkuda
    let anjing = global.DATABASE._data.users[m.sender].anjing
    let _anjing = global.DATABASE._data.users[m.sender].anakanjing
    let diamond = global.DATABASE._data.users[m.sender].diamond
    let potion = global.DATABASE._data.users[m.sender].potion
    let common = global.DATABASE._data.users[m.sender].common
    let makananpet = global.DATABASE._data.users[m.sender].makananpet
    let uncommon = global.DATABASE._data.users[m.sender].uncommon
    let mythic = global.DATABASE._data.users[m.sender].mythic
    let legendary = global.DATABASE._data.users[m.sender].legendary
    let slime = global.DATABASE._data.users[m.sender].slime
    let goblin = global.DATABASE._data.users[m.sender].goblin
    let skeleton = global.DATABASE._data.users[m.sender].skeleton
    let wolf = global.DATABASE._data.users[m.sender].wolf
    let kayu = global.DATABASE._data.users[m.sender].kayu
    let sprtgrass = global.DATABASE._data.users[m.sender].sprtgrass
    let mdgrleaf = global.DATABASE._data.users[m.sender].mdgrleaf
    let hpktplant = global.DATABASE._data.users[m.sender].hpktplant
    let spotion = global.DATABASE._data.users[m.sender].spotion
    let level = global.DATABASE._data.users[m.sender].level
    let role = global.DATABASE._data.users[m.sender].role
    let koin = global.DATABASE._data.users[m.sender].koin
    let exp = global.DATABASE._data.users[m.sender].exp
    let uang = global.DATABASE._data.users[m.sender].uang
    let sampah = global.DATABASE._data.users[m.sender].sampah
    let { max } = levelling.xpRange(level, exp, global.multiplier)
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let sortedkoin = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].koin - a[1].koin)
    let sorteduang = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].uang - a[1].uang)
    let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let userskoin = sortedkoin.map(v => v[0])
    let usersuang = sorteduang.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let str = `
Inventory *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*\n
Health: *${healt}*
Koin: *${koin}*
Uang: *${uang}*
Level: *${level}*
Exp: *${exp}*\n
*「 Inventori 」*
Diamond: *${diamond}*
Potion: *${potion}*
Makanan Pet: *${makananpet}*
Kayu Bakar: *${kayu}*
Sampah: *${sampah}*

Total item: *${diamond + potion + makananpet + kayu + sampah}* item\n
*「 Monster Buruan 」*
Slime: *${slime}*
Goblin: *${goblin}*
White Skeleton: *${skeleton}*
Dark StarWolf: *${wolf}*

Total monster: *${slime + goblin + skeleton + wolf}* monster\n
*「 Crate 」*
Common: *${common}*
Uncommon: *${uncommon}*
Mythic: *${mythic}*
Legendary: *${legendary}*
Pet: *${pet}*

Total crate: *${common + uncommon + mythic + legendary}* crate\n
*Pet*
Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*
Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*
Anjing: *${anjing == 0 ? 'Tidak Punya' : '' || anjing == 1 ? 'Level 1' : '' || anjing == 2 ? 'Level 2' : '' || anjing == 3 ? 'Level 3' : '' || anjing == 4 ? 'Level 4' : '' || anjing == 5 ? 'Level MAX' : ''}*\n\n
*Progres*\n
╭────────────────
│Level *${level}*
│Exp *${exp}*
│Rank *${role}*
╰────────────────
╭────────────────
│Rubah ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 9 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kucing ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 9 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Anjing ${anjing == 0 ? 'Tidak Punya' : '' || anjing > 0 && anjing < 5 ? `Level *${anjing}* To level *${anjing + 1}*\n│Exp *${_anjing}* -> *${anjing *100}*` : '' || anjing == 9 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kuda ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 9 ? '*Max Level*' : ''}
╰────────────────\n\n
*Achievement*
1.Top Level *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
2.Top Koin *${userskoin.indexOf(m.sender) + 1}* dari *${userskoin.length}*
3.Top Uang *${usersuang.indexOf(m.sender) + 1}* dari *${usersuang.length}*
4.Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
5.Top Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
6.Top Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
7.Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
8.Top Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
9.Top Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
10.Top Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
\n${readMore}\n
Warn: *${warn}*
Banned: *No*
`.trim()
    conn.reply(m.chat, str, m)
}
handler.command = /^(inv(entory)?|perlengkapan)$/i
module.exports = handler
handler.register = true

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
