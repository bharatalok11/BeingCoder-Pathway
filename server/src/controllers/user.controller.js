
import User  from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {uploadOnCloudinary} from "../utils/cloudinary.js"


//import getDataUri from "../utils/datauri.js";
//import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
    try {
        const { username, name, email, phone, password, role } = req.body;

        if (!name || !email || !phone || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        const user = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (user) {
            return res.status(400).json({
                message: 'User already exist with this email or username.',
                success: false,
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            username,
            email,
            phone,
            password: hashedPassword,
            role,
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            })
        }

        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role.",
                success: false
            })
        }

        const token = jwt.sign(
            { _id: user._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1d' }
        );

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phone: user.phone,
            role: user.role,
            profile: user.profile
        }


        const options={
            maxAge: 1 * 24 * 60 * 60 * 1000, 
            httpOnly: true, 
            sameSite: 'strict',
        }
        return res.status(200)
            .cookie("accessToken", token, options)
            .json({
                message: `Welcome back ${user.fullname}`,
                user,
                success: true
            })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio} = req.body;
        
        const file = req.file;
        // cloudinary ayega idhar
      //  const fileUri = getDataUri(file);
       // const cloudResponse = await cloudinary.uploader.upload(fileUri.content);



        
        const userId = req.id; // middleware authentication
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found.",
                success: false
            })
        }
        // updating data
        if(fullname) user.fullname = fullname
        if(email) user.email = email
        if(phoneNumber)  user.phoneNumber = phoneNumber
        if(bio) user.profile.bio = bio
        if(skills) user.profile.skills = skillsArray
      
        // resume comes later here...
        if(cloudResponse){
            user.profile.resume = cloudResponse.secure_url // save the cloudinary url
            user.profile.resumeOriginalName = file.originalname // Save the original file name
        }


        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            message:"Profile updated successfully.",
            user,
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}



export const getAllDoctor = async (req, res) => {
    try {
        const users = await User.find({ role: "doctor" });

        res.status(200).json({
            message: "Data fetched successfully.",
            users,
            success: true
        });
    } catch (error) {
        console.log(error);

        res.status(404).json({
            message: "Failed to fetch data.",
            success: false
        });
    }
};


export const uploadPhoto = async (req, res) => {
    try {
        const userId = req.user._id;

        if (!userId) {
            return res.status(400).json({
                message: "User ID not found",
                success: false,
            });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        const avatarFile = req.files?.avatar?.[0];

        if (!avatarFile) {
            return res.status(400).json({
                message: "Avatar file is required",
                success: false,
            });
        }

        const avatarUrl = await uploadOnCloudinary(avatarFile.path); 

        user.avatar = avatarUrl;
        await user.save();

        const createdUser = await User.findById(user._id).select("-password ");

        return res.status(200).json({
            message: "Avatar uploaded successfully",
            success: true,
            user: createdUser,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong",
            success: false,
        });
    }
};


export const getUser = async (req, res) => {
    try {
        const userId = req.user._id;

        if (!userId) {
            return res.status(400).json({
                message: "User ID not found",
                success: false,
            });
        }

        const user = await User.findById(userId).select("-password -_id -createdAt -updatedAt");

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "User fetched successfully",
            success: true,
            user,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};


