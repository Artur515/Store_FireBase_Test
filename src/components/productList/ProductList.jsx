import React, {useContext, useEffect} from 'react';
import {ref, onValue, getDatabase} from "firebase/database";
import {Container} from "react-bootstrap";
import {Context} from "../../index";
import Loader from "../../helpers/loader/Loader";
import ProductInfo from "../productInfo/ProductInfo";
import {observer} from "mobx-react-lite";

const ProductList = observer(() => {

    const {productStore} = useContext(Context)
    const database = getDatabase()


    const getProductList = () => {
        const starCountRef = ref(database, 'products');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            productStore.setProductList(data)
            console.log(data)
        });
    }


    useEffect(() => {
        getProductList()
        // eslint-disable-next-line
    }, [])


    return (
        <Container>
            <div className='d-flex justify-content-around flex-wrap mt-4'>
                {productStore.productList === null ?
                    <Loader/> : Object.entries(productStore.productList).map(([key, value], i) => {
                        return (
                            <ProductInfo id={key}
                                         title={value.title}
                                         image={value.image}
                                         price={value.price}
                                         sale={value.sale}
                                         date={value.date}/>
                        )
                    })
                }
            </div>
        </Container>
    );
});

export default ProductList;