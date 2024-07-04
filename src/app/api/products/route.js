import { NextResponse } from "next/server";

export async function GET(req){
    // console.log(req);

    //headers
    // const requestHeaders = new Headers(req.headers);
    // console.log(requestHeaders);

    //url query params
 
    // const {searchParams}= new URL(req.url)
    // console.log(searchParams);
    // console.log(searchParams.get('search'));
    // const searchParams= req.nextUrl.searchParams;
    // console.log(searchParams);



    
    return NextResponse.json({"msg":"Hello this is backend"});
}


export async function POST(req) {

    // const res= await req.json();
    // console.log("Body Data : ",res);

    const formData = await req.formData();
    console.log("form Data :",formData);

    return NextResponse.json({"msg":"Data Received"},{status:201});
}