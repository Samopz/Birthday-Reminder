const BaseJoi = require("joi");
const JoiDate = require("@joi/date");

const Joi = BaseJoi.extend(JoiDate);

const validateForm = Joi.object({
  username: Joi.string().alphanum().min(5).max(20).required(),
  email: Joi.string().email().required(),
  birthdate: Joi.date().required(),
});

module.exports = validateForm;
