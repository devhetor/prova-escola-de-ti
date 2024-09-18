import { HydratedDocument } from "mongoose";
export type PerifericoDocument = HydratedDocument<Periferico>;
export declare class Periferico {
    nome: string;
}
export declare const PerifericoSchema: import("mongoose").Schema<Periferico, import("mongoose").Model<Periferico, any, any, any, import("mongoose").Document<unknown, any, Periferico> & Periferico & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Periferico, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Periferico>> & import("mongoose").FlatRecord<Periferico> & {
    _id: import("mongoose").Types.ObjectId;
}>;
