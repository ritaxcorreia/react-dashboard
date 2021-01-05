import "./MainCard.css";

function MainCard(props) {
	return (
		<article className={`container ${props.service}`}>
			<div>
				<img
					className="icon"
					src="./images/icon-facebook.svg"
					alt="Facebook icon"
				/>
				<p className="social-handle">{props.socialHandle}</p>
			</div>
			<h3 className="big-stat">{props.followerCount}</h3>
			<h4 className="followers-text">{props.followerText}</h4>
			<div>
				<img
					className="arrow"
					src={`./images/icon-${props.movement}.svg`}
					alt={`${props.movement} arrow`}
				/>
				<p className={`daily-count ${props.movement}`}>
					{props.dailyCount} Today
				</p>
			</div>
		</article>
	);
}

export default MainCard;
