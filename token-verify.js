// importar jwt libreria
const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0OTM2ODYzNSwiZXhwIjoxNjQ5NDU1MDM1fQ.KYjLz2YkoVdN9vyaYjY_74UwS3DMwjSZ7uz6aWpHwtI'

function verifyToken(token, secret) {
  return jwt.verify(token, secret, {
    expiresIn: '1d',
  });
}

const payload = verifyToken(token, secret);
console.log(payload);
