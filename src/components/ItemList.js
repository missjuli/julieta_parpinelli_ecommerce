import Item from "./Item"

const ItemList = (prop) => {  
    return (
        <>
            {prop.products.map((product, id)=>{
                return <Item product={product} />
            })}
        </>
    )
}

export default ItemList