import type { Metadata, ResolvingMetadata } from 'next'
import { Comments, ShortTools } from '../../../../../components/Guest/Artikel'
import style from "../Artikel.module.css";
import { CardParams, BodyArticle } from '../../../../../components/Guest/Artikel';

export async function generateMetadata(
        { params }: {params: {slug: string}},
        parent: ResolvingMetadata
    ): Promise<Metadata> {
    return {
        title: params.slug,
        description: "Artikel with params",
        openGraph: {
            url: `/artikel/${params.slug}`,
            title: params.slug
        },
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