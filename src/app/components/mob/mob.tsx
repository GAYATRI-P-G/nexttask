//banner mobile view section
"use client";
import React, { useState, useEffect, useCallback } from 'react';
import styles from './mob.module.css';



const Mob = () => {
  // State variable to track whether the tabs are visible or not.
  const [isTabsVisible, setTabsVisible] = useState(false);
   // State variable to track if the current view is mobile.
  const [isMobile, setIsMobile] = useState(false);

  

  useEffect(() => {
    const handleResize = () => {
       // Function to check if the screen width is 768px or less
      setIsMobile(window.innerWidth <= 768);
    };
    // Call handleResize initially to set the correct state based on the current window size.
    handleResize();



    // Add an event listener to handle resize events,
    window.addEventListener('resize', handleResize);

   return () => window.removeEventListener('resize', handleResize);
 
  }, []);
  // Function to toggle the visibility of the tabs.
  const toggleTabs = () => {
    setTabsVisible(!isTabsVisible);
  };
   // If the view is not mobile, do not render the component
  if (!isMobile) {
    return null; // Do not render the component on non-mobile view
  }

  return (
    <section className={styles.quickBookMobile}>
      <div className={styles.bookDropdownMenu}>
        <button className={styles.bookACar} onClick={toggleTabs}>
          Book a car
        </button>
        <button className={styles.bookQuick}>Quick book</button>
      </div>
        {/* Conditional rendering of the booking tabs; tabs will be visible if isTabsVisible is true */}
      <div className={`${styles.bookTabs} ${isTabsVisible ? styles.active : ''}`}>
        <ul className={styles.bookTabsList}>
        {/* List items for different booking options */}
          <li className={styles.tabsLiMv}><a href="#">Same as Pick-Up</a></li>
          <li className={styles.tabsLiMv}><a href="#">Different Drop-Off</a></li>
          <li className={styles.tabsLiMv}>
            {/* Dropdown to select the vehicle type */}
            <select name="vehicle" className={styles.vehicleSelectmv}>
              <option value="default" selected disabled hidden>Vehicle Type</option>
              <option value="sedan">Sedan</option>
              <option value="hatchback">Hatchback</option>
              <option value="suv">SUV</option>
            </select>
          </li>
        </ul>
        <ul className={styles.quickBookmobileInput}>
         {/* Input fields for pick-up and drop-off locations and times */}

          <li className={styles.quickBookLi}>
            <select name="pickup" className={styles.pickupSelectmv}>
              <option value="default" selected disabled hidden>Pick up location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>
          </li>
          <li className={styles.quickBookLi}>
            <select name="dropoff" className={styles.dropOffLocation}>
              <option value="default" selected disabled hidden>Drop off location</option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
            </select>
          </li>
          <li className={styles.quickBookLi}>
            <input className={styles.pickupDate} type="datetime-local" placeholder="Pick-Up Date and Time" />
          </li>
          <li className={styles.quickBookLi}>
            <input className={styles.dropOffDate} type="datetime-local" placeholder="Drop off Date and Time" />
          </li>
        </ul>
        <button className={styles.quickbookSearch}>Search</button>
      </div>
    </section>
  );
};

export default Mob;
