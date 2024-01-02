import { MetadataRoute } from "next";

export default function sitemap():MetadataRoute.Sitemap{
    return[
        {
            url: "/",
            lastModified: new Date().toLocaleDateString(),
            priority: 1,
            changeFrequency: 'monthly'
        },
        {
            url: "/artikel",
            lastModified: new Date().toLocaleDateString(),
            priority: 1,
            changeFrequency: 'weekly'
        },
        {
            url: "/artikel/kategori",
            lastModified: new Date().toLocaleDateString(),
            priority: 1,
            changeFrequency: 'weekly'
        },
        {
            url: "/bantuan",
            lastModified: new Date().toLocaleDateString(),
            priority: 0.5,
            changeFrequency: 'monthly'
        },
        {
            url: "/review",
            lastModified: new Date().toLocaleDateString(),
            priority: 1,
            changeFrequency: 'weekly'
        },
        {
            url: "/ta",
            lastModified: new Date().toLocaleDateString(),
            priority: 0.5,
            changeFrequency: 'monthly'
        },
        {
            url: "/undangan",
            lastModified: new Date().toLocaleDateString(),
            priority: 1,
            changeFrequency: 'weekly'
        },
    ];
}