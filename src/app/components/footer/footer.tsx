//eleventh section
import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerdiv}>
        <div className={styles.footerdiv2}>
          <div className={styles.footerdiv3}>
            <div className={styles.footerdiv4}>
              <img src="/image/logo.svg" className={styles.footerimg} alt="Logo"/>
              <div className={styles.memberOfTheAlHabtoorGroup}>
                Member of the<br />Al Habtoor Group
              </div>
            </div>
            <div className={styles.footerdiv5}>
              <div className={styles.footerdiv6}>
                <div className={styles.footerhome}>Home</div>
                <div className={styles.footeraboutUs}>About Us</div>
                <div className={styles.footerservices}>Services</div>
              </div>
              <div className={styles.footerdiv7}>
                <div>Offers</div>
                <div className={styles.footerlocations}>Locations</div>
                <div className={styles.footercontactUs}>Contact Us</div>
              </div>
              <div className={styles.footerdiv8}>
                <div>FAQ</div>
                <div className={styles.footerprivacyPolicy}>Privacy Policy</div>
                <div className={styles.footerserviceRequest}>Service Request</div>
              </div>
              <div className={styles.footerdiv9}>
                <div className={styles.footercareer}>Career</div>
                <div className={styles.footertermsConditions}>Terms & Conditions</div>
              </div>
            </div>
            <div className={styles.footerdiv10}>
              <div>FOLLOW US ON</div>
              <img src="/image/social.svg" className={styles.footerimg2} alt="Social Icons"/>
              <img src="/image/global.svg" className={styles.footerimg3} alt="Global Sign"/>
            </div>
          </div>
          <div className={styles.alHabtoorCompanies}>Al Habtoor Companies</div>
          <div className={styles.footerdiv11}>
            <div className={styles.footerhospitality}>Hospitality</div>
            <div className={styles.footerrealEstate}>Real Estate</div>
            <div className={styles.footereducation}>Education</div>
            <div className={styles.footerpublishing}>Publishing</div>
            <div className={styles.footerautomotive}>Automotive</div>
            <div className={styles.footervehicleLeasing}>Vehicle Leasing</div>
          </div>
          <div className={styles.footerdiv12}></div>
          <div className={styles.carRentalLLCAllRightsReserved}>
            © 2023 Car rental LLC - All Rights Reserved.
          </div>
        </div>
      </div>

      {/* The footer for the mobile view */}
      <div className={styles.footerMobile}>
        <div className={styles.topFooter}>
          <div className={styles.logoSection}>
            <img src="/image/logo.svg" alt="Al Habtoor Logo" />
            <div className={styles.alHabtoorText}>
              <p>Member of the<br />Al Habtoor Group</p>
            </div>
          </div>
          <div className={styles.socialIconsMobileFooter}>
            <a href="#"><img src="/image/ffac.svg" alt="Facebook" /></a>
            <a href="#"><img src="/image/ftwitter.svg" alt="Twitter" /></a>
            <a href="#"><img src="/image/finsta.svg" alt="Instagram" /></a>
            <a href="#"><img src="/image/fink.svg" alt="LinkedIn" /></a>
            <a href="#"><img src="/image/utube.svg" alt="YouTube" /></a>
          </div>
        </div>

        <div className={styles.middleFooterMobile}>
          <a href="#">Home</a>
          <a href="#">Offers</a>
          <a href="#">Career</a>
          <a href="#">About Us</a>
          <a href="#">Locations</a>
          <a href="#">FAQ</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Service Request</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Services</a>
          <a href="#">Contact Us</a>
        </div>

        <div className={styles.bottomFooterMobile}>
          <p>Al Habtoor Companies</p>
          <div className={styles.companiesMobileFooter}>
            <a href="#">Hospitality</a>
            <a href="#">Real Estate</a>
            <a href="#">Publishing</a>
            <a href="#">Automotive</a>
            <a href="#">Vehicle Leasing</a>
          </div>
          <div className={styles.secureSealMobileFooter}>
            <img src="/image/global.svg" alt="Secure GlobalSign Seal" />
          </div>
          <hr />
          <p>© 2023 Car rental LLC - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
