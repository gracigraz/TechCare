import React from "react";
import {v4 as uuidv4} from "uuid";
import "./Patients.scss";

import search from "../../assets/icons/search.svg";
import more from "../../assets/icons/more.svg";

import { PatientsProps } from '../../types';

const Patients: React.FC<PatientsProps> = ({patients}) => {
	
	return (
		<div className="patients">
			<div className="patients__heading-wrapper">
				<h2 className="patients__heading">Patients</h2>
				<img src={search} alt="search or magnifying glass icon" />
			</div>
            <div className="patients__group">
			{patients?.map((patient) => (
				<div className="patients__container" key={uuidv4()}>
                    <div className="patients__info">
                        <img className="patients__profile" src={patient.profile_picture} alt={patient.name} />
                        <div className="patients__bio">
                            <p className="patients__name">{patient.name}</p>
                            <p className="patients__gender-age">
                                {patient.gender}, {patient.age}
                            </p>
                        </div>
                    </div>
					<img src={more} alt="more three dots icon" className="patients__more" />
				</div>
			))}
            </div>
		</div>
	);
};

export default Patients;
