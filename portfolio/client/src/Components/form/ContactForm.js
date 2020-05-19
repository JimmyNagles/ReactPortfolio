import React, { useState } from "react";

import { Button, TextInput, Container } from "react-materialize";

function ContactForm() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Text: "",
  });

  const HandleSubmit = (event) => {
    event.preventDefault();
    alert("thank you will contact ");
    const { Name, Email, Phone, Text } = formData;
  };

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
          <TextInput
            value={formData.Name}
            onChange={handleInputChange}
            name="Name"
            placeholder="Name "
            inputClassName="red-text "
          />
          <TextInput
            className=""
            value={formData.Email}
            onChange={handleInputChange}
            name="Email"
            placeholder="Email "
          />
          <TextInput
            value={formData.Phone}
            onChange={handleInputChange}
            name="Phone"
            placeholder="Phone "
          />
          <TextInput
            value={formData.Text}
            onChange={handleInputChange}
            name="Text"
            placeholder="Information "
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
