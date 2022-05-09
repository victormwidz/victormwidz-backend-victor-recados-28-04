import { RecadosEntity } from '../entities';
import { recadosDTO } from '../../dto';

export class RecadosRepository {
    async find() {
        const recados = await RecadosEntity.find();

        return recados;
    }

    async findOne(id: number) {
        const recados = await RecadosEntity.findOne(id);
        
        return recados;
    }

    async create(recadosDTO: recadosDTO) {
        const recados = await new RecadosEntity(recadosDTO.descricao, recadosDTO.detalhamento);
        recados.save();

        return recados;
    }

    async update(recadosDTO: recadosDTO) {
        const recados = await RecadosEntity.findOne(recadosDTO.id);

        if (recados) {
            recados.descricao = recadosDTO.descricao;
            recados.detalhamento = recadosDTO.detalhamento;

            await recados.save();
        }

        return recados;
    }

    async delete(RecadosID: number) {
        await RecadosEntity.delete(RecadosID);
    }
}