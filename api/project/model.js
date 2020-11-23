// build your `Project` model here
const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    add
}

async function find() {
    try {
        const projects = await db('projects');
        return projects;
    } catch (err) {
        throw err
    }
}

async function add(body) {
    try {
        const ids = await db('projects').insert(body)
        return ids;
    } catch (err) {
        throw err
    }
}