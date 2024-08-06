import "./CSS/Sass/sass.css";
import "./CSS/tailwind.css";
import Content from "./Components/Content/Content";
import Nav from "./Components/Nav";
function App() {
	function createShapes(count: number) {
		const arr = [];
		for (let i = 0; i < count; i++) {
			arr.push(
				<div
					key={"bg-shape-" + i}
					className={"bg__shape bg__shape--" + i}></div>
			);
		}
		return arr;
	}

	return (
		<>
			<div className="bg">
				<p className="bg__text">FULLSTACK DEVELOPER</p>
				{createShapes(15)}
			</div>

			<Nav></Nav>
			{/* Content component alternates between Landing/about and Projects */}
			<Content></Content>
		</>
	);
}

export default App;
