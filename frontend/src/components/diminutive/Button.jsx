export default function Button({ fontSize, name, padding, width }) {
   return(
      <button style={{ 
         background: "#6379F4", 
         borderRadius: "0.25vw", 
         color: "white", 
         fontSize, 
         fontWeight: "bold", 
         padding, 
         width 
      }}>
         { name }
      </button>
   )
}