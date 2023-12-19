const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

/* POST login. */
router.post('/', function (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.json({
                message: 'Something is not right',
            });
        }
        
       req.login(user, {session: false}, (err) => {
           if (err) {
            console.log("[!] Kek error: ", err)
               res.send(err);
           }
           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign({user: user, expiration: Date.now() }, 'your_jwt_secret');
           console.log(token)
           return res
              .cookie("jwt", token, {
                httpOnly: true,
              })
              .status(200)
              .json({ message: "Logged in successfully",
                        id_user:info.id_user,
                    status:'success'});
        });

    })(req, res);
});
module.exports = router;