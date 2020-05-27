import NextHead from 'next/head';

export const Head = (props) => (
	<NextHead>
		<title>{props.title || 'Hello 👋'} | My Next App</title>
		<link rel="icon" href="/favicon.ico" />
		<meta
			name="description"
			content={
				props.description || 'Learn how to build a personal website using Next.js'
			}
		/>
		<meta
			property="og:image"
			content={`https://og-image.now.sh/${encodeURI(
				'Next.js Sample Website'
			)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
		/>
		<meta
			name="og:title"
			content={`${props.title || 'Hello 👋'} | My Next App`}
		/>
		<meta name="twitter:card" content="summary_large_image" />
		{props.children}
	</NextHead>
);
