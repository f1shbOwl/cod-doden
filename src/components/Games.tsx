import {useState} from "react";
import '../assets/css/games.css';

function Games() {

    const [games] = useState([
        { src: "/images/concord.png", alt: "concord" },
        { src: "/images/destiny2.png", alt: "destiny2" },
        { src: "/images/diablo4.png", alt: "diablo4" },
        { src: "/images/erdtree.png", alt: "erdtree" },
        { src: "/images/firstdescendant.png", alt: "firstdescendant" },
        { src: "/images/helldivers.png", alt: "helldivers" },
        { src: "/images/stellarblade.png", alt: "stellarblade" }
    ])

    return (
        <div className="games">
            {games.map((game, index) => (
                <div className="game" key={index}>
                    <img src={game.src} alt={game.alt} />
                </div>
            ))}
            <p>more to come...</p>
        </div>
    );
}

export default Games