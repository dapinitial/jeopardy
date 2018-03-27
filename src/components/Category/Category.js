import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Clue from "../Clue/Clue";

export class Category extends Component {
  constructor() {
    super();

    this.state = {
      clues: []
    };
  }

  componentDidMount() {
    fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
      .then(response => response.json())
      .then(json => this.setState({clues: json}));
  }

  render() {
    console.log("categrory props", this.props);
    return (
      <div>

        <h2>{this.props.category.title}</h2>
        {this
          .state
          .clues
          .map(clue => {
            return <Clue key={clue.id} clue={clue}/>;
          })}
      </div>
    );
  }
}

class LinkedCategory extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="link-home">
          <h4>Home</h4>
          <Category category={this.props.category}/>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {category: state.category};
}

export default connect(mapStateToProps, null)(LinkedCategory);
