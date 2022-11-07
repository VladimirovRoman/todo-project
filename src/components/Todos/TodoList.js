import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
	return (
		<div className={styles.todoListContainer}>
			{!todos.length && <h1>Todo list is empty </h1>}
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					deleteTodo={deleteTodo}
					toggleTodo={toggleTodo}
				/>
			))}
		</div>
	)
}

export default TodoList
