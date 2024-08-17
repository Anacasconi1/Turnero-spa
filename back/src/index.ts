import server from "./server";

import { PORT } from "./config/envs";

import "reflect-metadata";
import { AppDataSource } from "./config/data.source";

AppDataSource.initialize().then(() => {
    console.log("Database connected");
    server.listen(PORT, () => {
        console.log(`App listening on PORT ${PORT}`);
    });
});
