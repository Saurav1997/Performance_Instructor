const Performance = require('../models/performance');

exports.insertOne = async(req,res,next) =>{
    console.log('Inside Controller');
    const performancemodel = {
        computer_name: req.body["computer_name"],
        cpu_percentage: req.body["cpu_percentage"],
        memory_percentage: req.body["memory_percentage"],
        storage_percentage: req.body["storage_percentage"]
    };

    try{
        const performance = await Performance.create(performancemodel);
        console.log('Performance data Created');
        res.status(200).json(performance);
    }
    catch(e){
        res.status(500).json("Data not enetered correctly. PLease check formatting.");
    }
};

exports.getAll = async(req,res,next) =>{
    try {
        if (req.cookies["loggedIn"]) {
            const performance_all= await Performance.findAll();
            console.log('Performance data found');
            res.status(200).json(performance_all);
          } else {
            console.log("No Authorization");
            res.status(401).json(error);
          }
    } catch (error) {
        console.log('An error occured');
        res.status(200).json(error);
    }
};
