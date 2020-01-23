import React from "react"



export default ({ location }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">{location.address}</address>
        <div className="square__foot">{location.squarefoot}</div>
        <div className="">{location.handicapaccessible ? "handicap accessible" : "not handicap accessible"}</div>

    </section>
)