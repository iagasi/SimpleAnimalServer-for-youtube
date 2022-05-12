const express = require("express");
const userRouter = express.Router()
const { body, validationResult } = require('express-validator');

const User = require("../db/userDb")


userRouter.get("/users",(req,res)=>{
res.send(User)
}

)
userRouter.post("/login", body("UserMail").isEmail(), (req, res) => {
    const { UserMail, UserPassword } = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json(errors.array()[0]);
    }
    if (!UserMail || !UserPassword) { return res.send("Loging and Password Required") }
    const candidate = User.filter(user => user.UserMail == UserMail)
    if (!candidate.length) { return res.send("The user with email--" + UserMail + "--is not registered in System") }
   console.log(candidate[0]);
    if (candidate[0].UserPassword !== UserPassword) { return res.send("Wrong password") }
    if (candidate[0].UserPassword === UserPassword) { return res.send("Sucesfully Logged IN") }


})


userRouter.post("/registracion", body("UserMail").isEmail(), (req, res) => {
    const { UserFirstName, UserLastName, UserMail, UserPassword, UserPhoneNumber } = req.body
    const errors = validationResult(req);


    if (!UserMail) { return res.send("UserMail is required") }
    if (!errors.isEmpty()) {
        return res.status(300).send("Idvalid email------"+UserMail);
    }

    const check = User.filter(user => user.UserMail == UserMail)

    if (!UserPassword) { return res.send("UserPassword is required") }
    if (UserPassword.length < 6) { return res.send("The password length must be greater than 6") }
    if (check.length) { return res.send("This user already registered with  email:" + UserMail) }


    User.push({
        UserFirstName: UserFirstName,
        UserLastName: UserLastName,
        UserMail: UserMail,
        UserPassword: UserPassword,
        UserPhoneNumber: UserPhoneNumber
    })
    return res.send("The user Sucesfully registered")

})


module.exports = userRouter