//sixth section
import React from 'react';
import styles from './subs.module.css';
import Link from 'next/link';

const Subs = () => {
  return (
    // Main container for the subscription and mobile sections
    <div className={styles.thirdsection}>
      {/* Subscription section */}
      <div className={styles.subscribe}>
        <p className={styles.subs1}>Subscribe here for exclusive offers and updates!</p>
        <div className={styles.subs22}>
          <input className={styles.subs2} type="text" name="Name" placeholder="Name" />
          <input className={styles.subs2} id="subs2" type="email" name="Email" placeholder="Email" />
        </div>
        <p className={styles.subs3}>
          Don&apos;t miss out! Enter your email and your name, then hit subscribe to unlock a world of special offers and details.
        </p>
        <button className={styles.subsbutton}>
          <Link href="#">Subscribe</Link>
        </button>
      </div>
      {/* Mobile section */}
      <div className={styles.mobile}>
        <img className={styles.mobpic} src="/image/mobile.svg" alt="Mobile" />
        <div className={styles.mobileContent}>
          <div className={styles.mobtext}>
            Enter your number and receive a direct link to download the app
          </div>
          <input className={styles.mobsno} type="number" name="number" placeholder="Enter Phone Number" />
          <button className={styles.linkbut}>
            <Link href="#">Get the link</Link>
          </button>
          <p className={styles.getit}>Get in on</p>
          <div className={styles.apps}>
            <img src="/image/ap1.svg" alt="App Icon 1" />
            <img src="/image/ap2.svg" alt="App Icon 2" />
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Subs;
