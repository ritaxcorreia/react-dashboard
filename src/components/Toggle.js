import "./Toggle.css";

// function Toggle() {
// 	return (
// 		<div className="toggle-group">
// 			<h2 className="dark-mode-text">Dark Mode</h2>
// 			<input className="toggle" type="checkbox"></input>
// 		</div>
// 	);
// }

// export default Toggle;

import React from "react";
import styled from "styled-components";

const Input = styled.input`
	-webkit-appearance: none !important;
	-moz-appearance: none;
	background: ${({ theme }) => theme.background};
	border: none;
	color: ${({ theme }) => theme.text};
	position: relative;
	width: 48px;
	height: 24px;
	background-color: hsl(230, 22%, 74%);
	border-radius: 20px;
	cursor: pointer;
	outline: none;
	top: 6px;
	right: 0;
`;

const Toggle = ({ theme, toggleTheme }) => {
	return (
		<div className="toggle-group">
			<label htmlFor="toggle" className="dark-mode-text">
				Dark Mode
			</label>
			<Input
				id="toggle"
				className="toggle"
				type="checkbox"
				onClick={toggleTheme}
			/>
		</div>
	);
};

export default Toggle;
