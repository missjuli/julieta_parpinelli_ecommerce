import { Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"

const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:slug" element={<ItemListContainer/>}/>
                <Route path="/item/:slug" element={<ItemListContainer/>}/>
            </Routes>
        </>
    )
}

export default Main