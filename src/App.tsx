import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./pages/Home/Home.tsx";
import ListEvents from "./pages/ListEvents/ListEvents.tsx";
import Event from "./pages/Event.tsx";
import Background from "./components/Background/Background.tsx";


function App() {
  return (
    <Router>
        <Background>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/listEvents" element={<ListEvents/>} />
                <Route path="/:id" element={<Event/>} />
            </Routes>
        </Background>
    </Router>
  )
}

export default App
