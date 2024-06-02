import React from "react";
import "./HistoryCard.scss";

interface HistoryCardProps {
	iconSrc: string;
	iconAlt: string;
	title: string;
	value: string;
	lowLevelIconSrc: string;
	highLevelIconSrc: string;
	level: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({iconSrc, iconAlt, title, value, lowLevelIconSrc, highLevelIconSrc, level}) => {
	let cardClass = "card";
	if (title.toLowerCase() === "respiratory rate") {
		cardClass += " card--blue";
        value += " bpm";
	} else if (title.toLowerCase() === "temperature") {
		cardClass += " card--orange";
        value += "°F";
	} else if (title.toLowerCase() === "heart bpm") {
		cardClass += " card--pink";
        value += " bpm";
        
	}
	return (
		<div className={cardClass}>
			<img className="card__icon" src={iconSrc} alt={iconAlt} />
			<div className="card__info">
				<p className="card__title">{title}</p>
				<p className="card__value">{value}</p>
			</div>
			<div className="card__levels-wrapper">
				{level.includes("Lower") && <img className="card__level-icon" src={lowLevelIconSrc} alt="low level" />}
				{level.includes("Higher") && <img className="card__level-icon" src={highLevelIconSrc} alt="high level" />}
				<span className="card__level">{level}</span>
			</div>
		</div>
	);
};

export default HistoryCard;
