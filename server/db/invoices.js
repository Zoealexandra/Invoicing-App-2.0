const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const knex = require('knex')(config)

/* function getAllInvoices (db = knex) {
  return db('invoices')
    .select(
      'id',
      'to',
      'invoice_number as invoiceNumber',
      'date'
    )
} */

function getAllInvoices (db = knex) {
  return db('invoices')
    .join('lineitems', 'invoices.id', '=', 'lineitems.invoice_id')
    .select(
      'id',
      'to',
      'invoice_number as invoiceNumber',
      'date',
      'line_item_id as lineitemId',
      'description',
      'amount'
    )
}

module.exports = {
  getAllInvoices
}