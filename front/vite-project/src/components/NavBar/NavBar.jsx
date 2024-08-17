import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../styles/navBar.css";

export const NavBar = () => {
    const userIsLogged = useSelector((state) => state.userLogged);

    return (
        
        <nav className="navbar-general-container">
            <ul className="navbar-container">
                <li>
                    <Link className="navbar-btns" to={"/"}>
                        INICIO
                    </Link>
                </li>

                <li>
                    <Link className="navbar-btns" to={"/aboutus"}>
                        SOBRE NOSOTROS
                    </Link>
                </li>

                {userIsLogged.name && (
                    <li>
                        <Link className="navbar-btns" to={"/appointments"}>
                            TUS TURNOS
                        </Link>
                    </li>
                )}

                <li>
                    {userIsLogged.name ? (
                        <div className="btns-navbar-conditionals"> 
                            <Link className="navbar-btns" to="/addappointments">
                                AGENDAR TURNO
                            </Link>
                            <Link
                                className="navbar-btns"
                                to={"/"}
                                onClick={() => {
                                    userIsLogged.state = {};
                                }}
                            >
                                CERRAR SESION
                            </Link>
                        </div>
                    ) : (
                        <Link className="navbar-btns" to={"/login"}>
                            INICIA SESION
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};
