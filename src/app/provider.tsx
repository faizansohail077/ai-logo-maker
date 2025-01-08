import Header from '@/components/Header'
import React, { ReactNode } from 'react'

const Provide = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            <div className="px-10 lg:px-32 xl:px-48 2xl:px-56 p-4">
                {children}
            </div>
        </div>
    )
}

export default Provide
