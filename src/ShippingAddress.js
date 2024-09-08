import React, { useState } from "react";
import "./ShippingAddress.css";
import "./bootstrap.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor-Leste)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini (fmr. 'Swaziland')",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia (formerly Macedonia)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const ShippingAddress = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const { saveUserData } = useUser();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    country: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    agreedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      agreedTerms: true,
    };

      // Save user data to context if needed
      saveUserData(updatedFormData);

      // Reset form data after submission
      setFormData({
        fullName: "",
        phoneNumber: "",
        country: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
        agreedTerms: false,
      });

      navigate("/payment");
  };

  return (
    <div className="adressFormContainer">
      <div className="addressform__header">
        <Link to="/">
          <img
            className="header__image"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="amazon.."
          ></img>
        </Link>
        <h1 className="addressform__link">
          Checkout {<Link to="/checkout">{`(${basket?.length} items)`}</Link>}
        </h1>
      </div>
      <Container className="addressForm">
        <h1 className="addressform__title">Add a new address</h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={7}>
              <Form.Group controlId="formFullName">
                <Form.Label className="addressform__label">
                  Full Name (First and Last name)
                </Form.Label>
                <Form.Control
                  className="addressform__input"
                  value={formData.fullName}
                  name="fullName"
                  onChange={handleChange}
                  type="text"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={7}>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label className="addressform__label">
                  Phone Number
                </Form.Label>
                <Form.Control
                  className="addressform__input"
                  type="tel"
                  value={formData.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChange}
                  required
                />
                <span className="addressform__number">
                  may be used to assist delivery
                </span>
              </Form.Group>
            </Col>
            <Col md={7}>
              <Form.Group controlId="formCountry">
                <Form.Label className="addressform__label">
                  Country/Region
                </Form.Label>
                <Form.Control
                  type="text"
                  value={formData.country}
                  name="country"
                  onChange={handleChange}
                  as="select"
                  className="addressform__input"
                  id="addressform__special"
                  required
                >
                  <option value=""></option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={7}>
              <Form.Group controlId="formAddress1">
                <Form.Label className="addressform__label">
                  Address Line 1
                </Form.Label>
                <Form.Control
                  className="addressform__input"
                  type="text"
                  value={formData.addressLine1}
                  name="addressLine1"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={7}>
              <Form.Group controlId="formAddress2">
                <Form.Label className="addressform__label">
                  Address Line 2
                </Form.Label>
                <Form.Control
                  type="text"
                  value={formData.addressLine2}
                  name="addressLine2"
                  onChange={handleChange}
                  className="addressform__input"
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="addressform__info">
            <Col md={6}>
              <Form.Group controlId="formCity">
                <Form.Label className="addressform__label">City</Form.Label>
                <Form.Control
                  className="addressform__input"
                  type="text"
                  value={formData.city}
                  name="city"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formState">
                <Form.Label className="addressform__label">State</Form.Label>
                <Form.Control
                  className="addressform__input"
                  id="addressform__special"
                  value={formData.state}
                  name="state"
                  onChange={handleChange}
                  type="text"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId="formZip">
                <Form.Label className="addressform__label">Zip Code</Form.Label>
                <Form.Control
                  className="addressform__input"
                  type="text"
                  value={formData.zipCode}
                  name="zipCode"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formCheckbox">
            <Form.Check
              type="checkbox"
              label="Use as my default address"
              className="addressform__checkbox"
              required
            />
          </Form.Group>

          <Button type="submit">Use this address</Button>
        </Form>
      </Container>
    </div>
  );
};
export default ShippingAddress;
