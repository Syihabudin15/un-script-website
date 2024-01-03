import { Metadata } from "next"
import LiveChat from "../../../../components/LivieChat"

export const metadata: Metadata = {
    title: `Bantuan`,
    description: "Kami ingin membantu anda dengan lebih baik.",
    openGraph: {
        title: `Bantuan`,
        description: "Kami ingin membantu anda dengan lebih baik.",
        url: '/bantuan'
    }
}

export default function Bantuan(){
    return(
        <>
            <h1>Bantuan Page</h1>
            <LiveChat/>
        </>
    )
}