// styles
import "./SingleCard.css";

export default function SingleCard({ card }) {
	return (
		<div className="card">
			<div>
				<img className="front" src={card.src} alt="magical object" />
				<img className="back" src="/img/cover.png" alt="back of the card" />
			</div>
		</div>
	);
}
