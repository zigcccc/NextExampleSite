import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';

import { Head, Layout, Date } from '../components/Utils';

const Home = ({ allPostsData }) => {
	return (
		<React.Fragment>
			<Head />
			<Layout home>
				<section className="headingMd">
					<p>
						Hello, I'm <strong>Žiga</strong>. I'm a frontend javascript developer and
						a UX designer. You can see my skills and work experiences on{' '}
						<a href="https://www.linkedin.com/in/zigakrasovec/" target="_blank">
							LinkedIn
						</a>
						.
					</p>
					<p>
						(This is a sample website - you’ll be building a site like this on{' '}
						<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
					</p>
				</section>
				<section className="headingMd padding1px">
					<h2 className="headingLg">Blog</h2>
					<ul className="list">
						{allPostsData.map(({ id, date, title }) => (
							<li className="listItem" key={id}>
								<Link href="/posts/[id]" as={`/posts/${id}`}>
									<a>{title}</a>
								</Link>
								<br />
								<small className="lightText">
									<Date dateString={date} />
								</small>
							</li>
						))}
					</ul>
				</section>
			</Layout>
		</React.Fragment>
	);
};

export default Home;

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
