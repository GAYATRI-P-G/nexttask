//eighth section
import React from 'react';
import styles from './steps.module.css';

const Steps: React.FC = () => {
  return (
    <div className={styles.steps}>
      {/* Container for the first step */}
      <div className={styles.stepContainer}>
        <div className={styles.numb}>
          <img src="/image/one.svg" alt="Step 1" />
        </div>
        <div className={styles.stepsbox}>
          <div className={styles.stepsbox1}>
            <img src="/locred.svg" alt="Location" className={styles.stepImage} />
            <div className={styles.stepText}>
              Select the location. Browse through our available options and find the perfect car to suit your needs.
            </div>
          </div>
        </div>
      </div>
       {/* Container for the second step */}
      <div className={styles.stepContainer}>
        <div className={styles.numb}>
          <img src="/image/two.svg" alt="Step 2" />
        </div>
        <div className={styles.stepsbox}>
          <div className={styles.stepsbox2}>
            <img src="/image/cal.svg" alt="Calendar" className={styles.stepImage} />
            <div className={styles.stepText}>
              Choose your desired Pick-Up date and time.
            </div>
          </div>
        </div>
      </div>
       {/* Container for the third step */}
      <div className={styles.stepContainer}>
        <div className={styles.numb}>
          <img src="/image/three.svg" alt="Step 3" />
        </div>
        <div className={styles.stepsbox}>
          <div className={styles.stepsbox3}>
            <img src="/image/car.svg" alt="Car" className={styles.stepImage} />
            <div className={styles.stepText}>
              Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
