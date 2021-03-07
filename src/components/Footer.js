import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
	width: 100%;
	background: darkcyan;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 10vh;
	font-size: 1.6rem;
	line-height: 1.3;
`;

const Footer = () => (
	<Wrapper>
		This is footer
	</Wrapper>
);

export default Footer;
