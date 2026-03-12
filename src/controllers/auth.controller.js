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

    //get email and password from body 
    const {email,password} = req.body;

    // get user details by email 
    const user = await userModel.findOne({email}).select("+password");

    // if user doest not exists then we send back the unauthorized response
    if(!user){
        return res.status(400).json({
            message:"Unauthorized"
        });
    }
    // if user is valid then we check if the passwrod is valid or not
    const isPasswordValid = await userModel.comparePassword(password);
    //we compared the password and then stored it in a boolean 
    //we check that boolean's value to check if the password is correct or not
    if(!isPasswordValid){
        return res.status(400).json({
          message: "Unauthorized",
        });
    };

    //password is valid too so then we give them the token 
     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    //it is always stored in cookies
     res.cookies("token", token);
    //send the response after the token is given 
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

module.exports = {userRegistrationController,userLoginController};