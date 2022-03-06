import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Main from "./components/Main"

function App() {
    return(
        <>
            <NavBar id="header" />
            <ItemListContainer greeting="Buenos días" />
            <Main />
        </>
    )
}

export default App