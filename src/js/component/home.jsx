import React,{useState} from "react";
import Notes from "./Notes.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todos, setTodos]= useState (["Verify I´m awake after alarm","Brush my teeth", "Say Hello to the dogs","Forget to say hello to boars when I get out home" ]);
	const [newTodo, setNewTodo]=useState (" ");
	const handleOnchange=(e)=>{
		setNewTodo(e.target.value);
	};
   function addNewTodo(){
	   setTodos(todos.concat(newTodo));
	   console.log(todos);
   }
   const deleteTodo=(index)=>{
	 setTodos (todos.filter((t,index)=>{
		return i !==index
	 }));

   }
	return (
		<div className="inputs">
			<h1>Deucalinos weird to Dos</h1>
			<div className="input-group mb-3">
              <input  type="text" value={newTodo}  onChange={handleOnchange}  className="form-control" placeholder="Write here your To Do" aria-label="Recipient's username" aria-describedby="button-addon2" id="task"/>
              <button  onClick={addNewTodo} className="btn btn-outline-success" type="button" id="button-addon2">
			  <i className="fa-solid fa-calendar-plus"></i>
			  </button>
			  
				{todos.map((t, index)=>(
					<Notes text={t} index={index} deleteTodo={deleteTodo}/>
				)) }
            </div>
			</div>
	);
};

export default Home;
