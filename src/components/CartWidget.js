import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Button } from 'react-bootstrap';

const CartWidget = (prop) => {

    const [counter, setCounter] = useState(prop.startingPoint)

    return (
        <>
            <FontAwesomeIcon icon={faCartShopping} />
            <p> {counter} </p>
        </>
    )
}

export default CartWidget