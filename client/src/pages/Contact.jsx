import React from "react";
import Layout from "../components/Layout";

function Contact() {
  return (
    <div>
      <Layout>
        <section id="contact-us" className="container">
          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you! Whether you have questions, feedback, or
            need assistance, feel free to reach out to us. Our team is ready to
            help you with anything related to <strong>StayHub</strong>, from
            technical support to general inquiries.
          </p>

          <h3>Reach Us via the Following Channels:</h3>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@stayhub.com">support@stayhub.com</a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+18001234567">+1 (800) 123-4567</a>
            </li>
            <li>
              <strong>Address:</strong> StayHub Inc., 1234 Hotel Avenue, Suite
              567, Cityville, Country
            </li>
            <li>
              <strong>Business Hours:</strong> Monday to Friday, 9:00 AM to 6:00
              PM
            </li>
          </ul>

          <p>
            You can also fill out the form below, and we'll get back to you as
            soon as possible!
          </p>

          <form action="/submit-contact-form" method="POST">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      </Layout>
    </div>
  );
}

export default Contact;
