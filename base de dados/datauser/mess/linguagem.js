const fs = require('fs');
emoji_bot = "♨️💫"

const infos = JSON.parse(fs.readFileSync('./configure aqui.js'))
var {p, SeuNome, OwnerNumber, NomeDoBot} = infos

exports.wait = () => {
return`⏳Aguarde alguns instantes...⏳\n\nCaso não funcione, use o comando novamente.`
}

exports.registroB = () => {
return`
╭━━━━━━─ • ─━━━━━─
│*「️𝙲𝚘𝚖𝚊𝚗𝚍𝚘 𝙽𝚎𝚐𝚊𝚍𝚘」*
╰┯━━━━━─ • ─━━━━━─
╭┤𝖯𝖺𝗋𝖺 𝖿𝖺𝗓𝖾𝗋 𝖫𝗈𝗀𝗂𝗇:
││𝖴𝗌𝖾: 𝖫𝗈𝗀𝗂𝗇
│╰━━━━━─ • ─━━━━━─
╰━━━━━━─ • ─━━━━━─`
}

exports.menu2 = (pushname, hr, totalchat, bateria, ll) => {
return `
Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
┌┤${ll}▢ Prefix:『${p}』${ll}
┃│${ll}▢ Hora: ${hr}${ll}
┃│${ll}▢ Total chat: ${totalchat.length}${ll}
┃│${ll}▢ Bateria: ${bateria}${ll}
┃│${ll}▢ ${p}Report『Erros?』${ll}
┃╰━━━━── • ──━━━━
└╦═════════════⊷
┌┤👮🏻‍♂️⃟ きᴀᴅᴍɪɴ ᴇᴛᴄき⃟👮🏻‍♂️ 
┃╞═════════════⊷
┃│⚠︎ Tudo com : *@tag/alvo!*
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Banir『@Tag』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Add『Numero』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Promover『@Tag』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Rebaixar『@Tag』${ll}
┃╰━━━━── • ──━━━━
└╦═════════════⊷
┌┤👮🏻‍♂️⃟ きᴀᴅᴍɪɴ ᴇᴛᴄき⃟👮🏻‍♂️ 
┃╞═════════════⊷
┃│⚠︎ Marque a *<mensagem/>*
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Kick『Mensagem』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Demote『Numero』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Reviver『Mensagem』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Promote『Mensagem』${ll}
┃╰━━━━── • ──━━━━
└╦═════════════⊷
┌┤👤️⃟ きɴᴏᴍᴇ/ᴅᴇsᴄき⃟👤
┃╞═════════════⊷
┃│⚠︎ Tudo com : *<texto/foto>*
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Setppgc『Foto』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Hidetag『Texto』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Setdesk『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Setnome『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Del『Msg do bot』${ll}
┃╰━━━━── • ──━━━━
└╦═════════════⊷
┌┤👮🏻‍♂️⃟ きᴀᴛɪᴠᴀᴄ̧ᴀ̃ᴏ ᴀɴᴛɪsき⃟👮🏻‍♂️ 
┃╞═════════════⊷
┃│⚠︎ Tudo com : *<on/off>*
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Antilink『On/Off』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Antifake『On/Off』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Leveling『On/Off』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Welcome 『On/Off』${ll}
┃╰━━━━── • ──━━━━
└╦═════════════⊷
┌┤👮🏻‍♂️⃟ きᴀᴅᴍɪɴ ɢᴇʀᴀʟ ᴇᴛᴄき⃟👮🏻‍♂️ 
┃╞━━━━── • ──━━━━
┃│ ⋟ ${ll}${p}Listadmin${ll}
┃│⚠︎ Lista de administradores.
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Totag『Img/Gif』 ${ll}
┃│⚠︎ Mencione todos.
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Link『Pv/Grupo』${ll}
┃│⚠︎ Link do grupo onde está
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Info『Grupo/Perfil』${ll}
┃│⚠︎ Informações Grupo/Perfil
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Grup『Abrir/Fechar』${ll}
┃│⚠︎ Abrir/Fechar Grupo.
┃╰━━━━── • ──━━━━
└══════════════⊷`
}

