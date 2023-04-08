import React from "react";
import "src/css/applicant-registration.css";
const Applicant_Registration = () => {
  return (
    <form className="applicant-registration-container">
      <section className="label-input">
        <label>Applicant's Name</label>
        <input type="text" id="applicants_Name" />
      </section>

      <section className="label-input">
        <label>Father's Name</label>
        <input type="text" id="fathers_name" />
      </section>

      <section className="label-input">
        <label>Mother's Name</label>
        <input type="text" id="mothers_name" />
      </section>

      <section className="label-input">
        <label>Applicant's Phone Number</label>
        <input type="text" id="applicants_phone_number" />
      </section>

      <section className="label-input">
        <label>Father's Phone Number</label>
        <input type="text" id="fathers_phone_number" />
      </section>

      <section className="label-input">
        <label>Mother's Phone Number</label>
        <input type="text" id="mothers_phone_number" />
      </section>

      <section className="label-input">
        <label>Applicant's Date of Birth</label>
        <input type="date" id="applicants_date_of_birth" />
      </section>

      <section className="label-input">
        <label>Father's Date of Birth</label>
        <input type="date" id="fathers_date_of_birth" />
      </section>

      <section className="label-input">
        <label>Mother's Date of Birth</label>
        <input type="date" id="mothers_date_of_birth" />
      </section>

      <section className="label-input">
        <label>Admission Date</label>
        <input type="date" id="admission_date" />
      </section>

      <section className="label-input">
        <label>Applicant's Personal Email</label>
        <input type="text" id="applicants_personal_email" />
      </section>

      <section className="label-input">
        <label>Email by WOS for Applicant</label>
        <input type="text" id="email_by_WOS_for_applicant" />
      </section>

      <section className="label-input">
        <label>Applican'ts Home Address</label>
        <input type="text" id="applicants_home_address" />
      </section>

      <section className="label-input">
        <label>Applican'ts Messenger Link</label>
        <input type="text" id="applicants_messenger_link" />
      </section>

      <section className="label-input">
        <label>Applican'ts Profession</label>
        <input type="text" id="applicants_profession" />
      </section>

      <section className="label-input">
        <label>Visa Status</label>
        <select name="visa_status" id="visa_status">
          <option value="First Shot">First Shot</option>
          <option value="Second Shot">Second Shot</option>
        </select>
      </section>

      <section className="label-input">
        <label>Country of Choice</label>
        <select name="country_of_choice" id="country_of_choice">
          <option value="USA">USA</option>
          <option value="England">England</option>
          <option value="Austria">Austria</option>
          <option value="Croatia">Croatia</option>
        </select>
      </section>

      <section className="label-input">
        <label>Applicant Status</label>
        <select name="applicant_status" id="applicant_status">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </section>

      <section className="file-input">
        <label>Applican'ts Photo</label>
        <input type="file" id="applicants_photo" />
      </section>

      <section className="file-input">
        <label>Passport</label>
        <input type="file" id="passport" />
      </section>

      <section className="file-input">
        <label>NID / Birth Certificate</label>
        <input type="file" id="NID_Birth_Certificate" />
      </section>

      <section className="file-input">
        <label>Applicant's CV</label>
        <input type="file" id="applicants_cv" />
      </section>

      <section className="file-input">
        <label>Recommendation Letter 1</label>
        <input type="file" id="recommendation_letter_1" />
      </section>

      <section className="file-input">
        <label>Recommendation Letter 2</label>
        <input type="file" id="recommendation_letter_2" />
      </section>

      <section className="file-input">
        <label>SSc Transcript</label>
        <input type="file" id="SSc_transcript" />
      </section>

      <section className="file-input">
        <label>SSc Certificate</label>
        <input type="file" id="SSc_certificate" />
      </section>

      <section className="file-input">
        <label>HSc Transcript</label>
        <input type="file" id="HSc_transcript" />
      </section>

      <section className="file-input">
        <label>HSc Certificate</label>
        <input type="file" id="HSc_certificate" />
      </section>

      <section className="file-input">
        <label>BSc Transcript</label>
        <input type="file" id="BSc_transcript" />
      </section>

      <section className="file-input">
        <label>BSc Certificate</label>
        <input type="file" id="BSc_certificate" />
      </section>

      <section className="file-input">
        <label>MSc Transcript</label>
        <input type="file" id="MSc_transcript" />
      </section>

      <section className="file-input">
        <label>MSc Certificate</label>
        <input type="file" id="MSc_certificate" />
      </section>

      <section className="file-input">
        <label>English Certificate</label>
        <input type="file" id="english_certificate" />
      </section>

      <button
        className="register-applicant"
        style={{ backgroundColor: "#8F5942" }}
      >
        Register Applicant
      </button>
    </form>
  );
};

export default Applicant_Registration;
