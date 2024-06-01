import React from "react";
import {Patient} from "../../types";
import "./DiagnosisList.scss";
import {v4 as uuidv4} from "uuid";
interface DiagnosisListProps {
	patient: Patient | undefined;
  }
  
  const DiagnosisList: React.FC<DiagnosisListProps> = ({ patient }) => {
	
	return (
		<div className="diagnosis">
			<h2 className="diagnosis__heading">Diagnostic List</h2>
			<div className="diagnosis__headings">
				<h4 className="diagnosis__list-heading">Problem/Diagnosis</h4>
				<h4 className="diagnosis__list-heading">Description</h4>
				<h4 className="diagnosis__list-heading">Status</h4>
			</div>
			<ul className="diagnosis__list">
				{patient?.diagnostic_list.map((diagnostic) => (
					<li className="diagnosis__item" key={uuidv4()}>
						<span className="diagnosis__name">{diagnostic.name}</span>
						<span className="diagnosis__description">{diagnostic.description}</span>
						<span className="diagnosis__status">{diagnostic.status}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DiagnosisList;
