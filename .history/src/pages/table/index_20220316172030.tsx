import React from "react";

type TableProps = {
  rows: []
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
                    <td></td>
                  </tr>
                ))
              }
          </tbody>
        </table>
    );
}
export default Table;