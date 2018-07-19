import React from 'react'

class LineItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      amount: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({
        ...this.state,
        [evt.target.name]: evt.target.value
    })
  }

  render () {
    return (
    <div className='lineItem'>
          <label>
            Description:
            <input 
            type="text" 
            name="to" 
            onChange={this.handleChange} 
            value={this.state.description}
            />
          </label>
          <label>
            Amount:
            <input 
            type="text" 
            name="invNumber" 
            onChange={this.handleChange} 
            value={this.state.amount}
            />
          </label>
    </div>
    )
  }
}

export default LineItem