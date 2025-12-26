import { useEffect } from "react"
import { obtenerProductos } from "../firebase/products"

const products = () => {
    useEffect(() => {
        obtenerProductos().then(productos => {
            console.log(productos)
        })
    }, [])
}

export default products