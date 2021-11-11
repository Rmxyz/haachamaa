global.owner = ['6289638023602'] // Put your number here
global.mods = [] // Want some help?
global.prems = ['6289638023602'] // Premium user has unlimited limit
global.wait = "[❗] ```Wait a minute...```"
global.APIs = { // API Prefix
  // name: 'https://website'
  hardianto: 'https://hardianto.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://hardianto.xyz': 'hardianto',
  'https://api.xteam.xyz': 'Apikeymu',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.zeks.xyz': 'apikeymu',
  'http://zekais-api.herokuapp.com': 'apikeymu',
}

// Sticker WM
global.packname = 'Bot'
global.author = 'Rmxyz'

global.multiplier = 89 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
