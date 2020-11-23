// build your `Task` model here
const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    add
}

async function find() {
    try {
        const tasks = await db('tasks as t').join('projects as p', 't.project_id', 'p.id').select('t.id', 't.description', 't.notes', 't.completed', 'p.project_name', 'p.description');
        return tasks;
    } catch (err) {
        throw err;
    }
}

async function add(body) {
    try {
        const task = await db('tasks').insert(body);
        return task;
    } catch (err) {
        throw err;
    }
}