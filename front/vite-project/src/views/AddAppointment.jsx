import { Formik, Form, Field, ErrorMessage } from "formik";
import { today, validateAppointments } from "../helpers/validate";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "../styles/forms.css";

export const AddAppointment = () => {
    const user = useSelector((state) => state.userLogged);
    const navigate = useNavigate();

    const handleSubmit = async (values, actions) => {
        const data = {
            date: values.date,
            time: values.time,
            user: user.id,
        };
        try {
            await axios.post(
                "http://localhost:3001/appointment/schedule",
                data
            );
            
            actions.resetForm({
                values: {
                    date: "",
                    time: "",
                },
            });
            navigate("/appointments");
        } catch (error) {
            throw Error({ error: error });
        }
    };

    return (
        <fieldset className="border-form">
            <legend className="title-form">CREAR UN NUEVO TURNO</legend>
            <Formik
                initialValues={{ date: "", time: "" }}
                validate={validateAppointments}
                onSubmit={handleSubmit}
            >
                {({ errors }) => (
                    <Form className="general-form-container">
                        <legend className="inputs-names">Fecha</legend>
                        <Field
                            className="inputs-fields"
                            type="date"
                            min={today}
                            name="date"
                            placeholder="Ingresa la fecha"
                        />
                        <span className="errorMessage">
                            <ErrorMessage name="date" />
                        </span>

                        <legend className="inputs-names">Hora</legend>
                        <Field
                            className="inputs-fields"
                            type="time"
                            min="08:00"
                            max="22:00"
                            name="time"
                            placeholder="Ingresa la hora"
                        />
                        <span className="errorMessage">
                            <ErrorMessage name="time" />
                        </span>

                        <button
                            type="submit"
                            className="form-btns"
                            disabled={errors.date || errors.time}
                        >
                            AGENDAR TURNO
                        </button>
                    </Form>
                )}
            </Formik>
        </fieldset>
    );
};
