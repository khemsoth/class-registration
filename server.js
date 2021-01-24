const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const apiRoutes = './routes/apiRoutes'

const url = 'mongodb://localhost:27017'
const dbName = 'class-registration'

const PORT = process.env.PORT || 5000


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require(apiRoutes)(app)

// MongoDB connection
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
  assert.strictEqual(null, err)
  console.log(`Connected to DB ${dbName} successfully`)
})

app.listen(PORT, function() {
  console.log(`Server running on port ${PORT}`)
})