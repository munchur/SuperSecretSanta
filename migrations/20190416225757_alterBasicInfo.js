
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('basic_info', function(table){
    table.time('time', 0).notNullable().alter()
    table.date('date').notNullable().alter()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('basic_info', function(table){
    table.dropColumn('groupID').primary().notNullable().unique()
  })
};
