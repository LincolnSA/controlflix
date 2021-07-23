exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {

        table.increments();

        table.string('name').notNullable();
        table.string('value').notNullable();
        table.string('devices').notNullable();
    });

};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};