const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => {

    try{
        const { name, email, password } = req.body;

        const userExists = await User.findOne({email});
        if(userExists) {
            return res.status(400).json({message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10); //salt rounds = 10 , more rounds = more secure but slower

        const newUser = new User({name, email, password: hashedPassword});
        await newUser.save();


        res.json({ msg: "User registered successfully" });
    }

    catch (err) 
    {
        console.error("Error during signup:", err);
        res.status(500).json({ error: err.message });
    }

};

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: "Invalid Credentials"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "Invalid Credentials"});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.json({token, user: {id: user._id, name: user.name, email: user.email}});
    }

    catch(err)
    {
        res.status(500).json({ error: err.message });
    }

};