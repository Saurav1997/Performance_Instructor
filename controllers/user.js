const User = require('../models/user');

exports.createOne = async(req,res,next) =>{
    console.log('Inside Controller');
    const usermodel = {
        email: req.body.email,
        password: req.body.password
        
    };

    try{
        console.log(req.cookie);
        const user = await User.create(usermodel);
        console.log('User Created');
        res.status(200).json(user);
    }
    catch(e){
        res.status(500).json(e);
    }
};

exports.getAll = async(req,res,next) =>{
    try {
        
        const users = await User.findAll();
        const data = res.status(200).json(users);
        console.log(data);
    } catch (error) {
        console.log('An error occured');
        res.status(200).json(error);
    }
};

exports.insertOne = async(req,res,next) =>{
    try {
        const users = await User.create({email: req.body['email'], password: req.body['password']});
        const data = res.status(200).json(users);
    } catch (error) {
        console.log('An error occured');
        res.status(200).json(error);
    }
};

exports.logIn = async(req,res,next) =>{
    try {
        const result = await User.findAll({where: {email: req.body["email"], password: req.body["password"]}});
        if (result.length > 0) {
            res.cookie('loggedIn', "True");
            const data = res.status(200).send("Logged in");
          } else {
            console.log("Incorrect Login");
            res.status(200).json(error);
          }
        
    } catch (error) {
        console.log('Log in error');
        res.status(200).json(error);
    }
};