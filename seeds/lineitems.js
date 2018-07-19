exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('lineitems').del()
    .then(function () {
      // Inserts seed entries
      return knex('lineitems').insert([
        {line_item_id: 2001, invoice_id: 1001, description: 'cat food', amount: '15.00'},
        {line_item_id: 2002, invoice_id: 1001, description: 'dog food', amount: '17.00' },
        {line_item_id: 2003, invoice_id: 1002, description: 'llama food', amount: '16.00'},
        {line_item_id: 2004, invoice_id: 1003, description: 'penguin food', amount: '16.00'},
        {line_item_id: 2005, invoice_id: 1003, description: 'goat food', amount: '16.00'},
      ])
    })
}
