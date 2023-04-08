import React from "react";
import "src/css/applicant-registration.css";
const View_Applicant_General_Informations = () => {
  return (
    <section className="applicant-registration-container">
      <section className="file-input">
        <label>Applican'ts Photo</label>
        <img src="src/assets/Applicant_Profile_Image.png" />
        <button className="register-applicant">Download Photo</button>
      </section>

      <button className="register-applicant">Chat With Applicant</button>
      <button className="register-applicant">Form Informations</button>
      <button className="register-applicant">Delete Profile</button>
      <button
        className="register-applicant"
        style={{ backgroundColor: "#8F5942" }}
      >
        Update General Informations
      </button>

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
        <label>Paid I20 Amount</label>
        <input type="text" id="paid_i20_amount" />
      </section>

      <section className="label-input">
        <label>Paid SEVIS Amount</label>
        <input type="text" id="paid_SEVIS_amount" />
      </section>

      <section className="label-input">
        <label>Paid After VISA Amount</label>
        <input type="text" id="paid_after_VISA_amount" />
      </section>

      <section className="label-input">
        <label>I20 Payment Status</label>
        <select name="I20 Payment Status" id="i20_payment_status">
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
        </select>
      </section>

      <section className="label-input">
        <label>SEVIS Payment Status</label>
        <select name="SEVIS Payment Status" id="SEVIS_payment_status">
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
        </select>
      </section>

      <section className="label-input">
        <label>After VISA Payment Status</label>
        <select name="After VISA Payment Status" id="after_VISA_payment_status">
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
        </select>
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
        <label>Passport</label>
        <button>View File</button>
      </section>

      <section className="file-input">
        <label>NID / Birth Certificate</label>
        <button>View File</button>
      </section>

      <section className="file-input">
        <label>Applicant's CV</label>
        <button>View File</button>
      </section>

      <section className="file-input">
        <label>Recommendation Letter 1</label>
        <button>View File</button>
      </section>

      <section className="file-input">
        <label>Recommendation Letter 2</label>
        <button>View File</button>
      </section>

      <section className="file-input">
        <label>SSc Transcript</label>
        <button>View File</button>
      </section>

      <section className="file-input">
        <label>SSc Certificate</label>
        <button>View File</button>
      </section>

      <section className="file-input">
        <label>HSc Transcript</label>
        <button>View File</button>
      </section>

      <section className="file-input">
        <label>HSc Certificate</label>
        <button>View File</button>
      </section>

      <section className="file-input">
        <label>BSc Transcript</label>
        <button>View File</button>
      </section>

      <section className="file-input">
        <label>BSc Certificate</label>
        <button>View File</button>
      </section>

      <section className="file-input">
        <label>MSc Transcript</label>
        <button>View File</button>
      </section>

      <section className="file-input">
        <label>MSc Certificate</label>
        <button>View File</button>
      </section>

      <section className="file-input">
        <label>English Certificate</label>
        <button>View File</button>
      </section>
    </section>
  );
};

export default View_Applicant_General_Informations;
