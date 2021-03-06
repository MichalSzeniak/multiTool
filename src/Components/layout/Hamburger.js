import React, {useState} from 'react'

const Hamburger = ({handleHamburger, hamburgerActive}) => {


    return (
        <button className={hamburgerActive ? "hamburger hamburger__active" : "hamburger"} onClick={handleHamburger}>
            <span className="hamburger__box">
                <span className="hamburger__inner"></span>
            </span>
        </button>
    )
}

export default Hamburger
