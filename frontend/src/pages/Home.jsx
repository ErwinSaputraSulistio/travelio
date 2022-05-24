import { Navbar } from "../components/substantial"
import { useSelector } from "react-redux"

export default function Home() {
   const bookResult = useSelector((state) => state.user.bookSearchResult)
   return(
      <div className="home">
         <Navbar/>
         { bookResult.map((item) => {
            return(
               <div>{ item.volumeInfo.title }</div>
            )
         }) }
      </div>
   )
}