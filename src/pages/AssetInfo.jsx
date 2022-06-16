import React from 'react'
import Navbar from "../components/Navbar";
import heroImg from "../assets/hero-img.png";
import AllRunes from "../components/AllRunes";
import RelatedRuin from "../components/RelatedRuin";
import Footer from "../components/Footer";
import demo from '../assets/demo-img.png'
import mini from '../assets/mini-icon.png'
const styles = {
  homeBg: "bg-bgDark h-full 2xl:container 2xl:mx-auto  ",
  homeContainer: "px-8 ",
  heroContainer: "w-full h-auto mt-12",
  heroImg: "w-full h-auto",
  divider:"w-full flex h-full lg:space-x-12 space-x-4 sm:space-x-6",
  secA:"w-1/2 flex justify-center items-center h-full",
  demoImg:"w-full h-auto",
   secB: "w-6/12 h-full py-4",
   secbContainer:"w-full flex flex-col h-auto",
   titleContainer:"w-full h-auto mt-4",
   title:"zen text-[#fff] text-[20px] mb-6",
   aboutContainer:"w-8/12 h-full mb-8",
   aboutText:"text-[14px] text-textWhite",
   createContainer:"w-8/12 h-full mb-8",
   createSec:"w-full flex justify-between items-center",
   createItem:"flex flex-col space-y-4 euclid",
   createTitle:"text-placeholder text-[16px] euclid",
   infoContainer:"flex space-x-4 items-center",
   abtIcon:"w-10 h-auto",
   topic:"text-[#fff] text[16px] euclid",
   priceSec:"w-full flex flex-col",
   priceContainer:"w-full space-x-2 mt-2 flex items-center",
   price:"zen text-[#fff] text-[20px]",
   div:"w-[1.5px] h-6 bg-[#666666]",
   convText:"text-[14px] text-[#666666]",
   buyContainer:"w-full h-auto mt-8",
   buyFamily:"w-full flex space-x-2 items-center",
   buyNow:"connectBtn grow outline-none border-none ",
   shareBtn:"w-[200px] py-2 px-4 rounded-[4px] bg-[#fff] text-[#222222] text-[16px] outline-none border-none",


};
const Assets = () => {
    return (
      <>
        <div className={styles.homeBg}>
          <Navbar />
          <hr className="hr" />
          <div className={styles.homeContainer}>
            <div className={styles.heroContainer}>
              <div className={styles.divider}>
                <div className={styles.secA}>
                  <img src={demo} className={styles.demoImg} alt="oddyn" />
                </div>

                <div className={styles.secB}>
                  <div className={styles.secbContainer}>
                    <div className={styles.titleContainer}>
                      <p className={styles.title}>Freya's Rune</p>
                    </div>
                    <div className={styles.aboutContainer}>
                      <p className={styles.aboutText}>
                        Our runes are 24 uniquely genrated runes, containing 4
                        different attributes based on the Odin Runes. Each
                        attricbute has an extensive variety of traits, making
                        some runes more rare than the other
                      </p>
                    </div>
                    {/* ######end of about */}
                    <div className={styles.createContainer}>
                      <div className={styles.createSec}>
                        <div className={styles.createItem}>
                          <p className={styles.createTitle}>Created</p>
                          <div className={styles.infoContainer}>
                            <img
                              src={mini}
                              className={styles.abtIcon}
                              alt="auto"
                            />
                            <p className={styles.topic}>RuneVerse</p>
                          </div>
                        </div>
                        <div className={styles.createItem}>
                          <p className={styles.createTitle}>Asset Owner</p>
                          <div className={styles.infoContainer}>
                            <img
                              src={mini}
                              className={styles.abtIcon}
                              alt="auto"
                            />
                            <p className={styles.topic}>RuneVerse</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ############ end of create */}
                    <div className={styles.priceSec}>
                      <p className={styles.createTitle}>Current Price</p>
                      <div className={styles.priceContainer}>
                        <p className={styles.price}>4.4 ETH</p>
                        <div className={styles.div} />
                        <p className={styles.convText}>$9,343.34</p>
                      </div>
                    </div>
                    {/* ########end of price sec */}
                    <div className={styles.buyContainer}>
                      <div className={styles.buyFamily}>
                        <button className={styles.buyNow}>Buy Now</button>
                        <button className={styles.shareBtn}>Share</button>
                      </div>
                    </div>

                    {/* 3nd of buy#$#$#$#$#$#$#$#$ */}
                  </div>
                </div>
              </div>
            </div>
            <RelatedRuin />
            <hr className="hr" />
            <Footer />
          </div>
        </div>
      </>
    );
}


export default Assets