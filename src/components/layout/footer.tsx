"use client"

import type React from "react"

import Link from "next/link"
import { Mail, Phone, MessageCircle } from "lucide-react"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter signup
    }

    return (
        <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Left Section - Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <img src="/logo.png" alt="bennydc" className="h-16 w-auto mb-6" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            50, Sapele Road, after genesis restaurant, before Adesuwa. Benin City, Edo state.
                        </p>
                        <div className="space-y-3">
                            <a
                                href="https://wa.me/2348051115757"
                                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition"
                            >
                                <MessageCircle size={18} className="text-purple-500" />
                                <span>WhatsApp</span>
                            </a>
                            <a
                                href="tel:+2348051115757"
                                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition"
                            >
                                <Phone size={18} className="text-purple-500" />
                                <span>08051115757</span>
                            </a>
                            <a
                                href="tel:+2348035254928"
                                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition"
                            >
                                <Phone size={18} className="text-purple-500" />
                                <span>08035254928</span>
                            </a>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
                        <ul className="space-y-3">
                            {["Mentorship", "Trade Signal", "Robot", "Book a Session"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-purple-400 transition text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Others Section */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Others</h3>
                        <ul className="space-y-3">
                            {["Reviews", "Broker"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-purple-400 transition text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-6">
                            Sign up our newsletter to get update information, news and free insight.
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 bg-slate-800 text-white placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-purple-700 transition flex items-center justify-center gap-2"
                            >
                                <Mail size={18} />
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="border-t border-slate-700 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Youtube, href: "#" },
                            ].map((social, idx) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition"
                                    >
                                        <Icon size={18} />
                                    </a>
                                )
                            })}
                        </div>

                        {/* Copyright */}
                        <p className="text-gray-400 text-sm text-center md:text-right">
                            Copyright© 2025 Benny Dc Forex, All rights reserved.
                        </p>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-gray-500 text-xs text-center mt-6 pt-6 border-t border-slate-700">
                        This is the free demo result. For a full version of this website, please go to Website Downloader
                    </p>
                </div>
            </div>
        </footer>
    )
}
