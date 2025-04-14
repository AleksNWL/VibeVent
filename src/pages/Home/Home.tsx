import { Link } from 'react-router-dom';
import "./Home.scss"
import { Button, HStack } from "@chakra-ui/react"
import { FaHome, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";


function Home() {
    const iconVariants = {
        initial: { x: 0 },
        hover: { x: 5 },
    }
    const MotionButton = motion(Button);

    return(
        <div className="home">
            <div className="home-container">
                <motion.div
                    whileHover={{
                        scale: 1.5,
                        rotate: 5
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300
                    }}
                >
                    <h1 className="home-header">Vibe<span style={{color: "#586dff"}}>Vent</span></h1>
                </motion.div>
                <HStack>
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            rotate: -5
                        }}>
                        <Button colorPalette="teal" variant="solid" borderRadius="15px" fontSize="2rem" padding="5" mr="5">
                            <FaHome /><Link to="/">Главная</Link>
                        </Button>
                    </motion.div>

                    <MotionButton
                        initial="initial"
                        whileHover="hover"
                        colorPalette="teal" variant="subtle" border="1px solid teal" paddingRight="10" paddingLeft="10" borderRadius="15px" fontSize="1.5rem">
                        <Link to="/listEvents">Мероприятия</Link>
                        <motion.div
                            variants={iconVariants}
                            transition={{ type: "tween", duration: 0.2 }}>
                            <FaArrowRight />
                        </motion.div>
                    </MotionButton>
                </HStack>
            </div>
        </div>
    );
}

export default Home;
