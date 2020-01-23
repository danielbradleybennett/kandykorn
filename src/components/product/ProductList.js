import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"


export default () => {
    const { products } = useContext(ProductContext)
  
    return (
        <div className="products">
        {
            products.map(pro => <Product key={pro.id} product={pro} />)
        }
        </div>
    )
}