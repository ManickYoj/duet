exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('users', (table) => {
      table.increments('id');
      table.string('username').unique().notNullable();
      table.string('password').notNullable();

      // Automatically maintains updated_at and created_at fields
      table.timestamps();
    }),

    knex.schema.createTable('todos', (table) => {
      table.string('name');
      table.dateTime('deadline');
      table.time('estimated-duration');
    }),

  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([

    knex.schema.dropTable('users'),
    knex.schema.dropTable('todos'),

  ]);
};
