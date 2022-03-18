import React from "react";

type TableProps = {
  rows: []
}
function Table({rows} : TableProps) {
    return (
      <table className="customers">
          <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Avatar</th>
              <th>Action</th>
            </tr>
          <tr>
              <td>John</td>
              <td>21</td>
              <td>012345678</td>
              <td>Vietkhiemdz@gmail.com</td>
              <td><img src="https://picsum.photos/60/50" alt="" /></td>
              <td>
                  <button className="px-2 py-1 text-[0.8rem] bg-red-300 rounded-sm ">Delete</button>
                </td>
            </tr>
          <tr>
              <td>Elsa</td>
              <td>21</td>
              <td>012345678</td>
              <td>Vietkhiemdz@gmail.com</td>
              <td><img src="https://picsum.photos/60/50" alt="" /></td>
              <td>
                  <button className="px-2 py-1 text-[0.8rem] bg-red-300 rounded-sm ">Delete</button>
                </td>
            </tr>
          <tr>
              <td>Peter</td>
              <td>21</td>
              <td>012345678</td>
              <td>Vietkhiemdz@gmail.com</td>
              <td><img src="https://picsum.photos/60/50" alt="" /></td>
              <td>
                  <button className="px-2 py-1 text-[0.8rem] bg-red-300 rounded-sm ">Delete</button>
                </td>
            </tr>
        </table>
    );
}
export default Table;