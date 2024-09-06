import Link from 'next/link';
import React from 'react'
import { capitalizeFirstLetter } from './postsSlice';
import CardLayout from "@/app/components/cardLayout";
import Card from "@/app/components/card";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: "Posts",
    alternates: {
        canonical: `${process.env.PUBLIC_URL}/posts`
    },
}

export interface IPost {
    userId: number,
    id: number,
    title: string
    body: string
}

const PostsPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts:IPost[] = await res.json();

    return (
      <CardLayout>
            {
                posts.slice(0,15).map(post => (

                    <Card postId={post.id} key={post.id} path={'posts'}>
                        {
                            <div>
                                <h1><strong>{capitalizeFirstLetter(post.title.length>20 ? post.title.slice(0,20)+"...":post.title)}</strong></h1>
                                <p className='text-sm mt-1'>{capitalizeFirstLetter(post.body.length>100 ? post.body.slice(0,100)+"...":post.body)}</p>
                            </div>
                        }
                    </Card>
                ))
            }
      </CardLayout>
    );
}

export default PostsPage