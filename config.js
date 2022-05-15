/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['923087880256']
global.packname = 'Ari'
global.author = 'Ani'
global.sessionName = 'aku'
global.prefa = ['', '.', '=']
global.sp = '⭔'
global.mess = {
    success: 'Here You Go Success',
    admin: '*Oops!! sorry dude this is only for admins*',
    botAdmin: 'To use this command made me admin first, Baaaaaka!',
    owner: 'Sorry only Aku and some others can use this commands',
    group: 'leave me here alone please...!',
    private: 'Feature Used Only For Private Chat!',

}

global.thumb = fs.readFileSync('./AkuMedia/info.jpeg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
