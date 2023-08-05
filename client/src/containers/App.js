/* Function Component --> Hooks >= 16.8 */

import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

// Folder Structure is one of most important thing. --> good way to Organize
// Always need to be Up-To-Date

// "Don't use" something just because it's "new"

function App() {
  const [robots, setRobots] = useState([]); // initial States here in "Hook"
  const [searchField, setSearchField] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // "always" runs after every "rendering" of the component
  });

  // first Parameter is "arrow" func, second is an "array"
  useEffect(() => {
    // "once" after every "rendering" of the component
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []); // componentDidMount means [] in this case

  useEffect(() => {
    console.log(count);
  }, [count]); // only run if count changes.

  const onSearchChange = (event) => {
    // this.setState({ searchField: event.target.value });
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;

/* Class Component Completed */

// import { Component } from "react";
// import CardList from "../components/CardList";
// import SearchBox from "../components/SearchBox";
// import Scroll from "../components/Scroll";
// import "./App.css";
// import ErrorBoundry from "../components/ErrorBoundry";

// // Folder Structure is one of most important thing. --> good way to Organize
// // Always need to be Up-To-Date

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: [], // "robots" here before API
//       searchField: "",
//     };
//   }

//   // LifeCycle Methods to trigger the App, espeacially for the "render" method
//   componentDidMount() {
//     // window.fetch
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       // .then((response) => {
//       //   return response.json(); // don't forget "return" keyword here!
//       // })
//       .then((users) => {
//         this.setState({ robots: users });
//       });
//   }

//   // = () => error without arrow function
//   onSearchChange = (event) => {
//     this.setState({ searchField: event.target.value });
//   };

//   render() {
//     const { robots, searchField } = this.state;

//     const filteredRobots = robots.filter((robot) => {
//       return robot.name.toLowerCase().includes(searchField.toLowerCase());
//     });

//     return !robots.length ? (
//       <h1>Loading...</h1>
//     ) : (
//       <div className="tc">
//         <h1 className="f1">RoboFriends</h1>
//         <SearchBox searchChange={this.onSearchChange} />
//         <Scroll>
//           {/* "Children" of "Scroll" */}
//           <ErrorBoundry>
//             {/* ErrorBoundry is to catch if it has any "Error" in its children */}
//             <CardList robots={filteredRobots} />
//           </ErrorBoundry>
//         </Scroll>
//       </div>
//     );
//     // === 0
//     // if (!robots.length) {
//     //   return <h1>Loading...</h1>;
//     // } else {
//     //   return (
//     //     <div className="tc">
//     //       <h1 className="f1">RoboFriends</h1>
//     //       <SearchBox searchChange={this.onSearchChange} />
//     //       <Scroll>
//     //         {/* "Children" of "Scroll" */}
//     //         <CardList robots={filteredRobots} />
//     //         {/* this.state.robots */}
//     //       </Scroll>
//     //     </div>
//     //   );
//     // }
//   }
// }

// export default App;
