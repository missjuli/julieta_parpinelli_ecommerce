import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Main from "./components/Main"
import { BrowserRouter } from "react-router-dom"

function App() {
    return(
        <BrowserRouter>
            <NavBar id="header" />
            <Main />
        </BrowserRouter>
    )
}

export default App