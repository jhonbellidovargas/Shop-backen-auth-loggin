// importar jwt libreria
const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0NjQzNjk3MiwiZXhwIjoxNjQ2NTIzMzcyfQ.4kMfn15-6vBEBZfSGDzlKK6UOsvK5wLny6tXph4_br4'

function verifyToken(token, secret) {
  return jwt.verify(token, secret, {
    expiresIn: '1d',
  });
}

const payload = verifyToken(token, secret);
console.log(payload);
