import React from 'react'

import {getAllInvoices} from '../apiClient'
import ViewLineItems from './ViewLineItems'

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
    const InvNumbersArr = Object.keys(this.state.invoices)
    return (
      <div className='viewAllInvoices container-fluid'>
      <h3>Invoices</h3>
        <div className='row invoice-row'>
          <table>
            {InvNumbersArr.map(invNum => {
              return (
                <tbody>
                  <tr>
                    <td>{invNum}</td>
                  </tr>
                  {this.state.invoices[invNum].map(lineItem => {
                    return (
                      <ViewLineItems key={lineItem.lineitemId} lineItem={lineItem} />
                    )
                  })}
                </tbody>
              ) 
            })}  
          </table>
        </div>
      </div>
    )
  }
}



export default ViewAllInvoices