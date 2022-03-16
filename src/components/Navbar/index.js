import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll/modules';
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
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav scrollNav={scrollNav}>
					<NavContainer>
						<Logo to='/' onClick={toggleHome}>
							Currents
						</Logo>
						<HamburgerMenu onClick={toggle}>
							<FaBars />
						</HamburgerMenu>
						<NavMenu>
							<NavElements>
								<NavLink
									to='about'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}>
									About
								</NavLink>
							</NavElements>
							<NavElements>
								<NavLink
									to='learn'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}>
									Learn
								</NavLink>
							</NavElements>
							<NavElements>
								<NavLink
									to='prices'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}>
									Prices
								</NavLink>
							</NavElements>
							<NavElements>
								<NavLink
									to='sign-up'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}>
									Sign Up
								</NavLink>
							</NavElements>
						</NavMenu>
						<NavBtn>
							<NavBtnLink
								to='/sign-in'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}>
								Sign In
							</NavBtnLink>
						</NavBtn>
					</NavContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
