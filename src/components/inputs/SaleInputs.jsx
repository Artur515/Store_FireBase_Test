import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import {validations} from "../../validation";

const SaleInputs = ({register, errors, checkSales, setValue}) => {
    const today = new Date().toISOString().slice(0, 10)

    if (!checkSales) {
        setValue('sale', '')
        setValue('date', '')
    }

    return (
        <Row className="mb-3">
            <Col>
                <Form.Group>
                    <Form.Label>Sale %</Form.Label>
                    <Form.Control type="number"
                                  placeholder="Sale price"
                                  disabled={!checkSales}
                                  {...register('sale',
                                      checkSales ? validations.sale : validations.notRequired)}/>
                    {errors?.sale?.type === "required" && errors?.sale?.type === "required" &&
                    <p className='error'>This field is required</p>}
                    {errors?.sale?.type === "pattern" && (<p className='error'>Enter a valid number</p>)}
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label>End sale date</Form.Label>
                    <Form.Control type="date"
                                  placeholder="Date"
                                  min={today}
                                  disabled={!checkSales}
                                  {...register('date',
                                      checkSales ? validations.saleDate : validations.notRequired)}/>
                    {errors?.date?.type === "required" && errors?.date?.type === "required" &&
                    <p className='error'>This field is required</p>}
                    {errors?.date?.type <= "date" && errors?.date?.type <= "date" &&
                    <p className='error'>Date is not</p>}
                </Form.Group>
            </Col>
        </Row>

    );
};

export default SaleInputs;