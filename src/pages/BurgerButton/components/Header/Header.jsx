import React, {useState} from 'react';
import { MenuButton } from '../MenuButton';
// import Menu fron ''
import './Header.css'

const Header = () => {
    // const [isActive, setActive] = useState();
    return (
        <div className='header'>
            <div className="header-container">
                <div className="header-logo">LOGO</div>
                {/* <MenuButton isActive={isActive} setActive={setActive}/> */}
                {/* <Menu isActive={isActive}/> */}
            </div>
            
            <h1>Header</h1>
        </div>
    );
}

export default Header;
