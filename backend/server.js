const connectToMongo = require('./db')
const express = require('express')
let path = require('path')
var cors = require('cors')
const dotenv = require('dotenv')
connectToMongo();

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

const ___dirname = path.resolve();
app.use('/', express.static(path.join(___dirname, '/frontend/build')));
app.get('*', (req, res) =>
    res.sendFile(path.join(___dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})