import {Link, useParams} from "react-router-dom";
import {events} from "../../data/data.ts";
import DetailedCard from "../../components/DetailedCard/DetailedCard.tsx"
import "./Event.scss"
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import {motion} from "framer-motion";


function Event() {
    const {id} = useParams();
    const event = events.find((e) => e.id === id);
    const iconAnim = {
        initial: {x: 0},
        hover: {x: -5}
    }

    if (!event) return <div>Мероприятие не найдено</div>;

    return (
        <>
            <motion.div whileHover="hover" initial="initial">
                <Link to="/listEvents" className="back">
                    <motion.div variants={iconAnim}>
                        <MdKeyboardDoubleArrowLeft />
                    </motion.div>
                    Вернуться к списку мероприятий
                </Link>
            </motion.div>
            <div className="card-header">{event.title}</div>
            <div className="card-container">
                <DetailedCard title={event.title} description={event.description} image={event.image} category={event.category} date={event.date} detailed={event.detailed} />
            </div>
        </>
    )
}
export default Event;