import { Request, Response } from 'express';
import { RecadosService } from '../services';
import { HttpError } from '../errors';
import { defaultErrorMessage, HttpInternalErrorCode } from '../constants';
 
export default class RecadosController {
    async index(request: Request, response: Response) {
        const service = new RecadosService();

        try {
            const recados = await service.find();
    
            return response.json(recados.map(recado => {
                return {
                    id: recado.id,
                    descricao: recado.descricao,
                    detalhamento: recado.detalhamento
                }
            }));
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new RecadosService();

        try {
            const recados = await service.findOne(parseInt(id));
    
            return response.json({ recados });
            
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }

    async store(request: Request, response: Response) {
        const { detalhamento, descricao } = request.body;
        const service = new RecadosService();

        try {
            const recados = await service.create({
                detalhamento: detalhamento,
                descricao: descricao                
            });

            return response.json(recados);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { detalhamento, descricao } = request.body;
        const service = new RecadosService();

        try {
            const recados = await service.update({
                id: parseInt(id),
                detalhamento: detalhamento,
                descricao: descricao                
            });
            
            return response.json(recados);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const service = new RecadosService();

        try {
            await service.delete(parseInt(id));
    
            return response.sendStatus(204);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }
    }
};