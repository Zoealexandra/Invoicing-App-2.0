import React from 'react'

import LineItem from './LineItem'

class LineItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lineItems: []
    }
    this.addLine = this.addLine.bind(this)
    this.removeLine = this.removeLine.bind(this)
  }

  addLine () {
    let lineItemIndex = this.state.lineItems.length + 1
    this.setState ({
      lineItems: [ ...this.state.lineItems, lineItemIndex]
    })
  }

  removeLine () {
    this.setState ({
      addLine: true
    })
  }

 render () {
   return (
    <div className='lineItems'>
      <LineItem /> 
      {this.state.lineItems.length && this.state.lineItems.map(lineIndex => {
        return (
        <LineItem />
        )
      }
      )} 
      <button onClick={this.addLine}>Add Line Item</button>
    </div>
   )
 }
}

export default LineItems