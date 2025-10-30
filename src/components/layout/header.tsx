"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Container from "@/components/layout/container";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { label: "Mentorship", href: "/mentorship" },
        { label: "Robot", href: "/robot" },
        { label: "Trade Signal", href: "/trade-signal" },
        { label: "Reviews", href: "/reviews" },
        { label: "Book a Session", href: "/bookings" },
        { label: "Broker", href: "/broker" },
    ]

    return (
        <>
            <nav className="bg-slate-950 border-b border-slate-800">
                <Container >
                    <div className="py-2">
                        <div className="flex justify-between items-center h-16">
                            {/* Logo */}
                            <Link href="/" className="flex-shrink-0">
                                <Image src="/logo.png" alt="bennydc" width={120} height={40} className="h-10 w-auto" />
                            </Link>

                            {/* Desktop Menu Items */}
                            <div className="hidden md:flex items-center gap-8">
                                <Link href="/mentorship" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                                    Mentorship
                                </Link>
                                <Link href="/robot" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                                    Robot
                                </Link>
                                <Link
                                    href="/trade-signal"
                                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                                >
                                    Trade Signal
                                </Link>
                                <Link href="/reviews" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                                    Reviews
                                </Link>
                            </div>

                            {/* Desktop Buttons */}
                            <div className="hidden md:flex items-center gap-3">
                                <button className="px-6 py-2 border border-gray-500 text-gray-300 rounded-lg hover:border-gray-400 hover:text-white transition-colors text-sm font-medium">
                                    Bookings
                                </button>
                                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg hover:from-purple-700 hover:to-purple-600 transition-colors text-sm font-medium">
                                    Broker
                                </button>
                            </div>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Toggle menu"
                            >
                                <Menu className="w-6 h-6 text-purple-600" />
                            </button>
                        </div>
                    </div>
                </Container>
            </nav>

            {isMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />

                    {/* Menu Panel */}
                    <div className="absolute inset-y-0 left-0 w-full bg-black flex flex-col">
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-slate-800">
                            <h2 className="text-white text-2xl font-semibold">Menu</h2>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full hover:from-purple-700 hover:to-purple-600 transition-colors flex items-center gap-2 font-medium"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                                Close
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col py-8 px-6 gap-12">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-white text-xl font-medium hover:text-purple-400 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
