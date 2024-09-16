import { Periferico } from "src/periferico/schema/periferico.schema";
export declare class CreateComputadorDto {
    nome: string;
    cor: string;
    dataFabricacao: number;
    periferico: [Periferico];
}
