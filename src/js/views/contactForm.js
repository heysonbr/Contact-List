import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactForm = () => {
  const { store, actions } = useContext(Context);

  const [contact, setContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "heysonb-agenda",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addContact(contact);
  };

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <h1>Add a new contact</h1>
      </div>

      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full name"
              name="full_name"
              value={contact.full_name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              value={contact.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="enter phone"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              name="address"
              value={contact.address}
              onChange={handleChange}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button type="submit" className="btn btn-primary">
              Save
            </Button>
          </div>
        </Form>
      </div>

      <div className="container pt-3 ">
        <Link to="/">or get back to contacts</Link>
      </div>
    </div>
  );
};

export default ContactForm;
