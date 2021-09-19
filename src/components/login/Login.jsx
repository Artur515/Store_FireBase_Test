import React, {useContext} from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {Button, Card, Container, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {validations} from "../../validation";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";


const Login = observer(() => {
    const {productStore} = useContext(Context)
    const {register, handleSubmit, setValue, formState: {errors}} = useForm();

    const handleRegistration = data => {
        const {email, password} = data
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const token = userCredential.user.accessToken;
                localStorage.setItem('myToken', JSON.stringify(token))
                productStore.setToken(token)
                setValue('email', '')
                setValue('password', '')
                // console.log(token)
            })
            .catch((error) => {
                const errorMessage = error.message;
                productStore.setError(errorMessage)
            });
    };


    const handleLogin = data => {
        const {email, password} = data
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                productStore.setIsAuth(true)
            })
            .catch((error) => {
                const errorMessage = error.message;
                productStore.setError(errorMessage)
                productStore.setToken(null)
            });
    };


    const handleAddFakeToken = () => {
        productStore.token ? productStore.setToken(null) : productStore.setToken([])
    }

    return (
        <Container style={{height: window.innerHeight - 60}} className='d-flex flex-column justify-content-center '>
            <Card className='m-4 text-center'>
                <Card.Header>{productStore.token ? 'Login' : 'Registration'}</Card.Header>
                <Card.Body>
                    <Form className='p-2'
                          onSubmit={handleSubmit(productStore.token ? handleLogin : handleRegistration)}>
                        <Form.Group className="mb-4">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                          placeholder="Enter email"  {...register('email', validations.email)}/>
                            {errors?.email?.type === "required" && errors?.email?.type === "required" &&
                            <p className='error'>This field is required</p>}
                            {errors?.email?.type === "pattern" && (
                                <p className='error'>Enter a valid email address</p>)}
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                          placeholder="Password"  {...register('password', validations.password)}/>
                            {errors?.password?.type === "required" && errors?.password?.type === "required" &&
                            <p className='error'>This field is required</p>}
                            {errors?.password?.type === "minLength" && (
                                <p className='error'>Password is too short</p>)}
                            {errors?.password?.type === "maxLength" && (
                                <p className='error'>Password is too long</p>)}
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                            <Button variant='outline-dark' type="submit">
                                {productStore.token ? 'Login' : 'Registration'}
                            </Button>
                        </Form.Group>
                        <Form.Text muted>
                            {productStore.token ? ' if you don`t have account go' : ' if you have account go'}
                            <h3 className='cursor'
                                onClick={handleAddFakeToken}>{productStore.token ? 'Registration' : 'Login'}</h3>
                        </Form.Text>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
});

export default Login;