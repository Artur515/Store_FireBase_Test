import React from 'react';
import {Form} from "react-bootstrap";
import {validations} from "../../validation";
import style from "../productAdd/style.module.css";

const TextInputs = ({register, errors}) => {

    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title"
                              {...register('title', validations.title)}/>
                {errors?.title?.type === "required" && errors?.title?.type === "required" &&
                <p className='error'>This field is required</p>}
                {errors?.title?.type === "minLength" && (
                    <p className='error'>Title is too short</p>)}
                {errors?.title?.type === "maxLength" && (
                    <p className='error'>Title is too long</p>)}
            </Form.Group>

            <Form.Group className="mb-4">
                <Form.Label>Descriptions</Form.Label>
                <Form.Control as="textarea" placeholder="Description" className={style.input_area}
                              {...register('description', validations.description)}/>
                {errors?.description?.type === "maxLength" && (
                    <p className='error'>Title is too long</p>)}
            </Form.Group>
        </>
    );
};

export default TextInputs;