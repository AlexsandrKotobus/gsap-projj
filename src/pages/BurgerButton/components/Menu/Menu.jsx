import './Menu.css';
// import { PropTypes } from "prop-types";
import {useRef /*, useState*/} from 'react'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
// import { MenuButton} from '../MenuButton/MenuButton';

export const Menu = ({isActive}) => {
  
  console.log('Menu isActive', isActive)

    const tlRef = useRef(null);
    useGSAP(()=> {
        if (isActive) {
            tlRef.current = 
            gsap.timeline()
              .to(".menu", { 
                // тут меню выезжает справа
                x: 0,
                opacity: 1,
                duration: 0.6,
              })
              .to(".menu", {
                // тут выравнивается радиус
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                delay: -0.4,
                duration: 0.6,
              })
              .to(".menu", {
                // анимация блюра
                backdropFilter: "blur(5px)",
                delay: -0.3,
              })
              .to(".menu-list", {
                // появляются пункты меню
                y: 0,
                opacity: 1,
                delay: -0.4,
                duration: 0.6,
              });
          } else if (isActive === false) {
            tlRef.current.reverse();
          }
    }, [isActive]);
    return (
      <>
        <nav className='navMenu'>
          <div  className='menu' id="menu">
          <ul className="menu-list">
          <li className="menu-item">Home</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Address</li>
          <li className="menu-item">Contacts</li>
          <li className="menu-item">Profile</li>
        </ul>

          </div>

        </nav>

      </>
     
    );
}

// Menu.propTypes ={
//     isActive:  PropTypes.bool,
// }