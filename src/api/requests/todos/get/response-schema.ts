import Joi from 'joi';

export const responseSchema = Joi.object({
  todos: Joi.array().items(
    Joi.object({
      id: Joi.string().required(),
      title: Joi.string().optional(),
      isComplete: Joi.boolean().required(),
    }),
  ),
});
