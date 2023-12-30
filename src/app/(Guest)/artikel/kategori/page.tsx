import { Metadata } from "next"

export const metadata: Metadata = {
    title: `Kategori | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
    description: "Daftar kategori artikel di Un Script. Programming, SEO, Digital ...more",
    openGraph: {
        title: `Kategori | ${process.env.NEXT_PUBLIC_BASE_NAME}`,
        description: "Daftar kategori artikel di Un Script. Programming, SEO, Digital ...more",
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