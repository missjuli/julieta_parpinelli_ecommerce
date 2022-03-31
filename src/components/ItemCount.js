import { useContext, useState } from "react"
import { Button } from 'react-bootstrap';
import { context } from "./CartContext";

const ItemCount = ({stock, startingPoint, id, onAdd}) => {
    const [counter, setCounter] = useState(startingPoint)
    const [counterStock] = useState(stock)
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

    const addToCart = () => {
        onAdd(counter)
        addItem(id, counter)
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
            <Button variant="outline-primary mx-2 text-black" onClick={addToCart(id)}>
                Agregar al carrito
            </Button>
        </>
    )
}

export default ItemCount