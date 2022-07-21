const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'V12',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
global.autobio = true 

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "✈︎ ʏᴀɴɴ ᴍᴅ" //namabot kalian
global.ownername= "ʏᴀɴɴ ᴊᴇʙᴇʜ" //nama kalian
global.myweb ="https://chat.whatsapp.com/B9cQxA0NWrXHtFclMS5awJ" //bebas asal jan hapus
global.youtube = "https://yann-md-official.blogspot.com/?m=1" //bebas asal jan hapus
global.github = "https://zeeone-ofc.github.io/" //bebas
global.email = "ryanndevelopment@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium = ['6282252285143'] //premium user
global.owner = ["6282252285143","6282252285143"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "6282252285143" // nomor wa kalian
global.ownernomerr = "+6282252285143" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/10173537315d072e383d2.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.packname = '© Yann Mdོ' //sticker wm ubah
global.author = '© WhatsApp Bot' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'

global.limitawal = {
    premium: "Infinity",
    free: 100
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '*Done ✓*',
    admin: '*Perintah Ini Hanya Bisa Digunakan Oleh Admin !*',
    botAdmin: '_Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !_',
    owner: '_*Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '*Perintah Ini Hanya Bisa Digunakan Di Group !*',
    private: '*Perintah Ini Hanya Bisa Digunakan Di Private !*',
	bot: '_Fitur Khusus Pengguna Nomor Bot_',
    errtoimg: '_Maaf Saat Ini Belum Support Sticker Gif !_',
    wait: '*Sedang Di Proses*',
	lockCmd: '*Fitur Tidak Diaktifkan Oleh Owner!*',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
