const userModel = require('../models/user.model');


async function userRegistrationController(req,res){
    
    const {email,password,name} = req.body;

    const usrExitsts = await userModel.findOne({email:email});

    if(usrExitsts){
        return res.status(422).json({
            message:"User Already Exists With This Email",
            status:"Failed"
        });
    }

    const user = await userModel.create({
        email,
    })
}


module.exports = {userRegistrationController};