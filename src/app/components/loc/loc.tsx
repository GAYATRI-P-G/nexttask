//ninth section
import React from 'react';
import styles from './loc.module.css';
import Image from 'next/image';



const Loc: React.FC = () => {
    return (
        <div className={styles.lastloc}>
           {/* Container for the entire locations section */}   
            <div id={styles.lastloc1}>
             {/* Container for the section heading */}
                <p>Locations</p>
            </div>
            <div className={styles.lastloc2}>
            {/* Container for the list of locations */}
                <ul className={styles.locationsList}>
                {/* Unordered list to hold location items */}
                    <li className={styles.locationItem}>
                        <Image src="/image/loco.svg" alt="Location Icon" width={24} height={24} />

                        <span><a href="">Dubai</a></span>
                    </li>
                    {/* Separator between location items */}
                    <li className={styles.locationSeparator}></li>
                    <li className={styles.locationItem}>
                        <Image src="/image/loco.svg" alt="Location Icon" width={24} height={24} />
                        <span><a href="">Abu Dhabi</a></span>
                    </li>
                    <li className={styles.locationSeparator}></li>
                    <li className={styles.locationItem}>
                        <Image src="/image/loco.svg" alt="Location Icon" width={24} height={24} />
                        <span><a href="">Sharjah</a></span>
                    </li>
                    <li className={styles.locationSeparator}></li>
                    <li className={styles.locationItem}>
                        <Image src="/image/loco.svg" alt="Location Icon" width={24} height={24} />
                        <span><a href="">Fujairah</a></span>
                    </li>
                    <li className={styles.locationSeparator}></li>
                    <li className={styles.locationItem}>
                        <Image src="/image/loco.svg" alt="Location Icon" width={24} height={24} />
                        <span><a href="">Ras Al Khaimah</a></span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Loc;
