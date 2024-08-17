import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateRegister } from "../../helpers/validate";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


export const RegisterFormik = () => {
    const navigate = useNavigate()
    const handleSubmit = async (values, actions) => {
        const data = {
            name: values.name,
            email: values.email,
            birthDate: values.birthDate,
            nDni: values.nDni,
            username: values.username,
            password: values.password,
        };
        try {
            await axios.post("http://localhost:3001/users/register", data);
            actions.resetForm ({
                values: {
                    name: "",
                    email: "",
                    birthDate: "",
                    nDni: "",
                    username: "",
                    password: ""
                }
            })
            navigate('/login')

        } catch (error) {
            throw Error({ error: error });
        }
    };

    return (
        <fieldset className="border-form">
            <legend className="title-form">REGISTRO DE USUARIO</legend>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    birthDate: "",
                    nDni: "",
                    username: "",
                    password: "",
                }}
                validate={validateRegister}
                onSubmit={handleSubmit}
            >
                {({errors})=>(

                    <Form className="general-form-container">
                    <legend className="inputs-names">Nombre completo</legend>
                    <Field
                        className="inputs-fields"
                        type="text"
                        name="name"
                        placeholder="Ingresa tu nombre completo"
                    />
                    <span className="errorMessage">
                        <ErrorMessage name="name" />
                    </span>

                    <legend className="inputs-names">Email</legend>
                    <Field
                        className="inputs-fields"
                        type="email"
                        name="email"
                        placeholder="Ingresa tu email"
                    />
                    <span className="errorMessage">
                        <ErrorMessage name="email" />
                    </span>

                    <legend className="inputs-names">
                        Fecha de nacimiento
                    </legend>
                    <Field
                        className="inputs-fields"
                        type="date"
                        
                        name="birthDate"
                        placeholder="Selecciona tu fecha de nacimiento"
                    />
                    <span className="errorMessage">
                        <ErrorMessage name="birthDate" />
                    </span>

                    <legend className="inputs-names">
                        Numero de documento/DNI
                    </legend>
                    <Field
                        className="inputs-fields"
                        type="text"
                        name="nDni"
                        placeholder="Ingresa tu numero de documento"
                        />
                    <span className="errorMessage">
                        <ErrorMessage name="nDni" />
                    </span>

                    <legend className="inputs-names">Nombre de usuario</legend>
                    <Field
                        className="inputs-fields"
                        type="text"
                        name="username"
                        placeholder="Ingresa un nombre de usuario"
                        />
                    <span className="errorMessage">
                        <ErrorMessage name="username" />
                    </span>

                    <legend className="inputs-names">Contraseña: </legend>
                    <Field
                        className="inputs-fields"
                        type="password"
                        name="password"
                        placeholder="Ingresa tu contraseña"
                    />
                    <span className="errorMessage">
                        <ErrorMessage name="password" />
                    </span>

                    <button type="submit" className="form-btns" disabled={errors.name||errors.birthDate||errors.email||errors.nDni||errors.password||errors.username} >
                        REGISTRARSE
                    </button>
                </Form>
                )}
            </Formik>
        </fieldset>
    );
};
