import {Link} from "react-router-dom";
import {events} from "../../data/data.ts"
import {MdEventNote, MdKeyboardDoubleArrowLeft} from "react-icons/md";
import "./ListEvents.scss"
import CardEvent from "../../components/CardEvent/CardEvent.tsx";


function ListEvents() {
    return (
        <>
            <Link to="/" className="back">
                <MdKeyboardDoubleArrowLeft />
                Главная
            </Link>
            <div className="header">
                <h1>Список мероприятий</h1>
                <MdEventNote/>
            </div>
            <div className="cards">
                {events.map(event => (
                    <Link to={`/${event.id}`} key={event.id}>
                        <div className="card">
                            <CardEvent title={event.title} description={event.description} image={event.image} category={event.category} date={event.date} />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}
export default ListEvents;