const userModel = require("../models/userModel")

const signUp=(request,response)=>{
    console.log(request.body)
    const newUser = request.body
    // const email = newUser.email
    // const password = newUser.password
    // const userName = newUser.userName
    const form = new userModel(newUser)
    form.save((err)=>{
        if (err) {
            console.log(err.message)
        }
        else{
            response.send("welcome")
        }
    })
}

module.exports={signUp}