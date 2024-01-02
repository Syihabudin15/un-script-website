import { Metadata } from "next"

export const metadata: Metadata = {
    title: `Reviews`,
    description: "Reviews Un Script untuk pembuatan Skripsi, Tesis, Aplikasi dan Undangan",
    openGraph: {
        title: `Reviews`,
        description: "Reviews Un Script untuk pembuatan Skripsi, Tesis, Aplikasi dan Undangan",
        url: '/review'
    }
}

export default function Review(){
    return(
        <>
            <h1>Reviews Page</h1>
        </>
    )
}