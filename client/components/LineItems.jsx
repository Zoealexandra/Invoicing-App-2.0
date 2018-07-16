import React from 'react'

import LineItem from './LineItem'

class LineItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addLine: false
    }
    this.addLine = this.addLine.bind(this)
  }

  addLine () {
    this.setState ({
      addLine: true
    })
  }

 render () {
   return (
    <div className='lineItems'>
    <LineItem /> 
    <button onSubmit={this.addLine}>Add Line Item</button>
    {this.addLine && <LineItem />} 
  </div>
   )
 }
}

export default LineItems