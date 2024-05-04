import React, {useState} from 'react';
import { MenuButton } from '../MenuButton/MenuButton';
import {Menu} from '../Menu/Menu'
import './Header.css'

const Header = () => {
    const [isActive, setActive] = useState();

    console.log('htader ', isActive)
    return (
        <div className='header'>
            <div className="header-container">
                <div className="header-logo">LOGO</div>
                <MenuButton isActive={isActive} setActive={setActive}/>
                <Menu isActive={isActive} />
            </div>
           
            {/* <h1>Header</h1> */}
        </div>
    );
}

export default Header;
