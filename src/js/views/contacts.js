import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../component/card";
import { Context } from "../store/appContext";

const ContactList = () => {
  //CALLING THE CONTEXT

  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getContacts();
  }, [store.contacts]);

  return (
    <div className="container">
      <div className="d-flex justify-content-end m-2 pb-2">
        <Link to="/form">
          <button className="btn btn-success btn-lg" href="#" role="button">
            Add new contact
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
