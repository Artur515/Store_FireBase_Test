import './App.css';
import NavBar from "./components/navbar/NavBar";
import AppRouter from "./components/appRouter/AppRouter";
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "./index";
import Error from "./components/error/Error";
import Loader from "./helpers/loader/Loader";


const App = observer(() => {
    const {productStore} = useContext(Context)
    console.log(productStore.loading)


    return (
        <>
            <NavBar/>
            {productStore.loading === true && <Loader/>}
            {productStore.error !== null ? <Error children={productStore.error}/> : <AppRouter/>}
        </>
    );
})

export default App;
