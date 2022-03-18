import React, {useState} from 'react'

export default function Login() {
  const [usernameValue, setUsernameValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  return (
    <>
      <form action="">
        <input type="text"
        placeholder='username'
          onChange={(enven) => setUsernameValue(even)}
        />
        <input type="text" placeholder='password' />
        <button>Submit</button>
      </form>
    </>
  )
}
