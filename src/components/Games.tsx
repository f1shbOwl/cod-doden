import {useState} from "react";
import '../assets/css/games.css';

function Games() {

    const [games] = useState([
        { src: `${import.meta.env.VITE_PUBLIC_URL}/images/concord.png`, alt: "concord" },
        { src: `${import.meta.env.VITE_PUBLIC_URL}/images/destiny2.png`, alt: "destiny2" },
        { src: `${import.meta.env.VITE_PUBLIC_URL}/images/diablo4.png`, alt: "diablo4" },
        { src: `${import.meta.env.VITE_PUBLIC_URL}/images/erdtree.png`, alt: "erdtree" },
        { src: `${import.meta.env.VITE_PUBLIC_URL}/images/firstdescendant.png`, alt: "firstdescendant" },
        { src: `${import.meta.env.VITE_PUBLIC_URL}/images/helldivers.png`, alt: "helldivers" },
        { src: `${import.meta.env.VITE_PUBLIC_URL}/images/stellarblade.png`, alt: "stellarblade" }
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