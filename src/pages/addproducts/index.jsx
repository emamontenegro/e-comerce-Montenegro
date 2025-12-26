import { useEffect } from "react"
import { crearProducto } from "../../services/firebase/products"



const AddProducts = () => {

    useEffect(() => {
        crearProducto(products).then( response => {
            console.log(response);
        })
    }, [])  
    return (<>
        <h1>Agregar Productos</h1>
    </>)
}

export default AddProducts;