import { Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"

const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/item/:slug" element={<ItemListContainer/>}/>
            </Routes>
        </>
    )
}

export default Main