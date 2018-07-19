import React from 'react'

const ViewLineItems = ({lineItem}) => {
  return (
    <tr className='viewLineItems'>
      <td>
        {lineItem.description}
      </td>
      <td>
        {lineItem.amount}
      </td>
    </tr>
  )
}

export default ViewLineItems