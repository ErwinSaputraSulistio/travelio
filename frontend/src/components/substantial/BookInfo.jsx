export default function BookInfo({ author, close, img, publisher, title }) {
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
						<span><b>Title</b> : { title || "-" }</span>
						<span><b>Author</b> : { author || "-" }</span>
						<span><b>Publisher</b> : { publisher || "-" }</span>
						<span><b>Rating</b> :</span>
					</div>
				</div>
			</div>
		</div>
	)
}