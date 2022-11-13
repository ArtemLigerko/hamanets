import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { StyledButton } from "./TransactionsTools";

interface ModalProps {
  button?: string | JSX.Element;
  title?: string;
  content?: JSX.Element | null;
  // toggleClose?: () => void;
}

const ModalUniversal = ({
  button,
  title,
  content,
}: // showState
ModalProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const toggleShowState = () => setShow(!show);

  return (
    <>
      <StyledButton variant="contained" onClick={handleShow}>
        {button}
      </StyledButton>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUniversal;
