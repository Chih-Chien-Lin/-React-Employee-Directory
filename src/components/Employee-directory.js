import React, { Component } from "react";
import JumboSec from "./JumboSec"
import TableSec from "./TableSec"
import SearchForm from "./SearchForm"


const employees = [
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
// var toBeSearched;
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
    searched: "",
    toBeSearched: [],
    id: "false",
    name: "false",
    email: "false",
    phone: "false",
    position: "false"
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { value } = event.target;
    // toBeSearched = employees.filter(employee => employee.name.match(value));
    console.log("new employees: ",employees)
    // console.log("tobesearched: ", toBeSearched)
    // Updating the input's state
    this.setState({
      searched: value,
      toBeSearched : employees.filter(employee => employee.name.match(value));
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    this.setState({
      searched: ""
    });
  };

  handleSort = event => {
    console.log("to sort function")
    var sortCategory = event.target.getAttribute("name");
    console.log("event of sort: ",sortCategory)
    if (event.target.getAttribute("sorted") === "false") {
      if (sortCategory === "name") {
        console.log("Jump to name")
        this.setState({
          [sortCategory]: "true"
        });
        employees.sort(function (a, b) {
          var x = a.name.toLowerCase();
          var y = b.name.toLowerCase();
          if (x < y) { return -1; }
          if (x > y) { return 1; }
          return 0;
        });
      } else if (sortCategory === "phone") {
        console.log("Jump to phone")
        this.setState({
          [sortCategory]: "true"
        });
        employees.sort(function (a, b) {
          var x = a.phone.toLowerCase();
          var y = b.phone.toLowerCase();
          if (x < y) { return -1; }
          if (x > y) { return 1; }
          return 0;
        });
      } else if (sortCategory === "email") {
        console.log("Jump to email")
        this.setState({
          [sortCategory]: "true"
        });
        employees.sort(function (a, b) {
          var x = a.email.toLowerCase();
          var y = b.email.toLowerCase();
          if (x < y) { return -1; }
          if (x > y) { return 1; }
          return 0;
        });
      } else if (sortCategory === "position") {
        console.log("Jump to position")
        this.setState({
          [sortCategory]: "true"
        });
        employees.sort(function (a, b) {
          var x = a.position.toLowerCase();
          var y = b.position.toLowerCase();
          if (x < y) { return -1; }
          if (x > y) { return 1; }
          return 0;
        });
      };
    } else {
      console.log("Jump to else ID")
      console.log("Jump to id")
      this.setState({
        [sortCategory]: "false"
      });
      employees.sort(function (a, b) {
        console.log("a: ",a.id)
        var x = a.id;
        var y = b.id;
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      });
    };

  }


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
            employees = {toBeSearched}
            state = {this.state}
            handleSort = {this.handleSort}
          />
        ) : (
            <TableSec
              employees = {employees}
              state = {this.state}
              handleSort = {this.handleSort}
            />
          )}

      </div>
    );
  }
}

export default EmployeeDirect;
