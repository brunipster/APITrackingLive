import { createSchema, Type } from 'ts-mongoose';
const type = ['service', 'part'];
export default createSchema(
    {
        type: Type.string({ required: true, enum: type }),
        kilometer: Type.decimal128({require: true}),
        description: Type.string({require: true}),
        date: Type.date({default: Date.now as any}),
        brand: Type.string(),
        shop: Type.string(),
        price: Type.decimal128({require: true}),
        tags: Type.array().of(Type.string())
    },
    { _id: true, timestamps: {createdAt: true} }
)