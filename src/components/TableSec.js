import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function TableSec(props) {
    console.log("props: ", props)
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">position</th>
                    </tr>
                </thead>
                <tbody>

                    {props.employees.map(employee => (
                        <tr key = {employee.id}>
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