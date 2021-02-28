import React from 'react';
import { SidebarContainer, 
        Icon, 
        CloseIcon, 
        SidebarWrapper, 
        SidebarMenu, 
        SidebarLink, 
        SideBtnWrap, 
        SidebarRoute 
        } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        Info Section 1
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        Info Section 2
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Card Section
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>
                        Info Section 3
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
