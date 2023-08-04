import { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

// Folder Structure is one of most important thing. --> good way to Organize

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [], // "robots" here before API
      searchField: "",
    };
  }

  // LifeCycle Methods to trigger the App, espeacially for the "render" method
  componentDidMount() {
    // window.fetch
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then((response) => {
      //   return response.json(); // don't forget "return" keyword here!
      // })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  // = () => error without arrow function
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          {/* "Children" of "Scroll" */}
          <ErrorBoundry>
            {/* ErrorBoundry is to catch if it has any "Error" in its children */}
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
    // === 0
    // if (!robots.length) {
    //   return <h1>Loading...</h1>;
    // } else {
    //   return (
    //     <div className="tc">
    //       <h1 className="f1">RoboFriends</h1>
    //       <SearchBox searchChange={this.onSearchChange} />
    //       <Scroll>
    //         {/* "Children" of "Scroll" */}
    //         <CardList robots={filteredRobots} />
    //         {/* this.state.robots */}
    //       </Scroll>
    //     </div>
    //   );
    // }
  }
}

export default App;

/* Function Component */

// const App = () => {
//   return (
//     <div className="tc">
//       <h1>RoboFriends</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// };

// export default App;
