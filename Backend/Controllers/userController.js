import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../Model/userModel.js";

// generate token

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// route for user login

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      res.json({
        success: false,
        message: "User Doesn't exist",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = createToken(user._id);
      res.json({
        success: true,
        token,
      });
    } else {
      res.json({
        success: false,
        message: "Invalid Password",
      });
    }
  } catch (error) {
    console.log("error: ", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// route for register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking user allready exist
    const exists = await UserModel.findOne({ email });

    if (exists) {
      return res.json({ success: false, message: "User Allready Exist" });
    }

    // validate email formate
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter a Valid Email",
      });
    }

    // check strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please Enter a strong Password",
      });
    }

    // hashing user password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log("error : ", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// route for admin user
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL) {
      if (password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign(email + password, process.env.JWT_SECRET);
        res.json({
          success: true,
          message: "Successfully Login",
          token,
        });
      } else {
        res.json({
          success: false,
          message: "Incorrect Password",
        });
      }
    } else {
      res.json({
        success: false,
        message: "Incorrct Email",
      });
    }
  } catch (error) {
    console.log("error :", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { loginUser, registerUser, adminLogin };
