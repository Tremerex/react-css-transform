import React from 'react';
import { Link } from 'react-router-dom';
import headerStyle from './header.scss';

const Header = (props) => {
    let path = window.location.pathname;
    return (
        <header>
            <nav>
                <ul className={headerStyle.mainNav}>
                    <li>
                        <Link to='/' className={path === '/' ? headerStyle.active : ''} data-qa-id="cubeLink">
                            Cube
                        </Link>
                    </li>
                    <li>
                        <Link to='/clock' className={path === '/clock' ? headerStyle.active : ''} data-qa-id="clockLink">
                            Clock
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;