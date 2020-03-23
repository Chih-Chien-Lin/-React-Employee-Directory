import React, { Component } from "react";
import JumboSec from "./JumboSec"
import TableSec from "./TableSec"
import SearchForm from "./SearchForm"


var employees = [
  {
    id: 1,
    name: "Justin",
    email: "justin@gmail.com",
    phone: "123-456-789",
    position: "Engineer"
  },
  {
    id: 2,
    name: "Ben",
    email: "ben@gmail.com",
    phone: "321-456-789",
    position: "developer"
  },
  {
    id: 3,
    name: "John",
    email: "john@gmail.com",
    phone: "528-456-789",
    position: "Engineer"
  },
  {
    id: 4,
    name: "Kate",
    email: "kate@gmail.com",
    phone: "284-456-789",
    position: "Manager"
  },
  {
    id: 5,
    name: "Sandy",
    email: "sandy@gmail.com",
    phone: "418-456-789",
    position: "Engineer"
  },
  {
    id: 6,
    name: "Julia",
    email: "julia@gmail.com",
    phone: "732-456-789",
    position: "Engineer"
  },
];
var employeeList = [];
var toBeSearched = "";

employees.map(each => (
  employeeList.push(each.name)
));

// Match function!!
// const match = (s) => {
//   const p = Array.from(s).reduce((a, v, i) => `${a}[^${s.substr(i)}]*?${v}`, '');
//   const re = RegExp(p);

//   return employeeList.filter(v => v.match(re));
// };

class EmployeeDirect extends Component {
  state = {
    searched: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { value } = event.target;
    toBeSearched = employees.filter(employee => employee.name.match(value));
    console.log("tobesearched: ", toBeSearched)
    // Updating the input's state
    this.setState({
      searched: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({
      searched: ""
    });
  };



  render() {
    return (
      <div>
        <JumboSec />

        <SearchForm
          search={this.state.searched}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <br></br><br></br>

        {this.state.searched ? (
          <TableSec
            employees={toBeSearched}
          />
        ) : (
            <TableSec
              employees={employees}
            />
          )}

      </div>
    );
  }
}

export default EmployeeDirect;
