const jwt = require('jsonwebtoken')
const { TokenKey } = require('../../../secret/index')
console.log('-------TokenKey', TokenKey)
const generateToken = () => {
    let payload = {
        name: 'liwenchao',
    }
    let key = TokenKey.toString()
    let token = jwt.sign(payload, key )
    console.log('==============my token:', token)
    return token
}
const parseToken = (token) => {
    let res = jwt.verify(token, TokenKey)
    console.log('-------------------parse token', res)
    let res2 = jwt.decode(token, {complete: true})
    console.log('------------------------decode token:', res2)
}
module.exports = {
    generateToken,
    parseToken,
}