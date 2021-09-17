import React, {useState} from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import style from './style.module.css'
import avatar from '../../images/avatar.png'
import {useForm} from "react-hook-form";
import FileInput from "../fileInput/FileInput";

const ProductAdd = ({title, img, description, sales}) => {
    const [checkSales, setCheckSales] = useState(false)

    const {register, handleSubmit, setValue, formState: {errors}} = useForm();


    console.log(checkSales)

    return (
        <Container className='mt-3'>
            <Card>
                <Form className='p-3'>

                    <FileInput/>

                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title"/>
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter price"/>
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label>Descriptions</Form.Label>
                        <Form.Control as="textarea" placeholder="Description"
                                      className={style.input_area}/>
                    </Form.Group>

                    <Form.Group className="mb-1">
                        <Form.Check type="checkbox" value={checkSales}
                                    onChange={() => setCheckSales(!checkSales)}
                                    label="Add sales"/>
                    </Form.Group>

                    <Row className="mb-3">
                        <Col>
                            <Form.Group>
                                <Form.Label>Sale</Form.Label>
                                <Form.Control type="text" placeholder="Sale price" disabled={!checkSales}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>End sale date</Form.Label>
                                <Form.Control type="text" placeholder="Date" disabled={!checkSales}/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="outline-dark" type="submit" className='mt-2'>
                        Add new product
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default ProductAdd;