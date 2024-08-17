import { useDispatch } from "react-redux";
import "../../styles/Appointments.css";
import axios from "axios";
import { cancelAppointment } from "../../redux/reducer";

export const Appointment = (promp) => {
    const dispatch = useDispatch();

    const cancelAppoint = async () => {
        try {
            await axios.put(
                `http://localhost:3001/appointment/cancel/${promp.id}`
            );
            dispatch(cancelAppointment(promp.id));
        } catch (error) {
            throw new Error({ message: error });
        }
    };
    const today = new Date();
    const dayAppoint = new Date(promp.date)
    const oneDayInMs = 24 * 60 * 60 * 1000;
    const differenceInDays = (dayAppoint - today) / oneDayInMs;
    return (
        <div className="card">
            <h6 className="appoint-date texts">Fecha: {promp.date}</h6>
            <h6 className="appoint-time texts">Hora: {promp.time}</h6>
            <h6 className="appoint-status texts">Estado: {promp.status}</h6>
            <button
                className="appoint-btn"
                onClick={() => cancelAppoint()}
                disabled={(promp.status === "cancelado" || differenceInDays <= 1 )? true : false}
            >
                Cancelar
            </button>
        </div>
    );
};
