import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../component/card";
import { Context } from "../store/appContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactList = () => {
  //CALLING THE CONTEXT

  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getContacts();
  }, [store.contacts]);

  return (
    <div className="container">
      <div className="d-flex justify-content-end m-2 pb-2">
        <h2 className="pe-5 me-5">
          {store.contacts.length === 0
            ? "There are no contacts"
            : `${store.contacts.length} ${
                store.contacts.length > 1 ? "Contacts" : "Contact"
              }`}
        </h2>
        <button
          className="btn btn-success btn-lg me-3"
          href="#"
          role="button"
          onClick={() => {
            actions.createRandomContact(),
              toast.success("Random contact added!");
          }}
        >
          <span className="d-none d-md-inline">Add new Random contact</span>
          <span className="d-md-none">+ Random Contact</span>
        </button>
        <Link to="/form">
          <button className="btn btn-success btn-lg" href="#" role="button">
            <span className="d-none d-md-inline">Add new contact</span>
            <span className="d-md-none">+ New Contact</span>
          </button>
        </Link>
      </div>

      <div>
        {store.contacts.map((contact, index) => {
          return (
            <Card
              key={contact.id}
              id={contact.id}
              full_name={contact.full_name}
              address={contact.address}
              phone={contact.phone}
              email={contact.email}
              img={contact.img || "https://via.placeholder.com/150"}
              deleteId={() => actions.deleteContact(contact.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactList;
