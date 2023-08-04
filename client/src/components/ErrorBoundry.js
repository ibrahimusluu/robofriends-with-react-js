// React 16 or higher should be

import { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // like try-catch block in JS
  componentDidCatch(error, info) {
    this.setState({ hasError: true }); // just for test of "Error"
  }

  render() {
    if (this.state.hasError) {
      // return an "Error"
      return <h1>Error!</h1>;
    }
    return this.props.children;
    // "children" should be anything between "ErrorBoundry" Wrapping Component
  }
}

export default ErrorBoundry;
