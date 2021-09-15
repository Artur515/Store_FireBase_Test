import './App.css';
import NavBar from "./components/navbar/NavBar";
import AppRouter from "./components/appRouter/AppRouter";
import {Container} from "react-bootstrap";

const App = () => {
    return (
        <>
            <NavBar/>
            <Container>
                <AppRouter/>
            </Container>
        </>
    );
}

export default App;
