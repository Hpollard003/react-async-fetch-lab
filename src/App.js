// create your App component here
import React, { Component } from 'react'



class App extends Component {
    state = {
        crew: []
    }

    render() {
        return (
          <div>
            {this.state.crew.map((human, name) => <h1 key={name}>{human.name}</h1>)}
          </div>
        )
      }
    
      componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(response => response.json())
          .then(({human}) => this.setState({ crew: human }))
          .catch(error => console.error())
      }
}
export default App