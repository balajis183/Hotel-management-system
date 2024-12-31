import React from "react";
import Layout from "../components/Layout";

function About() {
  return (
    <div>
      <Layout>
        <section id="about-us">
          <h3>About StayHub</h3>
          <p>
            StayHub is an innovative and comprehensive hotel management platform
            designed to revolutionize the way hotels operate. Aimed at
            simplifying hotel operations, enhancing guest experiences, and
            streamlining internal processes, StayHub empowers hotel staff and
            customers alike. It offers a seamless, user-friendly interface that
            supports both administrative and guest functions, enabling smooth
            operations in every aspect of hotel management.
          </p>

          <p>
            With StayHub, managing room bookings, tracking customer profiles,
            and handling feedback becomes effortless. Our platform brings
            together powerful features that cater to the specific needs of both
            staff and guests, ensuring maximum efficiency and satisfaction.
          </p>

          <ul>
            <li>
              <strong>User Authentication:</strong> Secure and role-based
              authentication that ensures only authorized personnel have access
              to their respective areas of the platform. Guests and hotel staff
              can securely access the system and perform necessary actions.
            </li>
            <li>
              <strong>Room Management:</strong> StayHub allows hotel staff to
              manage room availability in real-time, update pricing, and set the
              room status (Available, Booked, Maintenance). This helps maintain
              room occupancy and ensures customers always know what's available.
            </li>
            <li>
              <strong>Real-Time Booking System:</strong> Guests can search for
              and book available rooms instantly. The system shows room status
              and availability in real-time, reducing booking errors and
              providing a seamless booking experience for customers. Hotel staff
              can manage and track bookings in one place, enabling efficient
              check-ins and check-outs.
            </li>
            <li>
              <strong>Customer Profiles:</strong> StayHub stores detailed
              customer information, making it easier for hotel staff to manage
              customer preferences, track their booking history, and personalize
              their services.
            </li>
            <li>
              <strong>Feedback and Ratings:</strong> After a stay, customers can
              rate their experience and provide feedback on their room and
              overall service. This valuable information helps hotel management
              improve their services and enhance the customer experience.
            </li>
          </ul>

          <p>
            StayHub combines the power of modern technology with the simplicity
            needed to streamline hotel management. Whether you’re a guest
            booking your next stay or a hotel staff member managing rooms and
            bookings, StayHub ensures a smooth and effective experience for all.
          </p>
        </section>
      </Layout>
    </div>
  );
}

export default About;
