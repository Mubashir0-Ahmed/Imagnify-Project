import React from 'react'
import Sidebar from '@/components/shared/Sidebar'
import MobileNav from '@/components/shared/MobileNav'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Sidebar/>
            <MobileNav/>
            <div>
                <div className='root'>
                    {children}
                </div>
            </div>
        </main>

    )
}

export default layout