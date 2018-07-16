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
      <form>
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
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
  }
}

export default LineItem