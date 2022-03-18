import React from "react";

type row = {
  name: string,
  age: number,
  address: string
}
type TableProps = {
  rows: row[]
}
function Table({rows} : TableProps) {
    return (
      <table className="customers">
          <thead>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Avatar</th>
              <th>Action</th>
          </thead>
          <tbody>
              {
                rows.map(row => (
                  <tr>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.address}</td>
                  </tr>
                ))
              }
          </tbody>
        </table>
    );
}
export default Table;