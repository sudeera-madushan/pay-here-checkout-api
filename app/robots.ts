import {Metadata, MetadataRoute} from "next";

export default function robots( ): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["admin,account"]
            }
        ],
        sitemap: `${process.env.PUBLIC_URL}/sitemap.xml`,
    }
}