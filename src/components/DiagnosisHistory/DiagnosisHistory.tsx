import React from "react";

import "./DiagnosisHistory.scss";

import low from "../../assets/icons/arrow_down.svg";
import high from "../../assets/icons/arrow_up.svg";
import expand from "../../assets/icons/expand.svg";
// import heartBPM from '../../assets/icons/heartBPM.svg'
import respiratory from "../../assets/icons/respiratory_rate.svg";
import {Graph} from "../Graph/Graph";
// import temperature from "../../assets/icons/temperature.svg"
// import arrow_up from "../../assets/icons/arrow_up.svg"
// import arrow_down from "../../assets/icons/arrow_down.svg"
import HistoryCard from "../HistoryCard/HistoryCard";

const DiagnosisHistory: React.FC = () => {
	//if bpm or f
	//if lower or higher add an icon
	return (
		<div className="history">
			<h2 className="history__heading">Patients</h2>
			<div className="history__graph-section">
				<div className="history__left-section">
					<div className="history__subheading-wrapper">
						<h3 className="history__subheading">Blood Pressure</h3>
						<div className="history__timeline">
							<span className="history__duration">Last 6 months</span>
							<img className="history__icon" src={expand} alt="expan more options" />
						</div>
					</div>
					{/* <div className="history__graph"></div> */}
					<Graph />
				</div>
				<div className="history__right-section">
					<div className="history__blood-pressure history__blood-pressure--border">
						<div className="history__type-container">
							<div className="history__data-point history__data-point--pink"></div>
							<span className="history__type">Systolic</span>
						</div>
						<p className="history__pressure-value">160</p>
						<div className="history__result">
							<img className="history__icon" src={high} alt="High level" />
							<span className="history__pressure-level">Higher than Average</span>
						</div>
					</div>
					<div className="history__blood-pressure">
						<div className="history__type-container">
							<div className="history__data-point history__data-point--purple"></div>
							<span className="history__type">Diastolic</span>
						</div>
						<p className="history__pressure-value">78</p>
						<div className="history__result">
							<img className="history__icon" src={low} alt="Low level" />
							<span className="history__pressure-level">Lower than Average</span>
						</div>
					</div>
				</div>
			</div>

			<div className="history__cards">
				<HistoryCard
					iconSrc={respiratory}
					iconAlt="Respiratory Rate"
					title="Respiratory Rate"
					value="20 bpm"
					lowLevelIconSrc={low}
					highLevelIconSrc={high}
					level="normal"
				/>
				{/* <div className="history__card">
                    <img className="history__icon" src={respiratory} alt="Respiratory Rate" />
                    <div className="history__info">
                        <p className="history__title">Respiratory Rate</p>
                        <p className="history__value">20 bpm</p>
                    </div>
                 
                    <img className="history__level-icon" src={low} alt="low level"/>
                    <img className="history__level-icon" src={high} alt="high level"/>
                    <span className="history__level">normal</span>
                </div> */}
			</div>
		</div>
	);
};

export default DiagnosisHistory;
