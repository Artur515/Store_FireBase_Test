import React from 'react';
import {remove, ref, getDatabase} from "firebase/database";
import {Button, Card} from "react-bootstrap";
import {BsTrash} from "react-icons/bs";
import style from './style.module.css'
import {observer} from "mobx-react-lite";

const ProductInfo = observer(({image, title, sale, date, price, id}) => {
    const today = new Date().toISOString().slice(0, 10)
    console.log(today)
    const database = getDatabase()

    const handleRemove = (id) => {
        remove(ref(database, 'products/' + id))
    }


    return (
        <Card border={sale ? 'danger' : ''} className={style.card}>
            <Card.Img variant="top" src={image} className={style.card_image}/>
            <Card.Body className='d-flex flex-column justify-content-end '>
                <Card.Title>{title}</Card.Title>
                <Card.Title>Price {price} $</Card.Title>
            </Card.Body>
            <Card.Body className='d-flex flex-column'>
                {sale ? <><big className='text-danger'>Sale :{sale} %</big>
                    <big>Date to end {date}</big></> : ''}
            </Card.Body>
            <div className='p-2 cursor d-flex justify-content-around align-items-center'>
                <Button variant='outline-info'>Edit product</Button><BsTrash onClick={() => handleRemove(id)}/>
            </div>

        </Card>
    );
});

export default ProductInfo;