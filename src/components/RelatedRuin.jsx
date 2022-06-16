import React from 'react';
import {collections} from '../helper/Collection';
import SingleNft from './SingleNft'
const styles = {
  container: "mt-16 w-full px-8 flex flex-col mb-8",
  filterContainer: "w-full flex space-x-4",
  title: "normal-subT text-[#fff] ",
  parentWrap: "w-full flex   ",
  itemsContainer:
    "w-auto  h-auto grid lg:grid-col-4 lg:gap-x-6 2xl:gap-x-8 lg:grid-cols-4 2xl:grid-col-5  ",
};


const AllRunes = () => {
    
    const data = collections.slice(0,4);
    return (
        <>
    <div className={styles.container}>
        <div className={styles.filterContainer}>
        <p className={styles.title}> All Runes</p>
        </div>
        <div className={styles.parentWrap}>
        <div className={styles.itemsContainer}>
            {
                data.map((item,index) => {
                    const {name,image,price,type} = item;
                    
                    return <SingleNft name={name} image={image} price={price} type={type}  key={index} />
                })
            }
        </div>
        </div>
    </div>

        </>
    )
}

export default AllRunes