exports.figurinhas = (pushname, hr, total_gp2, bateria, ll) => {
return `
Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
┌┤${ll}▢ Prefix:『${p}』${ll}
┃│${ll}▢ Hora: ${hr}${ll}
┃│${ll}▢ Total chat: ${total_gp2}${ll}
┃│${ll}▢ Bateria: ${bateria}${ll}
┃│${ll}▢ ${p}Report『Erros?』${ll}
┃╰━━━━── • ──━━━━
└╦═════════════⊷
┌┤き⃟🎯ғᴏᴛᴏ/sᴛɪᴄᴋᴇʀ🎯⃟ き
┃╞═════════════⊷
┃│⚠︎ Tudo com : *<gif/foto>*
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}F 『Foto/Gif』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}St 『Foto/Gif』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Stk『Foto/Gif』${ll}
┃╰━━━━── • ──━━━━
└╦══════════════⊷
┌┤き⃟🎯sᴛɪᴄᴋᴇʀ/ᴀɴɪᴍᴀᴅᴏ🎯⃟ き
┃╞═════════════⊷
┃│⚠︎ Faça figurinhas animadas
┃│⚠︎ Tudo com : *<texto/>*
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Attp『Texto』${ll}
┃╰━━━━── • ──━━━━
└╦══════════════⊷
┌┤き⃟📁 ᴄᴏɴᴠᴇʀᴛᴇʀ 📁⃟ き
┃╞═════════════⊷
┃│⚠︎ Converta sticker Img/Vid.
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Togif『Sticker』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Toimg『Sticker』${ll}
┃╰━━━━── • ──━━━━
└╦══════════════⊷
┌┤き⃟📁sᴛɪᴄᴋᴇʀ/ғᴏᴛᴏs📁⃟ き
┃╞═════════════⊷
┃│⚠︎ Edite fotos em sticker...
┃│⚠︎ Tudo com : *</foto>*
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Figupet『Foto』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Figuger『Foto』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Figulgbt『Foto』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Figuarma『Foto』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Figuinvert『Foto』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Figupreso『Foto』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Figuwasted『Sticker』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Figuborrada『Sticker』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Figuprocurado『Sticker』${ll}
┃╰━━━━── • ──━━━━
└══════════════⊷`
}

exports.playrs = (pushname, hr, total_gp4, bateria, ll) => {
return `
Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
┌┤${ll}▢ Prefix:『${p}』${ll}
┃│${ll}▢ Hora: ${hr}${ll}
┃│${ll}▢ Total chat: ${total_gp4}${ll}
┃│${ll}▢ Bateria: ${bateria}${ll}
┃│${ll}▢ ${p}Report『Erros?』${ll}
┃╰═════════════⊷
└╦══════════════⊷
┌┤き⃟🎵ᴅᴏᴡɴ ᴀᴜᴅɪᴏs🎵⃟ き
┃╞═════════════⊷
┃│⚠︎ Baixe músicas com play
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Play『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Play1『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Play2『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Play3『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Play4『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Play5『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Play6『Nome』${ll}
┃╰━━━━── • ──━━━━
└╦═════════════⊷
┌┤き⃟🎬ᴇᴅɪᴄ̧ᴀ̃ᴏ ᴠɪᴅᴇᴏ🎬⃟ き
┃╞═════════════⊷
┃│⚠︎ Baixe videos com playvid...
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Playvid『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Playvid1『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Playvid2『Nome』${ll}
┃╰━━━━── • ──━━━━
└╦═════════════⊷
┌┤き⃟🎵ᴇᴅɪᴄ̧ᴀ̃ᴏ ᴀᴜᴅɪᴏ🎵⃟ き
┃╞═════════════⊷
┃│⚠︎ Marque o : *<audio/>*${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Baixo『Audio』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Rapid『Audio』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Tomp3『Video』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Rapido『Audio』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Esquilo『Audio』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Gigante『Audio』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Devagar『Audio』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Sombrio『Video』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Estourar『Audio』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Ytsearch『Nome』${ll}
┃╰━━━━── • ──━━━━
└═══════════════⊷`
}

exports.jogos = (pushname, hr, total_gp4, bateria) => {
return `
Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
┌┤${ll}▢ Prefix:『${p}』${ll}
┃│${ll}▢ Hora: ${hr}${ll}
┃│${ll}▢ Total chat: ${total_gp4}${ll}
┃│${ll}▢ Bateria: ${bateria}${ll}
┃│${ll}▢ ${p}Report『Erros?』${ll}
┃╰═════════════⊷
└╦══════════════⊷
┌┤ き⃟🕹️ᴊᴏɢᴏs/ʀᴀɴᴋs🕹️⃟ き
┃╞═════════════⊷
┃│⚠︎ Jogos/Ranks/Membros
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Sn『Pergunta』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Ttt『Dificuldade』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Getn『Mensagem』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Getname『@Tag』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Amongus『@Tag』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Ppt『Pedra/Papel』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Gay${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Pau${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Slot${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Feio${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Lixo${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Gado${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Dado${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Level${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Burro${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Gordo${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Pobre${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Roleta${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Corno${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Bonito${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Tagme${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Cassino${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Macaco${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Gostoso${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Ranklevel${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Caracoroa${ll}
┃╰━━━━── • ──━━━━
└══════════════⊷`
}

