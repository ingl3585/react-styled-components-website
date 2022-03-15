import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
	border-radius: 50px;
	background: ${({ primary }) => (primary ? '#000' : '#fff')};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '14px 48px' : '12px 36px')};
	color: ${({ dark }) => (dark ? '#fff' : '#000')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? '#FFC118' : '#fff')};
		color: ${({ dark }) => (dark ? '#000' : '#fff')};
	}
`;
