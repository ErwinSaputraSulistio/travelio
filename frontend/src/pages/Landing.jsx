import { useState } from "react"
import { UserCheck, UserCreate } from "../components/substantial"

export default function Landing() {
   const [isCreate, changeIsCreateState] = useState(false)
   const switchTrigger = () => {
      changeIsCreateState(!isCreate)
   }
   return(
      <div className="container">
         <div className="landingPageLeft">
            <div className="landingPageLeftLayer">
               <i className="landingPageQuote">"A room without books,</i>
               <i className="landingPageQuote">is like a body without a soul."</i>
               <span className="landingPageQuoteOwner">- Marcus Tullius Cicero</span>
            </div>
         </div>
         {
            isCreate === false ?
            <UserCheck switchCreate={ switchTrigger }/>
            :
            <UserCreate switchCreate={ switchTrigger }/>
         }
      </div>
   )
}