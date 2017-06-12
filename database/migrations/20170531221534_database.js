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
      table.increments('id');
      table.integer('owner').unsigned().references('id').inTable('users').notNullable();
      table.string('name').notNullable();
      table.dateTime('deadline');
      table.integer('estimatedDuration');

      table.timestamps();
    }),

  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('todos'),
    knex.schema.dropTable('users'),
  ]);
};
