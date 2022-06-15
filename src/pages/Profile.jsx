import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero-img.png";

import RelatedRuin from "../components/RelatedRuin";
import Footer from "../components/Footer";

import mini from "../assets/mini-icon.png";
const styles = {
  homeBg: "bg-bgDark h-full 2xl:container 2xl:mx-auto  ",
  homeContainer: "px-8 ",
  heroContainer: "w-full h-auto mt-12",
  heroImg: "w-full h-auto",
  headContainer: "relative w-full h-auto flex flex-col",
  centerImg: "absolute left-[45%] mx-auto bottom-[-25%] w-[150px] h-auto ",
  centerContainer: "w-full flex justify-center items-center h-auto mt-[80px]",
  sectionContainer: "w-5/12 mx-auto flex flex-col items-center ",
  title: "zen text-[#fff] text-[20px] mb-2 text-center",
  walletbtn:
    "bg-btnBg rounded-[32px] min-w-[108px] py-[12px] px-[16px] text-[#999999] ",
  aboutContainer: "w-8/12 h-full mb-8 mt-[19px]",
  aboutText: "text-[14px] text-textWhite text-center leading-5",
};
const Community = () => {
  return (
    <>
      <div className={styles.homeBg}>
        <Navbar />
        <hr className="hr" />
        <div className={styles.homeContainer}>
          <div className={styles.heroContainer}>
            <div className={styles.headContainer}>
              <img src={heroImg} alt="runverse" className={styles.heroImg} />
              <img src={mini} alt="runverse" className={styles.centerImg} />
            </div>
            <div className={styles.centerContainer}>
              <div className={styles.sectionContainer}>
                <p className={styles.title}>Freya's Rune</p>
                <button className={styles.walletbtn}>0f2cd...34hh</button>
                <div className={styles.aboutContainer}>
                  
                  <p className={styles.aboutText}>
                  A beautiful kind of love, an expensive death. A beautiful kind
                  of love, an expensive death. A beautiful kind of love, an
                  expensive death.
                </p>
              </div>
              </div>
            </div>
          </div>

          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Community;
