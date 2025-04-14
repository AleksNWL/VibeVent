import {Link} from "react-router-dom";
import {events} from "../../data/data.ts"
import {MdEventNote, MdKeyboardDoubleArrowLeft} from "react-icons/md";
import "./ListEvents.scss"
import CardEvent from "../../components/CardEvent/CardEvent.tsx";
import {motion} from "framer-motion";


function ListEvents() {
    const iconAnim = {
        initial: { x: 0 },
        hover: { x: -5 }
    }

    return (
        <>
            <motion.div whileHover="hover" initial="initial">
                <Link to="/" className="back">
                    <motion.div variants={iconAnim} transition={{ type: "tween", duration: 0.2 }}>
                        <MdKeyboardDoubleArrowLeft />
                    </motion.div>
                    Главная
                </Link>
            </motion.div>
            <div className="header">
                <h1>Список мероприятий</h1>
                <MdEventNote/>
            </div>
            <div className="cards">
                {events.map(event => (
                    <motion.div whileHover={{
                        scale: 1.05,
                        rotate: 2,
                        border: "1px solid #98a6ff",
                        borderRadius: 10,
                    }}>
                        <Link to={`/${event.id}`} key={event.id}>
                            <div className="card">
                                <CardEvent title={event.title} description={event.description} image={event.image} category={event.category} date={event.date} />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </>
    )
}
export default ListEvents;