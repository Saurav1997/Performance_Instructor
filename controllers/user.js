const User = require('../models/user');
const schema = require('../schemas/user');
const Joi = require("joi");

exports.getAll = async(req,res,next) =>{
    try {
        
        const users = await User.findAll({limit: 5});
        const data = res.status(200).json(users);
    } catch (error) {
        console.log('An error occured');
        res.status(500).json("error");
    }
};

exports.insertOne = async(req,res,next) =>{
    try {
        value = schema.validate({ email: req.body['email'], password: req.body['password'] });
        if(!Joi.isError(value["error"])){
            const users = await User.create({email: req.body['email'], password: req.body['password']});
            const data = res.status(200).json(users);
        }else{
            console.log("Invalid username/password");
            res.status(401).send("Invalid username/ password");
        }    
    } catch (error) {
        console.log('An error occured');
        res.status(500).json(error);
    }
};

exports.deleteOne = async(req,res,next) =>{
    try {
        console.log()
        const deleted = await User.destroy({ where : {email: req.body["email"]}});
        res.status(200).json({ message: `${req.body["email"]} deleted successfully`});
    } catch (error) {
        console.log("error");
        res.status(500).json(error);
    }
}

exports.logIn = async(req,res,next) =>{
    try {
        const result = await User.findAll({where: {email: req.body["email"], password: req.body["password"]}});
        if (result.length > 0) {
            res.cookie('loggedIn', "True");
            const data = res.status(200).send("Logged in");
          } else {
            console.log("Incorrect Login");
            res.status(401).json("Login Unsuccessful");
          }
        
    } catch (error) {
        console.log('Log in error');
        res.status(500).json(error);
    }
};
exports.logOut = async(req,res,next) =>{
    try {
        res.clearCookie('loggedIn');
        const data = res.status(200).send("Logged Out");   
    } catch (error) {
        console.log('Log out error');
        res.status(500).json(error);
    }
};

