import React from "react";

type row = {
  name: string,
  age: number,
  address: string,
  email: string,
  action: string
}
type TableProps = {
  rows: row[]
}
function Table({rows} : TableProps) {
    return (
      <table className="customers">
          <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {
                rows.map((row, index) => (
                  <tr key={index}>
                    <td>{index +1}</td>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.address}</td>
                    <td>{row.email}</td>
                    <td>
                      <button>{row.action}</button>
                    </td>
                  </tr>
                ))
              }
          </tbody>
      </table>
    );
}
export default Table;