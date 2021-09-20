import React from 'react';
import {Form, Image} from "react-bootstrap";
import style from "../productAdd/style.module.css";
import defaultImg from '../../images/avatar.png'
import {validations} from "../../validation";
import {observer} from "mobx-react-lite";


const FileInput = observer(({register, errors, image, setImage, editImage}) => {


    const handleChangeImage = (event) => {
        const reader = new FileReader()
        let imageFromInput = event.target.files[0]
        if (imageFromInput !== null) {
            reader.onloadend = () => {
                setImage({
                    imagePreview: reader.result
                })
            }
            reader.readAsDataURL(imageFromInput)
        } else {
            return setImage({
                imagePreview: image
            })
        }
    }
    // *validate file I don't know yet, but I need to think and read*

    return (
        <Form.Group className="d-flex  justify-content-between align-items-center">
            <Form.Group className={style.input_file}>
                <Form.Label>Photo of product</Form.Label>
                <Form.Control
                    type="file"  {...register('file', editImage ? validations.notRequired : validations.image)}
                    onChange={handleChangeImage}/>
                <Form.Text className="text-muted">
                    Min 200px max 4000px
                </Form.Text>
                {errors?.file?.type === "required" && errors?.file?.type === "required" &&
                <p className='error'>This field is required</p>}
            </Form.Group>
            <Image src={image ? image.imagePreview : editImage || defaultImg} className={style.input_image} rounded/>
        </Form.Group>
    );
});

export default FileInput;