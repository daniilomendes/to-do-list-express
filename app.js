const express = require('express')
const path = require('path')

const checkListRouter = require('./src/routes/checklist')
const hootRouter = require('./src/routes/index')

require('./config/database')

const app = express()
app.use(express.json())

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use('/', hootRouter)
app.use('/checklists', checkListRouter)

app.listen(3000, () => {
    console.log('Servidor iniciado!')
})