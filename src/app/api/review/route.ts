import { NextRequest } from "next/server";
import { Reviews } from "../../../../Model";


export const POST = async (req:NextRequest) => {
    const {name, univ, body, type, codeType} = <any>req.body;
    if(!name || !univ || !body || !type){
        return Response.json({
            msg: "Error!. some field is required",
            errors : ["Nama wajib diisi", "Universitas Wajib diisi", "Ulasan wajib diisi", "Tipe order wajib diisi"]
        }, {status: 400, statusText: "Bad Request"});
    }
    try{
        const result = await Reviews.create({name, univ, body, orderType: type, orderId: `${codeType}-${Date.now()}`})
        await result.save();
        return Response.json({msg: "Terima kasih!. Ulasan anda berhasil dibuat"}, {status: 201});
    }catch(err){
        console.log(err);
        return Response.json({msg: "Server error"}, {status: 500});
    }
}

export const GET =async (req:NextRequest) => {
    try{
        const result = await Reviews.find();
        return Response.json({message: "Success", data: result},{status: 200});
    }catch(err){
        console.log(err);
        return Response.json({msg: "Server error"}, {status: 500});
    }
}