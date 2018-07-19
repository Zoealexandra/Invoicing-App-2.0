import React from 'react'

const Invoice = (props) => (
  <div className='invoice col-sm'>
    {props.description}{props.amount}
  </div>
)

export default Invoice