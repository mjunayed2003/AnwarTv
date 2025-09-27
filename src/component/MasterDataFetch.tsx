'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

type HeadingNews = {
    id: number;
    title: string;
    image: string;
}

const MasterDataFetch = () => {
    const [headingNews, setHeadingNews] = useState<HeadingNews[]>([]);

    useEffect(() => {
        fetch("/news.json")
            .then(res => res.json())
            .then(data => setHeadingNews(data))
    }, [])
    return (
        <div>
            <div className='flex justify-around mx-auto gap-6 text-2xl pt-2 '>
                {headingNews.slice(-3).reverse().map((item, index) => (
                    <div key={index} className='flex justify-center mx auto text-xl'>
                        <Image
                            src={item.image}
                            alt='heading news'
                            width={100}
                            height={100}
                        />
                        <p className='hover:underline hover:text-red-700 mt-4 pl-2'>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MasterDataFetch