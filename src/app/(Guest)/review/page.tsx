import { Metadata } from "next"

export const metadata: Metadata = {
    title: `Reviews | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
    description: "Reviews Un Script untuk pembuatan Skripsi, Tesis, Aplikasi dan Undangan",
    openGraph: {
        title: `Reviews | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
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