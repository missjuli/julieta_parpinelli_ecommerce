import ItemCount from "./ItemCount"

const ItemListContainer = (prop) => {
    return (
        <>
            <p className="m-5">{prop.greeting}</p>
            <ItemCount startingPoint={0} stock={5}/>
        </>
    )
}

export default ItemListContainer