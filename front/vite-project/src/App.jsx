import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Register } from "./views/Register";
import { AboutUs } from "./views/AboutUs";
import { NavBar } from "./components/NavBar/NavBar";
import { Appointments } from "./components/Appointments/Appointments";
import { AddAppointment } from "./views/AddAppointment";

function App() {
    return (
        <>
            <div className="bar-div">
                <img src="/logo.png" alt="logo-vela" className="logo" />
                <NavBar />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/addappointments" element={<AddAppointment />} />
            </Routes>
        </>
    );
}

export default App;
