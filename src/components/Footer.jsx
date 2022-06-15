import React from 'react'

import {IoLogoFacebook} from 'react-icons/io';
import { FaInstagramSquare, FaTelegram, FaTwitter } from "react-icons/fa";
const styles = {
    container:"w-full h-72 flex justify-center items-center",
    contentContainer:"w-full   flex flex-col space-y-8 items-center",
    title:"zen text-[56px] text-[#fff] text-center ",
    iconContainer:"flex space-x-4 items-center",
    singleIcon:"bg-btnBg rounded-full h-12 w-12 flex justify-center items-center",
    icon:" text-[16px] text-[#fff]",
    iconImg:"w-4 h-auto"

}
const Footer = () => {
    return (
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Join The Ecosystem</h1>
          <div className={styles.iconContainer}>
            <div className={styles.singleIcon}>
              <img src='https://res.cloudinary.com/www-daniekeys-com/image/upload/v1655306623/u_twitter_pbmfdo.png' alt="icon" className={styles.iconImg} />
              {/* <FaTwitter className={styles.icon} /> */}
            </div>
            <div className={styles.singleIcon}>
            <img src='https://res.cloudinary.com/www-daniekeys-com/image/upload/v1655306623/u_facebook_wntqlm.png' alt="icon" className={styles.iconImg} />

              {/* <IoLogoFacebook className={styles.icon} /> */}
            </div>
            <div className={styles.singleIcon}>
            <img src='https://res.cloudinary.com/www-daniekeys-com/image/upload/v1655306623/u_instagram-alt_qk0ouj.png' alt="icon" className={styles.iconImg} />

              {/* <FaInstagramSquare className={styles.icon} /> */}
            </div>
            <div className={styles.singleIcon}>
            <img src='https://res.cloudinary.com/www-daniekeys-com/image/upload/v1655306623/u_telegram_zsa50m.png' alt="icon" className={styles.iconImg} />

              {/* <FaTelegram className={styles.icon} /> */}
            </div>
         
          </div>
        </div>
      </div>
    );
}

export default Footer