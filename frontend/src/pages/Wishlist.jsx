import { useState } from "react"
import { Navbar } from "../components/substantial"
import { Favorite } from "../components/diminutive"

export default function Bookmark() {
   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
   const [pagination, setPagination] = useState(1)
   const paginationMultiply = pagination * 5
   const switchPagination = (arrow) => {
      if(arrow === "<" && pagination > 1) { setPagination(pagination - 1) }
      else if(arrow === ">" && (paginationMultiply < array?.length)) { 
         setPagination(pagination + 1) 
      }
   }
   return(
      <div>
         <Navbar/>
         <div className="container">
            <div className="wishList">
               <span className="myWishList">My Wishlist</span>
               <div style={{ "height": "100%", "width": "100%" }}>
               {
                  array.slice(paginationMultiply - 5, paginationMultiply).map((item, i) => {
                     return(
                        <Favorite data={ item } key={ i }/>
                     )
                  })
               }
               </div>
               <div className="pagination">
                  <span 
                     className="paginationButton paginationArrow" 
                     onClick={ () => { switchPagination("<") } }
                     style={ pagination <= 1 ? { "opacity": "0.5" } : null }
                  >
                     { "<" }
                  </span>
                  <span className="paginationButton">{ pagination }</span>
                  <span 
                     className="paginationButton paginationArrow" 
                     onClick={ () => { switchPagination(">") } }
                     style={ paginationMultiply >= array?.length ? { "opacity": "0.5" } : null }
                  >
                     { ">" }
                  </span>
               </div>
            </div>
         </div>
      </div>
   )
}