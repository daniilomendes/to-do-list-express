const  express = require('express')

const router = express.Router()

router.get('checklists', (req, res) => {
    console.log('Olá')
    res.send()
})

module.exports = router