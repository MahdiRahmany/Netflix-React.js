import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Login = () => {
  const [sign, setSign] = useState("Sign In");

  return (
    <div className="logo">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{sign}</h1>
        <form>
          {sign === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            ""
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{sign}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help ?</p>
          </div>
        </form>
        <div className="form-switch">
          {sign === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSign("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setSign("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;
