const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const UserModel = require("../models/users")
const bcrypt = require("bcrypt")

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'token'
    },
    function (email, token, cb) {
        //console.log(token)
        //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
        const passwordEnteredByUser = token
        const hash = "$2b$10$aurZwlJrZOFMo2i/cLf43u"
        bcrypt.compare(passwordEnteredByUser, hash, function(err, isMatch) {
            if (err) {
              throw err
            }
            else if (!isMatch) {
                return UserModel.findOne({where : {'email': email} })
                .then(user => {
                    if (!user) {
                         //console.log(!user)
                         console.log('user not found')
                        return cb(null, false, {message: 'Incorrect email or password.',
                                 authorized:false})
            } 
            else {
                console.log(user.dataValues.id)
                return cb(null, user.dataValues.email, {message: 'Logged In Successfully',
                                                    id_user:user.dataValues.id,
                                                    authorized:true});
            }
          })

          .catch(err => cb(err));
    }})
}));


const cookieExtractor = req => {
    let jwt = null 
    console.log(req.cookies)
    console.log(req)
    if (req && req.cookies) {
        jwt = req.cookies['jwt']
        console.log(jwt)
    }

    return jwt
}


var ttl = 60*60*60
passport.use(new JWTStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey   : 'your_jwt_secret'
}, (jwtPayload, done) => {
    const { expiration } = jwtPayload
    if (Date.now() > expiration + ttl) {
        done('Unauthorized', false)
    }

    done(null, jwtPayload)
}))