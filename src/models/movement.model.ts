import { createSchema, Type, typedModel } from 'ts-mongoose';
const type = ['in', 'out'];
export const MovementSchema = createSchema(
    {
        type: Type.string({ required: true, enum: type }),
        mount: Type.decimal128({require: true}),
        description: Type.string({require: true}),
        date: Type.date({default: Date.now as any}),
        tags: Type.array().of(Type.string()),
        account: Type.objectId({ref: 'Account', required: false})
    },
    { _id: true, timestamps: {createdAt: true} }
)

export default typedModel('Movement', MovementSchema);