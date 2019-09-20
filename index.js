require('module-alias/register')
const app = require('express')() 
const article = require('./routes/article')

app.use('/article', article)

app.listen(3000, () => console.log("we've listen y'all screamin in port 3000"))