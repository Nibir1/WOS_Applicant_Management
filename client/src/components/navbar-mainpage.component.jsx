import React from "react";
import "src/css/navbar-mainpage.css";

const Navbar_mainpage = () => {
  return (
    <>
      <nav className="navbar-mainpage-container">
        <figure className="wos-header">
          <img src="src/assets/WOS_Logo_IMG.png" alt="WOS Logo Image" />
          <h1>WayOut Solutions</h1>
        </figure>

        <figure className="user-profile">
          <img src="src/assets/account.png" alt="user profile image" />

          <section>
            <h1>User Name</h1>
            <h2>Designation</h2>
          </section>

          {/* User Profile Settings Button */}
          <button></button>
        </figure>

        <section className="student-counts">
          <figure className="total-students">
            <img
              src="src/assets/Total_Students_Icon.png"
              alt="total students icon"
            />

            <section>
              <h1>500</h1>
              <h2>Students</h2>
            </section>
          </figure>

          <figure className="active-students">
            <img
              src="src/assets/Active_Student_Icon.png"
              alt="total students icon"
            />

            <section>
              <h1>30</h1>
              <h2>Students</h2>
            </section>
          </figure>
        </section>

        <section className="main-nav-buttons">
          <button>Home Page</button>
          <button>Applicant Registration</button>
          <button>Form Fill-up</button>
          <button>F1/F2, B1/B2, UK Visa Chat</button>
        </section>

        <section className="logout-rights">
          <h1>Logout</h1>
          <p>All rights reserved by Chronophase - 2023</p>
        </section>
      </nav>
    </>
  );
};

export default Navbar_mainpage;
