import React from 'react'

import {IoLogoFacebook} from 'react-icons/io';
import { FaInstagramSquare, FaTelegram, FaTwitter } from "react-icons/fa";
const styles = {
    container:"w-full h-72 flex justify-center items-center",
    contentContainer:"w-full   flex flex-col space-y-8 items-center",
    title:"zen text-[56px] text-[#fff] text-center ",
    iconContainer:"flex space-x-4 items-center",
    singleIcon:"bg-btnBg rounded-full h-12 w-12 flex justify-center items-center",
    icon:" text-[16px] text-[#fff]"

}
const Footer = () => {
    return (
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Join The Ecosystem</h1>
          <div className={styles.iconContainer}>
            <div className={styles.singleIcon}>
              <FaTwitter className={styles.icon} />
            </div>
            <div className={styles.singleIcon}>
              <IoLogoFacebook className={styles.icon} />
            </div>
            <div className={styles.singleIcon}>
              <FaInstagramSquare className={styles.icon} />
            </div>
            <div className={styles.singleIcon}>
              <FaTelegram className={styles.icon} />
            </div>
         
          </div>
        </div>
      </div>
    );
}

export default Footer