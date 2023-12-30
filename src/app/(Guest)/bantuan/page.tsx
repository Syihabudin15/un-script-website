import { Metadata } from "next"

export const metadata: Metadata = {
    title: `Bantuan | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
    description: "Kami ingin membantu anda dengan lebih baik.",
    openGraph: {
        title: `Bantuan | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
        description: "Kami ingin membantu anda dengan lebih baik.",
        url: '/bantuan'
    }
}

export default function Bantuan(){
    return(
        <>
            <h1>Bantuan Page</h1>
        </>
    )
}