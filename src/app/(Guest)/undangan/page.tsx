import { Metadata } from "next"

export const metadata: Metadata = {
    title: `Undangan Digital | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
    description: "Un Script jasa pembuatan Undangan digital, Nikah, Khitan, Aqiqa ..more",
    openGraph: {
        title: `Undangan Digital | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
        description: "Un Script jasa pembuatan Undangan digital, Nikah, Khitan, Aqiqa ..more",
        url: '/undangan'
    }
}

export default function Undangan(){
    return(
        <>
            <h1>Undangan Digital Page</h1>
        </>
    )
}