const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('/tmp/sunlight.hours.challenge.db.json')
const db = low(adapter)

module.exports = db
