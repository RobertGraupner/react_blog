import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
	const [content, setContent] = useState(props.content || '');

   const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
   };
  
  return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formTitle">
				<Form.Label>Title</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formAuthor">
				<Form.Label>Author</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter author"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formPublishedDate">
				<Form.Label>Published</Form.Label>
				<DatePicker
					selected={publishedDate}
					onChange={(date) => setPublishedDate(date)}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formShordDescription">
				<Form.Label>Short description</Form.Label>
				<Form.Control
					as="textarea"
					rows={6}
					placeholder="Leave a comment here"
					value={shortDescription}
					onChange={(e) => setShortDescription(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formMainContent">
				<Form.Label>Main content</Form.Label>
				<ReactQuill theme="snow" value={content} onChange={setContent} />
			</Form.Group>

			<Button variant="primary" type="submit">
				{actionText}
			</Button>
		</Form>
	);
};

export default PostForm;