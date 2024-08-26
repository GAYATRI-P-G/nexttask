//first section
"use client";//the component is rendered on the client side rather than on the server.
// Import necessary libraries and components
import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';
import React , { useState }  from 'react';
import Marquee from 'react-fast-marquee';

export default function Header() {
    // State to manage the hamburger menu toggle (open/close)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Function to toggle the hamburger menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };





    return (
    
        <div className={styles.navbar}>
             {/* Link to include Google Fonts */}
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            {/* Logo container */}
            <div className={styles.logoContainer}>
                <Image src="/Layer.svg" alt="logo" width={290} height={70} />
            </div>
             {/* Hamburger menu icon (changes on click) */}
            <div className={styles.hamburgerMenu} onClick={toggleMenu}>
                {isMenuOpen ? (
                    <span>&times;</span> // Close icon
                ) : (
                    <span>&#9776;</span> // Hamburger icon
                )}
            </div>

            {/* Navigation links and icons stack */}
            <div className={`${styles.stack} ${isMenuOpen ? styles.menuOpen : ''}`}>
            
                <div className={styles.icons}>
                     {/* Social media icons with links */}
                    <Link href="/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <Image src="/image/fb.svg" alt="Facebook" width={15} height={15} />
                        </a>
                    </Link>
                    <Link href="/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <Image src="/image/insta.svg" alt="Instagram" width={15} height={15} />
                        </a>
                    </Link>
                    <Link href="/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <Image src="/image/twitter.svg" alt="Twitter" width={15} height={15} />
                        </a>
                    </Link>
                    <Link href="/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                            <Image src="/image/link.svg" alt="LinkedIn" width={15} height={15} />
                        </a>
                    </Link>
                </div>
                 {/* Main navigation links */}
                <div className={styles.navLinks}>
                    <Link href="/about" legacyBehavior>
                        <a>About</a>
                    </Link>
                    <Link href="/offers" legacyBehavior>
                        <a>Offers</a>
                    </Link>
                    <Link href="/corporate" legacyBehavior>
                        <a>Corporate</a>
                    </Link>
                    <Link href="/personal" legacyBehavior>
                        <a>Personal</a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                        <a>Contact Us</a>
                    </Link>
                    <Link href="/login" legacyBehavior>
                        <a>Login/Signup</a>
                    </Link>
                    <Link href="/" legacyBehavior>
                        <a>
                            <Image className={styles.bell} src="/L1.svg" alt="notification" width={25} height={29} />
                        </a>
                    </Link>
                    <Link href="/profile" legacyBehavior>
                        <a>
                            <Image className={styles.jon} src="/jondoe.svg" alt="John Doe" width={84} height={23} />
                        </a>
                    </Link>
                </div>
                {/* Scrolling text section */}
                <section className={styles.smallText}>
                    <Marquee speed={170} direction="left">
                        Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand Sales Counters |
                        All Rates inclusive of VAT. T&C’s apply | Follow us on Social Media for New Offers
                    </Marquee>
                </section>

            </div>


           
        
        </div>
    );
}
