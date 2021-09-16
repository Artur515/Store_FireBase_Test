import React, {useContext} from 'react';
import {Button, Card, Container} from "react-bootstrap";
import style from './error.module.css'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Error = observer(({children}) => {
    const {productStore} = useContext(Context)

    const handleAgain = () => {
        productStore.setError(null)
    }

    return (
        <Container className='d-flex flex-column align-items-center mt-5'>
            <Card className={style.error}>
                Error:{children}
                Fix and try again
            </Card>
            <Button variant='outline-dark' onClick={handleAgain}>Again</Button>
        </Container>
    );
});

export default Error;