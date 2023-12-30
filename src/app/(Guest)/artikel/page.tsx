import { Metadata } from "next"

export const metadata: Metadata = {
    title: `Artikel | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
    description: "Daftar artikel di Un Script",
    openGraph: {
        url: '/artikel',
        title: `Artikel | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
        description: "Daftar artikel di Un Script"
    }
}

export default function Artikel(){
    return(
        <>
            <h1>Artikel Page</h1>
        </>
    )
}