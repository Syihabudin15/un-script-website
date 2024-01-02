import { Metadata } from "next"
import { CardCategories } from "../../../../../components/Guest/Artikel/Kategori"

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
            <section style={{padding: '50px 10px'}}>
                <h1 style={{textAlign: 'center'}}>Daftar Kategori</h1>
                <div>
                    <CardCategories />
                </div>
            </section>
        </>
    )
}