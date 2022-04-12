import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

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
						<Card className="mt-2 mb-2">
							<Card.Body>
								<Card.Title className="mb-3">{post.title}</Card.Title>
								<Card.Subtitle className="mt-2"><span className="fw-bold">Author: </span>{post.author}</Card.Subtitle>
								<Card.Subtitle className="mt-2"><span className="fw-bold">Published: </span>{post.publishedDate}</Card.Subtitle>
								<Card.Text className="mt-2">{post.shortDescription}</Card.Text>
								<Button as={Link} to={"/post/" + post.id} variant="primary">Read more</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</section>
	);
};

export default AllPosts;
