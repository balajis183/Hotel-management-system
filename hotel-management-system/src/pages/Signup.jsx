import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [message, setMessage] = useState("");

  function handleSubmit(event) {
    const formObj = { name, email, password, confirmPassword };
    console.log(formObj);

    if (formObj.password === formObj.confirmPassword) {
      alert("Password matched");
    } else {
      alert("Password did not match");
    }

    axios
      .post("http://localhost:8000/users/register-user", formObj)
      .then((res) => {
        console.log(res);
        alert("User Signup Successful");
      })
      .catch((err) => {
        console.log("Error", err);
        alert("Error in Signup please try again ");
      });
    event.preventDefault();

    // if (password !== confirmPassword) {
    //   setMessage("Passwords do not match.");
    //   return;
    // }
  }

  return (
    <div>
      <Layout>
        <div className="container border border-5 border-primary  rounded-5 ">
          <h1 className="text-center display-4">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            {/* Name  */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                required
              />
            </div>

            {/* Email  */}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your Email address"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
            </div>

            {/* password  */}

            <div className="form-group">
              <label htmlFor="password"> Set Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </div>

            {/* confirmPassword */}

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm your password"
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
                required
              />
            </div>

            {/* submit button  */}

            <div className="form-group d-flex justify-content-center">
              <input
                type="submit"
                className="btn btn-primary p-3 m-3 rounded-2"
              />
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default Signup;
