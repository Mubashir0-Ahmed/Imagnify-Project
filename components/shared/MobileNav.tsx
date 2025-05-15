import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const MobileNav = () => {
    return (
        <header className='flex justify-between bg-amber-500 fixed h-16 w-full border-b-4 border-purple-100  p-5 lg:hidden'>
            <Link href="/" className='flex items-center gap-2 md:py-2'>
                <Image src={"/assets/images/logo-text.svg"} alt='logo' width={180} height={28} />
            </Link>

            <nav className='flex gap-2'>
                <SignedIn>
                    <UserButton afterSwitchSessionUrl='/' />
                    <Sheet>
                        <SheetTrigger>Open</SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </SignedIn>

            </nav>
        </header>
    )
}

export default MobileNav
