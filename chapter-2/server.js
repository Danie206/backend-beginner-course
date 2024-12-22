//The address of this server connected to the network is: http://localhost:8383
const express = require('express')
const app = express()
const PORT = 8383
// HTTP VERBS && ROUTES (or paths)
//The method informs the nature of reuqest and the route is a further subdirectory 
// (basically we direct the ruest to the body of code to respond appropriately, and
//  these locations or routes are called enpoints)

 
app.get('/', (req, res) => { // this is endpoint number 1-// 
res.send('<h1>homepage</h1>')
})
app.get('/dashboard', (req, res) => { // this is endpoint number 1-// 
  res.send('<h1>dashboard</h1>')
  })
  app.get('/api/data', (req, res) => {
    console.log('This one was for data')
    res.send(data)
  })
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))
