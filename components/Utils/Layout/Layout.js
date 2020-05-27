import Link from 'next/link';

import { Header } from '../Header/Header';

import { StyledContainer, StyledMain } from './Styles';

export const Layout = (props) => (
	<StyledContainer>
		<Header home={props.home} />
		<StyledMain>{props.children}</StyledMain>
		{!props.home && (
			<div className="backToHome">
				<Link href="/">
					<a>← Back to home</a>
				</Link>
			</div>
		)}
	</StyledContainer>
);
