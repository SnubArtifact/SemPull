const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');


// ✅ POST /api/auth/signup
router.post('/signup', async (req, res) => {
  const { name, email, password, year, branch } = req.body;

  try {
    if (!name || !email || !password || !year || !branch) {
      console.warn("❌ Missing fields:", req.body);
      return res.status(400).json({ msg: 'Please fill all fields' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.warn("❌ User already exists:", email);
      return res.status(400).json({ msg: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword, year, branch});
    console.log("📩 Incoming signup:", req.body);

    const savedUser = await newUser.save();
    console.log("✅ User saved to MongoDB:", savedUser);

    return res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error("🔥 Signup error:", err);
    return res.status(500).json({ msg: 'Server error during signup' });
  }
});




//POST /api/auth/login
router.post('/login', async(req,res)=>{
    const {email, password} = req.body;


    try {
        if(!email || !password){
            console.warn("❌ Missing fields:", req.body);
            return res.status(400).json({msg: 'Please fill all fields'});
        }

        const user = await User.findOne({email});
        if(!user){
            console.warn("❌ User not found:", email);
            return res.status(400).json({msg: 'User not found'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            console.warn("❌ Invalid credentials:", email);
            return res.status(400).json({msg: 'Invalid credentials'});
        }
else{
    console.log("📩 Incoming login:", req.body);
        return res.status(200).json({msg: 'Login successful'});
       
}
        
    } catch (err) {
        console.error("🔥 Login error:", err);
        return res.status(500).json({msg: 'Server error during login'});
    }
});


module.exports = router;