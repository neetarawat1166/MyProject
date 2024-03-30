import { usermodel } from "../models/userModels.js";
import bcrypt from 'bcrypt';

export const Register = async (req,res)=>{
    const{number,email,password} = req.body;
    // console.log(number,email,password);
    if(!number || !email || !password){

        return res.status(404).json({
            success: false,
            status : 404,
            message: "please fill all fields"
        });
    }
    // res.send("India");
    try{
        const registerDetail = await usermodel.find({email:email});
        console.log(registerDetail);

        if(registerDetail.length>0)
        {
            return res.status(401).json({
                success: false,
                status : 401,
                message: "This email already registered"
            });
        }

        const saltround = 10;
        const hashedPassword = await bcrypt.hash(password,saltround)

        const user =  await usermodel.create({
            number : number,
            email : email,
            password: hashedPassword
        })

        res.status(200).json({
            success: true,
            message : "Data save successfully",
            user
        })

    }catch(error){
        console.log(error);
    }
}