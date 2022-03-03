import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
	Nav,
	NavContainer,
	Logo,
	HamburgerMenu,
	NavMenu,
	NavElements,
	NavLink,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavContainer>
					<Logo to='/'>coinz</Logo>
					<HamburgerMenu>
						<FaBars />
					</HamburgerMenu>
					<NavMenu>
						<NavElements>
							<NavLink to='about'>about</NavLink>
						</NavElements>
						<NavElements>
							<NavLink to='learn'>learn</NavLink>
						</NavElements>
						<NavElements>
							<NavLink to='prices'>prices</NavLink>
						</NavElements>
						<NavElements>
							<NavLink to='sign-up'>sign up</NavLink>
						</NavElements>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to='/sign-in'>sign in</NavBtnLink>
					</NavBtn>
				</NavContainer>
			</Nav>
		</>
	);
};

export default Navbar;
