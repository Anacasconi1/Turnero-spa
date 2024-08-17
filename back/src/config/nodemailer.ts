const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "sabriicasconii@gmail.com",
        pass: "tmmz deaq rzrl docc", //probablemente esto deberia estar como variable de entorno pero como todavia no domino la libreria, no sabia si iba a funcionar si lo ponia como variable de entorno
    },
});
