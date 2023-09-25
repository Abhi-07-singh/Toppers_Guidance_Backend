// const express = require ('express')
const AskmeModel = require("../Model/Askme")

//ask me api
exports.askMe = async (req, res) => {
    console.log(req.body);
    // console.log(req.body.user);
    // console.log(req.body);
    res.send("user successfully registered");
    // res.send(req.body.name)  

    const {email, name, topic, question} = req.body; 
    if(!name || !email || !topic ||!question){
        res.status(400).send("plz fill all the fields");
    }
    try{
        const newUser = new AskmeModel({email, name, topic, question});
         const usersave = await newUser.save();
        res.send(usersave);
    } catch(error){
        console.log(error)
    }
}

