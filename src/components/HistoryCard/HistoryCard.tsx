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
	return (
		<div className="card">
			<img className="card_icon" src={iconSrc} alt={iconAlt} />
			<div className="card_info">
				<p className="card_title">{title}</p>
				<p className="card_value">{value}</p>
			</div>
			<img className="card_level-icon" src={lowLevelIconSrc} alt="low level" />
			<img className="card_level-icon" src={highLevelIconSrc} alt="high level" />
			<span className="card__level">{level}</span>
		</div>
	);
};

export default HistoryCard;
