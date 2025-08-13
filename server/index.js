const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs-extra')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 4000
const DATA_FILE = path.join(__dirname, 'waitlist.json')

app.use(cors())
app.use(bodyParser.json())

// Ensure data file exists
fs.ensureFileSync(DATA_FILE)
if(!fs.readJsonSync(DATA_FILE, {throws:false})){ fs.writeJsonSync(DATA_FILE, { entries: [] }) }

app.post('/api/waitlist', async (req, res) => {
  const {email, partnerEmail} = req.body
  if(!email || !partnerEmail) return res.status(400).json({error: 'missing fields'})
  const db = await fs.readJson(DATA_FILE)
  db.entries.push({email, partnerEmail, date: new Date().toISOString()})
  await fs.writeJson(DATA_FILE, db)
  res.json({ok: true})
})

app.listen(PORT, () => console.log('Server running on', PORT))
