import type { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
        { params }: {params: {slug: string}},
        parent: ResolvingMetadata
    ): Promise<Metadata> {
    return {
        title: `Kategori ${params.slug}`,
        description: `Daftar artikel kategori ${params.slug}`,
        openGraph: {
            url: `/artikel/kategori/${params.slug}`,
            title: `Kategori ${params.slug}`,
            description: `Daftar artikel kategori ${params.slug}`,
        }
    }
}

export default function KategoriWithParams({params}: {params: {slug: string}}){
    return(
        <>
            <h1>Kategori With Params {params.slug}</h1>
        </>
    )
}