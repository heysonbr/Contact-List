import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faEnvelope,
  faPencilAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Modal, Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../store/appContext"; // Asegúrate de importar tu contexto

const Card = (props) => {
  const { actions } = useContext(Context); // Obtén las acciones de tu contexto
  const [show, setShow] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [contact, setContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (selectedContact) {
      setContact({
        full_name: selectedContact.full_name,
        email: selectedContact.email,
        phone: selectedContact.phone,
        address: selectedContact.address,
      });
    }
  }, [selectedContact]);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setSelectedContact(props);
    setShow(true);
  };

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Asegúrate de que `props.id` está definido y es el ID correcto del contacto
    console.log("ID del contacto:", props.id);

    actions
      .updateContact(contact, props.id)
      .then(() => {
        handleClose();
      })
      .catch((error) => {
        console.error("Error updating contact:", error);
      });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="card w-100 h-20" style={{ height: "200px" }}>
        <div className="row no-gutters">
          <div className="col-3">
            <img
              src={props.img}
              className="ps-5 p-3 rounded-circle  "
              style={{ height: "200px" }}
              alt="..."
            />
          </div>
          <div className="col-6">
            <div className="card-body">
              <h5 className="card-title pb-3 ">{props.full_name}</h5>
              <p className="card-text text-secondary fw-bolder">
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  size="lg"
                  className="pe-4"
                />
                {props.address}
              </p>
              <p className="card-text text-secondary fw-bolder">
                <FontAwesomeIcon icon={faPhone} size="lg" className="pe-4" />
                {props.phone}
              </p>
              <p className="card-text text-secondary fw-bolder">
                <FontAwesomeIcon icon={faEnvelope} size="lg" className="pe-4" />
                {props.email}
              </p>
            </div>
          </div>
          <div className="col-3 p-3">
            <button className="btn pe-5" onClick={handleShow}>
              <FontAwesomeIcon icon={faPencilAlt} size="lg" />
            </button>
            <button href="#" className="btn ps-3" onClick={props.deleteId}>
              <FontAwesomeIcon icon={faTrash} size="lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Aquí va el código para el modal de edición de contactos */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="full_name"
                value={contact.full_name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={contact.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={contact.address}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Card;
