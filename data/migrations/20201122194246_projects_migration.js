
exports.up = function(knex) {
  return knex.schema
    .createTable('resources', tbl => {
        tbl.increments()
        tbl.text('resource_name', 128)
            .unique()
            .notNullable()
        tbl.text('description', 128);
    })
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.text('project_name', 128)
            .notNullable();
        tbl.text('description')
        tbl.boolean('completed');
    })
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.text('description')
            .notNullable()
        tbl.text('notes')
        tbl.boolean('completed')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

    })
    .createTable('projectReference', tbl => {
        tbl.increments()
        tbl.integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
        
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projectReference')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
};
