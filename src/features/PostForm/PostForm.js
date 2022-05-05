import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const PostForm = ({ action, actionText, ...props }) => {

	const {register, handleSubmit: validate, formState: { errors },} = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
	const [content, setContent] = useState(props.content || '');
	const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

	const handleSubmit = e => {
		 //mozna zrezygnowac z e.preventDefault() bo robi to juz funkcja validate
    //e.preventDefault();
   setContentError(!content)
   setDateError(!publishedDate)
   if(content && publishedDate) { 
     action({ title, author, publishedDate, shortDescription, content });
   }
 };
  
	return (
		//gdy nastąpi event submit, zwaliduj formularz, jesli jest poprawny uruchom funkcje handlesubmit
		<Form onSubmit={validate(handleSubmit)}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Title</Form.Label>
				<Form.Control
					{...register("title", { required: true, minLength: 3 })}
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					placeholder="Enter title"
				/>
				{errors.title && (
					<small className="d-block form-text text-danger mt-2">
						This field is required and should have at least 3 characters
					</small>
				)}
			</Form.Group>

			<Form.Group className="mb-3" controlId="formAuthor">
				<Form.Label>Author</Form.Label>
				<Form.Control
					{...register("author", { required: true, minLength: 3 })}
					type="text"
					placeholder="Enter author"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				{errors.author && (
					<small className="d-block form-text text-danger mt-2">
						This field is required and should have at least 3 characters
					</small>
				)}
			</Form.Group>

			<Form.Group className="mb-3" controlId="formPublishedDate">
				<Form.Label>Published</Form.Label>
				<DatePicker
					selected={publishedDate}
					onChange={(date) => setPublishedDate(date)}
				/>
				{dateError && (
					<small className="d-block from-text text-danger mt-2">
						Date can't be empty
					</small>
				)}
			</Form.Group>

			<Form.Group className="mb-3" controlId="formShordDescription">
				<Form.Label>Short description</Form.Label>
				<Form.Control
					{...register("shortDescription", { required: true, minLength: 20 })}
					as="textarea"
					rows={3}
					placeholder="Leave a comment here"
					value={shortDescription}
					onChange={(e) => setShortDescription(e.target.value)}
				/>
				{errors.shortDescription && (
					<small className="d-block form-text text-danger mt-2">
						This field is required and should have at least 20 characters
					</small>
				)}
			</Form.Group>

			<Form.Group className="mb-3" controlId="formMainContent">
				<Form.Label>Main content</Form.Label>
				<ReactQuill
					theme="snow"
					value={content}
					onChange={setContent}
				/>
				{contentError && (
					<small className="d-block form-text text-danger mt-2">
						Content can't be empty
					</small>
				)}
			</Form.Group>

			<Button variant="primary" type="submit">
				{actionText}
			</Button>
		</Form>
	);
};

export default PostForm;