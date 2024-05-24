'use client';
import React from 'react'
import { motion } from 'framer-motion'
export default function Header() {

    const navLink = [
        { name: "Home", path: "#home" },
        { name: "About", path: "#home" },
        { name: "Skills", path: "#home" },
        { name: "Projects", path: "#home" },
        { name: "Contents", path: "#home" }
    ]
    return (
        <header className=' fixed  left-[50%] -translate-x-1/2 top-4 '>
            <motion.div className='shadow-md bg-white p-5 rounded-full '>


                <ul className=' flex gap-8 '>
                    {navLink.map((item, index) => (
                        <motion.li
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className=' transition-all rounded-full py-1 px-2 hover:bg-gray-200 whileHover prop'
                            key={index}>{item.name}</motion.li>
                    ))}
                </ul>

            </motion.div>
        </header>
    )
}
