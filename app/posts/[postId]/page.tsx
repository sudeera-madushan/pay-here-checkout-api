import React from 'react'
import { IPost } from '../page'
import { capitalizeFirstLetter } from '@/app/posts/postsSlice';
import { Metadata } from 'next';
import notFount from "@/app/components/notFound";
import notFound from "@/app/components/notFound";
interface PostPageProps{
    params:{ postId: string}
}

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts:IPost[] = await res.json();

    return posts.map(({id}) => id);
}
export async function generateMetadata({ params: { postId } }: PostPageProps):Promise<Metadata> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post:IPost = await res.json();


  return{
      title: post.title,
      description: post?.body?.length>170 ? post.body.slice(0,170) : post.body,
      alternates: {
          canonical: `${process.env.PUBLIC_URL}/posts/${postId}`
      },
    // openGraph: {
    // images: [
    //     {
    //       url:post.imgUrl
    //     }
    // ]
    // }
  }

}



const Post = async ({ params: { postId } }: PostPageProps) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post:IPost = await res.json();
    if (res.status === 404) {
        return <notFound/>
    }

  return (
    <div className='px-40 py-16 text-center items-center'>
        <h1 className='text-3xl font-bold'>{(post.title)}</h1>
        <p className='px-[10vw] py-5'>{(post.body)}</p>
    </div>
  )
}

export default Post;