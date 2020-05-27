import Link from 'next/link';

import { StyledHeader, StyledImage, StyledHomeImage } from './Styles';

const name = 'Žiga Krašovec';

export const Header = ({ home }) => (
	<StyledHeader>
		{home ? (
			<React.Fragment>
				<StyledHomeImage
					src="/images/profile-pic.jpeg"
					className="borderCircle"
					alt={name}
				/>
				<h1 className="heading2Xl">{name}</h1>
			</React.Fragment>
		) : (
			<React.Fragment>
				<Link href="/">
					<a>
						<StyledImage
							src="/images/profile-pic.jpeg"
							className="borderCircle"
							alt={name}
						/>
					</a>
				</Link>
				<h2 className="headingLg">
					<Link href="/">
						<a className="colorInherit">{name}</a>
					</Link>
				</h2>
			</React.Fragment>
		)}
	</StyledHeader>
);
