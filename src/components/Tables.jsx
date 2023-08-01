
import Delete from "./icons/Delete"
import products from '../mocks/products.json'
import { useState } from "react"

const Tables = () => {
    const [productList, setProductList] = useState(products)
    

    const handleEliminarProducto = (id) => {

        let isDelete = confirm("¿Deseas eliminar?")

        if(isDelete){
            const nuevosProductos = productList.filter((producto) => producto.id !== id);
            setProductList(nuevosProductos);
        }
    };



  return (
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Nombre de producto
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Categoría
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Precio
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Borrar
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    productList.map( product => (
                        <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.nombreDeProducto}
                            </th>
                            <td className="px-6 py-4">
                                {product.color}
                            </td>
                            <td className="px-6 py-4">
                                {product.categoría}
                            </td>
                            <td className="px-6 py-4">
                                ${product.precio}
                            </td>
                            <td className="px-6 py-4 ">
                                <button onClick={() => handleEliminarProducto(product.id)}>
                                    <Delete/>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>

  )
}
export default Tables