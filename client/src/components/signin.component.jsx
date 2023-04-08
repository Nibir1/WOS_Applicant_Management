import React from "react";
import "src/css/signin.css";

const Signin = () => {
  return (
    <section className="signin-flex-container">
      <form className="signin-left-section-flex-container">
        <h1>Sign in to WOS</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
        <button>Toggle Theme</button>
      </form>

      <section className="signin-right-section-flex-container">
        <h1>Hello, Mate!</h1>
        <p>Welcome to WayOut Solutions Applicant Management System</p>
      </section>
    </section>
  );
};
export default Signin;
