// styles
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
	const handleClick = () => {
		if (!disabled) {
			handleChoice(card);
		}
	};

	return (
		<div className="card">
			<div className={flipped ? "flipped" : ""}>
				<img className="front" src={card.src} alt="magical object" />
				<img onClick={handleClick} className="back" src="/img/cover.png" alt="back of the card" />
			</div>
		</div>
	);
}
