const passport = require('passport');
const JWTStratgy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

const opts = {
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'secret',
}

passport.use(new JWTStratgy(opts,function(JWTPayLoad,done){
   
    User.findById(JWTPayLoad._id,function(error,user){
        if(error){
            console.log('error in finding user in jwt');
            return;
        }

        if(user){
            return done(null,user);
        }else
        return done(null,false);
    })
}));

module.exports = passport;