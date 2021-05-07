const stayonscreen = (prefix, ownerBot, botName) => {
        return `
「 *${ISA BOT}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ARTHURR}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *MENU*
  │
  └─ ❏ ${prefix}afk`
}
exports.stayonscreen = stayonscreen
