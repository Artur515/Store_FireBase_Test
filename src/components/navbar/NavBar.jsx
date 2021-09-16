import React, {useContext, useState} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, PRODUCT_ADD, PRODUCT_EDIT, PRODUCT_LIST} from "../../utils/constants";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";


const NavBar = observer(() => {
            const {productStore} = useContext(Context)
            const history = useHistory()

            const [isLoggedIn] = useState(() => {
                const current = JSON.parse(localStorage.getItem('myToken'))
                return current
            })

            if (isLoggedIn) {
                productStore.setIsAuth(true)
            }


            const handleSignIn = async () => {
                productStore.setLoading(true)
                // Sign in Firebase using popup auth and Google as the identity provider.
                const provider = new GoogleAuthProvider();
                const auth = getAuth();
                await signInWithPopup(auth, provider)
                    .then((result) => {
                        const token = result.user.accessToken;
                        localStorage.setItem('myToken', JSON.stringify(token))
                        console.log(token)
                        productStore.setIsAuth(true)
                        productStore.setError(null)
                    }).catch((error) => {
                        const errorMessage = error.message;
                        productStore.setError(errorMessage)
                        productStore.setLoading(false)
                        console.log(errorMessage)
                    })
                productStore.setLoading(false)
            }


            // console.log(productStore.error)


            const handleLogOut = async () => {
                const auth = getAuth()
                await signOut(auth)
                    .then(() => {
                        localStorage.removeItem('myToken')
                        productStore.setIsAuth(false)
                        history.push(LOGIN_ROUTE)
                    }).catch((error) => {
                        console.log(error)
                    })
            }


            return productStore.isAuth ? (<Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand><Link to={PRODUCT_LIST}>Store</Link></Navbar.Brand>
                        <Nav className="d-flex justify-content-between">
                            <Link to={PRODUCT_LIST} className='p-2'>Products</Link>
                            <Link to={PRODUCT_ADD} className='p-2'>Add</Link>
                            <Link to={PRODUCT_EDIT} className='p-2'>Edit</Link>
                        </Nav>
                        <Button variant='outline-light' onClick={handleLogOut}>LogOut</Button>
                    </Container>
                </Navbar>)
                : (<Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand><Link to={LOGIN_ROUTE}>Store</Link></Navbar.Brand>
                        <Button variant='outline-light' onClick={handleSignIn}>Login with Google</Button>
                    </Container>
                </Navbar>)
        }
    )
;

export default NavBar;