import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getPostByCategory } from "../../redux/postsRedux";
import PostCard from "../PostCard/PostCard";

const SelectedCategory = () => {

	const { categoryName } = useParams();

	const posts = useSelector((state) => getPostByCategory(state, categoryName));

	if (posts.length === 0){
		return (
			<div className="d-flex justify-content-between">
				<h2>Category: {categoryName}</h2>
				<p>No posts in this category ...</p>
			</div>
		);
  } else {
		return (
			<section>
				<div className="d-flex justify-content-between">
					<h2>Category: {categoryName}</h2>
				</div>
				<Row xs={1} md={3} className="mt-2">
					{posts.map(post => (
						<Col key={post.id}>
							<PostCard id={post.id} />
						</Col>
					))}
				</Row>
			</section>
		);
  };
};

export default SelectedCategory;
