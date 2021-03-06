import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Locations"


export default () => {
    const { locations } = useContext(LocationContext)
  console.log("****  LocationList Render  **** ")
    return (
        <div className="locations">
        {
            locations.map(loc => <Location key={loc.id} location={loc} />)
        }
        </div>
    )
}