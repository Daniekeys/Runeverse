import React from "react";
import Navbar from "../components/Navbar";

import RelatedRuin from "../components/RelatedRuin";
import Footer from "../components/Footer";
import demo from "../assets/demo-img.png";
import mini from "../assets/mini-icon.png";
const styles = {
  homeBg: "bg-bgDark h-full 2xl:container 2xl:mx-auto  ",
  homeContainer: "px-8 ",
  heroContainer: "w-full h-auto mt-12",
  heroImg: "w-full h-auto",
  divider: "w-full flex h-full lg:space-x-12 space-x-4 sm:space-x-6",
  secA: "w-1/2 flex justify-center items-center h-full",
  demoImg: "w-full h-auto",
  secB: "w-6/12 h-full py-4",
  secbContainer: "w-full flex flex-col h-auto",
  titleContainer: "w-full h-auto mt-4",
  title: "zen text-[#fff] text-[20px] mb-6",
};
const Collection = () => {
  return (
    <>
      <div className={styles.homeBg}>
        <Navbar />
        <hr className="hr" />
        <div className={styles.homeContainer}>
          <div className={styles.heroContainer}>
            <h1 className={styles.title}>The Collection Feature  is comming soon...</h1>
          </div>

          <hr className="hr" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Collection;
