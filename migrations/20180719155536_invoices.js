exports.up = (knex, Promise) => {
  return knex.schema.createTable('invoices', table => {
    table.increments('id')
    table.string('to')
    table.string('invoice_number')
    table.string('date')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('invoices')
}
