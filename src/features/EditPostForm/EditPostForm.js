import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import { editPost } from "../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";
import { getPostById } from "../../redux/postsRedux";

const EditPostForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const postData = useSelector((state) => getPostById(state, id));

	const handleSubmit = postEdit => {
		dispatch(editPost({ ...postEdit, id }));
		navigate("/post/" + id);
	};

	if (!postData) return <Navigate to="/" />;
	return (
		<PostForm
			action={handleSubmit}
			actionText="Edit Post"
			title={postData.title}
			author={postData.author}
			publishedDate={postData.publishedDate}
			category={postData.category}
			content={postData.content}
			shortDescription={postData.shortDescription}
		/>
	);
};

export default EditPostForm;
