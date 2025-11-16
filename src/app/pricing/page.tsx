import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import React from 'react'
import PricingCards from "@/components/custom/pricingCard";
import Mentorship from '@/components/pricing/mentorship';

const page = () => {
    return (
        <>
            <main>
                <Header />
                <Mentorship />
                <PricingCards />
                <Footer />
            </main>
        </>
    )
}

export default page