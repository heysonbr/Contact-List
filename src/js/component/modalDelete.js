import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalDelete = ({ showDelete, setShowDelete, confirmDelete }) => {
  return (
    <Modal show={showDelete} onHide={() => setShowDelete(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Sure u want to delete that Contact?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowDelete(false)}>
          No
        </Button>
        <Button variant="danger" onClick={confirmDelete}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDelete;
