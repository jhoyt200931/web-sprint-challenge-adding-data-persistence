// build your `/api/resources` router here
const express = require('express');
const db = require('./model.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const resources = await db.find();
        if(resources) {
            res.status(200).json(resources);
        } else {
            res.status(404).json({message: 'There was an error getting the resources'});
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
            res.status(400).json({message: 'There was an error adding the resource'});
        }
    } catch (error) {
        res.status(500).json({message: 'There was an error with the database'});
    }
})

module.exports = router;