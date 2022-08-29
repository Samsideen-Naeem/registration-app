import { useContext,useEffect,useState } from "react"
import {Link, useNavigate}from 'react-router-dom'



function Register() {
  const Navigate = useNavigate();
  const { success, loading, user } = useContext();
  const [username, setUsename] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (success) {
      navigate("/")
    }
  }, [success])






  return (
    <form className="form">
      <div>
        <div className="form-group">
          <label htmlFor="username">username</label>
          <input type="text" className='form-control'
            placeholder="enter a username" value={username} />
          
      </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="email" className='form-control'
            placeholder="examplegmail.com" value={email} />
          
      </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input type="password" className='form-control'
            placeholder="enter a username" value={password} />
          
        </div>
        <button type="submit">
        
        </button>
        <div className="row">
          I already have an account
          <link to="/login">
            login to your account
          </link>
        </div>
     </div>  
    </form>
  )
}

export default Register
