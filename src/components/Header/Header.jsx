import React from 'react'
import './Header.css'

export const Header = () => {
  return (
   
      <div className="Header">
        <section className="h-wrapper">
        <div className=" flexCenter padding innerWidth h-container ">
            <img src="./logo.png" alt="" width={100} />
            <div className="flexCenter h-menu ">
                <a href="">Recidencies</a>
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href=""> Get Started</a>
                <button className="button">
                <a href="">
                    contact
                </a>
                </button>
                
            </div>
        </div>
    </section>
    
      </div>
     
   
  );
};
export default Header;