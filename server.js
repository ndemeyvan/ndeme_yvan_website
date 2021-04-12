const express = require('express');
const serveStatic = require('serve-static');
const path = require('path')

const app = express()

app.user('/',serveStatic(path.join(__dirname,'/dist')))

const port = process.env.port || 8080 

app.listen(port)

consolo.log(`App is running in port ${port}`)