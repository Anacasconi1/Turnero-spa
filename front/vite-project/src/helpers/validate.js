
//REGISTRO
export const validateRegister = (input) => {
    const errors = {};
    
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ' -]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const nDniRegex = /^\d{7,8}$/;
    const usernameRegex = /^[a-zA-Z0-9]{1,10}$/;
    const passwordRegex = /^[a-zA-Z0-9._-]{1,10}$/;

    //username
    if (input.username == "") {
        errors.username = "El usuario es requerido.";
    } else if (!usernameRegex.test(input.username)) {
        errors.username =
            "El nombre de usuario no debe tener mas de 10 caracteres y solo puede contener letras y numeros.";
    }

    //password
    if (input.password == "") {
        errors.password = "La contraseña es requerida.";
    } else if (!passwordRegex.test(input.password)) {
        errors.password =
            "La contraseña no puede contener mas de 10 caracteres alfanumericos, '-', '_' y/o '.'.";
    }

    //name
    if (input.name == "") {
        errors.name = "El nombre completo es requerido.";
    } else if (!nameRegex.test(input.name)) {
        errors.name = "El nombre solo puede contener caracteres Alfabeticos.";
    }

    //email
    if (input.email == "") {
        errors.email = "El email es requerido.";
    } else if (!emailRegex.test(input.email)) {
        errors.email = "Asegurate de que el formato del email sea correcto.";
    }

    //birthdate
    if (input.birthDate == "") {
        errors.birthDate = "La fecha de nacimiento es requerida";
    } else if (!birthDateRegex.test(input.birthDate)) {
        errors.birthDate =
            "Asegurate de que la fecha de nacimiento sea correcta";
    }

    //ndni
    if (input.nDni == "") {
        errors.nDni = "El numero de documento es requerido.";
    } else if (!nDniRegex.test(input.nDni)) {
        errors.nDni =
            "El numero de documento solo puede contener entre 7 y 8 caracteres numericos";
    }
    return errors;
};


//LOGIN
export const validateLogin = (input) => {
    const errors = {};
    const usernameRegex = /^[a-zA-Z0-9]{1,10}$/;
    const passwordRegex = /^[a-zA-Z0-9._-]{1,10}$/;
    //username
    if (input.username == "") {
        errors.username = "El usuario es requerido.";
    } else if (!usernameRegex.test(input.username)) {
        errors.username =
            "El nombre de usuario no debe tener mas de 10 caracteres y solo puede contener letras y numeros.";
    }

    //password
    if (input.password == "") {
        errors.password = "La contraseña es requerida.";
    } else if (!passwordRegex.test(input.password)) {
        errors.password =
            "La contraseña no puede contener mas de 10 caracteres alfanumericos, '-', '_' y/o '.'.";
    }
    return errors
};

export const validateAppointments = (input) =>{
    const errors = {}
    const timeRegex = /^(0[8-9]|1[0-9]|2[0-2]):[0-5][0-9]$/;

    //date
    if (input.date == ""){
        errors.date = "La fecha es requerida.";

    }else if(input.date < today){
        errors.date = "La fecha no puede ser anterior a la fecha actual."
    }
    const date = new Date(input.date);
    const dayOfWeek = date.getUTCDay();
    if(dayOfWeek === 6 || dayOfWeek === 0){
        errors.date = "No se pueden agendar turnos los fines de semanas"
    }

    //time
    if (input.time == ""){
        errors.time = "La hora es requerida.";

    }else if(!timeRegex.test(input.time)){
        errors.time = "El horario de antencion es de 08 AM a 10 PM."
    }
    return errors
}


export const today = new Date().toISOString().split('T')[0];


