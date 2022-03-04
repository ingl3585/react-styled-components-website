import React from 'react';
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements';

const Sidebar = () => {
	return (
		<SidebarContainer>
			<Icon>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to='about'>about</SidebarLink>
					<SidebarLink to='learn'>learn</SidebarLink>
					<SidebarLink to='prices'>prices</SidebarLink>
					<SidebarLink to='sign-up'>sign up</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute to='/sign-in'>sign in</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