exports.animes = (pushname, hr, total_gp6, bateria) => {
return `
 Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
┌┤${ll}▢ Prefix:『${p}』${ll}
┃│${ll}▢ Hora: ${hr}${ll}
┃│${ll}▢ Total chat: ${total_gp6}${ll}
┃│${ll}▢ Bateria: ${total_gp6}${ll}
┃│${ll}▢ ${p}Report『Erros?』${ll}
┃╰═════════════⊷
└╦═════════════⊷
┌┤き⃟🔞ᴀɴɪᴍᴇ/ʜᴇɴᴛᴀɪ🔞⃟ き
┃╞═════════════⊷
┃│⚠︎ Animes e Hentais.
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Ero${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Les${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Solo${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Holo${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Feet${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Anal${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Eron${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Trap${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Erok${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Cum${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Feed${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Neko${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Lewd${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Solog${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Feetg${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Spank${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Lewdk${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Boobs${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Hentai${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Eroyuri${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Classic${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Erofeet${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Hentain${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Kitsune${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Holoero${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Blowjob${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Pwankg${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Futanari${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Femdom${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Erokemo${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Trapnime${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Hololewd${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Lewdkemo${ll}
┃╰━━━━── • ──━━━━
└╦═════════════⊷
┌┤き⃟🍙ᴀɴɪᴍᴇ/ʜᴇɴᴛᴀɪ🍙⃟ き
┃╞═════════════⊷
┃│⚠︎ Ramdom animes/botão
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Loli${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Bully${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Waifu${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Megumin${ll}
┃╰━━━━── • ──━━━━
└╦═════════════⊷
┌┤き⃟🍙ᴀɴɪᴍᴇ/ʜᴇɴᴛᴀɪ🍙⃟ き
┃╞═════════════⊷
┃│⚠︎ Animes e Hentais.
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Ace${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Luffy${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Zoro${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Nami${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Obito${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Buggy${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Carrot${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Asuma${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Shanks${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Sakura${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Hinata${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Shikaku${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Madara${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Sasuke${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Ahegao${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Shikadai${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Shikamaru${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Pinterest『Texto』${ll}
┃╰━━━━── • ──━━━━
└══════════════⊷`
}

exports.dono = (pushname, hr, total_gp7, bateria, ll) => {
return `
 Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
┌┤${ll}▢ Prefix:『${p}』${ll}
┃│${ll}▢ Hora: ${hr}${ll}
┃│${ll}▢ Total chat: ${total_gp7}${ll}
┃│${ll}▢ Bateria: ${bateria}${ll}
┃│${ll}▢ ${p}Report『Erros?』${ll}
┃╰═════════════⊷
└╦═════════════⊷
┌┤👮🏻‍♂️⃟ きᴅᴏɴᴏ/ᴀᴅᴍき⃟👮🏻‍♂️ 
┃╞═════════════⊷
┃│ ⋟ ${ll}${p}Bc『Texto』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Bcb『Texto』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Ban『@Tag』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Clone『@Tag』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Unban『@Tag』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Q 『Mensagem』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Bcstik『Sticker』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Tagimg『Sticker』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Setprefix『Prefix』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Addprem『@Tag』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Dellprem『@Tag』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Tagstick『Sticker』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Delpalavra『Palavra』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Addpalavra『Palavra』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Antipalavras『On/Off』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Setname『Nome do bot』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Ping${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Mystat${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Delchat${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Bateria${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Clearall${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Desligar${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Reiniciar${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Visuchat${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Listname${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Bloqueados${ll}
┃╰━━━━── • ──━━━━
└══════════════⊷`
}

exports.premium = (pushname, hr, totalchat, bateria, ll) => {
return `
 Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
┌┤${ll}▢ Prefix:『${p}』${ll}
┃│${ll}▢ Hora: ${hr}${ll}
┃│${ll}▢ Total chat: ${totalchat}${ll}
┃│${ll}▢ Bateria: ${bateria}${ll}
┃│${ll}▢ ${p}Report『Erros?』${ll}
┃╰═════════════⊷
└╦═════════════⊷
┌┤ き⃟🤹🏻‍♂️ᴘʀᴇᴍɪᴜᴍ🤹🏻‍♂️⃟ き
┃╞═════════════⊷
┃│ ⋟ ${ll}${p}Sticknime${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Covidmundo${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Ddd『DDD』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Letra『Musica』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Anime『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Github『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Celular『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Covidst『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Rename『Sticker』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Mediafire『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Wikipedia『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Buscaimg『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Glosearch『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Playstore1『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Happymod『Nome』${ll}
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Storesearch『Nome』${ll}
┃╰━━━━── • ──━━━━
└══════════════⊷`
}

