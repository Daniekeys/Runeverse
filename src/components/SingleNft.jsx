import React from 'react'
import icon from '../assets/mini-icon.png'
import {Link}from 'react-router-dom'
const styles = {
  container: " cursor-pointer w-64 md:m-2 xl:m-2 h-auto p-6 flex flex-col font-special bg-btnBg shadow-sm ",
  imgContainer: "w-full h-56",
  img: "w-full h-auto",
  secA: "w-full flex justify-between items-center mb-4 ",
  icon: "w-10 h-auto",
  name: "w-7/12 truncate card-title text-[16px] font-semibold",
  secB: "w-full mb-2",
  type: "gradient-text text-[14px]",
  secC: "w-full flex justify-between items-center  ",
  buy: "text-[#00C2FF] text-[16px] font-special font-bold",
    price:"zen text-[#fff] text-[16px]"

};
const SingleNft = ({image,name, price, type }) => {
    
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={image} alt={name} className={styles.img} loading="lazy" />
        </div>
        <div className={styles.secA}>
          <p className={styles.name}> {name}</p>

          <img src={icon} alt="icon" className={styles.icon} />
        </div>
        <div className={styles.secB}>
          <p className={styles.type}> {type}</p>
        </div>
        <div className={styles.secC}>
          <Link to="/item" className={styles.buy}> Buy now</Link>
          <p className={styles.price}> {price}</p>
        </div>
      </div>
    );
}


export default SingleNft