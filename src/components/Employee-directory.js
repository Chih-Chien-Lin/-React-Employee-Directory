import React, { Component } from "react";
import NavTabs from "./JumbTab";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import JumbTab from "./JumbTab";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Blog") {
      return <Blog />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <div className="jumbotron text-center bg-primary"><h1>Employee Directory</h1></div>
        <p>hello</p>
      </div>
    );
  }
}

export default Portfolio;
