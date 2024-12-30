import React, { useState } from "react";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirPassword] = useState("");

  return (
    <div>
      <Layout>
        <div className="container border border-5 border-primary  rounded-5 ">
          <h1 className="text-center display-4">Sign Up</h1>
          <form>
            {/* Name  */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter your name"
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
                required
              />
            </div>

            {/* password  */}

            <div className="form-group">
              <label htmlFor="password"> Set Password</label>
              <input
                type="text"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* confirmPassword */}

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="text"
                name="confirmPassword"
                id="confirmPassword"
                className="form-control"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* submit button  */}

         <div className="form-group d-flex justify-content-center">
            <input type="submit" className="btn btn-primary p-3 m-3 rounded-2" />
         </div>

          </form>
        </div>
      </Layout>
    </div>
  );
}

export default Signup;
