import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Clue from "../Clue/Clue";

class Category extends Component {
  constructor() {
    super();

    this.state = {
      clues: []
    };
  }

  componentDidMount() {
    fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
      .then(response => response.json())
      .then(json => this.setState({ clues: json }));
  }

  render() {
    console.log("categrory props", this.props);
    return (
      <div>
        <Link to="/" className="link-home">
          <h4>Home</h4>
        </Link>

        <h2>{this.props.category.title}</h2>
        {this.state.clues.map(clue => {
          return <Clue key={clue.id} clue={clue} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { category: state.category };
}

export default connect(mapStateToProps, null)(Category);
