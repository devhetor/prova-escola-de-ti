import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Periferico } from "src/periferico/schema/periferico.schema";

export type UserDocument = HydratedDocument<Computador>;

@Schema()
export class Computador {
    @Prop({ required: true })
    nome: string;
    @Prop({ required: true })
    cor: string;
    @Prop({ required: true })
    dataFabricacao: number;
    @Prop()
    periferico: [Periferico];
}

export const ComputadorSchema = SchemaFactory.createForClass(Computador);