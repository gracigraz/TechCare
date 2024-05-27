import React from "react";

import "./DiagnosisHistory.scss";

import respiratory from "../../assets/images/respiratory_rate.svg"
import low from "../../assets/images/low.svg"
import high from "../../assets/images/high.svg"
import more from "../../assets/more_options.svg"
import pink from "../../assets/pink_dot.svg"
import purple from "../../assets/purple_dot.svg"



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
                            <img className="history__icon" src={more} alt="more options"/>
                        </div>
                    </div>
                    <div className="history__graph"></div>
                </div>
                <div className="history__right-section">
                    <div  className="history__blood-pressure">
                        <div className="history__type-container">
                            <img className="history__icon" src={pink} alt="pink circle"/>
                            <span  className="history__type">Systolic</span>
                        </div>
                        <p className="history__pressure-value">160</p>
                        <div className="history__result">
                            <img className="history__icon" src={high} alt="High level"/>
                            <span className="history__pressure-level">Higher than Average</span>
                        </div>
                    </div>
                    <div  className="history__blood-pressure">
                        <div className="history__type-container">
                            <img className="history__icon" src={purple} alt="purple circle"/>
                            <span  className="history__type">Diastolic</span>
                        </div>
                        <p className="history__pressure-value">78</p>
                        <div className="history__result">
                            <img className="history__icon" src={low} alt="Low level"/>
                            <span className="history__pressure-level">Lower than Average</span>
                        </div>
                    </div>
                </div>
            </div>

			<div className="history__cards" >
                <div className="history__card">
                    <img className="history__icon" src={respiratory} alt="Respiratory Rate" />
                    <div className="history__info">
                        <p className="history__title">Respiratory Rate</p>
                        <p className="history__value">20 bpm</p>
                    </div>
                    {/* might have to add a div here */}
                    <img className="history__level-icon" src={low} alt="low level"/>
                    <img className="history__level-icon" src={high} alt="high level"/>
                    <span className="history__level">normal</span>
                </div>
			</div>  
		</div>
	);
};

export default  DiagnosisHistory;