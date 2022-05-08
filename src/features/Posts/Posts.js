import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import { Link } from "react-router-dom";
import { Button, Row, Col} from "react-bootstrap";
//import { dateToStr } from "../../utils/dateToStr";
import PostCard from "../../features/PostCard/PostCard";

const AllPosts = () => {
	const posts = useSelector(getAllPosts);

	return (
		<section>
			<div className="d-flex justify-content-between">
				<h2>All posts</h2>
				<Button as={Link} to={"/post/add"} variant="outline-primary" className="mt-2">Add post</Button>
			</div>
			<Row xs={1} md={3} className="mt-2">
				{posts.map(post => (
					<Col key={post.id}>
						{// Cały kod do renderowania karty posta przeniesiony do PostCard. Dzięki temu możemy użyć go do renderowania wszystkich postów i postów z wybraną kategorią 
						}
						<PostCard id={post.id} />
					</Col>
				))}
			</Row>
		</section>
	);
};

export default AllPosts;
