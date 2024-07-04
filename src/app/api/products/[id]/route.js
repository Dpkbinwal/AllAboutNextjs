import { NextResponse } from "next/server"

export const GET = async(req,context)=>{

    // console.log(req);
    // console.log(context);
    // console.log(context.params.id);

    return NextResponse.json({"msg":"single data"})
}




// export const GET = async(req,{params})=>{

//     console.log(params.id);

//     return NextResponse.json({"msg":"single data"})
// }