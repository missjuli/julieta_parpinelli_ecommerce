import NavBar from "./components/NavBar"
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom"
import { context } from "./components/CartContext"

function App() {
    return(
        <BrowserRouter>
            <NavBar id="header" />
            <Main />
        </BrowserRouter>
    )
}

export default App