'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} forceScrolled={pathname !== '/'} />
            <main>{children}</main>
            <Footer />
        </>
    );
}