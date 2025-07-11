import { BottomTabs } from '@/components/layout/bottom-tabs'
import Header from '@/components/layout/header'
import React from 'react'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />

            <main className='py-30 mt-4 p-4 md:px-24'>
                {children}
            </main>

            <BottomTabs />
        </>
    )
}

export default AppLayout