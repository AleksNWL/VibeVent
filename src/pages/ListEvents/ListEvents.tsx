import {Link} from "react-router-dom";
import {events} from "../../data/data.ts"
import CardEvent from "../../components/CardEvent/CardEvent.tsx";
import "./ListEvents.scss"


function ListEvents() {
    return (
        <>
            <div className="header">Список мероприятий</div>
            <div className="cards">
                {events.map(event => (
                    <Link to={`/${event.id}`} key={event.id}>
                        <div className="card">
                            <CardEvent title={event.title} description={event.description} image={event.image} category={event.category}/>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}
export default ListEvents;