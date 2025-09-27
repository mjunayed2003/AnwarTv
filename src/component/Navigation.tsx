'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { GrLanguage } from 'react-icons/gr';
import { IoNewspaper } from 'react-icons/io5';
import { MdMenu } from 'react-icons/md';
import { SiSimplelogin } from 'react-icons/si';

type NavData = {
    id: number;
    name: string;
}

type NavProps ={
    onCategoryChange: (category: string) => void;
}

const Navigation = ({onCategoryChange}: NavProps) => {
    const [navigationData, setNavData] = useState<NavData[]>([])

    useEffect(() => {
        fetch('/category.json')
            .then(res => res.json())
            .then(data => setNavData(data))

            
    }, [])
    return (
        <div>
            <div className='flex justify-center m-auto gap-3 text-xl  border-b-3 border-gray-400'>
                {navigationData.map((item, index) => (
                    <div key={index} className='py-6 hover:underline hover:text-red-700' onClick={()=>onCategoryChange(item.name)}>
                        {item?.name}
                    </div>
                ))}

                <div className='flex ml-70'>
                    <Link href={''}>
                        <button className='flex gap-2 border-x px-3 py-6 text-xl hover:underline hover:text-red-700'>
                            <FaSearch />
                            খুজুন
                        </button>
                    </Link>
                    <Link href={''}>
                        <button className='flex gap-2 border-r px-3 py-6 text-xl hover:underline hover:text-red-700'>
                            <IoNewspaper />
                            ই-পেপার
                        </button>
                    </Link>
                    <Link href={''}>
                        <button className='flex gap-2 border-r px-3 py-6 text-xl hover:underline hover:text-red-700'>
                            <GrLanguage />
                            Eng
                        </button>
                    </Link>
                    <Link href={''}>
                        <button className='flex gap-2 border-r px-3 py-6 text-xl hover:underline hover:text-red-700'>
                            <SiSimplelogin />
                            Login
                        </button>
                    </Link>
                    <Link href={''}>
                        <button className='flex gap-2 border-r px-4 py-6 text-2xl hover:text-red-700'>
                            <MdMenu />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation