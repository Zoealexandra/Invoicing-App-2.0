import React from 'react'

class InvoiceDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      to: '',
      invNumber: '',
      date: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({
        [evt.target.name]: evt.target.value
    })
  }

  render () {
    return (
    <div className='invoiceDetails'>
      <form>
        <div>
          <label>
            To:
            <input type="text" name="to" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Inv Number:
            <input type="text" name="invNumber" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
          Date:
          <input type="text" name="date" onChange={this.handleChange}/>
          </label>
        </div>
        <input type="submit" value="Submit" onChange={this.submitInvoice}/>
      </form>
    </div>
    )
  }
}

export default InvoiceDetails