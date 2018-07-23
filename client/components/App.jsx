import React from 'react'

import InvoiceDetails from './InvoiceDetails';
import ViewAllInvoices from './ViewAllInvoices'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => (
  <Router>
    <div className='app'>
      <Route path='/addInvoice' component={InvoiceDetails} />
      <Route exact path='/viewinvoices' component={ViewAllInvoices} />
    </div>
  </Router>
)

export default App