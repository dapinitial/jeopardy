import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    fetch("http://jservice.io/api/categories?count=20")
      .then(response => response.json())
      .then(json => console.log(json));
  }
  render() {
    return (
      <div>
        <h2>Jeopardy App!</h2>
      </div>
    );
  }
}

export default App;
