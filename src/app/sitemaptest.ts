import { MetadataRoute } from "next";

export default function sitemap():MetadataRoute.Sitemap{
    return[
        {
            url: "/post",
            lastModified: new Date(),
            priority: 0.7,
            changeFrequency: 'monthly'
        }
    ];
}