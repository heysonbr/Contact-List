import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faEnvelope,
  faPencilAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
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
            <button href="#" className="btn pe-5">
              <FontAwesomeIcon icon={faPencilAlt} size="lg" />
            </button>
            <button href="#" className="btn ps-3" onClick={props.deleteId}>
              <FontAwesomeIcon icon={faTrash} size="lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
