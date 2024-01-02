import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Kategori",
    description: `Cari dan temukan artikel yang kamu butuhkan berdasarkan kategori di ${process.env.NEXT_PUBLIC_BASE_NAME}. Programming, SEO, Digital Marketing, Programming, IT, Bisnis, Artificial Intelligent...more`,
    openGraph: {
        title: "Kategori",
        description: `Cari dan temukan artikel yang kamu butuhkan berdasarkan kategori di ${process.env.NEXT_PUBLIC_BASE_NAME}. Programming, SEO, Digital Marketing, Programming, IT, Bisnis, Artificial Intelligent...more`,
        url: "/artikel/kategori"
    }
}

export default function Kategori(){
    return(
        <>
            <h1>Kategori Page</h1>
        </>
    )
}