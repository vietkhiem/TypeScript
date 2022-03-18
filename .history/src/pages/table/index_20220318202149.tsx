import React from 'react'
type rowType = {
  name: string
  age: number
  phone: string
  email: string
  avatar: string
}
type typeshow = {
  rows: rowType[],
}
const Table = (props: typeshow) => {
  return (
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Tuổi</th> 
          <th>SDT</th>
          <th>Email</th>
          <th>Avatar</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((item, index) => (
          <tr key={index}>
            <td style={{ verticalAlign: 'middle' }}>{index + 1}</td>
            <td style={{ verticalAlign: 'middle' }}>{item.name}</td>
            <td style={{ verticalAlign: 'middle' }}>{item.age}</td>
            <td style={{ verticalAlign: 'middle' }}>{item.phone}</td>
            <td style={{ verticalAlign: 'middle' }}>{item.email}</td>
            <td style={{ verticalAlign: 'middle' }}>
              <img src={item.avatar} alt="" />
            </td>
            <td>
              <button
                className="btn btn-danger"
              >
                Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table