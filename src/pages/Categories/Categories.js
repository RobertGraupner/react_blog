import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllCategories } from "../../redux/categoriesRedux";

const Categories = () => {
	const categories = useSelector(getAllCategories);

	return (
		<div className="m-auto">
			<h1>All categories</h1>
			<ListGroup className="mt-4">
				{categories.map(category => (
					<ListGroup.Item key={category.id} as={NavLink} to={"/categories/" + category.name}>{category.name}</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	);
};

export default Categories;
