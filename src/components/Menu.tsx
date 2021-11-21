import React from "react";
import styled from "styled-components";

import Link from "next/link";

const NavigationWrapper = styled.nav`
	background: #cecece;
	width: 100%;
`;

const Navigation = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MenuItem = styled.li`
	list-style: none;
	font-size: 16px;
	margin-right: 16px;
	text-decoration: underline;

	&:hover {
		color: red;
	}
`;

const Menu = () => (
	<NavigationWrapper>
		<Navigation>
			<MenuItem>
				<Link href="/">
					<a>Home</a>
				</Link>
			</MenuItem>
		</Navigation>
	</NavigationWrapper>
);

export default Menu;
