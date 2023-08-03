import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ToDoList from "./todoList";

//create your first component
const Home = () => {
	return (
		<div className="text-center todo-wrapper">
			<ToDoList />
		</div>
	);
};

export default Home;
