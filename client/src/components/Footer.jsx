import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className=" py-4">
      <div className="container">
        <div className="row">
          {/* Copyright Section */}
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 copy">© Copy right 2024</p>
          </div>

          {/* Subscribe Section */}
          <div className="col-md-6 text-center text-md-end">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
