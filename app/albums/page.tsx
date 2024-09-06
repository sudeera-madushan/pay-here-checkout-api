import React from 'react';
import {IPost} from "@/app/posts/page";
import Card from '../components/card';
import CardLayout from "@/app/components/cardLayout";
import {capitalizeFirstLetter} from "@/app/posts/postsSlice";
import Image from "next/image";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: "Albums",
    alternates: {
        canonical: `${process.env.PUBLIC_URL}/albums`
    },
}

interface IAlbums {
    userId: number,
    id: number,
    title: string
}
interface IPhotos {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

const Albums = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums');
    const resPhotos = await fetch('https://jsonplaceholder.typicode.com/photos');
    const albums:IAlbums[] = await res.json();
    const photos:IPhotos[] = await resPhotos.json();
    console.log(photos);
    return (
        <CardLayout>
            {
                albums.slice(0,10).map(a => (

                    <Card postId={a.id} key={a.id} path={'albums'}>
                        {
                            <div>
                                <h1>
                                    <strong>
                                        {capitalizeFirstLetter(a.title.length>20 ? a.title.slice(0,20)+"...":a.title)}
                                    </strong>
                                </h1>
                                <div className={'grid grid-cols-3'}>
                                {
                                    photos.filter((p) => p.albumId === a.id)?.slice(0,6).map(photo => (
                                            <Image
                                                src={photo.thumbnailUrl}
                                                alt={photo.thumbnailUrl}
                                                key={photo.id}
                                                width={70}
                                                height={70}
                                                className={'py-1'}
                                            />
                                    ))

                                }
                                </div>
                            </div>
                        }
                    </Card>
                    ))
            }
        </CardLayout>
    );
};

export default Albums;