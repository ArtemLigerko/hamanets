import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ConfirmProps {
  actionButton?: string | JSX.Element;
  title?: string;
  content?: string;
  handleOk: any;
}

const ConfirmUniversal = ({
  actionButton,
  title,
  content,
  handleOk,
}: ConfirmProps) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleOkAndClose = () => {
    handleOk();
    setShow(false);
  };

  return (
    <>
      <div onClick={handleShow}>{actionButton}</div>

      <Modal
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleOkAndClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmUniversal;
