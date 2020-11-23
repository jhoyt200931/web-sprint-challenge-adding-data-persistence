// build your `/api/tasks` router here
const express = require('express');
const db = require('./model.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await db.find();
        if(tasks) {
            res.status(200).json(tasks);
        } else {
            res.status(404).json({message: 'There was an error getting the tasks'})
        }
    } catch (error) {
        res.status(500).json({message: 'There was an error with the database'});
    }
})

router.post('/', async (req, res) => {
    const body = req.body;
    try {
        const ids = await db.add(body);
        if(ids) {
            res.status(201).json(ids);
        } else {
            res.status(400).json({message: 'There was an error adding the task'})
        }
    } catch (error) {
        res.status(500).json({message: 'There was an error with the database'})
    }
})

module.exports = router;