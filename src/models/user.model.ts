import { createSchema, Type, typedModel } from 'ts-mongoose';

const currency = ['s', 'd'];
const states = ['active', 'inactive'];
const type = ['saving', 'current'];
export const UserSchema = createSchema(
    {
        name: Type.string({ required: true }),
        email: Type.string({ required: true }),
        roles: Type.array().of(Type.string()),
        password: Type.string({ required: true }),
    },
    { _id: true, timestamps: {createdAt: true} }
)

export default typedModel('User', UserSchema);