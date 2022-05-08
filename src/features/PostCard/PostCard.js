import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getPostById } from "../../redux/postsRedux";
import { Link } from "react-router-dom";
import { dateToStr } from "../../utils/dateToStr";

const PostCard = ({ id }) => {
	const post = useSelector((state) => getPostById(state, id));

	return (
		<div className="container d-flex justify-content-center">
			<Card className="mt-2 mb-2">
				<Card.Body>
					<Card.Title className="mb-3">{post.title}</Card.Title>
					<Card.Subtitle className="mt-2"><span className="fw-bold">Author: </span>{post.author}</Card.Subtitle>
					<Card.Subtitle className="mt-2"><span className="fw-bold">Published: </span>{dateToStr(post.publishedDate)}</Card.Subtitle>
					<Card.Text className="mt-2"><span className="fw-bold">Category: </span>{post.category}</Card.Text>
					<Card.Text className="mt-2">{post.shortDescription}</Card.Text>
					<Button as={Link} to={"/post/" + post.id} variant="primary">Read more</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default PostCard;
