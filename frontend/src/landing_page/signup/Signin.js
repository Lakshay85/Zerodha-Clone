import React, { useState } from "react";
import axios from "axios";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");
  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState("");
  // const [showOtpField, setShowOtpField] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { email, password,otp };

    
      const response = await axios
        .post("http://localhost:3002/signin", userData)
        .then((response) => {
          setMessage(response.data.message || "User created successfully..!");
          setEmail("");
          setPassoword("");
          setOtp("");         
          //window.location.href = "http://localhost:3001/";
        })
        .catch((error) => {
          setMessage("Signin failed: Enter Proper Details");
          console.error("Error creating user:", error);
        });

    
  };

  // Function to toggle button visibility
  const toggleButtonVisibility = (event) => {
    event.preventDefault();
    setIsButtonVisible(!isButtonVisible);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="text-center">
        <div className="row mt-3">
          <div className="form-group my-2">
            <label className="my-2" htmlFor="inputEmail4">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter you email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group my-2 ">
            <label className="my-2" htmlFor="inputPassword4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassoword(e.target.value);
              }}
            />
          </div>
          <div
            className="form-group my-2 "
            style={{ display: isButtonVisible ? "inline" : "none" }}
          >
            <label className="my-2" htmlFor="otp">
              Enter OTP
            </label>
            <input
              type="text"
              className="form-control"
              id="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
          </div>
        </div>

        <button
          onClick={toggleButtonVisibility}
          className="btn btn-primary my-2"
          style={{ display: isButtonVisible ? "none" : "inline" }}
        >
          next
        </button>
        <button
          className="btn btn-primary my-2"
          style={{ display: isButtonVisible ? "inline" : "none" }}
        >
          Enter
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Signin;
