'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

type NewsData = {
    title: string;
    image: string;
    category: string;
}

type HeroProps={
    data: string;
}

const Hero = ({ data }: HeroProps) => {
    const [news, setNews] = useState<NewsData[]>([])

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    const filter = data && data !== "All"
        ? news.filter(item => item.category === data)
        : news;

    return (
        <div className="py-10 ">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {filter.map((item, key) => (
                        <div
                            key={key}
                            className="shadow rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition"
                        >
                            <Image
                                src={item.image}
                                alt="news image"
                                height={200}
                                width={300}
                                className="rounded-md object-cover scale-100"
                            />
                            <h1 className="mt-3 font-semibold">{item.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero
