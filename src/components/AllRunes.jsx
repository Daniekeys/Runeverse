import React from 'react';
import {collections} from '../helper/Collection';
import SingleNft from './SingleNft'
const styles = {
container:"mt-16 w-full px-2 flex flex-col mb-8",
filterContainer:"w-full flex space-x-4",
title:"normal-subT text-[#fff] ",
parentWrap:"w-full flex   ",
itemsContainer:"w-auto  h-auto flex flex-wrap sm:space-x-6 md:space-x-8 lg:space-x-2  ",

}


const AllRunes = () => {
    
    return (
        <>
    <div className={styles.container}>
        <div className={styles.filterContainer}>
        <p className={styles.title}> All Runes starlord </p>
        </div>
        <div className={styles.parentWrap}>
        <div className={styles.itemsContainer}>
            {
                collections.map((item,index) => {
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