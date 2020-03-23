import React, { Component } from "react";
import JumboSec from "./JumboSec"
import TableSec from "./TableSec"

class EmployeeDirect extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };




  render() {
    return (
      <div>
        <JumboSec />
        <br></br><br></br>
        <TableSec />
      </div>
    );
  }
}

export default EmployeeDirect;
