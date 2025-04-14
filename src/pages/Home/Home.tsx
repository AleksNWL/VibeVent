import { Link } from 'react-router-dom';
import "./Home.scss"


function Home() {
    return(
        <div className="Home">
            <div className="nav">
                <Link to="/">Главная</Link>
                <Link to="/listEvents">Мероприятия</Link>
            </div>
        </div>
    );
}

export default Home;
