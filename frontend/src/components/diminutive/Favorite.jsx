export default function Favorite({ data }) {
   return(
      <div className="favorite">
         <span>Buku { data }</span>
         <span className="favoriteRemove">Remove</span>
      </div>
   )
}