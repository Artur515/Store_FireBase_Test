import React from 'react';
import {Form} from "react-bootstrap";
import {validations} from "../../validation";

const PriceInputs = ({register, errors,}) => {

    return (
        <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control  type="number" placeholder="Enter price"
                          {...register('price', validations.price)}/>
            {errors?.price?.type === "required" && errors?.price?.type === "required" &&
            <p className='error'>This field is required</p>}
            {errors?.price?.type === "pattern" && (
                <p className='error'>Enter a valid number</p>)}
            {errors?.price?.type === "maxLength" && (
                <p className='error'>Price is biggest</p>)}
        </Form.Group>
    );
};

export default PriceInputs;