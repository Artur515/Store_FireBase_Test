import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import FileInput from "../inputs/FileInput";
import SaleInputs from "../inputs/SaleInputs";
import PriceInputs from "../inputs/PriceInputs";
import TextInputs from "../inputs/TextInputs";


const ProductAdd = ({title, img, description, sales}) => {

    const [checkSales, setCheckSales] = useState(false)

    const {register, handleSubmit, setValue, watch, formState: {errors}} = useForm();


    const handleAddProduct = data => {
        const {date, description, file, price, sale, title} = data
        console.log(data)
    }


    return (
        <Container className='mt-3'>
            <Card>
                <Form className='p-3' onSubmit={handleSubmit(handleAddProduct)}>

                    <FileInput register={register} errors={errors}/>

                    <PriceInputs register={register} errors={errors}/>

                    <TextInputs register={register} errors={errors}/>

                    <Form.Group className="mb-1">
                        <Form.Check
                            type="checkbox" value={checkSales}
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
};

export default ProductAdd;