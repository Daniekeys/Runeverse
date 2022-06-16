import React, { useState } from "react";
import Owned from './Owned'
import Liked from './Liked'
import Onsale from './Onsale'
import Activities from './Activities'
const styles = {
  parentContainer: "w-full h-auto",
  centerContainer: "w-full flex justify-center items-center h-auto ",
  sectionContainer: "w-5/12 mx-auto flex flex-col items-center ",
  itemsContainer: "flex space-x-6 items-center",
  inactiveBtn: "px-2 pb-2 text-[14px] euclid text-[#666666] cursor-pointer ",
  activeBtn:
    "text-[#999999] border-b-2 border-[#fff] euclid px-2 pb-2 cursor-pointer",
    contentContainer:"w-full h-auto "
};

const items = `Owned Onsale Liked Activities`;

const FilterContainer = () => {
  const [selected, setSelected] = useState("Owned");

  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.centerContainer}>
          <div className={styles.centerContainer}>
            <div className={styles.itemsContainer}>
              <p
                className={` ${
                  selected === "Owned" ? styles.activeBtn : styles.inactiveBtn
                }`}
                onClick={() => setSelected("Owned")}
              >
                Owned
              </p>
              <p
                className={` ${
                  selected === "Onsale" ? styles.activeBtn : styles.inactiveBtn
                }`}
                onClick={() => setSelected("Onsale")}
              >
                Onsale
              </p>
              <p
                className={` ${
                  selected === "Liked" ? styles.activeBtn : styles.inactiveBtn
                }`}
                onClick={() => setSelected("Liked")}
              >
                Liked
              </p>
              <p
                className={` ${
                  selected === "Activities"
                    ? styles.activeBtn
                    : styles.inactiveBtn
                }`}
                onClick={() => setSelected("Activities")}
              >
                Activities
              </p>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <div className={styles.contentContainer}>
          {
            selected === "Owned" && <Owned />
          }
          {
            selected === "Onsale" && <Onsale />
          }
          {
            selected === "Liked" && <Liked />
          }
          {
            selected === "Activities" && <Activities />
          }
          
        </div>

      </div>
    </>
  );
};

export default FilterContainer;
