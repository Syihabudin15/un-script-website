import type { Metadata, ResolvingMetadata } from 'next'

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

export default function ArtikelWithParams({params}: {params: {slug: string}}){
    return(
        <>
            <h1>Artikel With Params {params.slug}</h1>
        </>
    )
}