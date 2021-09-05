import React from 'react';
import { Wrapper, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './Sidebar.styles';

function Sidebar({ isOpen, toggle }) {
    return (
        <Wrapper isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle} >About</SidebarLink>
                    <SidebarLink to='discover' onClick={toggle} >Discover</SidebarLink>
                    <SidebarLink to='services' onClick={toggle} >Services</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle} >Sign Up</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </Wrapper>
    )
}

export default Sidebar;