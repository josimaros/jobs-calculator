const express = require('express')
const path = require('path')

const routes = express.Router()

const baseUrl = path.resolve(__dirname,'views')

routes.get('/', (req, res) => res.sendFile(baseUrl+  '/index.html'))
routes.get('/job', (req, res) => res.sendFile(baseUrl+  '/job.html'))
routes.get('/job/edit', (req, res) => res.sendFile(baseUrl+  '/job-edit.html'))
routes.get('/profile', (req, res) => res.sendFile(baseUrl+  '/index.html'))



module.exports = routes