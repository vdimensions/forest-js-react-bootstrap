import React from 'react';
import {Modal} from 'react-bootstrap';
import {Region, ForestView, useCommand} from '@vdimensions/forest-js-react';
import {CommandButton} from "../CommandButton";

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
                {closeCommand && <CommandButton command={closeCommand} arg={null}>Close</CommandButton>}
                {confirmCommand && <CommandButton variant="primary" command={confirmCommand} arg={null}>Confirm</CommandButton>}
            </Modal.Footer>
        </Modal>
    );
});
