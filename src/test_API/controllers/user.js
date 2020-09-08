
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const password = require('passport');

module.exports.createUser = async function(req,res){
  try{
     let user = await User.findOne({
         email:req.body.email
     });

     if(user){
         return res.json(200,{
             message:'email is already registered',
             success:false
         })
     }
     if(req.body.password!=req.body.confirmPassword){
         return res.json(200,{
             message:'confirm password does not match',
             success:false
         })
     }

     if(!user){
         let newUser = await User.create({
             name:req.body.name,
             email:req.body.email,
             password:req.body.password
         });

         return res.json(200,{
            message:'new user created',
            success:true,
            user:newUser
         });
     }

  }catch(error){
     console.log('error in user sign-up',error);
      return res.json(200,{
          error:'error in user creation'
      })
    }
     
}


module.exports.createSession = async function(req,res){
    try{

        let user = await User.findOne({
            email:req.body.email
        })
        if(!user||user.password!=req.body.password){
            return res.json(200,{
                message:'Invalid username or password',
                success:false
            })
        }

        return res.json(200,{
            message:'login success here is your token',
            success:true,
            token:jwt.sign(user.toJSON(),'secret',)
        })



    }catch(err){
        console.log('error in log in',err);
        return res.json(200,{
            error:err
        })
    }
}