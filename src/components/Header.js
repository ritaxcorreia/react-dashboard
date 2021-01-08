import "./Header.css";

function Header(props) {
	return (
		<div className="flex-heading">
			<h1 className="heading">{props.headerTitle}</h1>
			<h2 className="total">Total Followers: {props.totalFollowers}</h2>
		</div>
	);
}
export default Header;