exports.bankloja = (pushname, hr, totalchat, bateria, ll) => {
return `
 Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
┌┤${ll}▢ Prefix:『${p}』${ll}
┃│${ll}▢ Hora: ${hr}${ll}
┃│${ll}▢ Total chat: ${totalchat}${ll}
┃│${ll}▢ Bateria: ${bateria}${ll}
┃│${ll}▢ ${p}Report『Erros?』${ll}
┃╰═════════════⊷
└╦═════════════⊷
╭┤き⃟💰ᴍᴇɴᴜ/ᴄᴀsʜ💰⃟ き
┃╞═════════════⊷
┃│⚠︎ Veja seu </dinheiro>
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Dinheiro${ll}
┃╰━━━─── • ──━━━━
┃╭ ⋟ ${ll}${p}Rankmoney${ll}
┃╰━━━─── • ──━━━━
┃╭ ⋟ ${ll}${p}Vermoney『@Tag』${ll}
┃╰━━━─── • ──━━━━
└╦═════════════⊷
╭┤き⃟💰ᴍᴇɴᴜ/ᴄᴀsʜ💰⃟ き
┃╞═════════════⊷
┃│⋟ ${ll}${p}Buypack${ll}
┃╰━━━─── • ──━━━━
┃╭ ⋟ ${p}Buyprem ${ll}
┃╰━━━─── • ──━━━━
┃╭ ⋟ ${ll}${p}Apostar 2500${ll}
┃╰━━━─── • ──━━━━
┃╭ ⋟ ${ll}${p}Transferir @/2500${ll}
┃╰━━━─── • ──━━━━
╰╦═════「★」═════⊷
╭┤き⃟💰ᴅᴏɴᴏ/ᴄᴀsʜ💰⃟ き
┃╞═════════════⊷
┃│⚠︎ Só meu dono pode doar...
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Darmoney @ 2500${ll}
┃╰━━━─── • ──━━━━
╰══════「★」═════⊷`
}

exports.info = (pushname, hr, totalchat, bateria, ll) => {
return `
 Salve ${pushname} Seu Lindo
┌═══════════════⊷
╰╮き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
┌┤${ll}▢ Prefix:『${p}』${ll}
┃│${ll}▢ Hora: ${hr}${ll}
┃│${ll}▢ Total chat: ${totalchat}${ll}
┃│${ll}▢ Bateria: ${bateria}${ll}
┃│${ll}▢ ${p}Report『Erros?』${ll}
┃╰═════════════⊷
└╦═════════════⊷
╭┤き⃟🤖ɪɴғᴏ ᴅᴏ ʙᴏᴛ🤖⃟ き
┃╞═════════════⊷
┃│⚠︎ Informações do bot...
┃╰━━━━── • ──━━━━
┃╭ ⋟ ${ll}${p}Infome${ll}
┃╰━━━─── • ──━━━━
┃╭ ⋟ ${ll}${p}Reportes${ll}
┃╰━━━─── • ──━━━━
┃╭ ⋟ ${ll}${p}Informes${ll}
┃╰━━━─── • ──━━━━
┃╭ ⋟ ${ll}${p}Solicitações${ll}
┃╰━━━─── • ──━━━━
┃╭ ⋟ ${ll}${p}Solicitar『Texto』${ll}
┃╰━━━─── • ──━━━━
┃╭ ⋟ ${ll}${p}Informe『Texto』${ll}
┃╰━━━─── • ──━━━━
╰══════「★」═════⊷`
}

exports.speed = (speedB, temporizado) => {
return `
*🏓_•*Respondi em: 0.00${speedB} Segundos*
*⏳_•Runtime: ${temporizado(uptime)}*

🚀 - *Speed ​​and time online*
`
}

exports.erroB = (comando, q) => {
return `[📍] Cᴏᴍᴀɴᴅᴏ : *${comando}*\n[❗] Mᴜsɪᴄᴀ : *${q}*\n[‼️] Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* \n*『Tᴇɴᴛᴇ ᴜsᴀʀ ᴏᴜᴛʀᴏ ᴘʟᴀʏ』*`
}

