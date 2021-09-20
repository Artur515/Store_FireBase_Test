import React, {useContext} from 'react';
import {remove, ref, getDatabase, get, child} from "firebase/database";
import {Button, Card} from "react-bootstrap";
import {BsTrash} from "react-icons/bs";
import style from './style.module.css'
import {observer} from "mobx-react-lite";
import {Link, useHistory} from "react-router-dom";
import {Context} from "../../index";
import {PRODUCT_EDIT} from "../../utils/constants";


const Product = observer(({image, title, sale, date, price, id}) => {
    const {productStore} = useContext(Context)
    const history = useHistory()
    // const today = new Date().toISOString().slice(0, 10)
    const database = getDatabase()


    const handleRemove = (id) => {
        remove(ref(database, 'products/' + id))
    }

    const handleEditProduct = (id) => {
        const database = ref(getDatabase());
        get(child(database, `products/${id}`)).then((snapshot) => {
            if (snapshot.exists()) {
                productStore.setProductEdit(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
            productStore.setError(error)
        })
        // eslint-disable-next-line
        productStore.setProductId(id)
        history.push(PRODUCT_EDIT)
    }


    return (
        <Card border={sale ? 'danger' : ''} className={style.card}>
            <Link to={`/product/info/${id}`}>
                <Card.Img variant="top" src={image} className={style.card_image}/>
            </Link>
            <Card.Body className='d-flex flex-column justify-content-end '>
                <Card.Title>{title}</Card.Title>
                <Card.Title>Price {price} $</Card.Title>
            </Card.Body>
            <Card.Body className='d-flex flex-column'>
                {sale ? <><big className='text-danger'>Sale :{sale} %</big>
                    <big>Date to end {date}</big></> : ''}
            </Card.Body>
            <div className='p-2 cursor d-flex justify-content-around align-items-center'>
                <Button variant='outline-info' onClick={() => handleEditProduct(id)}>Edit product</Button>
                <BsTrash onClick={() => handleRemove(id)}/>
            </div>
        </Card>
    );
});

export default Product;