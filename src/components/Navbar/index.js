import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { Wrapper, Content, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, NavBtn, NavBtnLink } from './Navbar.styles';
import { animateScroll as scroll } from 'react-scroll';

function Navbar({ toggle }) {

    const [scrollNav, setScrollnav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollnav(true)
        } else {
            setScrollnav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
    <>
        <Wrapper scrollNav={scrollNav}>
            <Content>
                <NavLogo to='/' onClick={toggleHome}>Rupay</NavLogo>
                
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                
                <NavMenu>
                    <NavItems>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>
                    </NavItems>

                    <NavItems>
                        <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                    </NavItems>

                    <NavItems>
                        <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                    </NavItems>

                    <NavItems>
                        <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                    </NavItems>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Content>
        </Wrapper>
    </>
)}

export default Navbar;
