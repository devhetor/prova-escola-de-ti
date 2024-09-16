import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Periferico } from "src/periferico/schema/periferico.schema";

export type UserDocument = HydratedDocument<Computador>;

@Schema()
export class Computador {
    nome: string;
    cor: string;
    dataFabricacao: number;
    periferico: [Periferico];
}

export const ComputadorSchema = SchemaFactory.createForClass(Computador);