exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('invoices').del()
    .then(function () {
      // Inserts seed entries
      return knex('invoices').insert([
        {id: 1001, to: 'tom', invoice_number: 'ABC123', date: '15-06-2018'},
        {id: 1002, to: 'tony', invoice_number: 'ABC124', date: '16-06-2018'},
        {id: 1003, to: 'tori', invoice_number: 'ABC125', date: '17-06-2018'}
      ])
    })
}
