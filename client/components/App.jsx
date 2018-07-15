import React from 'react'
import InvoiceDetails from './InvoiceDetails';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      example: ['goose']
    }
  }

  componentDidMount () {
    this.setState = ({
      example: ['goose2']
    })
  }

  render () {
    return (
      <div className='app'>
        <InvoiceDetails />
      </div>
    )
  }
}

export default App