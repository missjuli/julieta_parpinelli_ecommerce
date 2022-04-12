import { createContext, useState } from "react"

export const context = createContext()
const { Provider } = context

const CartContext = ({children}) => {
    const [cartContent, setCartContent] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [product, setProduct] = useState( )
    
    const removeItem = (id) => {
        setCartContent(cartContent.filter(p => p.product.id !== id))
    }

    const addItem = (product, totalAmount) => {
        let productAdded = {product, amount: totalAmount}
        if(isInCart(product.id)){
            alert('Este producto ya fue añadido al carrito')
        } else {
            setCartContent([...cartContent, productAdded])
        }
    }

    const clear = () => {
        setCartContent([])
    }

    const isInCart = (id) => {
        const itemOnCart = cartContent.find((cartItem)=> cartItem.id === id)
        return itemOnCart ? true : false
    }

    const contextValue = {
        cartContent: [],
        product,
        totalAmount,
        totalAmountOfItems: 0,
        addItem,
        clear,
        removeItem,
        isInCart
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartContext