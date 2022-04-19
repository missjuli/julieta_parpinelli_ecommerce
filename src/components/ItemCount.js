import { useContext, useState } from "react"
import { Button } from 'react-bootstrap';
import { context } from "./CartContext";

const ItemCount = ({stock, startingPoint, product, onAdd}) => {
    const [counter, setCounter] = useState(startingPoint)
    const [counterStock] = useState(stock)
    const [productSelected] = useState(product)
    const {addItem} = useContext(context)

    const addItemToCounter = () => {
        if (counterStock > counter) {
            setCounter(counter+1)
        }
    }

    const deleteItem = () => {
        if (counter > 0) {
            setCounter(counter-1)
        }
    }

    return (
        <>
            <div>
                <p> Usted ha seleccionado {counter} </p>
            </div>
            <Button variant="outline-primary mx-2" onClick={addItemToCounter}>
                Agregar una unidad
            </Button>
            <Button variant="outline-primary mx-2" onClick={deleteItem}>
                Eliminar una unidad
            </Button>
            <Button variant="outline-primary mx-2 text-black" onClick={()=>addItem(productSelected, counter)}>
                Agregar al carrito
            </Button>
        </>
    )
}

export default ItemCount