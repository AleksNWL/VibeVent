import CardEvent from "../components/CardEvent/CardEvent.tsx";
import {useParams} from "react-router-dom";
import {events} from "../data/data.ts";


function Event() {
    const {id} = useParams();
    const event = events.find((e) => e.id === id);

    if (!event) return <div>Мероприятие не найдено</div>;

    return (
        <>
            <div>Я страница</div>
            <CardEvent title={event.title} description={event.description} image={event.image} category={event.category}/>
        </>
    )
}
export default Event;