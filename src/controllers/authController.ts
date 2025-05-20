import { Request, Response } from "express";
import {hashSync} from 'bcrypt';

import { db } from "../utils/db.server";

export const signUp = async (req: Request, res: Response) => {
    const { email, password, name} = req.body;

    let user = await db.user.findFirst({where: {email}})

    if(user){
        throw Error('User already exists!');
    }

    user = await db.user.create({
        data: {
            email,
            password: hashSync(password, 10),
            name,
        }
    });

    res.json(user);
}