import { NextFunction, Request, Response } from "express";

export const validationUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let validator = [];
    try {
        const user = await req.body;
        if (user){
            for (const iterator in user) {
                const i = user[iterator];
                if(i.length > 0 || typeof(i) === "number"){
                    validator.push(true);
                }else{
                    validator.push(false, iterator);
                }
            }
        }
        const includerFalse = await validator.includes(false);
        
        if(!includerFalse){
            validator = []
            next()
        }else{
            validator = []
            next({error: "Revisa los datos ingresados"})
        }
    } catch (error) {
        next({error: "Revisa los datos ingresados"})
        
    }
};

