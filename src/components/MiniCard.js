import "./MiniCard.css";

function MiniCard(props) {
	return (
		<article className="mini-container">
			<div>
				<h2 className="title">{props.title}</h2>
				<img
					className="mini-icon"
					src={`./images/icon-${props.service}.svg`}
					alt={`${props.service} icon`}
				/>
			</div>
			<div className="overview-stats">
				<h3 className="today-count">{props.todayCount}</h3>
				<img
					className="mini-arrow"
					src={`./images/icon-${props.movement}.svg`}
					alt={`${props.movement} arrow`}
				/>
				<p className={`percentage ${props.movement}`}>
					{props.percentage}%
				</p>
			</div>
		</article>
	);
}
export default MiniCard;
