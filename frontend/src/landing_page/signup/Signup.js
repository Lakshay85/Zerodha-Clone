import React,{useState} from "react";
import LoginForm from "./LoginForm";
import Signin from './Signin'
function Signup() {
  const [showFirst, setShowFirst] = useState(true);

  // Function to toggle the component
  const toggleComponent = () => {
    setShowFirst(!showFirst); // Toggle between true and false
  };
  
  return (
    <div className="container">
      <div className=" row mt-5 text-center mx-5">
        <div className="col-8 mt-5">
          <img src="media/signup.png" alt="signup"/>
        </div>
        <div className="col-4 mt-5">
          <h1>Signup</h1>
          {showFirst ? <LoginForm/>:<Signin/>}
          
          <p>If you want to {showFirst ? "Signin":"Login"}<button onClick={toggleComponent} style={{border:"none",color:"blue",background:"white" }}> click here </button></p>

        </div>
      </div>

      <div className=" text-muted mt-2 px-5">
        <p className="px-5"  style={{ fontSize: 15 }} >
          I authorise Zerodha to contact me even if my number is registered on
          DND. I authorise Zerodha to fetch my KYC information from the C-KYC
          registry with my PAN. Please visit <a href="#">this article</a> to know more.
        </p>
        <p  className="px-5" style={{ fontSize: 15 }}>
          If you are looking to open a HUF, Corporate, Partnership, or NRI
          account, you have to use the <a href="#">offline forms</a>. For help, <a href="#">click here</a>.
        </p>
      </div>

      <div style={{height:100}}>
      </div>
    </div>
  );
}

export default Signup;
