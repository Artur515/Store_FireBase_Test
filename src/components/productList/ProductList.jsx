import React, {useContext} from 'react';
import {ref, onValue} from "firebase/database";
import {Container} from "react-bootstrap";
import {Context} from "../../index";

const ProductList = () => {
    const {database} = useContext(Context)
    const {productStore} = useContext(Context)



    const getProductList = async () => {
        const starCountRef = ref(database, 'products');
        await onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            productStore.setProductList(data)
        });
    }
    getProductList()


    console.log()
    return (
        <Container>
            Product List
        </Container>
    );
};

export default ProductList;