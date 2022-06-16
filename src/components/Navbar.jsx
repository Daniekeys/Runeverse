import React from 'react'
import Logo from './LogoText'
import {FiSearch} from 'react-icons/fi'
import {NavLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const styles = {
    parentContainer:"w-full  flex py-4 px-8",
    container:" w-full flex justify-between items-center flex-row space-x-12",
    left:"w-6/12 flex flex-row    items-center space-x-8",
    logoContainer:"w-auto ",
    inputBox:"bg-btnBg flex p-2 w-full space-x-4 rounded-[4px] grow ",
    input:"outline-none border-none grow  w-full placeholder:text-placeholder text-textWhite bg-btnBg",
    icon:"text-[#999999] text-xl",
    right:"w-5/12 ",
    linksContainer:"flex items-center justify-between list-none space-x-4 xl:space-x-4",
    listItem:"text-textWhite text-[14px]",
    link:"text-textWhite font-semibold w-full"
}
const Navbar = () => {
    const navigate = useNavigate();
    return (
      <div className={styles.parentContainer}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.logoContainer}>
              <div onClick={() => navigate("/")}>
                <Logo />
              </div>
            </div>
            <div className={styles.inputBox}>
              <input
                className={styles.input}
                placeholder="Search items and collections"
              />
              <FiSearch className={styles.icon} />
            </div>
          </div>
          <div className={styles.right}>
            <ul className={styles.linksContainer}>
              <li className={styles.listItem}>
                <NavLink to="/item" className={styles.link}>
                  Collection
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink to="/community" className={styles.link}>
                  Community
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink to="/mycollection" className={styles.link}>
                  My Collections
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <button className="connectBtn">Connect to Wallet</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Navbar