
exports.up = function(knex) {
  return knex.schema
    .createTable('users', function (table) {
       table.increments('id');
       table.string('first', 255).notNullable();
       table.string('last', 255).notNullable();
       table.integer('age').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("users");
};
