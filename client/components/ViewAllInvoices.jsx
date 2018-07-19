import React from 'react'

import {getAllInvoices} from '../apiClient'
import ViewSingleInvoice from './ViewSingleInvoice'

class ViewAllInvoices extends React.Component {
  constructor (props) {
    super (props) 
    this.state = {
      invoices:[]
    }
  }

  componentDidMount () {
    getAllInvoices()
      .then(invoices => {
        this.setState({invoices: invoices})
      })
  }

  render() {
    return (
      <div className='viewAllInvoices container-fluid'>
      <h3>Invoices</h3>
        <div className='row invoice-row'>
          {this.state.invoices.map(invoice => {
            return (
              <ViewSingleInvoice key={invoice.invoiceId} props={invoice}/>
            )
          })}
        </div>
      </div>
    )
  }
}


export default ViewAllInvoices