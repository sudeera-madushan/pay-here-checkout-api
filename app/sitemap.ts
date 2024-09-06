import {MetadataRoute} from "next";
import {IPost} from "@/app/posts/page";

export default async function sitemap():Promise<MetadataRoute.Sitemap> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts:IPost[] = await res.json();

    const postEntries : MetadataRoute.Sitemap = posts.map(({id}) => ({
        url: `${process.env.PUBLIC_URL}/post/${id}`,
        lastModified: new Date(),
        changeFrequency: 'never',
        priority: id
    }))

    return [
        {
            url: `${process.env.PUBLIC_URL}/posts`,
            lastModified: new Date()
        },
        ...postEntries
    ]
}