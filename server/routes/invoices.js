const express = require('express')

const router = express.Router()

const dbInvoices = require('../db/invoices')

router.use(express.json())


//setting up a home route
router.get('/', (req, res) => {
    res.send('Example example')
})

//receive all invoices from database
router.get('/getAllInvoices', (req, res) => {
  dbInvoices.getAllInvoices()
    .then(invoices => res.json(invoices))
    .catch(err => {
      res.status(500).json({errorMessage: err.message})
  })
})

//exporting routes to be used in server.js
module.exports = router