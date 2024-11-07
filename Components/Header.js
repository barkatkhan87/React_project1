import React from 'react'

const Header = (prps) => {
    return (
        <>
            <div className='h-16 bg-green-400 flex items-center justify-between px-3'>
                <h2>{prps.user}</h2>
                <div className='flex gap-8'>
                    <h4>About</h4>
                    <h4>{prps.sname}</h4>
                    <h4>Blog</h4>
                    <h4>Account</h4>
                </div>
            </div>
        </>
    )
}

export default Header