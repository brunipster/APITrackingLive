import { createSchema, Type } from 'ts-mongoose';
const type = ['in', 'out'];
export default createSchema(
    {
        type: Type.string({ required: true, enum: type }),
        mount: Type.decimal128({require: true}),
        description: Type.string({require: true}),
        date: Type.date({default: Date.now as any}),
        tags: Type.array().of(Type.string())
    },
    { _id: true, timestamps: {createdAt: true} }
)