import React, { useState } from "react";
import "./Lista.css"

//create your first component
const Lista = () => {

	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');

	const addTodo = () => {
		setTodos([...todos, { id: Date.now(), text: newTodo }])
		setNewTodo('')
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter(todo => todo.id !== id));
	}



	return (
		<>
			<div className="container">
				<h2>Lista de tareas</h2>
				<div className="container-input">
					<input placeholder=" Escriba una tarea" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addTodo()} />
				</div>
				<ul>
					{todos.length > 0 ? (
						todos.map((todo) => (
							<li key={todo.id}>
								{todo.text}
								<button onClick={() => deleteTodo(todo.id)} className="btn-delete">
									X
								</button>
							</li>
						))
					) : (<p className="footer">No hay tareas!</p>)}
				</ul>
			</div>

		</>
	);
};

export default Lista;