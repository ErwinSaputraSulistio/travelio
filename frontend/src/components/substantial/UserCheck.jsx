import Button from "../diminutive/Button"

export default function userCheck({ switchCreate }) {
   return(
      <form className="landingPageRight">
         {/* WELCOME IMAGE */}
         <img 
            alt="welcome" 
            className="landingPageWelcome" 
            src="https://www.freepnglogos.com/uploads/welcome-png/worthy-welcome-worthy-christian-forums-1.png"
         />
         {/* BEFORE CONTINUE, PLEASE ENTER USERNAME */}
         <span className="landingPageInfo">Before continue to Homepage,</span>
         <span className="landingPageInfo">please enter your Username first.</span>
         {/* INPUT & BUTTON */}
         <input className="landingPageInputUsername" name="inputUsername" placeholder="Input your username here" required type="text"/>
         <Button
            fontSize="0.8vw" 
            name="CHECK IN" 
            padding="0.8vw" 
            width="55%"
         />
         {/* OR */}
         <div className="orBorder">
            <div className="orText">OR</div>
         </div>
         {/* DON'T HAVE USERNAME YET */}
         <span className="dontHaveUsername">Don't have username yet?
            <span className="createUsername" onClick={ () => { switchCreate() } }> Create one now!</span>
         </span>
      </form>
   )
}