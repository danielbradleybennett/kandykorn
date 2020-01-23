import React from "react"



export default ({ product }) => (
    <section className="location">
        <h3 className="location__name">{product.name}</h3>
        <div className="location__address">{product.prodTypeId}</div>
        

    </section>
)