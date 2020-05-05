const User = require('../models/user');

// render the signup page
module.exports.Signup = function(req,res) {
            return res.render('sign_up',{
                title: "SignUp"
            })
}

// render the sign in page
module.exports.Signin = function(req,res) {
        return res.render('sign_in',{
            title: "SignIn"
        })
}

// get the sign up data 
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email} , function(err,user){
        if(err){
            console.log("error in finding user in signing up")
            return
        }

        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("error in creating user in signing up")
                    return
                } 
                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }


    })

}

// create session 
module.exports.createSession = function(req,res){
    // find the user
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("error in finding user in signing in")
            return
        }
            // handel user found
            if(user){
            // handel passwords which dont match
                if(user.password != req.body.password){
                    return res.redirect('back');
                }
            // handel session creation 
                res.cookie('user_id',user.id);
                return res.redirect('/users/home')
            }else{
    // handel user not found 
                return res.redirect('back');
            }
 
    });
}
