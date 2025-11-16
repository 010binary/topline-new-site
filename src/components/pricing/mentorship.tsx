import React from 'react'
import Container from '@/components/layout/container';

const Mentorship = () => {
    return (
        <>
            <Container>
                <div className="text-center space-y-4 w-full bg-primary-background py-16">
                    {/* Badge */}
                    <div className="flex justify-center">
                        <div className="border border-[#4d2e74] rounded-full px-4 sm:px-6 py-1 text-xs sm:text-sm text-slate-300 uppercase tracking-wider shadow-[0_0_20px_2px_rgba(77,46,116,0.6)]">
                            Choose Package
                        </div>
                    </div>

                    <div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Mentorship
                        </h1>
                    </div>

                    <div>
                        <p className="text-base sm:text-lg md:text-xl text-slate-300">
                            Join our unique
                            <span className="block sm:inline bg-[#5d358a] text-white px-3 sm:px-4 py-1 rounded-full font-semibold sm:mx-2 mt-2 sm:mt-0">
                                Lifetime
                            </span>
                            <span className="block sm:inline text-slate-300 mt-2 sm:mt-0">Mentorship</span>
                            <span className="block sm:inline bg-[#5d358a] text-white px-3 sm:px-4 py-1 rounded-full font-semibold sm:ml-2 mt-2 sm:mt-0 ">
                                Program
                            </span>
                        </p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Mentorship