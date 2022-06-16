import React from 'react'
const styles = {
  container: "w-full h-56 flex justify-center items-center",
  title: "zen text-[#fff] text-[24px] text-center",
};
const Activities = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>No Recent Activities yet</h1>
    </div>
  );
}

export default Activities