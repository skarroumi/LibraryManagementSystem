const jwt = require('jsonwebtoken')

function auth(req, res, next){
    const token = req.header('auth-token')
    if(!token) return res.status(401).send('Access Denied')
    try{
        const verified = jwt.verify(token, "fsdhfisudhfisufsdjfbssfefe3243rwer")
        req.user = verified
        next()
    } catch(err){
        res.status(401).send('Invalid Token')
    }
}

function authM(req, res, next){
    const token = req.header('mauth-token')
    if(!token) return res.status(401).send('Access Denied')
    try{
        const verified = jwt.verify(token, "fsdhfisudhfisufsdjfbssfefe3243rwer")
        req.user = verified
        next()
    } catch(err){
        res.status(401).send('Invalid Token')
    }
}

module.exports = {
    auth, authM
}