import React, {Component} from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
      
        <main className="main">
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default App;
