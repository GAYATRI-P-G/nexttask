//fifth section
import React from 'react'; 
import Image from 'next/image';  
import Link from 'next/link';  
import styles from './rbcars.module.css';

const RbCars = () => {
  return (
    // Container for the whole section
    <div className={styles.twocarsContainer}>
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
      <div className={styles.twocars}>
        {/* First car section */}
        <div className={styles.car1}>
          <div className={styles.carin1}>
            <Image src="/image/blucar.svg" alt="Blue Car" width={360} height={290} />
          </div>
          <div className={styles.car1text}>
            <p className={styles.car1text1}>Mitsubishi Eclipse</p>
            <p className={styles.car1text2}>
              Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology, and driving confidence.
            </p>
            <p className={styles.car1text3}>
              <Image src="/image/blutext.svg" alt="Text Icon" width={320} height={30} />
            </p>
            <div className={styles.car1text4}>
              <p className={styles.car1text41}>AED 2700/ Monthly</p>
              <button className={styles.car1text42}>
                <Link href="#">Book Now</Link>
              </button>
            </div>
          </div>
        </div>
          {/* Second car section */}
        <div className={styles.car2}>
          <div className={styles.carin2}>
            <Image src="/image/redcar.svg" alt="Red Car" width={360} height={290} />
          </div>
          <div className={styles.car2text}>
            <p className={styles.car2text1}>Jac J7</p>
            <p className={styles.car2text2}>
              S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.
            </p>
            <p className={styles.car2text3}>
              <Image src="/image/blutext.svg" alt="Text Icon" width={320} height={30} />
            </p>
            <div className={styles.car2text4}>
              <p className={styles.car2text41}>AED 2700/ Monthly</p>
              <button className={styles.car2text42}>
                <Link href="#">Book Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RbCars;
