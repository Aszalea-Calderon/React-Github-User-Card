import React from "react";
import axios from "axios";
import Friend from "./Components/Friend";
import User from "./Components/User";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      // followers: [],
      // following: [],
    };
  }

  //Setting up the first mount
  componentDidMount() {
    // this.fetchUser('aszalea-calderon')
    // this.fetchFollow('aszalea-calderon')
    // this.fetchRepos('aszalea-calderon')
    axios
      .get(`https://api.github.com/users/aszalea-calderon`)
      .then((res) => {
        console.log(`Data`, res);

        this.setState({ user: res.data });
      })
      .catch((err) => console.error(`My Error`, err));
  }

  render() {
    return (
      <div className="App">
        {this.state.user.length === 0 ? (
          <h1>Sorting all your awesome friends... Please wait...</h1>
        ) : (
          <User user={this.state.user} />
          // <h1>Sort</h1>
        )}
      </div>
    );
  }
}

export default App;
