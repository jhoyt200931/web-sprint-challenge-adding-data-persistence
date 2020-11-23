// build your `/api/projects` router here
const express = require('express');

const db = require('./model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await db.find();
        if(projects) {
            res.status(200).json(projects);
        } else {
            res.status(404).json({message: 'There was an error getting the projects from the database'})
        }
    } catch (error) {
        res.status(500).json({message: 'There was an error in the database', error});
    }
})

router.post('/', async (req, res) => {
    const body = req.body;
    try {
        const ids = await db.add(body);
        if(ids) {
            res.status(201).json(ids);
        } else {
            res.status(400).json({message: 'There was an error adding the project'})
        }
    } catch (error) {
        res.status(500).json({message: 'There was an error with the database'})
    }
})

module.exports = router;