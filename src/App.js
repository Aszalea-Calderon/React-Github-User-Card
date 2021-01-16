import React from "react";
import axios from "axios";
import Friend from "./Components/Friend";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      followers: [],
      following: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/aszalea-calderon`)
      .then((res) => {
        console.log(`Data`, res);

        this.setState({ followers: res });
      })
      .catch((err) => console.error(`My Error`, err));
  }

  render() {
    return (
      <div className="App">
        {this.state.followers.length === 0 ? (
          <h1>Sorting all your awesome friends... Please wait...</h1>
        ) : (
          <Friend followers={this.state.followers} />
          // <h1>Sort</h1>
        )}
      </div>
    );
  }
}

export default App;
