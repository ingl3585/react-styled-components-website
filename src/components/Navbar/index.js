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
					</NavMenu>
				</NavContainer>
			</Nav>
		</>
	);
};

export default Navbar;
