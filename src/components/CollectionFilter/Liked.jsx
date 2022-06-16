import React from 'react'
const styles = {
  container: "w-full h-56 flex justify-center items-center",
  title: "zen text-[#fff] text-[24px] text-center",
};
const Liked = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            No Liked Assets yet 
        </h1>
    </div>
  )
}

export default Liked