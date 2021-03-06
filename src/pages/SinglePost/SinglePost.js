import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, removePost } from '../../redux/postsRedux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Button, Row, Col, Container, Modal } from 'react-bootstrap';
import { dateToStr } from '../../utils/dateToStr';

const SinglePost = () => {
	const { id } = useParams();
	const postData = useSelector(state => getPostById(state, id));

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const dispatch = useDispatch();

	const remove = () => {
		dispatch(removePost(postData.id));
	};

	if (!postData) return <Navigate to='/' />;
	return (
		<>
			<Container>
				<Row className='d-flex justify-content-between'>
					<Col as={'h2'}>{postData.title}</Col>
					<Col>
						<Button
							as={Link}
							to={'/post/edit/' + postData.id}
							variant='outline-info'
							className='m-2'
						>
							Edit
						</Button>
						<Button variant='outline-danger' onClick={handleShow}>
							Delete
						</Button>
					</Col>
				</Row>
				<p><span className='fw-bold'>Author: </span>{postData.author}</p>
				<p><span className='fw-bold'>Published: </span>{dateToStr(postData.publishedDate)}</p>
				<p><span className='fw-bold'>Category: </span>{postData.category}</p>
				<p dangerouslySetInnerHTML={{ __html: postData.content }} />
			</Container>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Are you sure?</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					This operation will completely remove the post. Are you sure you want
					to do that?
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Cancel
					</Button>
					<Button variant='danger' onClick={remove}>
						Remove
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default SinglePost;
