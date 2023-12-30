import { Metadata } from "next"

export const metadata: Metadata = {
    title: `Aplikasi | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
    description: "Un Script jasa pembuatan Website dan Aplikasi Mobile",
    openGraph: {
        title: `Aplikasi | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
        description: "Un Script jasa pembuatan Website dan Aplikasi Mobile",
        url: '/apps'
    }
}

export default function Apps(){
    return(
        <>
            <h1 >Apps Page</h1>
        </>
    )
}