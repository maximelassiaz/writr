const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.static('public'))

app.set('view engine', 'ejs')

// Home page
app.get('/', (req, res) => {
    res.render('index')
})

// Login page
app.get('/login', (req, res) => {
    res.send('Login')
})

// Register page
app.get('/register', (req, res) => {
    res.send('Login')
})

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`))