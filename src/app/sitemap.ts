import { MetadataRoute } from "next";

export default function sitemap():MetadataRoute.Sitemap{
    const prcs = process.env.NEXT_PUBLIC_BASE_URL;
    return[
        {
            url: `${prcs}`,
            lastModified: new Date().toLocaleDateString(),
            priority: 1,
            changeFrequency: 'monthly'
        },
        {
            url: `${prcs}/artikel`,
            lastModified: new Date().toLocaleDateString(),
            priority: 1,
            changeFrequency: 'weekly'
        },
        {
            url: `${prcs}/artikel/kategori`,
            lastModified: new Date().toLocaleDateString(),
            priority: 1,
            changeFrequency: 'weekly'
        },
        {
            url: `${prcs}/bantuan`,
            lastModified: new Date().toLocaleDateString(),
            priority: 0.5,
            changeFrequency: 'monthly'
        },
        {
            url: `${prcs}/review`,
            lastModified: new Date().toLocaleDateString(),
            priority: 1,
            changeFrequency: 'weekly'
        },
        {
            url: `${prcs}/apps`,
            lastModified: new Date().toLocaleDateString(),
            priority: 1,
            changeFrequency: 'weekly'
        },
        {
            url: `${prcs}/ta`,
            lastModified: new Date().toLocaleDateString(),
            priority: 0.5,
            changeFrequency: 'monthly'
        },
        {
            url: `${prcs}/undangan`,
            lastModified: new Date().toLocaleDateString(),
            priority: 1,
            changeFrequency: 'weekly'
        },
    ];
}