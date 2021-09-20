import React, {useContext, useEffect, useState} from 'react';
import {set, ref, update, getDatabase} from "firebase/database";
import {Button, Card, Container, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import FileInput from "../inputs/FileInput";
import SaleInputs from "../inputs/SaleInputs";
import PriceInputs from "../inputs/PriceInputs";
import TextInputs from "../inputs/TextInputs";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";


const ProductAddEdit = observer(() => {
        const {productStore} = useContext(Context)
        const [checkSales, setCheckSales] = useState(false)
        const [image, setImage] = useState('')
        const database = getDatabase();


        const {register, handleSubmit, setValue, formState: {errors}} = useForm();

        //for add new product
        const addNewProduct = async (date, description = '', price, sale, title, id) => {
            await set(ref(database, 'products/' + id), {
                title: title,
                price: price,
                description: description,
                image: image.imagePreview,
                sale: sale,
                date: date
            });
        }

        const handleAddProduct = (data) => {
            const {date, description, price, sale, title} = data
            const id = Date.now()
            addNewProduct(date, description, price, sale, title, id)
            setValue('file', '')
            setValue('price', '')
            setValue('title', '')
            setValue('description', '')
            setValue('sale', '')
            setValue('date', '')
            setCheckSales(false)
        }


        const handleEditProduct = (data) => {
            const newId = Date.now()
            const editedData = {
                title: data.title,
                price: data.price,
                description: data.description,
                image: productStore.productEdit.image,
                sale: data.sale,
                date: data.date
            }
            const updates = {}
            updates['products/' + newId] = editedData
            return update(ref(database), updates)
        }

// console.log(productStore.productEdit)

//for edit product
        useEffect(() => {
            setValue('price', productStore.productEdit?.price)
            setValue('title', productStore.productEdit?.title)
            setValue('description', productStore.productEdit?.description)
            setValue('sale', productStore.productEdit?.sale)
            setValue('date', productStore.productEdit?.date)
            productStore.productEdit?.sale ? setCheckSales(true) : setCheckSales(false)
            // eslint-disable-next-line
        }, [productStore.productEdit])


        return (
            <Container className='mt-3 '>
                <Card>
                    <Form className='p-3'
                          onSubmit={handleSubmit(productStore.productEdit !== null ? handleEditProduct : handleAddProduct)}>

                        <FileInput register={register}
                                   errors={errors}
                                   image={image}
                                   editImage={productStore.productEdit?.image}
                                   setImage={setImage}/>

                        <PriceInputs register={register} errors={errors}/>

                        <TextInputs register={register} errors={errors}/>

                        <Form.Group className="mb-1">
                            <Form.Check
                                type="checkbox" value={checkSales} checked={checkSales}
                                onChange={() => setCheckSales(!checkSales)}
                                label="Add sales"/>
                        </Form.Group>

                        <SaleInputs register={register} errors={errors} checkSales={checkSales} setValue={setValue}/>

                        <Button variant="outline-dark" type="submit" className='mt-1'>
                            {productStore.productEdit ? 'Edit product' : 'Add new product'}
                        </Button>
                    </Form>
                </Card>
            </Container>
        );
    })
;

export default ProductAddEdit;