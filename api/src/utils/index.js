const Joi = require("joi");

function validatePassword(password) {
  const { error } = Joi.string().required().min(6).max(100).validate(password);
  return !error;
}

module.exports = {
  validatePassword,
};
