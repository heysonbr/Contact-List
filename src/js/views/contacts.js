import React from "react";
import { Link } from "react-router-dom";
import Card from "../component/card";

const contactList = () => {
  return (
    <div className="">
      <div className="d-flex justify-content-end m-2 pb-2">
        <Link to="/form">
          <button className="btn btn-success btn-lg" href="#" role="button">
            Add new contact
          </button>
        </Link>
      </div>

      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default contactList;
