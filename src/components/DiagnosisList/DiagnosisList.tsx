import React from "react";

import "./DiagnosisList.scss";

const DiagnosisList: React.FC = () => {
	return (
		<div className="diagnosis">
			<h2 className="diagnosis__heading">x</h2>
			<ul className="diagnosis__list">
				<li className="diagnosis__item">
					<span className="diagnosis__name">name</span>
					<span className="diagnosis__description">description</span>
					<span className="diagnosis__status">Status</span>
				</li>
			</ul>
		</div>
	);
};

export default DiagnosisList;
