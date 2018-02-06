import mongoose from 'mongoose'

const dbAddress = 'mongodb://127.0.0.1/graphql'
mongoose.Promise = global.Promise
const db = mongoose.createConnection(dbAddress, {
  server: { poolSize: 20 },
  // user: 'root',
  // pass: 'root',
})

const traceMQuery = (method, info, query) => (err, result, millis) => {
if (err) {
    Logger.error('traceMQuery error:', err)
}
const infos = []
infos.push(`${query._collection.collection.name}.${method}`) // eslint-disable-line
infos.push(JSON.stringify(info))
infos.push(`${millis}ms`)
console.log('MONGO', infos.join(' '))
}
mongoose.Mongoose.prototype.mquery.setGlobalTraceFunction(traceMQuery)

db.once('open', () => {
  console.log(`connect to ${dbAddress} success!`)
})

db.on('error', err => {
  console.error('connect to %s error: ', config.db, err.message)
  process.exit(1)
})

module.exports = db;