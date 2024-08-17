import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { validateLogin } from "../../helpers/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import "../../styles/forms.css";
import { addUser } from "../../redux/reducer";

export const LoginFormik = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (values, actions) => {
        const data = {
            username: values.username,
            password: values.password,
        };
        try {
            const response = await axios.post(
                "http://localhost:3001/users/login",
                data
            );
            if (response.status === 201 || response.data.status != 404) {
                dispatch(addUser(response.data));
                actions.resetForm({
                    values: {
                        username: "",
                        password: "",
                    },
                });
            }
                navigate("/");
        } catch (error) {
            throw Error({ error: error });
        }
    };

    return (
        <fieldset className="border-form">
            <legend className="title-form">INICIO DE SESION</legend>
            <Formik
                initialValues={{ username: "", password: "" }}
                validate={validateLogin}
                onSubmit={handleSubmit}
            >
                {({ errors }) => (
                    <Form className="general-form-container">
                        <legend className="inputs-names">
                            Nombre de usuario
                        </legend>
                        <Field
                            className="inputs-fields"
                            name="username"
                            placeholder="Ingresa tu nombre de usuario"
                        />
                        <span className="errorMessage">
                            <ErrorMessage name="username" />
                        </span>

                        <legend className="inputs-names">Contraseña</legend>
                        <Field
                            className="inputs-fields"
                            type="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                        />
                        <span className="errorMessage">
                            <ErrorMessage name="password" />
                        </span>

                        <button
                            type="submit"
                            className="form-btns"
                            disabled={errors.username || errors.password}
                        >
                            INICIAR SESION
                        </button>
                    </Form>
                )}
            </Formik>
            <Link to={"/register"} className="link-form">¿No tienes cuenta? Registrate.
            </Link>
        </fieldset>
    );
};
