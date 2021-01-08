import "./Toggle.css";

function Toggle() {
	return (
		<div className="toggle-group">
			<h2 className="dark-mode-text">Dark Mode</h2>
			<input className="toggle" type="checkbox"></input>
		</div>
	);
}

export default Toggle;
