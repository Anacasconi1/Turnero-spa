import { useEffect } from "react";
import { Appointment } from "./Appointment";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../styles/Appointments.css";
import { addAppointment } from "../../redux/reducer";

export const Appointments = () => {
    const usersData = useSelector((state) => state.userLogged);
    const appointments = useSelector((state) => state.appointments);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/users/${usersData.id}`
                );

                dispatch(addAppointment(response.data.appointments));
            } catch (error) {
                throw Error({ message: error });
            }
        };
        getData();
    }, [dispatch, usersData]);

    return (
        <>
            {appointments.length ? (
                <>
                    <h1 className="title-appoints">Tus turnos</h1>
                    <div className="appoint-container">
                        {appointments?.map((appointment) => {
                            return (
                                <Appointment
                                    date={appointment.date}
                                    time={appointment.time}
                                    id={appointment.id}
                                    user={appointment.user}
                                    status={appointment.status}
                                    key={appointment.id}
                                />
                            );
                        })}
                    </div>
                </>
            ) : (
                <div className="container-title">
                    <h3 className="title-appoints">NO TIENES NINGUN TURNO</h3>
                </div>
            )}
            <Link to={"/addappointments"} className="link-form2">
                Añadir turno
            </Link>
        </>
    );
};
