import React from "react";
import { Modal } from "react-bootstrap";

type Props = {
  showmodal: boolean;
  onHide?: () => void;
  children: React.ReactNode;
  title?: string;
};

const MyModal: React.FC<Props> = ({ showmodal, onHide, children, title }) => {
  const [show, setShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    setShow(showmodal);
  }, [showmodal]);

  const handleClose = () => {
    setShow(false);
    onHide && onHide();
  };

  return (
    <>
      <Modal show={show} fullscreen={"sm-down"} onClick={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default MyModal;
