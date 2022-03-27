import { createSchema, Type, typedModel } from 'ts-mongoose';

const type = ['in', 'out'];
const states = ['payed', 'missed', 'pending'];
export const BudgetSchema = createSchema(
    {
        type: Type.string({ required: true, enum: type }),
        state: Type.string({ required: true, enum: states }),
        mount: Type.decimal128({require: true}),
        description: Type.string({require: true}),
        date: Type.date({default: Date.now as any}),
        tags: Type.array().of(Type.string()),
        movement: Type.objectId({ref: 'Movement', required: false})

    },
    { _id: true, timestamps: {createdAt: true} }
)

export default typedModel('Budget', BudgetSchema);