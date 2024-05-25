import React from "react";
import "./Header.scss";

import logo from "../../assets/images/TestLogo.svg";
import doctor from "../../assets/images/woman-doctor.png";
import home from "../../assets/icons/home.svg";
import patients from "../../assets/icons/group_bust.svg";
import chat from "../../assets/icons/chat.svg";
import calendar from "../../assets/icons/calendar.svg";
import card from "../../assets/icons/credit_card.svg";
import settings from "../../assets/icons/settings.svg";

const Header: React.FC = () => {
	return (
		<header className="header">
			<img className="header__logo" src={logo} alt="logo of Tech Care" />

			<ul className="header__menu">
				<li className="header__item">
					<img src={home} alt="icon of a house" />
					<span className="header__text">Overview</span>
				</li>
				<li className="header__item">
					<img src={patients} alt="icon of two people's bust" />
					<span className="header__text">Patients</span>
				</li>
				<li className="header__item">
					<img src={calendar} alt="icon of a caledar for scheduling" />
					<span className="header__text">Schedule</span>
				</li>
				<li className="header__item">
					<img src={chat} alt="icon of a chat message" />
					<span className="header__text">Message</span>
				</li>
				<li className="header__item">
					<img src={card} alt="icon of a credit card" />
					<span className="header__text">Transactions</span>
				</li>
			</ul>
			<div className="header__profile">
				<img className="header__profile-img" src={doctor} alt="senior woman doctor" />
				<div className="header__doctor">
					<p className="header__doctor-name">Dr. Jose Simmons</p>
					<p className="header__doctor-specialty">General Practitioner</p>
				</div>
				<img className="header__settings" src={settings} alt="settings icon" />
				<span className="header__dots">...</span>
			</div>
		</header>
	);
};

export default Header;
