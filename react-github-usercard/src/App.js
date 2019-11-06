import React from "react";
import axios from "axios";
import UserCard from "./UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userCards: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/cishocksr")
      .then(result => {
        this.setState({
          userCards: result.data
        });
        // console.log(result.data);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <UserCard userCards={this.state.userCards} />
      </div>
    );
  }
}

export default App;
