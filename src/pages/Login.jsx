import axios from 'axios'
import React from 'react'

export default function Login() {
    const submit = (e) => {
        e.preventDefault()
        console.log('submitted')
        const logincred = {
          email: e.target[0].value,
          password: e.target[1].value,
        };

        console.log(logincred)
        const login = async () => {
            try {
            const response = await axios.post("http://localhost:3300/login", logincred);
                const data = await response.data
                localStorage.setItem('token', data.token)
            } catch (error) {
                console.log(error)
            }
        }


        login()
    }
  return (
    <div>
        <form action="#" onSubmit={submit}>
            <input type="text" placeholder='email' />
            <input type="text" placeholder='password' />
            <button>submit</button>
        </form>
    </div>
  )
}
