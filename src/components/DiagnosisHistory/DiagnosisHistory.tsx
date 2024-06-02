import React from "react";

import "./DiagnosisHistory.scss";

import low from "../../assets/icons/arrow_down.svg";
import high from "../../assets/icons/arrow_up.svg";
import expand from "../../assets/icons/expand.svg";
import heartBPM from "../../assets/icons/heartBPM.svg";
import respiratory from "../../assets/icons/respiratory_rate.svg";
import temperature from "../../assets/icons/temperature.svg";
import Graph from "../Graph/Graph";
import {Patient} from "../../types";
import {BloodPressure} from "../../types";

import HistoryCard from "../HistoryCard/HistoryCard";
interface DiagnosisHistoryProps {
	patient: Patient | undefined;
}

const DiagnosisHistory: React.FC<DiagnosisHistoryProps> = ({patient}) => {
	if (!patient) return <div>Loading patient data...</div>;
	if (patient.diagnosis_history.length === 0) return <div>No diagnosis history available</div>;

	// patient.diagnosis_history is an array with at least one entry
	const latestDiagnosis = patient.diagnosis_history[0];

	return (
		<div className="history">
			<h2 className="history__heading">Diagnosis History</h2>
		
            <div className="history__graph-section">
				<div className="history__left-section">
					<div className="history__subheading-wrapper">
						<h3 className="history__subheading">Blood Pressure</h3>
						<div className="history__timeline">
							<span className="history__duration">Last 6 months</span>
							<img className="history__icon" src={expand} alt="expan more options" />
						</div>
					</div>
				    <Graph patient={patient} />
                </div>
				<div className="history__right-section">
					{[
						{
							key: "systolic",
							data: latestDiagnosis.blood_pressure.systolic,
							colorClass: "pink",
						},
						{
							key: "diastolic",
							data: latestDiagnosis.blood_pressure.diastolic,
							colorClass: "purple",
						},
					].map(({key, data, colorClass}) => (
						<div className={`history__blood-pressure ${key === "systolic" ? "history__blood-pressure--border" : ""}`}>
							<div className="history__type-container">
								<div className={`history__data-point history__data-point--${colorClass}`}></div>
								<span className="history__type">{key}</span>
							</div>
							<p className="history__pressure-value">{data.value}</p>
							<div className="history__result">
								<img className="history__icon" src={data.levels.includes("Higher") ? high : low} alt={data.levels} />
								<span className="history__pressure-level">{data.levels}</span>
							</div>
						</div>
					))}
					{/* {Object.keys(latestDiagnosis.blood_pressure).map((key) => (
						<div className={`history__blood-pressure ${key === "systolic" ? "history__blood-pressure--border" : ""}`}>
							<div className="history__type-container">
								<div className={`history__data-point history__data-point--${key === "systolic" ? "pink" : "purple"}`}></div>
								<span className="history__type">{key}</span>
							</div>
							<p className="history__pressure-value">{latestDiagnosis.blood_pressure[key].value}</p>
							<div className="history__result">
								<img
									className="history__icon"
									src={latestDiagnosis.blood_pressure[key].levels.includes("Higher") ? high : low}
									alt={latestDiagnosis.blood_pressure[key].levels}
								/>
								<span className="history__pressure-level">{latestDiagnosis.blood_pressure[key].levels}</span>
							</div>
						</div>
					))} */}
				</div>
			</div>

			<div className="history__cards">
				{patient && (
					<>
						<HistoryCard
							iconSrc={respiratory}
							iconAlt="Respiratory Rate"
							title="Respiratory Rate"
							value={latestDiagnosis.respiratory_rate.value.toString()}
							lowLevelIconSrc={low}
							highLevelIconSrc={high}
							level={latestDiagnosis.respiratory_rate.levels.toString()}
						/>
						<HistoryCard
							iconSrc={temperature}
							iconAlt="Thermometer"
							title="Temperature"
							value={latestDiagnosis.temperature.value.toString()}
							lowLevelIconSrc={low}
							highLevelIconSrc={high}
							level={latestDiagnosis.temperature.levels.toString()}
						/>
						<HistoryCard
							iconSrc={heartBPM}
							iconAlt="Heart Rate"
							title="Heart BPM"
							value={latestDiagnosis.heart_rate.value.toString()}
							lowLevelIconSrc={low}
							highLevelIconSrc={high}
							level={latestDiagnosis.heart_rate.levels.toString()}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default DiagnosisHistory;
