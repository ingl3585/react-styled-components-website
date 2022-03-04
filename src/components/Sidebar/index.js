import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='about' onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to='learn' onClick={toggle}>
						Learn
					</SidebarLink>
					<SidebarLink to='prices' onClick={toggle}>
						Prices
					</SidebarLink>
					<SidebarLink to='sign-up' onClick={toggle}>
						Sign Up
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to='/sign-in'>Sign In</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
