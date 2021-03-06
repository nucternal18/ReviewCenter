require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const puppeteer = require('puppeteer')
const path = require('path');
const pool  = require('../config/db');

const validateUser = async (email, password) => {
    const result = await pool.query(
      'SELECT userid, email, password FROM users WHERE email=$1',
      [email]
    );
    const user = result.rows[0];
    console.log(user);
    if (user) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          delete user.password;
          return user;
        } else {
          throw new Error(1);
        }
    } else {
        throw new Error();
    }
     
  };

  const isInvalidField = (receivedFields, validFieldsToUpdate) => {
    return receivedFields.some(
      (field) => validFieldsToUpdate.indexOf(field) === -1
    );
  };

  const generateAuthToken = async (user) => {
    const { userid, email } = user;
    const secret = process.env.SECRET;
    const token = await jwt.sign({ userid, email }, secret);
    return token;
  };

  module.exports = {validateUser, isInvalidField, generateAuthToken};