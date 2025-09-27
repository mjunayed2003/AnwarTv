'use client'

import MasterDataFetch from '@/component/MasterDataFetch'
import Navigation from '@/component/Navigation'
import Image from 'next/image'
import Link from 'next/link'


import React, { useState } from 'react'
import Hero from './Hero'


function HomePage() {
    const [categoryHandelChange, setCategoryHandelChange] = useState('')

    function handleChange(category:string){
        setCategoryHandelChange(category)
        
    }

    return (
        <div>

            {/* Heading */}
            <div className='container flex py-2 px-1 justify-around border-b mx-auto border-gray-300'>
                {/* Logo */}
                <div>
                    <Link href={'/'}>
                        <Image
                            src={'/logo.jpg'}
                            alt='Anwar Tv Logo'
                            height={70}
                            width={80}
                        />
                    </Link>
                </div>
                <MasterDataFetch/>

            </div>

            {/* Navigation */}
            <nav>
                <Navigation onCategoryChange={handleChange}/>
            </nav>
                <Hero data={categoryHandelChange}/>
        </div>
    )
}

export default HomePage