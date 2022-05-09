import { 
    Entity, 
    BaseEntity,
    PrimaryColumn,
    Column
 } from 'typeorm';

@Entity({ name: 'recados' })
export class RecadosEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    descricao: string;

    @Column()
    detalhamento: string;

    constructor(descricao: string, detalhamento: string) {
        super();
        this.descricao = descricao;
        this.detalhamento = detalhamento;
    }
}