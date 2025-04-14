import { Link } from 'react-router-dom';
import "./Home.scss"
import { Button, HStack } from "@chakra-ui/react"
import { FaHome, FaArrowRight } from "react-icons/fa";

function Home() {
    return(
        <div className="home">
            <div className="home-container">
                <h1 className="home-header">Vibe<span style={{color: "#586dff"}}>Vent</span></h1>
                <HStack>
                    <Button colorPalette="teal" variant="solid">
                        <FaHome /><Link to="/">Главная</Link>
                    </Button>
                    <Button colorPalette="teal" variant="subtle" border="1px solid teal" paddingRight="10" paddingLeft="10">
                        <Link to="/listEvents">Мероприятия</Link> <FaArrowRight />
                    </Button>
                </HStack>
            </div>
        </div>
    );
}

export default Home;
