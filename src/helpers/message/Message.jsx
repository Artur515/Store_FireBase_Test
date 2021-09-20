import React, {useState} from 'react';
import {Toast} from "react-bootstrap";
import style from './style.module.css'

const Message = ({children}) => {
    const [show, setShow] = useState(true);
    return (
        <Toast className={style.toast} onClose={() => setShow(false)} show={show}
               delay={3000} autohide>
            <Toast.Header>
                <strong className="me-auto">Message</strong>
            </Toast.Header>
            <Toast.Body as='h5'>{children}</Toast.Body>
        </Toast>

    );
};

export default Message;