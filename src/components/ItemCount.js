import { useState } from "react"
import { Button } from 'react-bootstrap';

const ItemCount = (prop) => {
    const [counter, setCounter] = useState(prop.startingPoint)
    const [stock] = useState(prop.stock)

    const addItem = () => {
        if (stock > counter) {
            setCounter(counter+1)
        }
    }

    const deleteItem = () => {
        if (counter > 0) {
            setCounter(counter-1)
        }
    }

    const addToCart = () => {
        prop.onAdd(counter)
    }

    return (
        <>
            <div>
                <p> Usted ha seleccionado {counter} </p>
            </div>
            <Button variant="outline-primary mx-2" onClick={addItem}>
                Agregar una unidad
            </Button>
            <Button variant="outline-primary mx-2" onClick={deleteItem}>
                Eliminar una unidad
            </Button>
            <Button variant="outline-primary mx-2 text-black" onClick={addToCart}>
                Agregar al carrito
            </Button>
        </>
    )
}

export default ItemCount