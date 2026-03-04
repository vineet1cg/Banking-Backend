const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');


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
        email,password,name
    });

    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET);

    res.cookies("token",token);

    res.status(201).json({
        message:"User Created Successfully",
        user:{
            _id:user._id,
            email:user.email,
            name : user.name,
        },
        token
    })
}


module.exports = {userRegistrationController};