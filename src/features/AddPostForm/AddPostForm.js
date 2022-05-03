import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = postAdd => {
    dispatch(addPost(postAdd));
    navigate('/');
  };

  return (
    <PostForm action={handleSubmit} actionText="Add post" />
  )
};

export default AddPostForm;