exports.bateria = (baterai, porcentagem) => {
return `
╭ ⋟ き⃟🔋ʙᴀᴛᴇʀɪᴀ🔋⃟ き
 • ʙᴀᴛᴇʀɪᴀ: ${baterai}%
 • ${porcentagem}
└━━━─「🔋」─━━━━`
}

exports.errorB = (comando) => {
return `
き⃟🏷️Cᴏᴍᴀɴᴅᴏ : *${comando}*
き⃟🏷 Sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ : *Erro!* 
*『Ƭ𝖾𝗇𝗍𝖾 Ʋ𝗌𝖺𝗋 Ɖ𝖾 ክ𝗈𝗏𝗈』*`  
}

exports.tterro = () => {
return `Você deve digitar ${p}ppt pedra, ${p}ppt papel ou ${p}ppt tesoura`
}

exports.ban = (NomeDoBot) => {
return`${emoji_bot} Você está banido do bot`
}

exports.ownerB = () => {
return`${emoji_bot} Comando só pode ser usado pelo meu dono`
}

exports.stick = () => {
return`${emoji_bot} Ocorreu um erro na criação de sticker`
}

exports.Lv = () => {
return`${emoji_bot} Link inválido`
}

exports.group = () => {
return`${emoji_bot} O comando só pode ser usado em grupos`
}

exports.admin = () => {
return`${emoji_bot} O comando só pode ser usado por administradores do grupo`
}

exports.Badmin = () => {
return`${emoji_bot} O comando só pode ser usado quando o bot é um administrador do grupo`
}

exports.AdmDoBot = () => {
return`${emoji_bot} Cadê o meu adm?? Só pode usar esse comando quando eu me torno administrador`
}

//limit
exports.cash_adquirir = (pushname, p) => {
	return`
*き⃟🐋Desculpe ${pushname} seu cash acabou ...*
*き⃟🐋Para conseguir mais cash compre ou passe de nível*

き⃟🐋 - Para comprar cash : *${p}buycash 10*
き⃟🐋 - caso tenha dúvida fale com meu criador ...
き⃟🐋+ ${SeuNome} - https://wa.me/${OwnerNumber}`
}

exports.limitend = (pushname) => {
        return`*Desculpe-me ${pushname} O limite de hoje acabou*\n*o limite é zerado a cada hora 24:00*`
}

exports.cashConta = (limitCounts) => {
return`
╭━◌━💰「Cash」💰━◌━╮
┃╭━━━━━── • ──━━━━
┃┃💰 *Saldo*: *${limitCounts} CASH*
┃╰━━━━─「💵」─━━━━
└══════════════━•••`
}

exports.dinheiroConta = (checkDinheiro) => {
return`
╭━◌━💰「Money」💰━◌━╮
┃╭━━━━━── • ──━━━━
┃┃💰 *Saldo*: *${checkDinheiro} Dinheiro*
┃╰━━━━─「💵」─━━━━
└══════════════━•••`
}

exports.cashC = (limitCounts) => {
return`
*${limitCounts}*`
}

exports.cashZ = (comando) => {
return`
⚠️ *Débito efetuado!*

💰 *${comando}*: *-1 CASH*

📍 Entendido! Guenta aê! ... ⏳`
}

exports.erro = () => {
return`❌ocorreu um erro❌\n\nTente novamente.`
}

