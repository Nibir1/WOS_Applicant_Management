import React from "react";
import "src/css/profile-card.css";

const Profile_Card = () => {
  return (
    <figure className="profile-card">
      <img src="src/assets/Applicant_Profile_Image.png" />
      <label>Applicant Name</label>
      <button>Visit Profile</button>
    </figure>
  );
};

export default Profile_Card;
