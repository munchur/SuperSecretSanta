
exports.up = function(knex, Promise) {
  return knex.schema.createTable('basic_info', function(table){
    table.integer('groupID').notNullable().primary().unique()
    table.time('time', 6).notNullable()
    table.date('date')
    table.text('location', 'longtext')
    table.text('message', 'longtext')
    table.integer('singles').notNullable()
    table.integer('couples').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('basic_info')
};
