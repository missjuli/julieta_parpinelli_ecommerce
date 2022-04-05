import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../Firebase"
import { getDocs, collection, query, where } from "firebase/firestore"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        if(!categoryId) {
            const productCollection = collection(db, "products")
            const documents = getDocs(productCollection)
            
            documents
            .then((data)=> setProducts(data.docs.map(doc=>doc.data())))
            .catch((error)=> alert(error))
            .finally(() => setLoading(false))
        } else {
            const productCollection = collection(db, "products")
            const queryProductsByCategoryId = query(productCollection,where("categoryId", "==", categoryId))
            const documentsFiltered = getDocs(queryProductsByCategoryId)
            
            documentsFiltered
            .then((data)=> setProducts(data.docs.map(doc=>doc.data())))
            .catch((error)=> alert(error))
            .finally(() => setLoading(false))
        }
    }, [categoryId])

    return (
        <>
            <div className="d-flex">
                <ItemList products={products} />
            </div>
        </>
    )
}

export default ItemListContainer