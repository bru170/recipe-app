import React, {useState} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        Axios.post('http://localhost:5000/login', {
            email: email, 
            password: password
        }).then((response) => {
            console.log(response);
        })
    };

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <form>
                <h1>Login</h1>    
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        className="email" 
                        placeholder="Email"
                        id="email" 
                        onClick = {(e)=>{
                            setEmail(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        className="password" 
                        placeholder="Password"
                        id="password"
                        onClick = {(e)=>{
                            setPassword(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="login">
                     <button type="submit" onClick={login}>Submit</button>
                </div> 
                <small>Don't have an account?</small>
                <div className="createAccount">
                 <Link to="/Register"><button type="submit">Create an Account</button></Link>    
                </div>
                </form>
            </div>
        </div>
    );
}

export default Login;  