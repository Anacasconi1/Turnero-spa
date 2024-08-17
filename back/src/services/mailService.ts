import { transporter } from "../config/nodemailer";
import UserDto from "../dto/Userdto";

export const senderMail = async(user: UserDto)=>{
    const info = await transporter.sendMail({
        from: '"Candle SPA" <sabriicasconii@gmail.com>', 
        to: user.email, 
        subject: "Registro realizado correctamente", 
        text: "Registro realizado con exito.\n Disfrute su estadia.🕯\nGracias por elegirnos.🥰", 
    });
}
