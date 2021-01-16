import React from "react";
import axios from "axios";
import Followers from "./Components/Followers";
import User from "./Components/User";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      // following: [],
    };
  }

  //Setting up the first mount for myself
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/aszalea-calderon`)
      .then((res) => {
        // console.log(`Data`, res);
        this.setState({ user: res.data });
      })
      .catch((err) => console.error(`My Error`, err));

    axios
      .get(`https://api.github.com/users/aszalea-calderon/followers`)
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => console.error(`My Error`, err));
  }

  //Followers

  //Searching Capabilities
  // fetchUser = (username) => {
  //   axios
  //     .get(`https://api.github.com/users/${username}`)
  //     .then(
  //       (res) =>
  //         this.setState({
  //           followers: res.data,
  //         }),
  //       console.log(this.state.user)
  //     )
  //     .catch((err) => console.error("Fetching User Error", err));
  // };

  render() {
    return (
      <div className="App">
        {this.state.user.length === 0 ? (
          <h1>Sorting all your awesome friends... Please wait...</h1>
        ) : (
          <>
            <User user={this.state.user} />

            <Followers followers={this.state.followers} />
          </>
          // <h1>Sort</h1>
        )}
      </div>
    );
  }
}

export default App;
