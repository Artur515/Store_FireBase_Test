import React, {useState} from 'react';
import {set, ref, getDatabase} from "firebase/database";
import {Button, Card, Container, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import FileInput from "../inputs/FileInput";
import SaleInputs from "../inputs/SaleInputs";
import PriceInputs from "../inputs/PriceInputs";
import TextInputs from "../inputs/TextInputs";
import {observer} from "mobx-react-lite";


const ProductAdd = observer(({title, img, description, sales, price, date}) => {
        const [checkSales, setCheckSales] = useState(false)
        const [image, setImage] = useState('')
        const database = getDatabase();


        const {register, handleSubmit, setValue, formState: {errors}} = useForm();


        const addNewProduct = async (data, id) => {
            await set(ref(database, 'products/' + id), {
                title: data.title,
                price: data.price,
                description: data.description,
                image: image.imagePreview,
                sale: data.sale,
                date: data.date
            });

        }


        const handleAddProduct = (data) => {
            // const {date, description, price, sale, title} = data
            const id = Date.now()
            addNewProduct(data, id)
            setValue('file', '')
            setValue('price', '')
            setValue('title', '')
            setValue('description', '')
            setValue('sale', '')
            setValue('date', '')
            setCheckSales(false)
        }


        return (
            <Container className='mt-3 '>
                <Card>
                    <Form className='p-3' onSubmit={handleSubmit(handleAddProduct)}>

                        <FileInput register={register} errors={errors} image={image} setImage={setImage}/>

                        <PriceInputs register={register} errors={errors}/>

                        <TextInputs register={register} errors={errors}/>

                        <Form.Group className="mb-1">
                            <Form.Check
                                type="checkbox" value={checkSales} checked={checkSales}
                                onChange={() => setCheckSales(!checkSales)}
                                label="Add sales"/>
                        </Form.Group>

                        <SaleInputs register={register} errors={errors} checkSales={checkSales} setValue={setValue}/>

                        <Button variant="outline-dark" type="submit" className='mt-2'>
                            Add new product
                        </Button>
                    </Form>
                </Card>
            </Container>
        );
    })
;

export default ProductAdd;