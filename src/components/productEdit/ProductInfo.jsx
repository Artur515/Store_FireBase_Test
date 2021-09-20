import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {getDatabase, ref, child, get} from "firebase/database";
import {useParams} from "react-router-dom";
import {Context} from "../../index";
import {Card, Container, Image} from "react-bootstrap";
import Loader from "../../helpers/loader/Loader";
import style from './style.module.css'

const ProductInfo = observer(() => {
    const {productStore} = useContext(Context)
    const params = useParams()


    useEffect(() => {
        const database = ref(getDatabase());
        get(child(database, `products/${params.id}`)).then((snapshot) => {
            if (snapshot.exists()) {
                productStore.setProductInfo(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
            productStore.setError(error)
        });
        // eslint-disable-next-line
    }, [params.id])
    // console.log(productStore.productInfo)


    return (
        <Container className='mt-4  '>
            {productStore.productInfo === null ? <Loader/> : <Card>
                <Card.Header as="h5">Price {productStore.productInfo.price} $</Card.Header>
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Body className={style.card_info_body_image}>
                        <Image className={style.card_info_image} src={productStore.productInfo.image}/>
                    </Card.Body>
                    <Card.Body className={style.card_info_text}>
                        <Card.Title>{productStore.productInfo.title}</Card.Title>
                        <Card.Text>
                            {productStore.productInfo.description}
                        </Card.Text>
                    </Card.Body>
                </Card.Body>
                {productStore.productInfo.sale ? <Card.Footer className='d-flex justify-content-around'>
                    <div className='text-danger'>Sale:{productStore.productInfo.sale} %</div>
                    <div>Date of end:{productStore.productInfo.date}</div>
                </Card.Footer> : ''}
            </Card>}
        </Container>
    );
});

export default ProductInfo;