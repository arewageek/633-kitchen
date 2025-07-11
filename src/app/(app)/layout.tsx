import { BottomTabs } from '@/components/layout/bottom-tabs'
import React from 'react'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}

            <BottomTabs />
        </>
    )
}

export default AppLayout