import NavBar from "./components/NavBar"
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom"
import Provider from "./components/CartContext"

function App() {
    return(
        <Provider>
            <BrowserRouter>
                <NavBar id="header" />
                <Main />
            </BrowserRouter>
        </Provider>
        
    )
}

export default App