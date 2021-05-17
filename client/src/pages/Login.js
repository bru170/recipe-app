import react from 'react'
import Login from '../components/login/Login'
import Register from '../components/login/Register'

export default function Authentication(){
   return (
       <>
          <button className="login">Login</button>
          <button className="logout">Logout</button>
       </>
   )
}