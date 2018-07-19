import React from 'react'

import {getAllInvoices} from '../apiClient'
//import ViewSingleInvoice from './ViewSingleInvoice'
import ViewLineItems from './ViewLineItems'

class ViewAllInvoices extends React.Component {
  constructor (props) {
    super (props) 
    this.state = {
      invoices:[
        {
            'id': 1001,
            'to': 'tom',
            'invoiceNumber': 'ABC123',
            'date': '15-06-2018',
            'lineitemId': 2001,
            'description': 'cat food',
            'amount': '15.00'
        },
        {
            'id': 1001,
            'to': 'tom',
            'invoiceNumber': 'ABC123',
            'date': '15-06-2018',
            'lineitemId': 2002,
            'description': 'dog food',
            'amount': '17.00'
        }]
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
{/*           {this.state.invoices.map(invoice => {
            return (
              <ViewSingleInvoice key={invoice.lineitemId} props={invoice}/>
            )
          })} */}
          {this.state.invoices.map(lineItem => {
            return (
              <ViewLineItems key={lineItem.lineitemId} lineItem={lineItem} />
            )
          })}
        </div>
      </div>
    )
  }
}


export default ViewAllInvoices