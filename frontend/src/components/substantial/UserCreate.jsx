import Button from "../diminutive/Button"

export default function userCreate({ switchCreate }) {
   return(
      <form className="landingPageRight">
         {/* WELCOME IMAGE */}
         <img 
            alt="welcome" 
            className="landingPageWelcome" 
            src="https://www.freepnglogos.com/uploads/welcome-png/worthy-welcome-worthy-christian-forums-1.png"
         />
         {/* BEFORE CONTINUE, PLEASE ENTER USERNAME */}
         <span className="landingPageInfo">To create a new Username,</span>
         <span className="landingPageInfo">please enter a unique and unused one.</span>
         {/* INPUT & BUTTON */}
         <input className="landingPageInputUsername" name="inputUsername" placeholder="Input your new username here" required type="text"/>
         <Button 
            fontSize="0.8vw" 
            name="CREATE" 
            padding="0.8vw" 
            width="55%"
         />
         {/* OR */}
         <div className="orBorder">
            <div className="orText">OR</div>
         </div>
         {/* DON'T HAVE USERNAME YET */}
         <span className="dontHaveUsername">Already have one?
            <span className="createUsername" onClick={ () => { switchCreate() } }> Check in now!</span>
         </span>
      </form>
   )
}