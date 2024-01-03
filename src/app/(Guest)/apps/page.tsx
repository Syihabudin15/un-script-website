import { Metadata } from "next"
import LiveChat from "../../../../components/LivieChat"

export const metadata: Metadata = {
    title: `Aplikasi`,
    description: "Un Script jasa pembuatan Website dan Aplikasi Mobile",
    openGraph: {
        title: `Aplikasi`,
        description: "Un Script jasa pembuatan Website dan Aplikasi Mobile",
        url: '/apps'
    }
}

export default function Apps(){
    return(
        <>
            <h1 >Apps Page</h1>
            <LiveChat/>
        </>
    )
}