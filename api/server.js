// build your server here
const express = require('express');
const resourceRouter = require('./resource/router.js');
const projectRouter = require('./project/router.js');
const taskRouter = require('./task/router.js');
const server = express();

server.use(express.json());
server.use('/api/resources', resourceRouter);
server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);




module.exports = server;