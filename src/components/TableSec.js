import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function TableSec(props) {



    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={props.handleSort} scope="col" sorted = {props.state.id} name = "id">ID</th>
                        <th onClick={props.handleSort} scope="col" sorted = {props.state.name} name = "name">Name</th>
                        <th onClick={props.handleSort} scope="col" sorted = {props.state.phone} name = "phone">Phone</th>
                        <th onClick={props.handleSort} scope="col" sorted = {props.state.email} name = "email">Email</th>
                        <th onClick={props.handleSort} scope="col" sorted = {props.state.position} name = "position">position</th>
                    </tr>
                </thead>
                <tbody>

                    {props.employees.map(employee => (
                        <tr key={employee.id}>
                            <th scope="row" >{employee.id}</th>

                            <td>{employee.name}</td>

                            <td>{employee.phone}</td>

                            <td>{employee.email}</td>
                            <td>{employee.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableSec;