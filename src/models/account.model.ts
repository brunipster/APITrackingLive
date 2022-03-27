import { createSchema, Type, typedModel } from 'ts-mongoose';

const currency = ['s', 'd'];
const states = ['active', 'inactive'];
const type = ['saving', 'current'];
export const AccountSchema = createSchema(
    {
        currency: Type.string({ required: true, enum: currency }),
        type: Type.string({ required: true, enum: type }),
        state: Type.string({ required: true, enum: states }),
        mount: Type.decimal128({require: true}),
        name: Type.string({require: true}),
        date: Type.date({default: Date.now as any}),
        tags: Type.array().of(Type.string()),
        user: Type.objectId({ref: 'User', required: false})
    },
    { _id: true, timestamps: {createdAt: true} }
)

export default typedModel('Account', AccountSchema);