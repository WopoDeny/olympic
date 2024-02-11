const bcrypt = require('bcrypt')

const passwordHash = bcrypt.hashSync('misha2001', 10);
console.log(passwordHash)

const verified = bcrypt.compareSync('misha2001', passwordHash);
console.log(verified)


const salt = bcrypt.genSaltSync(10)
console.log(salt)