import React from 'react'
import Navbar from '../components/Navbar'
import heroImg from '../assets/hero-img.png'
import AllRunes from '../components/AllRunes';
import Footer from '../components/Footer';
const styles = {
  homeBg: "bg-bgDark h-full 2xl:container 2xl:mx-auto  ",
  homeContainer: "px-8 ",
  heroContainer: "w-full h-auto mt-8",
  heroImg: "w-full h-auto",
};

const Home = () => {
    return (
      <>
        <div className={styles.homeBg}>
          <Navbar />
          <hr className="hr" />
          <div className={styles.homeContainer}>
            <div className={styles.heroContainer}>
              <img src={heroImg} alt="runverse" className={styles.heroImg} />
            </div>
            <AllRunes />
            <hr className="hr" />
            <Footer />
          </div>
        </div>
      </>
    );
}

export default Home
