import { NextFunction, Request, Response } from "express";
import {hashSync, compareSync} from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { prismaClient } from "..";

import { JWT_SECRET } from "../secrets";

import { BadRequestException } from "../exceptions/bad-requests";
import { ErrorCode } from "../exceptions/root";
import { UnprocessableEntity } from "../exceptions/validation";
import { SignUpSchema } from "../schema/users";

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        SignUpSchema.parse(req.body)

        const { email, password, name} = req.body;

        let user = await prismaClient.user.findFirst({where: {email}})

        if(user){
            next(new BadRequestException("User already exists!", ErrorCode.USER_ALREADY_EXISTS))
        }

        user = await prismaClient.user.create({
            data: {
                email,
                password: hashSync(password, 10),
                name,
            }
        });

        res.json(user);
    }
    catch (err: any) {
        next(new UnprocessableEntity(err?.issues, 'Unprocessable entity', ErrorCode.UNPROCESSABLE_ENTITY))
    }
    
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    // const { email, password} = req.body;

    // let user = await prismaClient.user.findFirst({where: {email}})

    // if(!user){
    //     next(new BadRequestException('User does not exists', ErrorCode.USER_NOT_FOUND))
    // }

    // if(!compareSync(password, user.password)){
    //     next(new BadRequestException('Incorrect password', ErrorCode.INCORRECT_PASSWORD))
    // }

    // const token = jwt.sign({
    //     userId: user.id,
        
    // }, JWT_SECRET)

    // res.json({user, token});
}