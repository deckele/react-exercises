import React, { FC, useState } from "react";
import "./App.css";
import { CalcContainer } from "./calc-container/calc-container";

export const App: FC = () => {
	const [ isCalcShowing, setIsCalcShowing ] = useState(true);

	function handleShowButtonClick() {
		setIsCalcShowing(!isCalcShowing);
	}

	return (
		<div className="App">
			<button onClick={handleShowButtonClick}>Show Calculator?</button>
			{/* <div style={{ display: isCalcShowing ? "" : "none" }}>
				<CalcContainer />
			</div> */}
			{/* <div className={ isCalcShowing ? "showing" : "hidden" }>
				<CalcContainer />
			</div> */}
			{
				isCalcShowing
					? <CalcContainer />
					: null
			}
		</div>
	);
}

