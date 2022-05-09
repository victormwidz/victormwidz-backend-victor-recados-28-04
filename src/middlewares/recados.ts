import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors';
import { HttpBadRequestCode, invalidField } from '../constants';

export const recadosValidateMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const { detalhamento } = request.body;

    if (detalhamento.length < 3 || detalhamento.length > 255) {
        throw new HttpError(invalidField('detalhamento'), HttpBadRequestCode);
    }
    
    next();
}