import React, { useState } from "react";
import "../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/auth/login", { username, password, role })
      .then((res) => {
        if (res.data.login && res.data.role === "admin") {
          navigate("/dashboard");
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='login-page'>
      <div className='login-container'>
        <h2 className=''>Login</h2>
        <br />
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            placeholder='enter username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>password:</label>
          <input
            type='password'
            id='password'
            placeholder='enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='role'>Role:</label>
          <select name='role' onChange={(e) => setUserName(e.target.value)}>
            <option value='admin'>Admin</option>
            <option value='student'>Student</option>
          </select>
        </div>
        <button className='btn-login' onClick={handleSubmit}>
          login
        </button>
      </div>
    </div>
  );
}

export default Login;