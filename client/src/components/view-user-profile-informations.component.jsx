import React from "react";
import "src/css/form-fillup.css";

const View_User_Profile_Informations = () => {
  return (
    <section className="form-fillup-container ">
      <section>
        <h1>User Profile Information</h1>
        <section className="user-input">
          <label>User Name</label>
          <input type="text" id="user_name" />
        </section>

        <section className="user-input">
          <label>User's Phone Number</label>
          <input type="text" id="users_phone_number" />
        </section>

        <section className="user-input">
          <label>User's Email</label>
          <input type="email" id="users_email" />
        </section>

        <section className="user-input">
          <label>User's Designation</label>
          <input type="text" id="users_designation" />
        </section>

        <section className="user-input">
          <button style={{ backgroundColor: "#8F5942" }}>
            Update Informations
          </button>
        </section>
      </section>

      <section>
        <h1>Add New User</h1>
        <section className="user-input">
          <label>User Name</label>
          <input type="text" id="user_name" />
        </section>

        <section className="user-input">
          <label>User's Phone Number</label>
          <input type="text" id="users_phone_number" />
        </section>

        <section className="user-input">
          <label>User's Email</label>
          <input type="email" id="users_email" />
        </section>

        <section className="user-input">
          <label>Password</label>
          <input type="text" id="new_user_password" />
        </section>

        <section className="user-input">
          <label>User's Designation</label>
          <input type="text" id="users_designation" />
        </section>

        <section className="user-input">
          <button>Add New User</button>
        </section>
      </section>
    </section>
  );
};

export default View_User_Profile_Informations;
