const express = require('express')
const vocabRoutes = require('./src/vocab/routes')

const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.end('Hello World!')
})

app.use('/api/v1/vocab', vocabRoutes)

app.listen(port, () => console.log('app is running on port' + port))
