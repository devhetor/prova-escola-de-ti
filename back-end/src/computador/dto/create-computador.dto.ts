import { Periferico } from "src/periferico/schema/periferico.schema";

export class CreateComputadorDto {
    nome: string;
    cor: string;
    dataFabricacao: number;
    periferico: [Periferico];
}
