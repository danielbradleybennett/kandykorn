import React from "react"
import { LocationProvider } from "./location/LocationProvider";
import LocationList from "./location/LocationList";
import ProductList from "./product/ProductList";
import {ProductProvider} from "./product/ProductProvider";

export default () => (
  <>
      <h2>Forsworn Candies</h2>
      <small>We love cany more than drinking out of the skull of our enemies.</small>

  

      <h2>Location</h2>
      <article className="locations">
          <LocationProvider>
            <LocationList/>
          </LocationProvider>
      </article>

      <h2>Products</h2>
      <article className="products">
          <ProductProvider>
            <ProductList/>
          </ProductProvider>
      </article>

     
  </>
)