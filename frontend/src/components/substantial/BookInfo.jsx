import StarsRating from "stars-rating"

export default function BookInfo({ author, close, img, publisher, rating, title }) {
   return(
		<div className="bookInfoWindow">
			<div className="bookInfo">
				<div className="bookInfoTop">
				<img 
					alt="close" 
					className="bookCloseButton" 
					onClick={ () => { close() } }
					src="https://icon-library.com/images/close-icon-png/close-icon-png-19.jpg"
				/>
				</div>
				<div className="bookInfoBottom">
					<img 
						alt="bookInfoImage" 
						className="bookInfoImage" 
						src={ img || "https://cdn-d8.nypl.org/s3fs-public/blogs/J5LVHEL.jpg" }
					/>
					<div className="bookInfoDetail">
						<span><b className="bookInfoDetailLeft">Title : </b>{ title || "-" }</span>
						<span><b className="bookInfoDetailLeft">Author : </b>{ author || "-" }</span>
						<span><b className="bookInfoDetailLeft">Publisher : </b>{ publisher || "-" }</span>
						<span className="bookRating">
							<b className="bookInfoDetailLeft">Rating : </b>
							{ 
							rating === undefined ?
							"-"
							:
							<StarsRating
								className={ "ratingStarSize" }
								count={ 5 }
								edit={ false }
								value={ rating }
							/> 
							}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}