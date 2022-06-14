let handler = async m => m.reply(`
╭─「 Donasi • DANA 」
│ •  [08892929138]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
