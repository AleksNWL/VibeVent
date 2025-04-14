import {Link, useParams} from "react-router-dom";
import {events} from "../../data/data.ts";
import DetailedCard from "../../components/DetailedCard/DetailedCard.tsx"
import "./Event.scss"
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


function Event() {
    const {id} = useParams();
    const event = events.find((e) => e.id === id);

    if (!event) return <div>Мероприятие не найдено</div>;

    return (
        <>
            <Link to="/listEvents" className="back">
                <MdKeyboardDoubleArrowLeft />
                Вернуться к списку мероприятий
            </Link>
            <div className="card-header">{event.title}</div>
            <div className="card-container">
                <DetailedCard title={event.title} description={event.description} image={event.image} category={event.category} date={event.date} detailed={event.detailed} />
            </div>
        </>
    )
}
export default Event;