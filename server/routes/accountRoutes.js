const express = require('express');
const router = express.Router();

const dbAccount = require('../dbfiles/dbAccount');

router.route('/getAll').get((request, response) => {
    dbAccount.getAllAccount().then(result => {       
        response.json(result);

    })
})


router.route('/signUp').post((request, response) => {
    let account = request.body
    console.log(account)
    dbAccount.addAccount(account).then(result => {

        response.status(201).json(result);

    })

})

router.get("/login", (req, res) => {
    dbAccount.getAllAccount().then(result => {
        console.log(result);
        res.json(result);
    })
});

router.route('/signIn').post((request, response) => {
    let account = request.body
    // console.log(account)
    dbAccount.logIn(account).then(result => {
        if (result === 1) {
            console.log(result)
            response.status(200).send({ message: 'User does not exist' })
            // response.status(401).json({message:'Wrong Username/email'});
        }

        else if (result === 3) {
            console.log(result)
            response.status(200).send({ message: 'Wrong password' })
            // response.status(400).json({message:'Fail'});


        } else {
            console.log(result)
            response.status(200).send({ message: 'Success' })
            response.json(result);
        }
    })

})
router.route('/updateAccount').put((request, response) => {
    let account = request.body
    console.log(account)
    dbAccount.updateAccount(account).then(result => {
        response.status(201).json(result);
    })

})
router.route('/delete/:userId').delete((request, response)=>{
  
    dbAccount.deleteAccount(request.params.userId).then(result =>{   
        response.json(result);
    })
})
module.exports = router;