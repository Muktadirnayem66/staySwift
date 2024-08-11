import { userModel } from "@/models/user-model";
import { dbConnect } from "@/services/mongo";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const {fname, lname, email, password} = await req.json()
    await dbConnect()
    const hashPassword = await bcrypt.hash(password, 5)
    const newUser = {
        name: `${fname} ${lname}`,
        email,  
        password: hashPassword
    }

    try {
        await userModel.create(newUser)
        return new NextResponse("User has been created", {
            status:201
        })
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500
        })
    }
    
};

