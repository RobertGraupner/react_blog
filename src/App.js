import About from "./pages/About/About";
import AddPost from "./pages/AddPost/AddPost";
import EditPost from "./pages/EditPost/EditPost";
import SinglePost from "./pages/SinglePost/SinglePost";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<Container>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/post/:id" element={<SinglePost />} />
				<Route path="/post/add" element={<AddPost />} />
				<Route path="/post/edit/:id" element={<EditPost />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Container>
	);
};

export default App;
