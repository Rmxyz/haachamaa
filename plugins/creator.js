let handler = function (m) {
  //ini hanyalah contoh, jangan di uncomment_-
  //Example this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '6289638023602', 'Rmxyz', m)
}

handler.command = /^(owner|creator)$/i
handler.group = false
handler.register = false

module.exports = handler
