import Joi from 'joi';

export const responseSchema = Joi.object({
  updatedTodo: Joi.object({
    id: Joi.string().required(),
    title: Joi.string().optional(),
    isComplete: Joi.boolean().required(),
    createdAt: Joi.string().required(),
    description: Joi.string().required(),
  }),
});
