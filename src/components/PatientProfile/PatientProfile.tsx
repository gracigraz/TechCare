import React from "react";
import "./PatientProfile.scss";
import birthday from "../../assets/icons/birthIcon.svg";
import female from "../../assets/icons/femaleIcon.svg"
import phone from "../../assets/icons/phoneIcon.svg"
import insurance from "../../assets/icons/insuranceIcon.svg"
import jessica from "../../assets/images/Jessica.png"

interface Patient {
    name: string;
    gender: string;
    profile_picture: string;
    age: number;
    date_of_birth: string;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string;
  }
  
  interface PatientProfileProps {
    patient: Patient;
  }

const PatientProfile: React.FC<PatientProfileProps> = ({ patient}) => {
	return (
		<div className="patient-profile">
			<img className="patient-profile__img" src={jessica} alt="Patient profile" />
			<h1 className="patient-profile__name">{patient.name}</h1>
			<ul className="patient-profile__list">
				<li className="patient-profile__item">
					<img className="patient-profile__icon" src={birthday} alt="calendar" />
                    <div className="patient-profile__content">
                        <p className="patient-profile__text">Date Of Birth</p>
                        <p className="patient-profile__text patient-profile__text--bold">{patient.date_of_birth}</p>
                    </div>
				</li>
                <li className="patient-profile__item">
					<img className="patient-profile__icon" src={female} alt="female/male symbol" />
                    <div className="patient-profile__content">
                        <p className="patient-profile__text">Gender</p>
                        <p  className="patient-profile__text patient-profile__text--bold">{patient.gender}</p>
                    </div>
				</li>
                <li className="patient-profile__item">
					<img className="patient-profile__icon" src={phone} alt="phone" />
                    <div className="patient-profile__content">
                        <p className="patient-profile__text">Contact Info.</p>
                        <p  className="patient-profile__text patient-profile__text--bold">{patient.phone_number}</p>
                    </div>
				</li>
                <li className="patient-profile__item">
					<img  className="patient-profile__icon" src={phone} alt="phone" />
                    <div className="patient-profile__content">
                        <p className="patient-profile__text">Emergency Contacts</p>
                        <p  className="patient-profile__text patient-profile__text--bold">{patient.emergency_contact}</p>
                    </div>
				</li>
                <li className="patient-profile__item">
					<img className="patient-profile__icon" src={insurance} alt="insurance badge" />
                    <div className="patient-profile__content">
                        <p className="patient-profile__text">Insurance Provider</p>
                        <p  className="patient-profile__text patient-profile__text--bold">{patient.insurance_type}</p>
                    </div>
				</li>
			</ul>
            <button className="patient-profile__button">Show All Information</button>
		</div>
	);
};

export default PatientProfile;
