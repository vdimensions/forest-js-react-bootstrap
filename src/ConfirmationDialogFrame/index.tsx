import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Region, ForestView, useCommand } from '@vdimensions/forest-js-react';

export default ForestView("ConfirmationDialogFrame", () => {
    let confirmCommand = useCommand("Confirm");
    let closeCommand = useCommand("Close");
    return (
        <Modal show={true} onHide={() => closeCommand && closeCommand.invoke(null)}>
            <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Region name="Content" />
            </Modal.Body>

            <Modal.Footer>
                {closeCommand && <Button variant="secondary" onClick={(_) => { closeCommand && closeCommand.invoke(null); }}>Close</Button>}
                {confirmCommand && <Button variant="primary" onClick={(_) => { confirmCommand && confirmCommand.invoke(null); }}>Confirm</Button>}
            </Modal.Footer>
        </Modal>
    );
});
