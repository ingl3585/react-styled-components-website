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

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavContainer>
					<Logo to='/'>Currents</Logo>
					<HamburgerMenu onClick={toggle}>
						<FaBars />
					</HamburgerMenu>
					<NavMenu>
						<NavElements>
							<NavLink to='about'>About</NavLink>
						</NavElements>
						<NavElements>
							<NavLink to='learn'>Learn</NavLink>
						</NavElements>
						<NavElements>
							<NavLink to='prices'>Prices</NavLink>
						</NavElements>
						<NavElements>
							<NavLink to='sign-up'>Sign Up</NavLink>
						</NavElements>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
					</NavBtn>
				</NavContainer>
			</Nav>
		</>
	);
};

export default Navbar;
