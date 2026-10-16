const passport = require('passport');
const passportJwt = passport;

const { Strategy : JwtStrategy, ExtractJwt } = require('passport-jwt')

const { User } = require("../models");

const option = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : process.env.SECRETTOKEN
}

passportJwt.use(new JwtStrategy(option, async (payload, done) => {
    const User = payload.usr;
    done(null, User)
}));

module.exports =  passportJwt