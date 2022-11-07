import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

const TodoForm = ({ addTodo }) => {
	const [text, setText] = useState('')

	const onSubmitHandler = (event) => {
		event.preventDefault()
		addTodo(text)
		setText('')
	}

	return (
		<div className={styles.todoFormContainer}>
			<form onSubmit={onSubmitHandler}>
				<input
					placeholder="Enter new todo"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<Button type="submit" title="Submit">
					Submit
				</Button>
			</form>
		</div>
	)
}

export default TodoForm
