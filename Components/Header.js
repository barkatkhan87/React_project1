import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <div className='h-16 bg-green-500 border-b-2 border-green-700 text-white flex items-center justify-between px-3'>
                <h1 className='font-bold text-3xl'>Error List</h1>
                <div className='flex gap-8'>
                    <Link href={'/About'}>About</Link>
                    <Link href={'/Courses'}>Courses</Link>
                    <Link href={'/Products'}>Products</Link>
                </div>
            </div>
        </>
    )
}

export default Header