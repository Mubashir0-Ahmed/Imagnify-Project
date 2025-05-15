"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { UserButton } from '@clerk/nextjs'

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <section className='md:hidden h-screen w-72 bg-white p-5 shadow-md shadow-purple-200/50 lg:flex border-r-2 border-r-purple-500'>
            <div className='flex size-full flex-col gap-4'>
                <Link href='/' className='flex items-center gap-2 py-2'>
                    <Image src={"/assets/images/logo-text.svg"} alt='logo' width={180} height={28} />
                </Link>

                <nav className='h-full flex-col justify-between flex gap-4'>
                    <SignedIn>
                        <ul className='hidden w-full flex-col items-start gap-2 md:flex'>
                            {navLinks.map((link) => {
                                const isActive = link.route === pathname;

                                return (
                                    <li key={link.route} className={`flex items-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-purple-100 hover:shadow-inner group ${isActive ? 'bg-purple-700 text-white' : 'text-gray-700'}`}>
                                        <Link href={link.route} className='flex p-5'>
                                            <Image src={link.icon} alt='logor' width={24} height={24} className={`${isActive && "brightness-200"}`} />
                                            {link.label}

                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <ul className='hidden w-full flex-col items-start gap-2 md:flex'>
                            <li className='flex items-center justify-center cursor-pointer gap-2 p-4'>
                                <UserButton afterSwitchSessionUrl='/' showName />
                            </li>
                        </ul>
                    </SignedIn>

                    <SignedOut>
                        <Button className='bg-purple-600 bg-cover'>
                            <Link href={"/sign-in"}></Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </section>
    )
}

export default Sidebar
