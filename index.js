const express = require('express')
const app = express()


app.get('/', (req,res) => {
    res.json({
        name: 'zimbabuee'
    })
})

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})

