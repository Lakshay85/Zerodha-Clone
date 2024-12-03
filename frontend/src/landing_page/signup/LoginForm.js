import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");
  const [message, setMessage] = useState('');

  let emailHandler = (e) => {
    setEmail(e.target.value);
  };

  let passwordHandler = (e) => {
    setPassoword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { email, password };

    try{
    const response = await axios.post("http://localhost:3002/login",userData);
    setEmail("");
    setPassoword("");
    
    if(response!==0)
    {
      window.location.href = "http://localhost:3001/";
    }
    }
  
  catch(error){
    setMessage('Login failed: Wrong Credentials');
    console.log("Login Error "+ error);
  }
  }

  return (
    <div>
    <form onSubmit={handleSubmit} className="text-center">
      <div class="row mt-3">
        <div class="form-group my-2">
          <label className="my-2" htmlFor="inputEmail4" >Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Enter you email"
            value={email}
            onChange={emailHandler}
          />
        </div>
        <div class="form-group my-2 ">
          <label className="my-2" htmlFor="inputPassword4">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
            value={password}
            onChange={passwordHandler}
          />
        </div>
      </div>

      <button type="submit" class="btn btn-primary my-2">
        Log in
      </button>
    </form>
    {message && <p>{message}</p>}

    {/* <p>If you don't have Account<a href='handleSignin' style={{textDecoration:"none"}}> click here</a></p>
    <button onClick={handleSignin}> click me</button> */}
    </div>
  );
}

export default LoginForm;
