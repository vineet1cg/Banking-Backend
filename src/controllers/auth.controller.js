const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');


// POST /api/auth/register
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
// POST /api/auth/login
async function userLoginController(req,res){
    const {email,password} = req.body;

    const user = await userModel.findOne({email}).select("+password");

    if(!user){
        return res.status(400).json({
            message:"Unauthorized"
        });
    }

    const isPasswordValid = await userModel.comparePassword(password);

    if(!isPasswordValid){
        return res.status(400).json({
          message: "Unauthorized",
        });
    };

     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

     res.cookies("token", token);
    
      res.status(200).json({
        message: "User Login Successful",
        user: {
          _id: user._id,
          email: user.email,
          name: user.name,
        },
        token,
      });
      
}

module.exports = {userRegistrationController};