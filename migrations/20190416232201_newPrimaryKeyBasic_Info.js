
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('basic_info', function(table){
    table.increments('groupID').primary().unique()
  })
};

exports.down = function(knex, Promise) {

};
