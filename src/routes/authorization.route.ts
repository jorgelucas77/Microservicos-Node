import { NextFunction, Request, Response, Router } from 'express';
import ForbiddenError from '../models/errors/forbidden.error.model';
import userRepository from '../repositories/user.repository';
import JWT from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import basicAuthenticationMiddleware from '../middlewares/bascic-authentication.middleware';

const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware , async (req: Request, rest: Response, next: NextFunction) => {
    try {
        const user = req.user;

        if(!user) {
            throw new ForbiddenError('Utilizador não informado');
        }
        const jwtPayload = { username: user.username};
        const jwtOptions = { subject: user?.uuid } ;
        const secretKey = 'my_secret_key';
        
        const jwt =  JWT.sign(jwtPayload,secretKey ,jwtOptions );
        
        rest.status(StatusCodes.OK).json({token: jwt});

    } catch (error) {
        next(error);
    }
});

export default authorizationRoute;