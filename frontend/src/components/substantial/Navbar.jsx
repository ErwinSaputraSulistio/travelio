import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Button from "../diminutive/Button"
// REDUX
import { useDispatch } from "react-redux"
import { searchBook } from "../../features/userSlice"

export default function Navbar() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [showSearch, switchSearch] = useState(false)
   const triggerSwitch = () => {
      switchSearch(!showSearch)
   }
   const searchBookTitle = (e) => {
      axios.get("https://www.googleapis.com/books/v1/volumes?q=" + e.target[0].value)
      .then((result) => {
         console.log(result.data.items)
         dispatch(searchBook(result.data.items))
      })
      e.preventDefault()
   }
   return(
      <div className="navbar">
         <div>
            <Button
               func={ () => { navigate("/home") } }
               margin="1.5vw 1.5vw 1.5vw 3vw"
               name="Home"
            />
            <Button
               func={ () => { navigate("/bookmark") } }
               margin="1.5vw" 
               name="My Bookmark"
            />
         </div>
         <form className="searchArea" onSubmit={ (e) => { searchBookTitle(e) } }>
            <input 
               className="searchInput" 
               name="search" 
               placeholder="Search a book title"
               required 
               style={ showSearch === true ? { "visibility": "visible" } : { "visibility": "hidden" } } 
               type="text"
            />
            <img 
               alt="search" 
               className="searchLogo" 
               onClick={ () => { triggerSwitch() } } 
               src="https://www.pngmart.com/files/8/Search-Button-PNG-HD-Quality.png"
            />
         </form>
      </div>
   )
}