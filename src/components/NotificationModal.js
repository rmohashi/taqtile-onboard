import React from 'react';
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const modalStyle = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  position: 'absolute',
  padding: '2% 5%',
  backgroundColor: 'white',
}

const titleStyle = {
  fontWeight: 'bold',
  marginBottom: '10px',
}

const NotificationModal = (props) => {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.open}
      onClose={props.handleClose}
    >
      <div style={modalStyle}>
        <Typography style={titleStyle} variant="title" id="modal-title">
          {props.title}
        </Typography>
        <Typography variant="subheading" id="simple-modal-description">
          {props.text}
        </Typography>
        <Button onClick={props.handleClose}>Fechar</Button>
      </div>
    </Modal>
  );
}

export default NotificationModal;
