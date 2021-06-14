import { createSchema, Type } from 'ts-mongoose';
export default createSchema(
    {
        kilometer: Type.decimal128({require: true}),
        description: Type.string(),
        date: Type.date({default: Date.now as any}),
        tags: Type.array().of(Type.string())
    },
    { _id: true, timestamps: {createdAt: true} }
)