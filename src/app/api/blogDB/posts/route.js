import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import PostModel from "@/models/Post";

export async function GET(req){
    try{
        await connectDB();
        const res= await PostModel.find();
        //  console.log(res);
        return NextResponse.json({"result":res});

    }catch(err){
        console.log(err);
    }
}


export async function POST(req){
    try{
        await connectDB();
        const data = await req.json();
        const res= await PostModel.create(data);


        return NextResponse.json({"result":res});

    }catch(err){
        return NextResponse.json({"msg":"something went wrong"});
    }
}