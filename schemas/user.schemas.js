const Joi = require('joi');

const id = Joi.string().uuid();
const firstName = Joi.string().min(3).max(20);
const lastName = Joi.string().min(3).max(35);
const userName = Joi.string().min(3).max(15);
const email = Joi.string().email();
const numberPhone = Joi.number().min(10).max(12);
const avatar = Joi.string().uri();
const country = Joi.string().min(3).max(35);
const address = Joi.string().min(3).max(35);
const isPremiun = Joi.boolean();

const createUserSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  userName: userName.required(),
  email: email.required(),
  numerPhone: numberPhone.required(),
  avatar : avatar.required(),
  country: country.required(),
  address: address.required()
});

const updateUserSchema = Joi.object({
  firstName: firstName,
  lastName: lastName,
  userName: userName,
  email: email,
  country:country,
  address: address
});

const getUserSchema = Joi.object({
  id: id.required(),
});


module.exports = { createUserSchema, updateUserSchema,getUserSchema }
