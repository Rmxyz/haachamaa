let handler = async (m) => {
  
let teks = `
┏━━ *「 DONASI 」*
┣ ┅ ━━━━━━━━━━ 
┃ ❖ Pulsa [089638023602]
┃ ❖ Pulsa [081291282733]
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
Terimakasih sudah berdonasi 😁
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Donasi dan Pembayaran', 'status@broadcast')
  }
handler.command = /^dona(te|si)$/i
handler.register = false

module.exports = handler
