//The address of this server connected to the network is: http://localhost:8383
const express = require('express')
const app = express()
const PORT = 8383

let data = ['james']
// Middleware
app.use(express.json())
// HTTP VERBS && ROUTES (or paths)
// The method informs the nature of request and the route is a further subdirectory 
// (basically we direct the request to the body of code to respond appropriately, and
// these locations or routes are called endpoints)

app.get('/dashboard', (req, res) => {
  res.send('<body><h1>dashboard</h1><a href="/">home</a></body>')
})

app.get('/', (req, res) => {
  res.send(`
    <body style="background:pink;
    color: blue;"><h1>DATA:</h1><p>${JSON.stringify(data)}</p><a href="/dashboard">Dashboard</a></body>`)
})

// Type 2 - API endpoints (non-visual)
// CRUD create-POST read-GET update-PUT delete-DELETE

app.get('/api/data', (req, res) => {
  console.log('This one was for data')
  res.send(data)
})

app.post('/api/data', (req, res) => {
  const newEntry = req.body
  console.log(newEntry)
  data.push(newEntry.name)
  res.sendStatus(201)
})
app.delete('/api/data', (req, res) => {
  data.pop()
  console.log('Deleted')
  res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))
