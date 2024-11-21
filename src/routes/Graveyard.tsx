import '../assets/css/graveyard.css';
import Games from '../components/Games';

const Graveyard = () => {

    return (
        <>
        <div className="graveyard">
            <div className="heading">
                <h1>Welcome to the graveyard</h1>
                <h3>RIP 2024</h3>
            </div>
            <div className="container">
                <Games />
            </div>
        </div>
        </>
    );
}

export default Graveyard