import { NextResponse } from "next/server";

export function middleware(req){
    req.url = '/dashboard' //if any one direct to /dashbard send to him login page

    return NextResponse.redirect(new URL('/login',req.url));


}