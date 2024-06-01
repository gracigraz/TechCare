import React from "react";
import "./LabResults.scss";
import download from "../../assets/icons/download.svg";
import {Patient} from "../../types";
import {v4 as uuidv4} from "uuid";

interface LabResultsProps {
	patient: Patient | undefined;
}
const LabResults: React.FC<LabResultsProps> = ({patient}) => {
	return (
		<div className="results">
			<h2 className="results__heading">Lab Results</h2>
			<ul className="results__list">
				{patient?.lab_results.map((lab_results) => (
					<li className="results__item" key={uuidv4()}>
						<span className="results_lab">{lab_results}</span>
						<img className="results_icon" src={download} alt="download" />
					</li>
				))}
			</ul>
		</div>
	);
};

export default LabResults;
