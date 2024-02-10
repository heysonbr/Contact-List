import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../component/card";

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [phone, setPhone] = useState("");
// const [address, setAddress] = useState("");

const contactList = () => {
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
        <Card
          full_name="HOla HOla"
          address="calle del mar"
          phone="9712470"
          email="info@xps.cat"
          img="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
};

export default contactList;
