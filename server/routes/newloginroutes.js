const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const dbAccount = require('../dbfiles/dbAccount');
const userMiddleware = require('../middleware/users.js');
router.post("/sign-up", (req, res, next) => {
    let account = req.body
    dbAccount.getByUserName(account).then(
        result => {
            if (result.length) {
                return res.status(409).send({
                    msg: 'This username is already in use!'
                });
            } else {
                // username is available               
                console.log(account)
                dbAccount.addAccount(account).then
                    (result => {
                        return res.status(201).send({
                            msg: 'registered!'
                        });
                    })
            }

        }
    );
});

router.post("/login", (req, res, next) => {
    let account = req.body
    dbAccount.getByUserName(account).then(result => {
        if (!result.length) {
            return res.status(400).send({
                msg: 'User does not exists'
            });
        }
        // check password
        bcrypt.compare(
            req.body.passwordHash,
            result[0]['passwordHash'],
            (bErr, bResult) => {
                // wrong password
                if (bErr) {
                    throw bErr;
                    return res.status(401).send({
                        msg: "Password is incorrect!"
                    });
                }
                if (bResult) {
                    const token = jwt.sign({
                        userName: result[0].userName,
                        userID: result[0].userID
                    },
                        'SECRETKEY', {
                        expiresIn: '7d'
                    }
                    );
                    return res.status(200).send({
                        msg: 'Logged in!',
                        token,
                        user: result[0]
                      });
                }
                return res.status(401).send({
                    msg: 'Username or password is incorrect!'
                  });
            }
        )
    })
});

router.get("/secret-route",userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = router;