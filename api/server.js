const express = require('express');
const server = express();
const projectRoutes = require('./project/router')
const resourceRoutes = require('./resource/router')
const taskRoutes = require('./task/router')

server.use(express.json())

server.use('/api/projects', projectRoutes)
server.use('/api/resources', resourceRoutes)
server.use('/api/tasks', taskRoutes)

module.exports = server;
