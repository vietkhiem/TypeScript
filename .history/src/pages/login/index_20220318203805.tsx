import React, { useState } from 'react'
import Table from '../table';

const Student = () => {
  type studenType = {
    name: string
    age: number
    phone: string
    email: string
  }
  const [data, setData] = useState<studenType[]>([
    {
      name: 'Nguyễn Viết Khiêm',
      age: 21,
      phone: '0965225408',
      email: 'khiemnvph10889@fpt.edu.vn',
    }
  ])
  const removeProduct = (id: number) => {
    console.log(id)
  }
  type info = {
    age: number
  }
  const showAge = (props: info): number => {
    return props.age
  }
  const [isShowTable, SetShowTable] = useState<boolean>(true)
  const [namevalue, setname] = useState<string>('')
  const [agevalue, setage] = useState<string>('')
  const [phonevalue, setphone] = useState<string>('')
  const [emailvalue, setemail] = useState<string>('')
  const [avatarvalue, setavatar] = useState<string>('')
  const onSubmit = (): any => {
    const datanew: any = {
      name: namevalue,
      age: +agevalue,
      phone: phonevalue,
      email: emailvalue,
      avatar: avatarvalue,
    }
    console.log(datanew);

    setData([...data,datanew])
  }
  return (
    <>
      <div className="w-[1200px] mx-auto">
        <form action="">
          <div>
            <label htmlFor="">Tên</label>
            <input
              onChange={(e) => setname(e.target.value)}
              className="border border-2 border-black"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="">Tuổi</label>
            <input
              onChange={(e) => setage(e.target.value)}
              className="border border-2 border-black"
              type="number"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="">SDT</label>
            <input
              onChange={(e) => setphone(e.target.value)}
              className="border border-2 border-black"
              type="text"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="">Email</label>
            <input
              onChange={(e) => setemail(e.target.value)}
              className="border border-2 border-black"
              type="email"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="">Avatar</label>
            <input
              onChange={(e) => setavatar(e.target.value)}
              className="border border-2 border-black"
              type="text"
            />
          </div>
          <button
            onClick={(e) => {
              onSubmit()
              e.preventDefault()
            }}
            className="mt-4  border-2 border-black"
          >
            Đăng ký
          </button>
        </form>
        <br />
        <br />
        <p>Tuổi : {showAge({ age: 20 })}</p>
      </div>
    </>
  )
}

export default Student;