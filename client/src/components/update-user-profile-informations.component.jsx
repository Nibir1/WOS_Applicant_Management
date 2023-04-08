import React from "react";
import "src/css/form-fillup.css";

const Update_User_Profile_Informations = () => {
  return (
    <form className="form-fillup-container ">
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
          <label>New Password</label>
          <input type="text" id="new_user_password" />
        </section>

        <section className="user-input">
          <label>User's Designation</label>
          <input type="text" id="users_designation" />
        </section>

        <section className="user-input">
          <button>Update Informations</button>
        </section>
      </section>
    </form>
  );
};

export default Update_User_Profile_Informations;
