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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalForm from "./modalForm";
import ModalDelete from "./modalDelete";

const Card = (props) => {
  const { actions } = useContext(Context); // Obtén las acciones de tu contexto
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false); // Nuevo estado para el modal de eliminación
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
        img: selectedContact.img,
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
        toast.success("Contact Updated!");
      })
      .catch((error) => {
        console.error("Error updating contact:", error);
      });
  };
  const handleDelete = () => {
    setShowDelete(true); // Abre el modal de eliminación
  };

  const confirmDelete = () => {
    props.deleteId();
    toast.error("Contact Deleted!");
    setShowDelete(false); // Cierra el modal de eliminación
  };

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="card w-100 h-20" style={{ height: "auto" }}>
        <div className="row no-gutters">
          <div className="col-12 col-md-3">
            <img
              src={props.img}
              className="ps-5 p-3 rounded-circle"
              style={{ height: "200px", width: "100%" }}
              alt="..."
            />
          </div>
          <div className="col-12 col-md-6">
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
          <div className="col-12 col-md-3 p-3 d-flex flex-column justify-content-between">
            <div></div>
            <div className="d-flex justify-content-center">
              <button className="btn pe-5" onClick={handleShow}>
                <FontAwesomeIcon icon={faPencilAlt} size="lg" />
              </button>
              <button
                href="#"
                className="btn ps-3"
                onClick={handleDelete} // Abre el modal de eliminación en lugar de eliminar el contacto inmediatamente
              >
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalForm
        show={show}
        handleClose={handleClose}
        contact={contact}
        handleChange={handleChange}
        handleSave={handleSave}
      />
      <ModalDelete
        showDelete={showDelete}
        setShowDelete={setShowDelete}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};

export default Card;
