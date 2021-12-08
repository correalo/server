import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Surgery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 80, nullable: true })
  nome: string;

  @Column("date", { nullable: true })
  data_de_cirurgia: Date;

  @Column("varchar", { length: 80, nullable: true })
  tipo_de_cirurgia: string;

  @Column("varchar", { length: 80, nullable: true })
  convenio: string;

  @Column({
    type: "decimal",
    precision: 5,
    scale: 2,
    default: 0,
    nullable: true,
  })
  valor: number;

  @Column("varchar", { length: 11, nullable: true })
  recebido_por: string;

  @Column({ type: "boolean", nullable: true })
  pago: boolean;

  constructor(
    nome,
    data_de_cirurgia,
    tipo_de_cirurgia,
    convenio,
    valor,
    recebido_por,
    pago
  ) {
    this.nome = nome;
    this.data_de_cirurgia = data_de_cirurgia;
    this.tipo_de_cirurgia = tipo_de_cirurgia;
    this.convenio = convenio;
    this.valor = valor;
    this.recebido_por = recebido_por;
    this.pago = pago;
  }
}
