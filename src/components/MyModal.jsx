import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MyModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
        <Button variant={props.variant} onClick={handleShow}>
            {props.title}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{props.title} {props.header}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.body}</Modal.Body>
            <Modal.Footer>
            <Button variant="success" onClick={props.handleYes}>
                {props.yes}
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                {props.not}
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
}
