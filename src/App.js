import React from "react";
import EmployeeDirectory from "./components/Employee-directory";

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
];

const App = () => <EmployeeDirectory />;

export default App;
