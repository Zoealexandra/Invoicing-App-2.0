import React from 'react'

const ViewSingleInvoice = (props) => (
  <div className='viewSingleInvoice col-sm'>
    <p>{props.invoice.description}{props.invoice.amount}</p>
  </div>
)

export default ViewSingleInvoice