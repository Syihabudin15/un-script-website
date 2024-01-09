import { NextRequest } from "next/server";

export const config = {
    matcher: ["/api"]
}

export function middleware(request:NextRequest){
    Response.json({message: 'Error', code: 500}, {status: 500});
}

// const res = NextResponse.next();
//   let ip = request.ip ?? request.headers.get('x-real-ip')
//   const forwardedFor = request.headers.get('x-forwarded-for')
//   if(!ip && forwardedFor){
//     ip = forwardedFor.split(',').at(0) ?? 'Unknown'
//   } 
//   if(ip){
//     res.cookies.set("user-ip", ip, {
//       httpOnly: false,
//     });
//   }
//   return res;