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
        const productCollection = collection(db, "products")
        const documents = getDocs(productCollection)
        
        documents
        .then((data)=>{

            const aux = []
            data.forEach((document)=>{
                document.data()
                const product = {
                    id: document.id,
                    ...document.data()
                }

                aux.push(product)
                setProducts(aux)

                if(categoryId) {
                    const queryProductsByCategoryId = query(collection(db, "producs"),where(categoryId))
                    setProducts(data.filter((product)=> product.categoryId == categoryId))
                } else {
                    setProducts(data)
                }
            })
        })
        .catch(()=>{
            console.log('error')
        })
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