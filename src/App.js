import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
    return(
        <>
            <NavBar id="header" />
            <ItemListContainer greeting="Buenos días" />
        </>
    )
}

export default App