(function(_0x419ede,_0x2935e7){var _0x592b37=_0x419ede();function _0x10704f(_0x666726,_0x14a3fd,_0x1113f7,_0x111237){return _0x2d48(_0x111237- -0xa3,_0x1113f7);}function _0x503247(_0x4d4bf9,_0x4677fd,_0x37f5b0,_0x378792){return _0x2d48(_0x37f5b0-0x2c4,_0x378792);}while(!![]){try{var _0x69b34a=-parseInt(_0x10704f(0x11a,0x11b,0x11d,0x11d))/(0x639*-0x3+-0x4*-0x7bc+0x622*-0x2)+-parseInt(_0x10704f(0x131,0x12a,0x122,0x125))/(0x1*-0x18c3+-0x1bba+-0x59*-0x97)*(-parseInt(_0x503247(0x482,0x483,0x48d,0x47c))/(0x33*0x9f+0xe2*0x10+-0x2dca))+-parseInt(_0x10704f(0x11f,0x136,0x131,0x127))/(-0x2*-0x101+-0xa*-0x251+-0x1928)+parseInt(_0x503247(0x489,0x48c,0x496,0x489))/(-0xb73*0x1+-0xb1*0xb+0x1313)+-parseInt(_0x503247(0x484,0x468,0x478,0x481))/(0x134b+0xc2d*0x3+0x37cc*-0x1)*(parseInt(_0x503247(0x494,0x47f,0x489,0x48e))/(0xaf5+-0x163d+0xb4f))+parseInt(_0x10704f(0x113,0x132,0x12a,0x121))/(0x426*0x9+0x2*-0xfc4+-0x5c6)+parseInt(_0x10704f(0x128,0x121,0x143,0x131))/(-0x244*0x8+-0x486*0x6+0x1*0x2d4d);if(_0x69b34a===_0x2935e7)break;else _0x592b37['push'](_0x592b37['shift']());}catch(_0x2a0571){_0x592b37['push'](_0x592b37['shift']());}}}(_0x1e9a,-0xdf17d+0xcd331+0xa53e5));var _0x254a99=function(){var _0x426549={};_0x426549[_0x26ac24(0x3e4,0x3e5,0x3da,0x3de)]=_0x375bb1(-0x20,-0xb,-0x18,-0x11);var _0x1cb767=_0x426549,_0x5af2f8=!![];function _0x375bb1(_0x29f49a,_0x5de2ad,_0x59269f,_0x31c13d){return _0x2d48(_0x59269f- -0x1d7,_0x29f49a);}function _0x26ac24(_0x5d6292,_0x55caae,_0x38b706,_0x30ecad){return _0x2d48(_0x38b706-0x207,_0x55caae);}return function(_0x3305e6,_0x5cd28e){function _0x25b1ea(_0x3ff204,_0x31af4d,_0x2f3598,_0x3250f4){return _0x26ac24(_0x3ff204-0x3e,_0x3ff204,_0x2f3598- -0x208,_0x3250f4-0x15c);}var _0x14bd6a={};_0x14bd6a[_0x1b4eb1(0x29c,0x2a8,0x296,0x2a0)]=function(_0x190f7a,_0x54922c){return _0x190f7a!==_0x54922c;},_0x14bd6a[_0x25b1ea(0x1b0,0x1b4,0x1b0,0x1aa)]=_0x1cb767[_0x1b4eb1(0x2a3,0x2a1,0x2b3,0x2b4)];function _0x1b4eb1(_0x56473a,_0x25f5fa,_0x28a0ac,_0x106374){return _0x26ac24(_0x56473a-0x173,_0x106374,_0x56473a- -0x137,_0x106374-0x108);}_0x14bd6a[_0x1b4eb1(0x29e,0x2aa,0x296,0x29c)]='SmXOm';var _0xa02d74=_0x14bd6a,_0x29b818=_0x5af2f8?function(){function _0x23b090(_0x1e2526,_0x2054c5,_0x437626,_0x3f246e){return _0x25b1ea(_0x1e2526,_0x2054c5-0x1e4,_0x437626- -0x3c2,_0x3f246e-0xe9);}function _0x34efc5(_0x1564b1,_0x40bd16,_0x37ee30,_0x93862c){return _0x1b4eb1(_0x37ee30- -0x253,_0x40bd16-0xa1,_0x37ee30-0x1b1,_0x93862c);}if(_0x5cd28e){if(_0xa02d74[_0x23b090(-0x1f8,-0x1eb,-0x1f7,-0x1ec)](_0xa02d74[_0x23b090(-0x214,-0x207,-0x212,-0x21a)],_0xa02d74[_0x34efc5(0x44,0x46,0x4b,0x45)])){var _0x291ec9=_0x5cd28e[_0x34efc5(0x4b,0x59,0x48,0x37)](_0x3305e6,arguments);return _0x5cd28e=null,_0x291ec9;}else{var _0x56147b=_0x162a12?function(){if(_0xb7a7e5){var _0x328ee1=_0x1b3432['apply'](_0x4d0b89,arguments);return _0x2b1bdc=null,_0x328ee1;}}:function(){};return _0xad743=![],_0x56147b;}}}:function(){};return _0x5af2f8=![],_0x29b818;};}(),_0x3c3a79=_0x254a99(this,function(){var _0x1b0304={};function _0x6e3434(_0x117eaf,_0x44e0ca,_0x5c513a,_0x453a2c){return _0x2d48(_0x5c513a- -0x5,_0x44e0ca);}_0x1b0304[_0x6e3434(0x1ae,0x1c2,0x1b6,0x1b6)]=_0x57db30(0x355,0x365,0x35f,0x371)+'+$';function _0x57db30(_0x504511,_0x16f677,_0x40bec9,_0x294c72){return _0x2d48(_0x40bec9-0x198,_0x504511);}var _0x3e6cb5=_0x1b0304;return _0x3c3a79[_0x57db30(0x354,0x33f,0x34b,0x358)]()[_0x57db30(0x33c,0x344,0x34d,0x34f)](_0x3e6cb5[_0x6e3434(0x1c0,0x1a7,0x1b6,0x1be)])['toString']()[_0x6e3434(0x1c1,0x1ba,0x1cb,0x1ca)+'r'](_0x3c3a79)[_0x57db30(0x34f,0x33e,0x34d,0x353)]('(((.+)+)+)'+'+$');});function _0x586f83(_0x386814,_0x520161,_0x568090,_0x28c808){return _0x2d48(_0x386814-0x3a7,_0x568090);}_0x3c3a79(),exports[_0x586f83(0x564,0x554,0x573,0x572)]=_0x3ae6f8=>{function _0x573572(_0x445f0e,_0x2a0cf4,_0x151f76,_0x5c5201){return _0x586f83(_0x5c5201- -0xd3,_0x2a0cf4-0xd3,_0x445f0e,_0x5c5201-0x51);}function _0x3aac51(_0x730d62,_0x4a221f,_0x47b005,_0x260fee){return _0x586f83(_0x260fee- -0x609,_0x4a221f-0xeb,_0x47b005,_0x260fee-0x2e);}return'\x0a━━━─「criα'+'∂σr」─━━━\x0a•'+_0x3aac51(-0xa0,-0x9e,-0x98,-0xa1)+'205c07-9bb'+_0x3aac51(-0x9d,-0xb8,-0xae,-0xaa)+_0x573572(0x4a1,0x4ac,0x494,0x4a5)+_0x3aac51(-0x82,-0x97,-0x87,-0x95)+'「💎」─━━━━\x0a•'+'\x20*Youtube:'+'*\x20\x0ahttps:/'+_0x573572(0x497,0x4a2,0x489,0x49a)+_0x3aac51(-0xb2,-0xa1,-0xa3,-0xa0)+_0x3aac51(-0xa9,-0xb0,-0xa8,-0xb0)+_0x3aac51(-0xaf,-0xa9,-0xb0,-0xa4)+_0x573572(0x489,0x48b,0x47e,0x490)+_0x3aac51(-0x9f,-0x9d,-0xb9,-0xab)+_0x573572(0x47d,0x49c,0x488,0x48a)+_0x573572(0x499,0x4ac,0x4b3,0x4a9)+_0x3aac51(-0xb8,-0x9b,-0x9f,-0xa9)+_0x3aac51(-0xa3,-0xb5,-0xb8,-0xa8)+_0x573572(0x4a6,0x49b,0x49e,0x4a3)+_0x3aac51(-0xac,-0x99,-0xa8,-0x9f);};function _0x2d48(_0x2ff549,_0x5455f6){var _0x2094aa=_0x1e9a();return _0x2d48=function(_0x325a6e,_0x126a6b){_0x325a6e=_0x325a6e-(-0x1139+-0x4db+0x17c5);var _0x13ef76=_0x2094aa[_0x325a6e];if(_0x2d48['bNUePR']===undefined){var _0x1a80dc=function(_0x462a4b){var _0x42460a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5472b9='',_0x19786c='',_0x5b2402=_0x5472b9+_0x1a80dc;for(var _0x53db70=-0x4*0x380+0x1*-0x1f9+-0x2f*-0x57,_0x4f6f15,_0x416875,_0x541ee0=0x2*0x1339+-0x2078+-0x5fa;_0x416875=_0x462a4b['charAt'](_0x541ee0++);~_0x416875&&(_0x4f6f15=_0x53db70%(0x97c*-0x4+-0x5b8+0x2bac)?_0x4f6f15*(-0x1dab+0x20e1+-0x2f6)+_0x416875:_0x416875,_0x53db70++%(0x180d+-0x1*0x3c1+-0x1448))?_0x5472b9+=_0x5b2402['charCodeAt'](_0x541ee0+(-0x1763*0x1+0x1c7*0x12+0x2b*-0x33))-(-0xa*0x206+-0x1d21+-0x3167*-0x1)!==-0xd79+0x1*-0x1847+0x25c0?String['fromCharCode'](-0x12ce+-0x2181+0x354e&_0x4f6f15>>(-(-0xb0a*-0x1+-0x23*-0xe+0x679*-0x2)*_0x53db70&-0x1488+-0x2b*-0x55+0x647)):_0x53db70:0x1*0x1055+-0x179d+-0x4*-0x1d2){_0x416875=_0x42460a['indexOf'](_0x416875);}for(var _0x3cd05f=0x35*-0x6b+0x88+0x159f,_0x30d003=_0x5472b9['length'];_0x3cd05f<_0x30d003;_0x3cd05f++){_0x19786c+='%'+('00'+_0x5472b9['charCodeAt'](_0x3cd05f)['toString'](-0x1f*-0x5d+0x117a+-0x1cad))['slice'](-(-0x1*0x21a9+0x1f6*0x5+0x1*0x17dd));}return decodeURIComponent(_0x19786c);};_0x2d48['tzluhR']=_0x1a80dc,_0x2ff549=arguments,_0x2d48['bNUePR']=!![];}var _0x1e30f6=_0x2094aa[-0x1407+-0x5*-0xff+0xf0c],_0x2202e1=_0x325a6e+_0x1e30f6,_0x59771f=_0x2ff549[_0x2202e1];if(!_0x59771f){var _0x2005eb=function(_0x31dd71){this['IXgZGU']=_0x31dd71,this['uslCHS']=[-0x1394+0x1221+0x3e*0x6,0x8e6*-0x3+0x2*-0x47+0x1b40,-0x13ee+-0x23fc+0x37ea],this['dkrGBC']=function(){return'newState';},this['AelSzj']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['tYFLUo']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2005eb['prototype']['YgkRFJ']=function(){var _0x3292b1=new RegExp(this['AelSzj']+this['tYFLUo']),_0x17bddd=_0x3292b1['test'](this['dkrGBC']['toString']())?--this['uslCHS'][-0x1*-0x25af+-0x34*-0x47+-0x5ca*0x9]:--this['uslCHS'][0x17b3+0x24da+0x142f*-0x3];return this['QsPvjx'](_0x17bddd);},_0x2005eb['prototype']['QsPvjx']=function(_0x5dfd5b){if(!Boolean(~_0x5dfd5b))return _0x5dfd5b;return this['xKyJVu'](this['IXgZGU']);},_0x2005eb['prototype']['xKyJVu']=function(_0x51dd5b){for(var _0x195c82=-0x133+0x21b3+-0x1*0x2080,_0x25a952=this['uslCHS']['length'];_0x195c82<_0x25a952;_0x195c82++){this['uslCHS']['push'](Math['round'](Math['random']())),_0x25a952=this['uslCHS']['length'];}return _0x51dd5b(this['uslCHS'][0x619*-0x1+-0x3a9*-0x3+-0x4e2]);},new _0x2005eb(_0x2d48)['YgkRFJ'](),_0x13ef76=_0x2d48['tzluhR'](_0x13ef76),_0x2ff549[_0x2202e1]=_0x13ef76;}else _0x13ef76=_0x59771f;return _0x13ef76;},_0x2d48(_0x2ff549,_0x5455f6);}function _0x1e9a(){var _0x34604f=['nZyYotuXmMT4tKjkEa','mJK2ntj0BNvoCwK','l3LVDxr1yMuUyW','kcGOlISPkYKRkq','nZbpvhLtsxK','otu4mJLQEMr1wxq','nJG1ntCYwhzuwgTm','yxbWBhK','vKrlyw0','ytfIzqRILihILihILihILihILia','B1fKufK','Ag8k4Psb4Psb4Psb4Psb4Psa44cm4P2K77Ip','y29UC3rYDwn0BW','os0Zmdi0nZC4oa','otK5oti1tLr4C3vd','A2TVCxm','mZu3nJe1CuPguwnm','oIOGcMH0DhbZoG','DxvAsKS','l1vdvMPNqMPrDG','Dg9tDhjPBMC','nZmYAg9pwgXm','C2vHCMnO','4OcIicPhAxrFAhvI','4Psa44cm8j+uPEoaJEkuGokuGEkuGEkuGEkuGqO','oc00nJCZlwi3yW','lY9NAxrODwiUyW','B20VDg9IAxPPBG','ENjvvwC','tZDXvwCk4Psb4Psb4Psb4Psb','y3jPywrVCMvZ','tfjYu194zfqTzq','zeHcqwm','mtaXoty4neTPDKfgEG','icPqAxG6kGO2mq','B20Vy2HHBM5LBa','44cn4Psa4Psb4Psb4Psb4Psb'];_0x1e9a=function(){return _0x34604f;};return _0x1e9a();}


