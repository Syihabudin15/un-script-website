import type { Metadata, ResolvingMetadata } from 'next'
import { Comments, ShortTools, CardParams, BodyArticle } from '../../../../../components/Guest/Artikel'
import style from "../Artikel.module.css";

export async function generateMetadata(
        { params }: {params: {slug: string}},
        parent: ResolvingMetadata
    ): Promise<Metadata> {
    return {
        title: params.slug,
        description: "Artikel with params",
        openGraph: {
            url: `/artikel/${params.slug}`,
            description: '',
            images: '/baseImg.jpg',
            locale: 'en_US',
            title: params.slug,
            type: 'article',
            publishedTime: new Date().toLocaleDateString(),
            authors: "Syihabudin Tsani"
        },
        alternates: {canonical: `/artikel/${params.slug}`},
        robots: {index: true, follow: true},
        keywords: ''
    }
}

type Article = {
    title: string
}
export default function ArtikelWithParams({params}: {params: {slug: string}}){
    const article: Article = {
        title: "Pengertian SDLC"
    }
    return(
        <>
        <section title={`${params.slug}`} className={style['list-artikel-wrap']} id={style["article"]}>
            <div className={style['list-artikel-body']}>
                <BodyArticle article={article} />
            </div>
            <div className={style["short-tools"]}>
                <ShortTools />
            </div>
        </section>
        <CardParams/>
        <Comments/>
        </>
    )
}