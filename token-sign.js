// importar jwt libreria
const jwt = require('jsonwebtoken');

const secret = 'myCat';
const payload = {
  // datos de identificacion de usuario
  sub: 1,
  role: 'customer',
}

function signToken(payload, secret) {
  return jwt.sign(payload, secret, {
    expiresIn: '1d',
  });
}

const token = signToken(payload, secret);
console.log(token);
