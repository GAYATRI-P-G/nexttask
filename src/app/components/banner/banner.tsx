// second section

import React from 'react';
import Image from 'next/image';
import styles from './banner.module.css';

// Define a functional component called Banner using React.FC 
const Banner: React.FC = () => {
  return (
    <div className={styles.bg}>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
       {/* Container for background content */}
      <div className={styles.backgroundContainer}>
        {/* Overlay text and selection area */}
        <div className={styles.overlayText}>
          <div id={styles.start}>
            <a href="#">Same as Pick-Up</a>
            <p id={styles.startTag}></p>
          </div>
          
          <p id={styles.second}>Different Drop-Off</p>
          <select id={styles.vehicleType}>
            <option value="0">Select vehicle type</option>
          </select>
        </div> 

        {/* Container for location selection and date/time inputs */}

        <div className={styles.next}>
          <div className={styles.selection}>
            <Image src="/image/loc.svg" className={styles.leftIcon} alt="Left Icon" width={20} height={20} />
            <select id={styles.location}>
              <option value="0">Al Quoz</option>
             </select>
            <Image src="/image/Vector.svg" className={styles.rightIcon} alt="Right Icon" width={20} height={20} />
          </div>
          <input type="datetime-local" value="2023-10-30T18:30" id={styles.datetimeInput} name="datetime" />
          <input type="datetime-local" value="2023-11-29T18:30" id={styles.datetimeInput} name="datetime" />
          {/* Button container with search button and divider */}
          <div className={styles.buttonContainer}>
          <button id={styles.sbutton}>
            <Image src="/image/sb.svg" alt="Search Button" width={64} height={42} />
          </button>
          <div id={styles.vtline}></div>
          </div>
          <div id={styles.Quickbook}>
            <a href="#">Quick Book</a>
          </div>
        </div> 
        {/* Container for the last section with app download information */}
        <div className={styles.last}>
          <div className={styles.lastPara}>Download our App for easy accessibility anytime, anywhere!</div>
          <div  className={styles.last1}>
          < Image src="/image/Ap.svg" className={styles.apps1} alt="App Store" width={100} height={30} />
          <Image src="/image/Gp.svg" className={styles.apps2} alt="Google Play" width={100} height={30} />
          </div>
        </div>
      </div>
       {/* Side icons for phone and contact number */}
      <div className={styles.sideicons}>
        <Image src="/image/phone.svg" alt="Phone Icon" width={60} height={50} />
        <button className={styles.number}>
          <Image src="/image/no.svg" alt="Phone Number" width={40} height={40} />
        </button>
      </div>
     

    </div>

    
  );
};

export default Banner;
