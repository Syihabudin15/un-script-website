import { Metadata } from "next"

export const metadata: Metadata = {
    title: `Undangan Digital`,
    description: "Un Script jasa pembuatan Undangan digital, Nikah, Khitan, Aqiqa ..more",
    openGraph: {
        title: `Undangan Digital`,
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