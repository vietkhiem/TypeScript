import React, {useState} from 'react'

export default function Login() {
  const [usernameValue, setUsernameValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  console.log(usernameValue, passwordValue);

  const onSubmit = () :any => {
    const data = {
      username: usernameValue,
      password: passwordValue
    };
    console.log(data)
  }
  return (
    <>
      <form action="">
        <input type="text"
        placeholder='username'
          onChange={(event) => setUsernameValue(event.target.value)}
        />
        <input type="password"
        placeholder='password'
        onChange={(event) => setPasswordValue(event.target.value)}
        />
        <button type='button' onClick={() => onSubmit()}>Submit</button>
      </form>
    </>
  )
}
