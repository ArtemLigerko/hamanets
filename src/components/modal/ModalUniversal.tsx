import { Button } from "@chakra-ui/react";
import React from "react";
import Modal from "react-bootstrap/Modal";

// import ToolsbarButton from "../UI/ToolsbarButton/ToolsbarButton";

interface ModalProps {
  button?: React.ReactNode;
  title?: string;
  content?: JSX.Element | null;
  footer?: JSX.Element | null;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalUniversal = ({
  button,
  title,
  content,
  show,
  setShow,
}: ModalProps) => {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button size="sm" onClick={handleShow}>
        {button}
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalUniversal;
