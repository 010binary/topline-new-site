import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import React from 'react'
import PricingCards from "@/components/custom/pricingCard";

const page = () => {
    return (
        <>
            <main>
                <Header />
                <PricingCards />
                <Footer />
            </main>
        </>
    )
}

export default page