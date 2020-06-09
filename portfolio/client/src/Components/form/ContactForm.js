import React, { useState } from "react";
import API from "../../utils/API";
import { Button, TextInput, Container } from "react-materialize";
import { Link } from "react-router-dom";

function ContactForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Information: "",
  });

  const HandleSubmit = (event) => {
    event.preventDefault();

    const { Name, Email, Phone, Information } = formData;

    //send information to my email

    API.AddMessage({
      Email,
      Phone,
      Information,
      Name,
    }).then((result) => {
      console.log(result);
      alert("sending")
    });
  };

  //looks for the property of  name in the textinput components and looks for its value (first text input )
  //then looks for the property of value in the textinput components and looks for its value
  //then this function compares these two and updates it real time.

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <Container>
        <h3 className="white-text ">Leave your Information </h3>
        <br></br>
        <form>
          {/* name =  formdata.name */}
          <TextInput
            value={formData.Name}
            onChange={handleInputChange}
            name="Name"
            placeholder="Name "
            inputClassName="white-text "
          />

          <TextInput
            value={formData.Email}
            onChange={handleInputChange}
            name="Email"
            placeholder="Email "
            inputClassName="white-text "
          />
          <TextInput
            value={formData.Phone}
            onChange={handleInputChange}
            name="Phone"
            placeholder="Phone "
            inputClassName="white-text "
          />
          <TextInput
            value={formData.Information}
            onChange={handleInputChange}
            name="Information"
            placeholder="Information "
            inputClassName="white-text "
          />

          <Button
            className="btn right black white-text "
            onClick={HandleSubmit}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default ContactForm;
