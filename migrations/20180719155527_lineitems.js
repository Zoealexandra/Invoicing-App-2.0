exports.up = (knex, Promise) => {
  return knex.schema.createTable('lineitems', table => {
    table.increments('line_item_id').primary()
    table.integer('invoice_id').references('invoices.id')
    table.string('description')
    table.string('amount')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('lineitems')
}

