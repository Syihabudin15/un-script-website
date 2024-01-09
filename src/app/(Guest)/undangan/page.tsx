import { Metadata } from "next"
import LiveChat from "../../../../components/LivieChat"

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
            <h1 style={{textAlign: "center", lineHeight: 10, opacity: .7}}>Sorry this page is under development</h1>
            <LiveChat/>
        </>
    )
}