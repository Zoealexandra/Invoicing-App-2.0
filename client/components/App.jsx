import React from 'react'

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
      <ul>
        {this.state.example.map(goose => {
          return (
            <li key={goose}>{goose}</li>
          )
        })}
      </ul>
    </div>
    )
  }
}

export default App