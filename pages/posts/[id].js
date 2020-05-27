import { getAllPostIds, getPostData } from '../../lib/posts';

import { Layout, Head, Date } from '../../components/Utils';

const Post = ({ postData }) => (
	<React.Fragment>
		<Head title={postData.title} />
		<Layout>
			<article>
				<h1 className="headingXl">{postData.title}</h1>
				<div className="lightText">
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
			</article>
		</Layout>
	</React.Fragment>
);

export default Post;

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
