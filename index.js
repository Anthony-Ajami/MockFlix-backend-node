require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL
const routes = require('./routes/ratingsRoutes');
const cors = require('cors')

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

//sequence is important here!
app.use(express.json())
app.use('/api', routes)

app.listen(4000, () => {
    console.log(`Server Started at ${4000}`)
})