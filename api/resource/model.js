// build your `Resource` model here
const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    add
}

async function find() {
    try {
        const resources = await db('resources');
        return resources;
    } catch (err) {
        throw err;
    }
}

async function add(body) {
    try {
        const resource = await db('resources').insert(body);
        return resource;
    } catch (err) {
        throw err;
    }
}