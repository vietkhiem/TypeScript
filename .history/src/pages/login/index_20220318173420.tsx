import React, {useState} from 'react'

export default function Login() {
  const [usernameValue, setUsernameValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')
  return (
    <>
      <form action="">
        <input type="text"
        placeholder='username'
          onChange={(even) => setUsernameValue(even.target.value)}
        />
        <input type="text"
        placeholder='password'
        onChange={(even) => setPasswordValue(even.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  )
}
