import { Metadata } from "next"
import style from "./Artikel.module.css";
import { CardsArticle, ShortTools } from "../../../../components/Guest/Artikel";

export const metadata: Metadata = {
    title: "Daftar Artikel",
    description: `Artikel di ${process.env.NEXT_PUBLIC_BASE_NAME} berisi banyak hal, mulai dari Daftar Pustaka Skripsi, Keseharian, Tutorial, IT, Programming, Data Mining, Bisnis, SEO dan lain nya. Bingung cari Dapus? Yo di sini aja`,
    openGraph: {
        url: '/artikel',
        title: "Daftar Artikel",
        description: `Artikel di ${process.env.NEXT_PUBLIC_BASE_NAME} berisi banyak hal, mulai dari Daftar Pustaka Skripsi, Keseharian, Tutorial, IT, Programming, Data Mining, Bisnis, SEO dan lain nya. Bingung cari Dapus? Yo di sini aja`,
        images: '/baseImg.jpg',
        locale: 'id_ID',
        type: 'article',
        authors: "Syihabudin Tsani",
        publishedTime: new Date().toLocaleDateString()
    },
    alternates: {canonical: '/artikel'},
    robots: {index: true, follow: true},
    keywords: "daftar pustaka, artikel untuk skripsi, daftar pustaka 2024, coding, programming, data mining, belajar data mining, belajar coding dari dasar, belajar SEO pemula, belajar programming, belajar ai, artificial inteligent, membuat blog, blog"
}

export default function Artikel(){
    return(
        <> 
        <article className={style['list-artikel-wrap']}>
            <div className={style['list-artikel-body']}>
                <h1 style={{textAlign: 'center', margin: '50px auto'}}>Daftar Artikel</h1>
                <section title="Daftar Artikel">
                    <div>
                        <CardsArticle/>
                    </div>
                </section>
            </div>
            <div className={style["short-tools"]}>
                <ShortTools/>
            </div>
        </article>
        </>
    )
}