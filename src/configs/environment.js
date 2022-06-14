const env       = process.env.NODE_ENV || 'development'
const environment    = require('./config.json')[env]

console.log(process.env.NODE_ENV )

export default environment
