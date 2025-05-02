import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <nav className="w-full flex justify-between items-center px-10 py-6 text-white font-semibold">
            <div className="flex items-center gap-2">
                {/* Logo */}
                <div className="bg-white p-2 rounded-full">
                    <span className="text-black font-bold">🌿</span>
                </div>
                <span>Nature</span>
            </div>
            <ul className="flex gap-8">
                <li><Link href={`/`} >Home</Link></li>
                <li><Link href={`/Info`} >Info</Link></li>
                <li><Link href={`/Gallery`} >Gallery</Link></li>
                <li><Link href={`/Contact`} >Contact</Link></li>
                <li><Link href={`/FAQ`} >FAQ</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar