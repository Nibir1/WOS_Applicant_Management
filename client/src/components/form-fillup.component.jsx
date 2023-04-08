import React from "react";
import "src/css/form-fillup.css";

const Form_Fillup = () => {
  return (
    <form className="form-fillup-container">
      <section className="user-input email">
        <label>Applicant's Email Address</label>
        <input type="text" id="applicants_email_Address" />
      </section>

      <section className="user-input">
        <h1>
          Personal, Address, Phone, and Passport/Travel Document Information
        </h1>

        <section className="user-input">
          <label>Name Provided</label>
          <input type="text" id="name_provided" />
        </section>

        <section className="user-input">
          <label>Sex</label>
          <select name="sex" id="sex">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
            <option value="Prefer not to answer">Prefer Not To Answer</option>
          </select>
        </section>

        <section className="user-input">
          <label>Marital Status</label>
          <select name="Marital Status" id="marital_status">
            <option value="Married">Married</option>
            <option value="Unmarried">Unmarried</option>
            <option value="Divorced">Divorced</option>
            <option value="Prefer not to answer">Prefer Not To Answer</option>
          </select>
        </section>

        <section className="label-input">
          <label>Applicant's Date of Birth</label>
          <input type="date" id="applicants_date_of_birth" />
        </section>

        <section className="user-input">
          <label>Place of Birth</label>
          <input type="text" id="place_of_birth" />
        </section>

        <section className="user-input">
          <label>National Identification Number</label>
          <input type="text" id="national_identification_number" />
        </section>

        <section className="user-input">
          <label>Home Address</label>
          <input type="text" id="home_address" />
        </section>

        <section className="user-input">
          <label>City</label>
          <input type="text" id="city" />
        </section>

        <section className="user-input">
          <label>Postal Zone/ZIP Code</label>
          <input type="text" id="postal_zone_ZIP_code" />
        </section>

        <section className="user-input">
          <label>Same Mailing Address</label>
          <select name="Same Mailing Address" id="same_mailing_address">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </section>

        <section className="user-input">
          <label>Primary Phone Number</label>
          <input type="text" id="primary_phone_number" />
        </section>

        <section className="user-input">
          <label>Secondary Phone Number</label>
          <input type="text" id="secondary_phone_number" />
        </section>

        <section className="user-input">
          <label>Email Address</label>
          <input type="email" id="email_address" />
        </section>

        <section className="user-input">
          <label>Additional Email Address</label>
          <input type="email" id="additional_email_address" />
        </section>

        <section className="user-input">
          <label>Social Media Platform</label>
          <select name="Social Media Platform" id="social_media_platform">
            <option value="Facebook">Facebook</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Instagram">Instagram</option>
            <option value="Prefer not to answer">Prefer Not To Answer</option>
          </select>
        </section>
        <section className="user-input">
          <label>Social Media Identifier</label>
          <input type="text" id="social_media_identifier" />
        </section>

        <section className="user-input">
          <label>Passport/Travel Document Type</label>
          <input type="text" id="passport_travel_document_type" />
        </section>

        <section className="user-input">
          <label>Passport/Travel Document Number</label>
          <input type="text" id="passport_travel_document_number" />
        </section>

        <section className="user-input">
          <label>Passport Issuance Date</label>
          <input type="date" id="passport_issuance_date" />
        </section>

        <section className="user-input">
          <label>Passport Expiration Date</label>
          <input type="date" id="passport_expiration_date" />
        </section>
      </section>

      <section className="user-input">
        <h1>Travel Information</h1>

        <section className="user-input">
          <label>Purpose of Trip to the U.S</label>
          <input type="text" id="purpose_of_trip_to_the_U.S" />
        </section>

        <section className="user-input">
          <label>Intended Date of Arrival</label>
          <input type="date" id="intended_date_of_arrival" />
        </section>

        <section className="user-input">
          <label>Intended Length of Stay in U.S</label>
          <input type="text" id="intended_length_of_stay_in_U.S" />
        </section>

        <section className="user-input">
          <label>Address where you will stay in the U.S</label>
          <input type="text" id="address_where_you_will_stay_in_the_U.S" />
        </section>

        <section className="user-input">
          <label>Person Paying for Your Trip</label>
          <input type="text" id="person_paying_for_your_trip" />
        </section>

        <section className="user-input">
          <label>Telephone Number</label>
          <input type="text" id="paying_persons_telephone_number" />
        </section>

        <section className="user-input">
          <label>Email Address</label>
          <input type="email" id="paying_persons_email_address" />
        </section>

        <section className="user-input">
          <label>Relationship To You</label>
          <input type="text" id="paying_persons_relationship_to_you" />
        </section>
      </section>

      <section className="user-input">
        <h1>U.S Contact Information</h1>

        <section className="user-input">
          <label>Contact Person Name in the U.S</label>
          <input type="text" id="contact_person_name_in_the_U.S" />
        </section>

        <section className="user-input">
          <label>Organization Name in the U.S</label>
          <input type="text" id="organization_name_in_the_U.S" />
        </section>

        <section className="user-input">
          <label>Relationship To You</label>
          <input type="text" id="paying_persons_relationship_to_you" />
        </section>

        <section className="user-input">
          <label>U.S Contact Address</label>
          <input type="text" id="us_contact_address" />
        </section>

        <section className="user-input">
          <label>Phone Number</label>
          <input type="text" id="phone_number" />
        </section>

        <section className="user-input">
          <label>Email Address</label>
          <input type="email" id="email_address" />
        </section>
      </section>

      <section className="user-input">
        <h1>Family Information</h1>

        <section className="user-input">
          <label>Father's Surnames</label>
          <input type="text" id="fathers_surnames" />
        </section>

        <section className="user-input">
          <label>Father's Given Names</label>
          <input type="text" id="fathers_given_names" />
        </section>

        <section className="user-input">
          <label>Father's Date of Birth</label>
          <input type="date" id="fathers_date_of_birth" />
        </section>

        <section className="user-input">
          <label>Is your Father in the U.S?</label>
          <select
            name="Is your Father in the U.S?"
            id="is_your_father_in_the_U.S"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </section>

        <section className="user-input">
          <label>Mother's Surnames</label>
          <input type="text" id="mothers_surnames" />
        </section>

        <section className="user-input">
          <label>Mother's Given Names</label>
          <input type="text" id="mothers_given_names" />
        </section>

        <section className="user-input">
          <label>Mother's Date of Birth</label>
          <input type="date" id="mothers_date_of_birth" />
        </section>

        <section className="user-input">
          <label>Is your Mother in the U.S?</label>
          <select
            name="Is your Mother in the U.S?"
            id="is_your_mother_in_the_U.S"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </section>
      </section>

      <section className="user-input">
        <h1>Work/Education/Training Information</h1>

        <section className="user-input">
          <label>Primary Occupation</label>
          <input type="text" id="primary_occupation" />
        </section>

        <section className="user-input">
          <label>Present Employer or School Name</label>
          <input type="text" id="present_employer_or_school_name" />
        </section>

        <section className="user-input">
          <label>Address</label>
          <input type="text" id="address" />
        </section>

        <section className="user-input">
          <label>City</label>
          <input type="text" id="city" />
        </section>

        <section className="user-input">
          <label>Postal Zone/ZIP Code</label>
          <input type="text" id="postal_zone_ZIP_code" />
        </section>

        <section className="user-input">
          <label>Country/Region</label>
          <input type="text" id="country_region" />
        </section>

        <section className="user-input">
          <label>Work Phone Number</label>
          <input type="text" id="work_phone_number" />
        </section>

        <section className="user-input">
          <label>Name of Institution</label>
          <input type="text" id="name_of_institution" />
        </section>

        <section className="user-input">
          <label>City</label>
          <input type="text" id="city_of_institution" />
        </section>

        <section className="user-input">
          <label>Postal Zone/ZIP Code</label>
          <input type="text" id="postal_zone_ZIP_code_of_institution" />
        </section>

        <section className="user-input">
          <label>Country/Region</label>
          <input type="text" id="country_region_of_institution" />
        </section>

        <section className="user-input">
          <label>Course of Study</label>
          <input type="text" id="course_of_study" />
        </section>

        <section className="user-input">
          <label>Date of Attendance From</label>
          <input type="date" id="date_of_attendance_from" />
        </section>

        <section className="user-input">
          <label>Date of Attendance To</label>
          <input type="date" id="date_of_attendance_to" />
        </section>

        <section className="user-input">
          <label>Language Name 1</label>
          <input type="text" id="language_name_1" />
        </section>

        <section className="user-input">
          <label>Language Name 2</label>
          <input type="text" id="language_name_2" />
        </section>

        <section className="user-input">
          <label>Name of Organization 1</label>
          <input type="text" id="name_of_organization_1" />
        </section>

        <section className="user-input">
          <label>Name of Organization 2</label>
          <input type="text" id="name_of_organization_2" />
        </section>

        <section className="user-input">
          <label>Name of Organization 3</label>
          <input type="text" id="name_of_organization_3" />
        </section>

        <section className="user-input">
          <label>Name of Organization 4</label>
          <input type="text" id="name_of_organization_4" />
        </section>

        <section className="user-input">
          <label>Name of Organization 5</label>
          <input type="text" id="name_of_organization_5" />
        </section>
      </section>

      <section className="user-input">
        <h1>Applicant/Exchange Visa Information</h1>
        <h1>Additional Point of Contact Information</h1>

        <section className="user-input">
          <label>Name 1</label>
          <input type="text" id="name_1" />
        </section>

        <section className="user-input">
          <label>Street Address</label>
          <input type="text" id="name1_street_address" />
        </section>

        <section className="user-input">
          <label>City</label>
          <input type="text" id="name1_city" />
        </section>

        <section className="user-input">
          <label>Postal Zone/ZIP Code</label>
          <input type="text" id="name1_postal_zone_ZIP_code" />
        </section>

        <section className="user-input">
          <label>Country/Region</label>
          <input type="text" id="name1_country_region" />
        </section>

        <section className="user-input">
          <label>Telephone Number</label>
          <input type="text" id="name1_telephone_number" />
        </section>

        <section className="user-input">
          <label>Email Address</label>
          <input type="email" id="name1_email_address" />
        </section>

        <section className="user-input">
          <label>Name 2</label>
          <input type="text" id="name_2" />
        </section>

        <section className="user-input">
          <label>Street Address</label>
          <input type="text" id="name2_street_address" />
        </section>

        <section className="user-input">
          <label>City</label>
          <input type="text" id="name2_city" />
        </section>

        <section className="user-input">
          <label>Postal Zone/ZIP Code</label>
          <input type="text" id="name2_postal_zone_ZIP_code" />
        </section>

        <section className="user-input">
          <label>Country/Region</label>
          <input type="text" id="name2_country_region" />
        </section>

        <section className="user-input">
          <label>Telephone Number</label>
          <input type="text" id="name2_telephone_number" />
        </section>

        <section className="user-input">
          <label>Email Address</label>
          <input type="email" id="name2_email_address" />
        </section>

        <section className="user-input">
          <label>SEVIS ID</label>
          <input type="text" id="sevis_id" />
        </section>

        <section className="user-input">
          <label>Name of School</label>
          <input type="text" id="name_of_school" />
        </section>

        <section className="user-input">
          <label>Course of Study</label>
          <input type="text" id="course_of_study" />
        </section>

        <section className="user-input">
          <label>Street Address</label>
          <input type="text" id="street_address" />
        </section>
      </section>

      <section className="user-input">
        <button>Submit & Finish Form Fill-Up</button>
      </section>
    </form>
  );
};
export default Form_Fillup;
